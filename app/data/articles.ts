// Path: /app/data/articles.ts
// Guides shown at /blog and /blog/<slug>. Plain blocks keep them easy to edit.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "cta"; text: string; to: string; label: string };

export interface Article {
  slug: string;
  title: string;
  description: string;
  published: string; // YYYY-MM-DD
  readMinutes: number;
  tag: string;
  blocks: Block[];
}

export const articles: Article[] = [
  {
    slug: "how-much-does-a-custom-online-store-cost",
    title: "How much does a custom online store cost in 2026?",
    description:
      "A plain guide to what a custom online store costs for a fashion or beauty brand: build price, monthly costs, what changes the price, and how to compare it with Shopify.",
    published: "2026-11-26",
    readMinutes: 6,
    tag: "Pricing",
    blocks: [
      {
        type: "p",
        text: "If you've asked three developers for a price, you've probably heard three very different numbers. That's because \"an online store\" can mean anything from a simple product page to a full shop with accounts, quizzes and loyalty points. This guide explains what you actually pay for, so you can compare quotes properly.",
      },
      { type: "h2", text: "The short answer" },
      {
        type: "p",
        text: "For a small fashion or beauty brand, a custom store usually costs between $500 and $3,000 to build, plus about $10–$30 a month to run. Bigger stores with many custom features can cost much more. At Kylva, our packages are $500 (Launch), $1,200 (Growth) and from $2,500 (Flagship).",
      },
      { type: "h2", text: "What you pay once: the build" },
      {
        type: "p",
        text: "The build price covers design, development, testing and launch. These are the things that move it up or down:",
      },
      {
        type: "ul",
        items: [
          "Number of products and options. Ten products with no sizes is quick. Two hundred products with sizes, colours and stock for each takes longer.",
          "Customer accounts. Order history, saved addresses, wishlists and reorder buttons add work, and add value.",
          "Payments. One provider is simple. Several currencies and providers (for example Paystack for Nigeria and Stripe for abroad) take more setup.",
          "Special features. Skin quizzes, bundles, subscriptions, referral rewards and lookbooks are where custom stores shine, and each one adds to the price.",
          "Moving from another platform. Importing products and customers from Shopify or Instagram takes time, but saves you starting from zero.",
        ],
      },
      { type: "h2", text: "What you pay every month" },
      {
        type: "p",
        text: "This is where custom stores and platforms like Shopify differ most. With a custom store you pay for hosting, your domain name and email, which for most small brands comes to around $10–$30 a month. There's no platform subscription and no monthly app bill.",
      },
      {
        type: "p",
        text: "You still pay card processing fees to your payment provider on each sale. Those apply on every platform, including Shopify, so they don't change the comparison.",
      },
      {
        type: "tip",
        text: "Ask every developer what you'll pay each month after launch, and who owns the code. If you don't own it, you're renting your store.",
      },
      { type: "h2", text: "How it compares with Shopify" },
      {
        type: "p",
        text: "Shopify costs less to start, which is why it's popular. But the plan ($39–$399 a month), apps (often $50–$300 a month) and the extra fee Shopify charges when you use your own payment provider (up to 2% of every sale) never stop. Over two or three years, many growing brands pay more for Shopify than a custom store would have cost.",
      },
      {
        type: "cta",
        text: "Want to see your own numbers?",
        to: "/shopify-cost-calculator",
        label: "Try the Shopify cost calculator",
      },
      { type: "h2", text: "Cheap vs good value" },
      {
        type: "p",
        text: "A very cheap quote often means a template with your logo on it, no support, or a store you can't edit without paying the developer again. Good value means the store is built around your brand, loads fast on mobile data, lets you run it yourself, and comes with support after launch.",
      },
      {
        type: "ul",
        items: [
          "Can I add products and change prices myself?",
          "Will it load quickly on a phone with mobile data?",
          "Do I own the code and the domain?",
          "What support do I get after launch, and for how long?",
          "Can I see stores you've built and try them on my phone?",
        ],
      },
      { type: "h2", text: "Getting an accurate price" },
      {
        type: "p",
        text: "The quickest way to an accurate price is to share three things: roughly how many products you sell, how your customers pay, and two or three stores you like. With that, any good developer can give you a clear quote and timeline.",
      },
      {
        type: "cta",
        text: "Tell us about your brand and get a clear price within 24 hours.",
        to: "/#contact",
        label: "Get a free quote",
      },
    ],
  },
  {
    slug: "shopify-vs-custom-store",
    title: "Shopify vs a custom store for small fashion brands",
    description:
      "An honest comparison of Shopify and a custom-built online store for small fashion and beauty brands: cost, look, payments, ownership, and when each one makes sense.",
    published: "2026-11-26",
    readMinutes: 5,
    tag: "Comparison",
    blocks: [
      {
        type: "p",
        text: "Shopify powers millions of stores, and for good reason. It's quick to start and easy to use. But it isn't the right choice for every brand, especially fashion and beauty brands that live and die by how they look. Here's an honest comparison to help you decide.",
      },
      { type: "h2", text: "When Shopify makes sense" },
      {
        type: "ul",
        items: [
          "You're testing an idea and want to sell this week.",
          "Your sales are small, so the monthly bill stays low.",
          "You're happy with a theme and don't need special features.",
          "Shopify Payments is available in your country, so there's no extra transaction fee.",
        ],
      },
      { type: "h2", text: "When a custom store makes sense" },
      {
        type: "ul",
        items: [
          "Your brand's look matters and a theme makes it feel ordinary.",
          "You pay for several apps every month just to get basic features.",
          "You use Paystack, Flutterwave or another provider, so Shopify charges you an extra fee on every sale.",
          "You want features themes don't do well, like skin quizzes, routines or lookbooks.",
          "You want to own your store outright instead of renting it.",
        ],
      },
      { type: "h2", text: "Cost: cheap to start vs cheap to keep" },
      {
        type: "p",
        text: "Shopify is cheap to start and gets more expensive as you grow: the plan, the apps and the extra payment fees all rise with your business. A custom store costs more on day one but very little each month after. The point where the custom store becomes cheaper depends on your sales and apps. For many brands it's within the first year.",
      },
      {
        type: "cta",
        text: "Find your own break-even point in under a minute.",
        to: "/shopify-cost-calculator",
        label: "Open the calculator",
      },
      { type: "h2", text: "Look and feel" },
      {
        type: "p",
        text: "Themes are shared by thousands of stores. You can change colours and fonts, but the layout and the shopping experience stay the same. A custom store is designed around your products, your photography and your customers, so it feels like your brand, not a template.",
      },
      { type: "h2", text: "Payments in Africa" },
      {
        type: "p",
        text: "Shopify Payments isn't available in Nigeria and many other African countries. That means using a third-party provider, and Shopify adds 0.6%–2% on top of the provider's own fees. A custom store connects Paystack or Flutterwave directly, with card, bank transfer and USSD, and no extra platform cut.",
      },
      { type: "h2", text: "Ownership" },
      {
        type: "p",
        text: "On Shopify, you rent your store: stop paying and it goes offline. With a custom store, you own the code. You can host it anywhere and hire any developer to work on it later.",
      },
      {
        type: "tip",
        text: "Already on Shopify? Moving isn't starting over. Your products, photos and customers can be exported and imported into a new store.",
      },
      { type: "h2", text: "The bottom line" },
      {
        type: "p",
        text: "Start on Shopify if you're testing an idea. Move to a custom store when your brand's look matters, your monthly bill keeps growing, or Shopify's payment fees are eating your margin.",
      },
      {
        type: "cta",
        text: "Thinking about switching? We'll tell you honestly whether it's worth it.",
        to: "/#contact",
        label: "Get a free quote",
      },
    ],
  },
  {
    slug: "accept-naira-and-dollar-payments-online",
    title: "How to accept naira and dollar payments on your online store",
    description:
      "A simple guide for Nigerian fashion and beauty brands: how to take card, bank transfer and USSD payments in naira, and how to sell to customers abroad in dollars.",
    published: "2026-11-26",
    readMinutes: 5,
    tag: "Payments",
    blocks: [
      {
        type: "p",
        text: "Many Nigerian brands have customers at home and abroad: in Lagos and Abuja, but also in London, Houston and Toronto. Selling to both means taking payments in naira and in dollars, in the ways each group likes to pay. Here's how it works.",
      },
      { type: "h2", text: "How Nigerian customers like to pay" },
      {
        type: "ul",
        items: [
          "Card (Verve, Mastercard, Visa)",
          "Bank transfer, often the most popular",
          "USSD codes, which work on any phone without data",
        ],
      },
      {
        type: "p",
        text: "Paystack and Flutterwave both support all three in naira, and both are widely trusted by Nigerian shoppers. Seeing a familiar payment page at checkout makes people more comfortable paying.",
      },
      { type: "h2", text: "Selling to customers abroad" },
      {
        type: "p",
        text: "Customers abroad usually pay by international card. Paystack and Flutterwave can accept international cards, and Stripe is another option if your business is registered in a country it supports. Your store can show dollar prices to these customers so they know exactly what they'll pay.",
      },
      {
        type: "tip",
        text: "Set your dollar prices yourself instead of converting automatically every day. Prices like $45 look cleaner than $43.87, and they don't jump when the exchange rate moves.",
      },
      { type: "h2", text: "Showing the right currency" },
      {
        type: "p",
        text: "A good store lets the shopper switch between naira and dollars, and remembers their choice. Checkout then uses the matching payment option: naira payments through Paystack or Flutterwave, and dollar payments by international card.",
      },
      { type: "h2", text: "Delivery prices" },
      {
        type: "p",
        text: "Delivery is part of the price, so be clear about it before checkout. Set delivery zones, for example Lagos Mainland, Lagos Island, Abuja, nationwide and international, each with its own price. Surprise delivery fees at the last step are one of the biggest reasons people abandon their bag.",
      },
      { type: "h2", text: "Keeping payments safe" },
      {
        type: "ul",
        items: [
          "Always confirm each payment with your provider on the server, never trust only what the browser says.",
          "Check that the amount and currency paid match the order.",
          "Send customers an order confirmation by email straight away.",
        ],
      },
      {
        type: "p",
        text: "These checks stop fake 'paid' orders and give customers confidence. A well-built store does all of this automatically.",
      },
      {
        type: "cta",
        text: "Want a store that takes naira and dollars, ready for customers at home and abroad?",
        to: "/solutions/ecommerce-website-nigeria",
        label: "See stores for Nigerian brands",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
