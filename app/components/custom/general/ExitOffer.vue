<script setup>
// Gentle "free store review" offer, shown once per visitor (then not again for 30 days):
// on desktop when the mouse heads for the tab bar, on phones after a minute of reading.
// Never on the thank-you page, never while the contact form is on screen,
// and never after the visitor has already sent us something.
import { toast } from "vue-sonner";

const SEEN_KEY = "kylva-exit-offer";
const LEAD_KEY = "kylva-lead-sent";
const QUIET_DAYS = 30;

const route = useRoute();
const { track } = useContact();

const open = ref(false);
const sent = ref(false);
const sending = ref(false);
const form = reactive({ name: "", email: "", website: "", company: "" });
const firstInput = ref(null);
let shownAt = 0;
let timer;

const store = {
  get: (k) => {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set: (k, v) => {
    try {
      localStorage.setItem(k, v);
    } catch {
      /* private mode: fine */
    }
  },
};

const allowed = () => {
  if (route.path === "/thank-you") return false;
  if (store.get(LEAD_KEY)) return false;
  const seen = Number(store.get(SEEN_KEY) || 0);
  if (seen && Date.now() - seen < QUIET_DAYS * 86400000) return false;
  const contact = document.getElementById("contact");
  if (contact) {
    const r = contact.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return false;
  }
  return true;
};

const show = (trigger) => {
  if (open.value || !allowed()) return;
  open.value = true;
  shownAt = Date.now();
  store.set(SEEN_KEY, String(Date.now()));
  track("exit_offer_shown", { trigger });
  nextTick(() => firstInput.value?.focus());
};

const close = () => {
  open.value = false;
};

const onMouseOut = (e) => {
  if (!e.relatedTarget && e.clientY <= 0) show("exit_intent");
};
const onKey = (e) => {
  if (e.key === "Escape") close();
};

onMounted(() => {
  const isTouch = window.matchMedia("(hover: none)").matches;
  // Give people time to look around first
  setTimeout(() => {
    if (!isTouch) document.addEventListener("mouseout", onMouseOut);
  }, 8000);
  if (isTouch) timer = setTimeout(() => show("timer"), 60000);
  document.addEventListener("keydown", onKey);
});
onUnmounted(() => {
  document.removeEventListener("mouseout", onMouseOut);
  document.removeEventListener("keydown", onKey);
  clearTimeout(timer);
});

const submit = async () => {
  if (form.name.trim().length < 2) return toast.error("Please enter your name");
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return toast.error("Please enter a valid email");
  if (form.website.trim().length < 3) return toast.error("Please add your website or Instagram");
  sending.value = true;
  try {
    await $fetch("/api/lead", {
      method: "POST",
      body: { source: "review", ...form, elapsed: Date.now() - shownAt },
    });
    sent.value = true;
    store.set(LEAD_KEY, "1");
    track("generate_lead", { form: "exit_review" });
  } catch {
    toast.error("Sorry, that didn't send. Please try again.");
  } finally {
    sending.value = false;
  }
};

const input =
  "w-full border-b border-gray-300 bg-transparent py-3 text-base font-sans focus:outline-none focus:border-[#D4AF37]";
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-200"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-6" @click.self="close">
        <div role="dialog" aria-modal="true" aria-labelledby="exit-offer-title" class="relative w-full sm:max-w-lg bg-[#fafaf9] px-6 pt-10 pb-8 sm:px-10 shadow-2xl max-h-[92vh] overflow-y-auto">
          <button type="button" class="absolute right-3 top-3 p-3 text-gray-500 hover:text-black" aria-label="Close" @click="close">✕</button>

          <template v-if="!sent">
            <p class="text-xs uppercase tracking-[0.35em] text-[#8a6d12] mb-4 font-sans">Before you go</p>
            <h2 id="exit-offer-title" class="text-3xl md:text-4xl tracking-tight mb-4 font-serif font-light leading-[1.1]">
              Get a <span class="italic" style="font-weight: 400">free</span> review of your store
            </h2>
            <p class="text-sm text-gray-600 leading-relaxed mb-6 font-sans font-light">
              Send us your website or Instagram shop. Within 48 hours you'll get a short video with 5 practical fixes to sell more. No catch, and no obligation.
            </p>

            <form class="space-y-4" novalidate @submit.prevent="submit">
              <div class="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                <label for="exit-company">Company</label>
                <input id="exit-company" v-model="form.company" type="text" tabindex="-1" autocomplete="off" />
              </div>
              <div>
                <label for="exit-name" class="sr-only">Your name</label>
                <input id="exit-name" ref="firstInput" v-model="form.name" type="text" autocomplete="name" placeholder="Your name" :class="input" />
              </div>
              <div>
                <label for="exit-email" class="sr-only">Email</label>
                <input id="exit-email" v-model="form.email" type="email" autocomplete="email" placeholder="Email" :class="input" />
              </div>
              <div>
                <label for="exit-site" class="sr-only">Website or Instagram</label>
                <input id="exit-site" v-model="form.website" type="text" placeholder="yourbrand.com or @yourbrand" :class="input" />
              </div>
              <button type="submit" :disabled="sending" class="w-full mt-2 py-4 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-gray-900 transition-colors font-sans font-medium disabled:opacity-50">
                {{ sending ? "Sending…" : "Send me my free review" }}
              </button>
              <button type="button" class="w-full py-2 text-xs text-gray-500 hover:text-black font-sans" @click="close">No thanks</button>
            </form>
          </template>

          <template v-else>
            <h2 id="exit-offer-title" class="text-3xl tracking-tight mb-4 font-serif font-light">Thank you! It's on its way.</h2>
            <p class="text-sm text-gray-600 leading-relaxed mb-6 font-sans font-light">
              We'll send your video review within 48 hours. Keep an eye on your inbox (and spam folder).
            </p>
            <button type="button" class="px-8 py-4 bg-black text-white text-xs uppercase tracking-[0.3em] font-sans font-medium" @click="close">Close</button>
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
