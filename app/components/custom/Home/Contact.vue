<script setup>
import { z } from "zod";
import { useZod } from "~/composables/useZod";
import { toast } from "vue-sonner";

const services = [
  "Launch package",
  "Growth package",
  "Flagship package",
  "Free store review",
  "Redesign of my current store",
  "Not sure yet",
];
const budgets = ["Under $500", "$500 – $1,200", "$1,200 – $2,500", "$2,500+", "Not sure yet"];
const timelines = ["As soon as possible", "Within 1 month", "1–3 months", "Just exploring"];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  brand: z.string().trim().min(1, "Please enter your brand name"),
  website: z.string().trim().max(200).optional(),
  service: z.string().min(1, "Please choose what you need"),
  budget: z.string().min(1, "Please choose a budget range"),
  timeline: z.string().min(1, "Please choose a timeline"),
  message: z.string().trim().max(3000).optional(),
});

const { errors, validate, clearFieldError } = useZod(contactSchema);
const { email: contactEmail, whatsappUrl, track, markLeadSent } = useContact();

// Set by the package buttons in the Process section
const chosenService = useState("contact-service", () => "");

const empty = () => ({
  name: "",
  email: "",
  brand: "",
  website: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
  company: "", // honeypot: real people never see or fill this
});
const formData = ref(empty());

watch(
  chosenService,
  (name) => {
    if (!name) return;
    const match = services.find((s) => s.toLowerCase().startsWith(name.toLowerCase()));
    if (match) {
      formData.value.service = match;
      clearFieldError("service");
    }
  },
  { immediate: true },
);

const isLoading = ref(false);
const startedAt = Date.now();

const handleSubmit = async () => {
  if (!validate(formData.value)) {
    toast.error("Please check the highlighted fields");
    return;
  }

  isLoading.value = true;
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: { ...formData.value, elapsed: Date.now() - startedAt },
    });
    track("generate_lead", {
      form: "contact",
      service: formData.value.service,
      budget: formData.value.budget,
    });
    markLeadSent();
    formData.value = empty();
    await navigateTo("/thank-you");
  } catch {
    toast.error("Sorry, your message didn't send", {
      description: whatsappUrl()
        ? "Please try again, or message us on WhatsApp."
        : "Please try again in a minute.",
    });
  } finally {
    isLoading.value = false;
  }
};

const fieldClass = (name) => [
  "w-full border-b bg-transparent py-3 focus:outline-none transition-colors text-base font-sans font-light",
  errors.value[name] ? "border-red-500" : "border-gray-300 focus:border-[#D4AF37]",
];
const labelClass = "block text-xs uppercase tracking-[0.25em] mb-2 font-sans font-medium";
</script>

<template>
  <section id="contact" class="py-24 md:py-32 px-6 lg:px-12 bg-[#fafaf9]">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div data-aos="fade-right">
          <p class="text-xs uppercase tracking-[0.4em] text-[#8a6d12] mb-6 font-sans">
            Free quote
          </p>

          <h2 class="text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight font-serif font-light leading-[1.1]">
            Let's build
            <br />
            <span class="italic" style="font-weight: 400">your store</span>
          </h2>

          <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-10 font-sans font-light">
            Tell us a little about your brand. You'll get a reply within 24
            hours with next steps and a clear price. No obligation.
          </p>

          <ol class="space-y-4 mb-12 font-sans">
            <li class="flex gap-4 text-sm text-gray-700">
              <span class="font-serif text-2xl text-gray-400 leading-none">1</span>
              You send the form (2 minutes).
            </li>
            <li class="flex gap-4 text-sm text-gray-700">
              <span class="font-serif text-2xl text-gray-400 leading-none">2</span>
              We reply within 24 hours with questions or a quote.
            </li>
            <li class="flex gap-4 text-sm text-gray-700">
              <span class="font-serif text-2xl text-gray-400 leading-none">3</span>
              A short call to agree on features, price and launch date.
            </li>
          </ol>

          <div class="space-y-6">
            <div v-if="whatsappUrl()">
              <p class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2 font-sans">
                Prefer to chat?
              </p>
              <a
                :href="whatsappUrl()"
                target="_blank"
                rel="noopener"
                @click="track('contact_whatsapp', { location: 'contact' })"
                class="inline-flex items-center gap-3 px-8 py-4 bg-[#1f7a4d] text-white text-xs uppercase tracking-[0.25em] hover:bg-[#17633e] transition-colors font-sans font-medium"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div v-if="contactEmail">
              <p class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2 font-sans">
                Email
              </p>
              <a
                :href="`mailto:${contactEmail}`"
                @click="track('contact_email', { location: 'contact' })"
                class="text-xl hover:text-[#8a6d12] transition-colors font-serif break-all"
              >
                {{ contactEmail }}
              </a>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" class="relative">
          <h3 class="text-2xl text-neutral-900 mb-8 font-serif font-normal">
            Tell us about your brand
          </h3>

          <form @submit.prevent="handleSubmit" class="space-y-7" novalidate>
            <!-- Honeypot: hidden from people, bots fill it -->
            <div class="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
              <label for="company">Company</label>
              <input id="company" v-model="formData.company" type="text" tabindex="-1" autocomplete="off" />
            </div>

            <div class="grid sm:grid-cols-2 gap-7">
              <div>
                <label for="name" :class="labelClass">Your name</label>
                <input id="name" v-model="formData.name" type="text" autocomplete="name" @input="clearFieldError('name')" :class="fieldClass('name')" />
                <p v-if="errors.name" class="text-red-600 text-sm mt-2 font-sans">{{ errors.name }}</p>
              </div>
              <div>
                <label for="email" :class="labelClass">Email</label>
                <input id="email" v-model="formData.email" type="email" autocomplete="email" @input="clearFieldError('email')" :class="fieldClass('email')" />
                <p v-if="errors.email" class="text-red-600 text-sm mt-2 font-sans">{{ errors.email }}</p>
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-7">
              <div>
                <label for="brand" :class="labelClass">Brand name</label>
                <input id="brand" v-model="formData.brand" type="text" autocomplete="organization" @input="clearFieldError('brand')" :class="fieldClass('brand')" />
                <p v-if="errors.brand" class="text-red-600 text-sm mt-2 font-sans">{{ errors.brand }}</p>
              </div>
              <div>
                <label for="website" :class="labelClass">Website or Instagram <span class="normal-case tracking-normal text-gray-500 font-normal">(optional)</span></label>
                <input id="website" v-model="formData.website" type="text" placeholder="yourbrand.com or @yourbrand" :class="fieldClass('website')" />
              </div>
            </div>

            <div>
              <label for="service" :class="labelClass">What do you need?</label>
              <select id="service" v-model="formData.service" @change="clearFieldError('service')" :class="fieldClass('service')">
                <option value="" disabled>Choose one</option>
                <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
              </select>
              <p v-if="errors.service" class="text-red-600 text-sm mt-2 font-sans">{{ errors.service }}</p>
            </div>

            <div class="grid sm:grid-cols-2 gap-7">
              <div>
                <label for="budget" :class="labelClass">Budget</label>
                <select id="budget" v-model="formData.budget" @change="clearFieldError('budget')" :class="fieldClass('budget')">
                  <option value="" disabled>Choose a range</option>
                  <option v-for="b in budgets" :key="b" :value="b">{{ b }}</option>
                </select>
                <p v-if="errors.budget" class="text-red-600 text-sm mt-2 font-sans">{{ errors.budget }}</p>
              </div>
              <div>
                <label for="timeline" :class="labelClass">Launch date</label>
                <select id="timeline" v-model="formData.timeline" @change="clearFieldError('timeline')" :class="fieldClass('timeline')">
                  <option value="" disabled>Choose one</option>
                  <option v-for="t in timelines" :key="t" :value="t">{{ t }}</option>
                </select>
                <p v-if="errors.timeline" class="text-red-600 text-sm mt-2 font-sans">{{ errors.timeline }}</p>
              </div>
            </div>

            <div>
              <label for="message" :class="labelClass">Anything else? <span class="normal-case tracking-normal text-gray-500 font-normal">(optional)</span></label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                placeholder="What you sell, roughly how many products, stores you like…"
                :class="[...fieldClass('message'), 'resize-none']"
              />
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              :class="[
                'w-full py-5 text-white text-sm uppercase tracking-[0.3em] transition-all duration-200 flex items-center justify-center gap-3 font-sans font-medium',
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-900 active:scale-[0.99]',
              ]"
            >
              <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {{ isLoading ? "Sending…" : "Get my free quote" }}
            </button>
            <p class="text-xs text-gray-500 font-sans text-center">
              We reply within 24 hours. We never share your details.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
