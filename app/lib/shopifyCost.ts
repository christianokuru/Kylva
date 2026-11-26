// Shopify vs Kylva cost estimate. Used by the calculator page and the results email.
// Shopify prices (US, 2026): Basic $39/$29, Grow $105/$79, Advanced $399/$299 per month
// (monthly / yearly billing). Extra fee when you use your own payment provider
// (e.g. Paystack, Flutterwave): 2% Basic, 1% Grow, 0.6% Advanced.
// Card processing fees are left out on both sides: you pay those either way.

export const PLANS = {
  basic: { name: "Basic", monthly: 39, yearly: 29, fee: 0.02 },
  grow: { name: "Grow", monthly: 105, yearly: 79, fee: 0.01 },
  advanced: { name: "Advanced", monthly: 399, yearly: 299, fee: 0.006 },
} as const;
export type PlanKey = keyof typeof PLANS;

export const PACKAGES = {
  launch: { name: "Launch", price: 500 },
  growth: { name: "Growth", price: 1200 },
  flagship: { name: "Flagship", price: 2500 },
} as const;
export type PackageKey = keyof typeof PACKAGES;

/** Our estimate for hosting, domain and email on a custom store. */
export const HOSTING_PER_MONTH = 20;

export interface CostInput {
  sales: number; // online sales per month, USD
  plan: PlanKey;
  billing: "monthly" | "yearly";
  apps: number; // app subscriptions per month, USD
  theme: number; // paid theme, one-off, USD
  ownPayments: boolean; // using Paystack/Flutterwave/etc. instead of Shopify Payments
  pkg: PackageKey | "auto";
}

export const suggestPackage = (sales: number): PackageKey =>
  sales < 5000 ? "launch" : sales < 30000 ? "growth" : "flagship";

const clamp = (n: number, max: number) =>
  Number.isFinite(n) ? Math.min(Math.max(n, 0), max) : 0;

export const estimate = (raw: CostInput) => {
  const input = {
    ...raw,
    sales: clamp(Number(raw.sales), 10_000_000),
    apps: clamp(Number(raw.apps), 100_000),
    theme: clamp(Number(raw.theme), 100_000),
  };
  const plan = PLANS[input.plan] ?? PLANS.basic;
  const planMonthly = input.billing === "yearly" ? plan.yearly : plan.monthly;
  const feeMonthly = input.ownPayments ? input.sales * plan.fee : 0;
  const shopifyMonthly = planMonthly + input.apps + feeMonthly;

  const pkgKey: PackageKey =
    input.pkg === "auto" || !PACKAGES[input.pkg] ? suggestPackage(input.sales) : input.pkg;
  const pkg = PACKAGES[pkgKey];

  const shopify1 = shopifyMonthly * 12 + input.theme;
  const shopify3 = shopifyMonthly * 36 + input.theme;
  const kylva1 = pkg.price + HOSTING_PER_MONTH * 12;
  const kylva3 = pkg.price + HOSTING_PER_MONTH * 36;

  // Months until the one-off build has paid for itself
  const monthlySaving = shopifyMonthly - HOSTING_PER_MONTH;
  const breakEvenMonths =
    monthlySaving > 0 ? Math.max(1, Math.ceil((pkg.price - input.theme) / monthlySaving)) : null;

  return {
    input,
    planName: plan.name,
    planMonthly,
    feeMonthly,
    feeRate: plan.fee,
    shopifyMonthly,
    pkgKey,
    pkgName: pkg.name,
    pkgPrice: pkg.price,
    shopify1,
    shopify3,
    kylva1,
    kylva3,
    saving1: shopify1 - kylva1,
    saving3: shopify3 - kylva3,
    breakEvenMonths,
  };
};

export const usd = (n: number) =>
  `${n < 0 ? "-" : ""}$${Math.round(Math.abs(n)).toLocaleString("en-US")}`;
