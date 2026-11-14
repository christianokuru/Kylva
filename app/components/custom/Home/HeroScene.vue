<!-- Path: /app/components/custom/Home/HeroScene.vue -->
<!--
  3D hero background: a slowly turning gold ring with a frosted-glass pebble.
  - Three.js loads only in the browser, after the page is idle.
  - Phones, "reduce motion" users and browsers without WebGL get a still image.
-->
<script setup>
const props = defineProps({
  // Used once to capture the still image; keeps the scene frozen and visible.
  still: { type: Boolean, default: false },
});

const container = ref(null);
const canvasHost = ref(null);
const useStillImage = ref(false);
const ready = ref(false);

let cleanup = null;

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

onMounted(() => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const smallScreen = window.matchMedia("(max-width: 767px)").matches;

  if (!props.still && (reduceMotion || smallScreen || !hasWebGL())) {
    useStillImage.value = true;
    return;
  }

  const start = () =>
    initScene().catch((err) => {
      console.warn("Hero scene failed, using still image:", err);
      useStillImage.value = true;
    });

  if (props.still) start();
  else if ("requestIdleCallback" in window)
    window.requestIdleCallback(start, { timeout: 1500 });
  else setTimeout(start, 300);
});

onBeforeUnmount(() => cleanup?.());

async function initScene() {
  const THREE = await import("three");
  const { RoomEnvironment } = await import(
    "three/examples/jsm/environments/RoomEnvironment.js"
  );

  const host = canvasHost.value;
  if (!host) return; // component left the page while loading

  /* Renderer */
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  host.appendChild(renderer.domElement);

  /* Scene, camera, lighting */
  const scene = new THREE.Scene();
  // Same colour as the hero background, so the glass has something to refract.
  scene.background = new THREE.Color(0xfafaf9);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTexture;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 10);

  const keyLight = new THREE.DirectionalLight(0xfff4dc, 1.6);
  keyLight.position.set(3, 4, 5);
  scene.add(keyLight);

  const group = new THREE.Group();
  scene.add(group);

  /* Gold ring */
  const ringGeometry = new THREE.TorusGeometry(3.35, 0.055, 64, 400);
  const goldMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xd4af37,
    metalness: 1,
    roughness: 0.2,
    clearcoat: 0.5,
    clearcoatRoughness: 0.15,
  });
  const ring = new THREE.Mesh(ringGeometry, goldMaterial);
  const ringTilt = new THREE.Group();
  ringTilt.rotation.set(1.09, 0, -0.05);
  ringTilt.add(ring);
  group.add(ringTilt);

  /* Frosted-glass pebble: a softly lumpy, slightly flattened sphere */
  const glassGeometry = new THREE.IcosahedronGeometry(1, 40);
  const pos = glassGeometry.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    const bump =
      1 +
      0.07 * Math.sin(v.x * 2.6 + v.y * 1.4) +
      0.05 * Math.sin(v.y * 3.1 - v.z * 2.2);
    v.multiplyScalar(bump);
    v.y *= 0.82;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  glassGeometry.computeVertexNormals();

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0,
    roughness: 0.15,
    transmission: 1,
    thickness: 1.4,
    ior: 1.45,
    attenuationColor: new THREE.Color(0xf1e3bf),
    attenuationDistance: 2.2,
    iridescence: 0.25,
    iridescenceIOR: 1.3,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });
  const glass = new THREE.Mesh(glassGeometry, glassMaterial);
  const glassBase = new THREE.Vector3(3.9, 1.75, -2.2);
  glass.position.copy(glassBase);
  glass.scale.setScalar(0.85);
  group.add(glass);

  // A smaller second pearl, lower left, for balance
  const smallGlass = new THREE.Mesh(glassGeometry, glassMaterial);
  const smallBase = new THREE.Vector3(-4.1, -1.9, -1);
  smallGlass.position.copy(smallBase);
  smallGlass.scale.setScalar(0.38);
  group.add(smallGlass);

  // Sits the ring slightly lower, around the text block below the menu
  const baseY = -0.6;

  /* Size */
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = host;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    const aspect = w / h;
    camera.aspect = aspect;
    // Pull back on narrow screens so the ring fits the width,
    // and show it rounder on tall (portrait) screens.
    camera.position.z = Math.max(10, 13.25 / aspect);
    ringTilt.rotation.x = aspect < 1 ? 0.75 : 1.09;
    camera.updateProjectionMatrix();
  };
  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  /* Mouse tilt */
  let targetX = 0;
  let targetY = 0;
  const onPointerMove = (e) => {
    targetX = e.clientX / window.innerWidth - 0.5;
    targetY = e.clientY / window.innerHeight - 0.5;
  };
  window.addEventListener("pointermove", onPointerMove, { passive: true });

  /* Only render while the hero is on screen */
  let visible = true;
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  visibilityObserver.observe(host);

  /* Animation */
  const startTime = performance.now();
  let frame = 0;

  const render = () => {
    const t = props.still ? 4 : (performance.now() - startTime) / 1000;

    // Slow spin and float
    ring.rotation.z = t * 0.12;
    group.position.y = baseY + Math.sin(t * 0.5) * 0.08;
    glass.rotation.set(t * 0.05, t * 0.08, 0);
    glass.position.y = glassBase.y + Math.sin(t * 0.7 + 1.3) * 0.12;
    smallGlass.rotation.set(-t * 0.07, t * 0.05, 0);
    smallGlass.position.y = smallBase.y + Math.sin(t * 0.9) * 0.1;

    // Ease toward the mouse
    group.rotation.y += (targetX * 0.35 - group.rotation.y) * 0.04;
    group.rotation.x += (targetY * 0.2 - group.rotation.x) * 0.04;

    // Fade and drift away as the visitor scrolls past the hero
    const heroHeight = container.value?.offsetHeight || window.innerHeight;
    const progress = Math.min(window.scrollY / heroHeight, 1);
    host.style.opacity = String(1 - progress);
    group.position.y -= progress * 1.2;

    renderer.render(scene, camera);
  };

  const loop = () => {
    frame = requestAnimationFrame(loop);
    if (visible) render();
  };

  if (props.still) render();
  else loop();
  ready.value = true;

  cleanup = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("pointermove", onPointerMove);
    resizeObserver.disconnect();
    visibilityObserver.disconnect();
    ringGeometry.dispose();
    glassGeometry.dispose();
    goldMaterial.dispose();
    glassMaterial.dispose();
    envTexture.dispose();
    pmrem.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
</script>

<template>
  <div
    ref="container"
    class="absolute inset-0 pointer-events-none select-none"
    aria-hidden="true"
  >
    <!-- Still image for phones, reduced motion and no-WebGL browsers -->
    <picture v-if="useStillImage">
      <source
        media="(orientation: portrait)"
        srcset="/images/hero-ring-mobile.webp"
        width="780"
        height="1500"
      />
      <img
        src="/images/hero-ring-desktop.webp"
        alt=""
        width="1600"
        height="900"
        decoding="async"
        class="absolute inset-0 w-full h-full object-cover object-center max-md:opacity-60"
      />
    </picture>

    <!-- Live 3D scene -->
    <div
      v-else
      ref="canvasHost"
      class="hero-canvas absolute inset-0"
      :class="ready ? 'is-ready' : ''"
    />
  </div>
</template>

<style scoped>
.hero-canvas :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.6s ease;
}
.hero-canvas.is-ready :deep(canvas) {
  opacity: 1;
}
</style>
