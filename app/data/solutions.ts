// Path: /app/data/solutions.ts
// Focused landing pages for Google searches. Each page targets one kind of buyer.
// Shown at /solutions/<slug>. Added to the sitemap in nuxt.config.ts.

export interface Solution {
  slug: string;
  /** Short name for links and the footer */
  label: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  titleItalic: string;
  intro: string;
  problemsTitle: string;
  problems: { title: string; text: string }[];
  included: string[];
  /** Concept store to show as an example */
  project: string;
  faqs: { question: string; answer: string }[];
}

export const solutions: Solution[] = [
  {
    slug: "shopify-alternative",
    label: "Shopify alternative",
    metaTitle: "Shopify Alternative for Fashion & Beauty Brands",
    metaDescription:
      "Tired of Shopify's monthly fees, apps and payment charges? Kylva builds custom online stores for fashion and beauty brands that you pay for once and own forever.",
    eyebrow: "Shopify alternative",
    title: "A Shopify alternative you",
    titleItalic: "pay for once",
    intro:
      "Shopify is a great way to start. But as you grow, the plan, the apps and the extra payment fees become a bill that never stops, and your store still looks like a theme. Kylva builds you a custom store instead: one payment, no platform subscription, and the code belongs to you.",
    problemsTitle: "Why brands move away from Shopify",
    problems: [
      {
        title: "The monthly bill keeps growing",
        text: "Reviews, email, upsells, bundles and subscriptions each need an app, and each app has its own monthly fee. Many stores pay more for apps than for Shopify itself.",
      },
      {
        title: "Extra fees on every sale",
        text: "If you use Paystack, Flutterwave or another provider instead of Shopify Payments, Shopify takes up to 2% more on every order, on top of your normal card fees.",
      },
      {
        title: "Your store looks like everyone else's",
        text: "Themes are shared by thousands of stores. For a fashion or beauty brand, where looks sell, that makes a great product feel ordinary.",
      },
    ],
    included: [
      "A custom design made for your brand, not a theme",
      "Everything you used apps for, built in: reviews, discount codes, bundles, order emails",
      "Paystack, Flutterwave or Stripe with no extra platform fee",
      "An admin dashboard to manage products, orders and stock",
      "Your products and customers moved over from Shopify",
      "The full codebase, yours to keep, plus 3 months of support",
    ],
    project: "perferm",
    faqs: [
      {
        question: "Can you move my products and customers from Shopify?",
        answer:
          "Yes. We export your products, images, collections and customer list from Shopify and import them into your new store, so you don't start from zero.",
      },
      {
        question: "Will I lose my Google rankings if I leave Shopify?",
        answer:
          "Not if the move is done properly. We keep your important page addresses or redirect the old ones to the new ones, so Google and your customers find the right pages.",
      },
      {
        question: "What will I pay each month after launch?",
        answer:
          "Only hosting, your domain and email, usually around $20 a month, plus the normal card fees from your payment provider. There's no platform subscription and no app bill.",
      },
      {
        question: "How much would I actually save?",
        answer:
          "It depends on your plan, apps and sales. Our free Shopify cost calculator shows your own numbers in under a minute.",
      },
    ],
  },
  {
    slug: "fashion-ecommerce-website",
    label: "Fashion brand stores",
    metaTitle: "E-Commerce Websites for Fashion & Clothing Brands",
    metaDescription:
      "Custom online stores for fashion and clothing brands: sizes, colours, lookbooks, fast mobile shopping and easy checkout. One-off price, no monthly platform fees.",
    eyebrow: "For fashion & clothing brands",
    title: "Online stores for",
    titleItalic: "fashion brands",
    intro:
      "Your customers shop on their phones, often from an Instagram post. They want to see the fit, pick a size and pay in a few taps. Kylva builds fashion stores around exactly that: fast, beautiful on mobile, and simple to run when a new drop goes live.",
    problemsTitle: "What fashion stores get wrong",
    problems: [
      {
        title: "Sizes and colours are a mess",
        text: "Shoppers can't tell which sizes are in stock, or a colour is sold out only after they reach checkout. That's a lost sale and an annoyed customer.",
      },
      {
        title: "Slow pages on mobile data",
        text: "Big photos make a store look good but load slowly. On mobile data, every extra second loses shoppers before they see a single product.",
      },
      {
        title: "Selling through DMs doesn't scale",
        text: "Taking orders on Instagram and WhatsApp works at first. Then you're answering 'how much?' all day and losing track of who paid.",
      },
    ],
    included: [
      "Product pages with sizes, colours, size guides and stock for each option",
      "Lookbook and new-drop pages that feel like your brand",
      "Fast image loading, tuned for mobile data",
      "Search and filters by size, colour, category and price",
      "Guest checkout with card, bank transfer and global payments",
      "Admin to add a new collection in minutes and see every order",
    ],
    project: "hours-collection",
    faqs: [
      {
        question: "Can customers pick a size and colour and see what's in stock?",
        answer:
          "Yes. Each product can have sizes, colours or both, with its own stock and price. Sold-out options are clearly marked before anyone adds them to their bag.",
      },
      {
        question: "Can I launch a new collection myself?",
        answer:
          "Yes. You add products, photos and prices from your admin dashboard, and set a collection live when you're ready. No developer needed.",
      },
      {
        question: "Can I sell to customers abroad?",
        answer:
          "Yes. We can show prices in more than one currency and connect Stripe for international cards, alongside Paystack or Flutterwave for local customers.",
      },
    ],
  },
  {
    slug: "skincare-beauty-ecommerce-website",
    label: "Skincare & beauty stores",
    metaTitle: "E-Commerce Websites for Skincare & Beauty Brands",
    metaDescription:
      "Custom online stores for skincare, beauty and cosmetics brands: skin quizzes, routines, bundles, subscriptions and mobile-first checkout. No monthly platform fees.",
    eyebrow: "For skincare & beauty brands",
    title: "Online stores for",
    titleItalic: "skincare & beauty",
    intro:
      "Beauty shoppers don't just buy a product, they buy a result. They want to know which serum suits their skin and what goes with it. Kylva builds beauty stores that guide them: by skin concern, with quizzes and routines, and with bundles that raise every order.",
    problemsTitle: "Why beauty shoppers leave without buying",
    problems: [
      {
        title: "They don't know what to choose",
        text: "A grid of 40 products with similar names is overwhelming. Without guidance, shoppers close the tab and ask a friend instead.",
      },
      {
        title: "No reason to buy more than one",
        text: "Skincare works as a routine, but most stores sell one bottle at a time. Bundles and routines are the easiest way to raise your average order.",
      },
      {
        title: "No reason to come back",
        text: "Your products run out every few weeks. Without reorder reminders, subscriptions or rewards, customers buy their next bottle somewhere else.",
      },
    ],
    included: [
      "Shop by skin concern, skin type or ingredient",
      "A skin quiz that recommends a personal routine",
      "Bundles and 'complete the routine' suggestions",
      "Reorder in one tap, plus referral and loyalty rewards",
      "Ingredient lists, how-to-use and before-and-after sections",
      "Checkout in naira or dollars with Paystack, Flutterwave or Stripe",
    ],
    project: "melare",
    faqs: [
      {
        question: "Can you build a skin quiz that recommends products?",
        answer:
          "Yes. You choose the questions and which products match each answer. Shoppers get a personal routine and can add all of it to their bag in one tap.",
      },
      {
        question: "Can customers subscribe or reorder easily?",
        answer:
          "Yes. Customers can reorder past orders in one tap, and we can add reminders or subscriptions for products that run out regularly.",
      },
      {
        question: "Can I show ingredients and results on each product?",
        answer:
          "Yes. Product pages can include full ingredient lists, how to use, skin types and before-and-after photos, all easy for you to update.",
      },
    ],
  },
  {
    slug: "ecommerce-website-nigeria",
    label: "Stores for Nigerian brands",
    metaTitle: "E-Commerce Website Design in Nigeria for Fashion & Beauty Brands",
    metaDescription:
      "Custom online stores for Nigerian fashion and beauty brands: Paystack and Flutterwave, naira and dollar prices, fast on mobile data, delivery zones. From $500.",
    eyebrow: "For Nigerian brands",
    title: "Online stores built for",
    titleItalic: "Nigerian brands",
    intro:
      "Selling online in Nigeria has its own rules. Customers pay by card, bank transfer and USSD, browse on mobile data, and need clear delivery prices for Lagos, Abuja and beyond. Kylva is based in Lagos and builds stores around exactly that, ready to sell to customers abroad too.",
    problemsTitle: "What Nigerian brands struggle with",
    problems: [
      {
        title: "Payments that fail or cost too much",
        text: "Shopify Payments isn't available in Nigeria, so Shopify adds an extra fee when you use Paystack or Flutterwave. A custom store connects them directly, with no extra cut.",
      },
      {
        title: "Heavy sites on mobile data",
        text: "Many templates are built for fast connections. On mobile data they crawl, and customers leave before the first product loads.",
      },
      {
        title: "Orders scattered across DMs",
        text: "Instagram and WhatsApp orders mean screenshots of transfers, missed messages and no record of stock. A store puts it all in one place.",
      },
    ],
    included: [
      "Paystack and Flutterwave: card, bank transfer and USSD",
      "Prices in naira, with dollars for customers abroad",
      "Delivery zones with their own prices (Lagos, Abuja, nationwide)",
      "Built to load fast on mobile data",
      "WhatsApp order alerts and order tracking for customers",
      "Admin dashboard, plus support from a team in your time zone",
    ],
    project: "melare",
    faqs: [
      {
        question: "Do you work with brands outside Lagos?",
        answer:
          "Yes. We work with brands across Nigeria and abroad. Everything happens remotely, with calls and WhatsApp updates at each stage.",
      },
      {
        question: "Can I charge in naira and dollars?",
        answer:
          "Yes. Your store can show prices in naira for local customers and in dollars for customers abroad, with the right payment provider for each.",
      },
      {
        question: "Can I set different delivery prices for different areas?",
        answer:
          "Yes. You set delivery zones (for example Lagos Mainland, Lagos Island, Abuja and nationwide) with their own prices, and the checkout adds the right one.",
      },
    ],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
