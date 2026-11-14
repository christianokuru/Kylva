// Path: /app/data/faqs.ts
// Questions shown in the home page FAQ and in its structured data.

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How much does a custom online store cost?",
    answer:
      "Custom stores start from $500. The final price depends on the size of your store and the features you need, such as the number of products, payment options and customer accounts. Once we understand your project, you get a clear quote.",
  },
  {
    question: "Do you work with brands outside my country?",
    answer:
      "Yes. We work with brands anywhere in the world. Everything happens remotely, from the first call to launch.",
  },
  {
    question: "Do you use Shopify or ready-made templates?",
    answer:
      "No. Every store is custom-built from scratch, so it looks exactly the way your brand should and is not limited by a theme or template.",
  },
  {
    question: "What technology do you build with?",
    answer:
      "We build with Next.js for the website, Supabase for the database and customer accounts, and Redis for caching so pages load fast. Payments run through Stripe, Flutterwave or Paystack, depending on where your customers are.",
  },
  {
    question: "Which payment methods can my store accept?",
    answer:
      "We connect Stripe for card payments worldwide, and Flutterwave or Paystack for customers in Africa, where shoppers often pay by bank transfer or mobile money as well as card. Your store can use one or more of these.",
  },
  {
    question: "Who owns the website after launch?",
    answer:
      "You do. When your store launches, we hand over the full codebase. It belongs to you, so you are free to host it, change it or work with any developer you like.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Every store comes with 3 months of support after launch, included in the price.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on the size of the store and the features. After our first conversation, you get a timeline for each stage: discovery, design, build and launch.",
  },
];
