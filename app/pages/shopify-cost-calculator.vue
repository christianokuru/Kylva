<script setup lang="ts">
import { estimate, PLANS, PACKAGES, HOSTING_PER_MONTH, usd, type CostInput } from "~/lib/shopifyCost";
import { toast } from "vue-sonner";

definePageMeta({ lightNav: true });

const siteUrl = "https://kylva.com";
const title = "Shopify Cost Calculator: Shopify vs a Custom Store";
const description =
  "Free calculator: see what Shopify really costs your fashion or beauty brand each year (plan, apps and payment fees) and compare it with a one-off custom store.";

useSeoMeta({
  title,
  description,
  ogTitle: `${title} | Kylva`,
  ogDescription: description,
  ogUrl: `${siteUrl}/shopify-cost-calculator`,
});

useSchemaOrg([
  {
    "@type": "WebApplication",
    name: "Shopify Cost Calculator",
    url: `${siteUrl}/shopify-cost-calculator`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": `${siteUrl}/#organization` },
    description,
  },
]);

const form = reactive<CostInput>({
  sales: 3000,
  plan: "basic",
  billing: "monthly",
  apps: 60,
  theme: 0,
  ownPayments: true,
  pkg: "auto",
});

const r = computed(() => estimate(form));
const max3 = computed(() => Math.max(r.value.shopify3, r.value.kylva3, 1));
const pct = (n: number) => `${Math.max(4, Math.round((n / max3.value) * 100))}%`;

const { goToSection } = useSectionNav();
const { track, markLeadSent } = useContact();
const chosenService = useState("contact-service", () => "");
const getQuote = () => {
  track("calculator_quote", { package: r.value.pkgName });
  chosenService.value = r.value.pkgName;
  goToSection("contact");
};

// Track first use once
let used = false;
watch(form, () => {
  if (!used) {
    used = true;
    track("calculator_use");
  }
});

// Email my results
const email = ref("");
const brand = ref("");
const company = ref(""); // honeypot
const sending = ref(false);
const sent = ref(false);
const startedAt = Date.now();

const sendResults = async () => {
  if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    toast.error("Please enter a valid email address");
    return;
  }
  sending.value = true;
  try {
    await $fetch("/api/lead", {
      method: "POST",
      body: {
        source: "calculator",
        email: email.value,
        brand: brand.value,
        company: company.value,
        elapsed: Date.now() - startedAt,
        calc: {
          ...form,
          sales: Number(form.sales) || 0,
          apps: Number(form.apps) || 0,
          theme: Number(form.theme) || 0,
        },
      },
    });
    sent.value = true;
    markLeadSent();
    track("generate_lead", { form: "calculator" });
  } catch {
    toast.error("Sorry, that didn't send. Please try again.");
  } finally {
    sending.value = false;
  }
};

const input =
  "w-full border-b border-gray-300 bg-transparent py-3 text-base font-sans focus:outline-none focus:border-[#D4AF37]";
const label = "block text-xs uppercase tracking-[0.25em] mb-1 font-sans font-medium";
const hint = "text-xs text-gray-500 font-sans mt-1";
</script>

<template>
  <div class="bg-[#fafaf9] pt-36 pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <header class="max-w-3xl mb-16">
        <p class="text-xs uppercase tracking-[0.4em] text-[#8a6d12] mb-4 font-sans">Free tool</p>
        <h1 class="text-5xl md:text-7xl tracking-tight mb-6 font-serif font-light leading-[1.05]">
          What does Shopify <span class="italic" style="font-weight: 400">really</span> cost you?
        </h1>
        <p class="text-base md:text-lg text-gray-600 leading-relaxed font-sans font-light">
          Shopify's plan is only part of the bill. Apps and extra payment fees add
          up every month, for as long as your store is open. Put in your numbers
          and compare it with a store you pay for once.
        </p>
      </header>

      <div class="grid lg:grid-cols-12 gap-12">
        <!-- Inputs -->
        <form class="lg:col-span-5 space-y-8" @submit.prevent>
          <div>
            <label for="sales" :class="label">Online sales per month (USD)</label>
            <input id="sales" v-model.number="form.sales" type="number" min="0" step="100" inputmode="numeric" :class="input" />
            <p :class="hint">Roughly, what your store sells in a month. A guess is fine.</p>
          </div>

          <div class="grid sm:grid-cols-2 gap-8">
            <div>
              <label for="plan" :class="label">Shopify plan</label>
              <select id="plan" v-model="form.plan" :class="input">
                <option v-for="(p, key) in PLANS" :key="key" :value="key">{{ p.name }}</option>
              </select>
            </div>
            <div>
              <label for="billing" :class="label">Billing</label>
              <select id="billing" v-model="form.billing" :class="input">
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly (cheaper)</option>
              </select>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-8">
            <div>
              <label for="apps" :class="label">Apps per month (USD)</label>
              <input id="apps" v-model.number="form.apps" type="number" min="0" step="5" inputmode="numeric" :class="input" />
              <p :class="hint">Reviews, email, upsells, subscriptions… Most stores pay $50–$300.</p>
            </div>
            <div>
              <label for="theme" :class="label">Paid theme (one-off)</label>
              <input id="theme" v-model.number="form.theme" type="number" min="0" step="10" inputmode="numeric" :class="input" />
              <p :class="hint">Premium themes cost about $180–$400. Put 0 if free.</p>
            </div>
          </div>

          <fieldset>
            <legend :class="label">How do customers pay?</legend>
            <div class="mt-3 space-y-3 font-sans text-sm">
              <label class="flex gap-3 items-start cursor-pointer">
                <input v-model="form.ownPayments" type="radio" :value="true" class="mt-1 accent-black" />
                <span>Paystack, Flutterwave or another provider <span class="block text-xs text-gray-500">Shopify adds an extra {{ (r.feeRate * 100).toFixed(1).replace(".0", "") }}% fee on every sale. Usual in Nigeria and much of Africa.</span></span>
              </label>
              <label class="flex gap-3 items-start cursor-pointer">
                <input v-model="form.ownPayments" type="radio" :value="false" class="mt-1 accent-black" />
                <span>Shopify Payments <span class="block text-xs text-gray-500">No extra fee, but only available in some countries.</span></span>
              </label>
            </div>
          </fieldset>

          <div>
            <label for="pkg" :class="label">Compare with Kylva package</label>
            <select id="pkg" v-model="form.pkg" :class="input">
              <option value="auto">Suggest one for me</option>
              <option v-for="(p, key) in PACKAGES" :key="key" :value="key">{{ p.name }} ({{ usd(p.price) }})</option>
            </select>
          </div>
        </form>

        <!-- Results -->
        <section class="lg:col-span-7" aria-live="polite">
          <div class="lg:sticky lg:top-28 bg-white border border-gray-200 p-6 md:p-10">
            <p class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2 font-sans">Over 3 years</p>
            <p v-if="r.saving3 > 0" class="text-4xl md:text-6xl tracking-tight font-serif font-light leading-[1.1] mb-2">
              You could save <span class="italic text-[#8a6d12]" style="font-weight: 400">{{ usd(r.saving3) }}</span>
            </p>
            <p v-else class="text-3xl md:text-5xl tracking-tight font-serif font-light leading-[1.1] mb-2">
              Shopify is cheaper for you right now
            </p>
            <p class="text-sm text-gray-600 font-sans mb-8">
              <template v-if="r.saving3 > 0 && r.breakEvenMonths">
                A {{ r.pkgName }} store pays for itself in about
                <strong>{{ r.breakEvenMonths }} {{ r.breakEvenMonths === 1 ? "month" : "months" }}</strong>.
              </template>
              <template v-else>
                At these numbers, the monthly Shopify bill is small. A custom store makes sense as your sales grow, or when you want a look a theme can't give you.
              </template>
            </p>

            <!-- Bars -->
            <div class="space-y-5 mb-10 font-sans">
              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span>Shopify ({{ r.planName }})</span>
                  <strong>{{ usd(r.shopify3) }}</strong>
                </div>
                <div class="h-4 bg-gray-100"><div class="h-4 bg-gray-400 transition-all duration-500" :style="{ width: pct(r.shopify3) }" /></div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span>Kylva {{ r.pkgName }} + hosting</span>
                  <strong>{{ usd(r.kylva3) }}</strong>
                </div>
                <div class="h-4 bg-gray-100"><div class="h-4 bg-black transition-all duration-500" :style="{ width: pct(r.kylva3) }" /></div>
              </div>
            </div>

            <!-- Breakdown -->
            <table class="w-full text-sm font-sans mb-8">
              <caption class="text-left text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">Your Shopify bill each month</caption>
              <tbody>
                <tr class="border-b border-gray-100"><td class="py-2 text-gray-600">{{ r.planName }} plan</td><td class="py-2 text-right">{{ usd(r.planMonthly) }}</td></tr>
                <tr class="border-b border-gray-100"><td class="py-2 text-gray-600">Apps</td><td class="py-2 text-right">{{ usd(form.apps || 0) }}</td></tr>
                <tr class="border-b border-gray-100"><td class="py-2 text-gray-600">Extra payment fee</td><td class="py-2 text-right">{{ usd(r.feeMonthly) }}</td></tr>
                <tr><td class="py-2 font-medium">Total per month</td><td class="py-2 text-right font-medium">{{ usd(r.shopifyMonthly) }}</td></tr>
              </tbody>
            </table>

            <div class="grid grid-cols-2 gap-4 text-center font-sans mb-8">
              <div class="bg-[#fafaf9] p-4">
                <p class="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">Year 1 saving</p>
                <p class="text-2xl font-serif">{{ usd(r.saving1) }}</p>
              </div>
              <div class="bg-[#fafaf9] p-4">
                <p class="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">3-year saving</p>
                <p class="text-2xl font-serif">{{ usd(r.saving3) }}</p>
              </div>
            </div>

            <button type="button" class="w-full py-5 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-gray-900 transition-colors font-sans font-medium" @click="getQuote">
              Get a free quote for {{ r.pkgName }}
            </button>

            <!-- Email results -->
            <div class="mt-8 border-t border-gray-200 pt-8">
              <p v-if="sent" class="text-sm font-sans text-[#1f7a4d]">
                Sent! Check your inbox (and spam folder) for your results.
              </p>
              <form v-else class="space-y-4" novalidate @submit.prevent="sendResults">
                <p class="text-sm font-sans font-medium">Email me my results</p>
                <div class="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                  <label for="calc-company">Company</label>
                  <input id="calc-company" v-model="company" type="text" tabindex="-1" autocomplete="off" />
                </div>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label for="calc-email" class="sr-only">Email</label>
                    <input id="calc-email" v-model="email" type="email" autocomplete="email" placeholder="Your email" :class="input" />
                  </div>
                  <div>
                    <label for="calc-brand" class="sr-only">Brand name (optional)</label>
                    <input id="calc-brand" v-model="brand" type="text" autocomplete="organization" placeholder="Brand name (optional)" :class="input" />
                  </div>
                </div>
                <button type="submit" :disabled="sending" class="px-8 py-4 border border-black text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors font-sans font-medium disabled:opacity-50">
                  {{ sending ? "Sending…" : "Send my results" }}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <!-- How it works -->
      <section class="max-w-3xl mt-24 font-sans text-sm text-gray-600 leading-relaxed space-y-4">
        <h2 class="text-3xl text-black font-serif font-light mb-4">How we work this out</h2>
        <p>
          <strong class="text-black">Shopify:</strong> the plan price (Basic $39, Grow $105 or Advanced $399 a month, or $29, $79 and $299 when paid yearly),
          plus your apps, plus Shopify's extra fee when you use your own payment provider (2% on Basic, 1% on Grow, 0.6% on Advanced), plus any paid theme.
        </p>
        <p>
          <strong class="text-black">Kylva:</strong> a one-off package price, plus about {{ usd(HOSTING_PER_MONTH) }} a month for hosting, domain and email.
          You own the code, so there's no platform bill.
        </p>
        <p>
          Card processing fees (from Paystack, Flutterwave, Stripe or Shopify Payments) are left out on both sides, because you pay them either way.
          Prices are Shopify's US prices in 2026 and can change. Check shopify.com/pricing for the latest.
        </p>
        <p>
          Want to read more first? <NuxtLink to="/blog/shopify-vs-custom-store" class="underline underline-offset-4 text-black">Shopify vs a custom store for small fashion brands</NuxtLink>.
        </p>
      </section>
    </div>
  </div>
</template>
