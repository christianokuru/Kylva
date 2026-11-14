// Path: /app/data/projects.ts
// Single source of truth for portfolio projects.
// Used by the home "Work" section, /projects, /projects/[slug] and the sitemap.
// To add a project: add an entry here and its images to /public/images/projects/<slug>/.

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  url: string;
  tagline: string;
  summary: string;
  metaDescription: string;
  overview: string[];
  features: string[];
  tech: string[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  mobile: ProjectImage;
  ogImage: string;
  featured?: boolean;
}

const desktop = (slug: string, file: string, alt: string): ProjectImage => ({
  src: `/images/projects/${slug}/${file}`,
  alt,
  width: 1600,
  height: 1000,
});

const mobile = (slug: string, alt: string): ProjectImage => ({
  src: `/images/projects/${slug}/mobile.webp`,
  alt,
  width: 600,
  height: 1022,
});

export const projects: Project[] = [
  {
    slug: "perferm",
    title: "Perferm",
    category: "Fragrance E-Commerce",
    url: "https://perferm.vercel.app/",
    tagline:
      "An online perfume house for Arabian and niche luxury fragrances in Nigeria.",
    summary:
      "A luxury perfume store for ouds, attars and niche fragrances, built for shoppers across Nigeria. Editorial layouts, rich product photography and a calm, gallery-like way to shop.",
    metaDescription:
      "Perferm case study: a luxury e-commerce site for Arabian and niche perfumes in Nigeria, with scent-family browsing, editorial collections and a refined shop.",
    overview: [
      "Perferm sells rare ouds, attars, bakhoor and niche perfumes from the Gulf, Paris and Grasse, delivered across Nigeria. The site needed to feel like walking into a quiet perfume house, not a busy marketplace.",
      "The design pairs large editorial photography with light, elegant type. Collections such as Arabian, Oud, Niche, Attars and Gifts sit at the top level, so shoppers browse the way perfume lovers think. Trust signals, like authentic batch-coded stock, hand gift-wrapping and nationwide delivery, appear early and often.",
    ],
    features: [
      "Collection pages for Arabian, Oud, Niche, Attars and gift sets",
      "Shop page with search, sorting and filters by collection, gender and scent family",
      "“Find your scent family” browsing: woody, amber, floral, musk, gourmand, fresh and citrus",
      "Editorial “Oud edit” feature that tells the story behind the product",
      "Product cards with prices in Naira, bottle sizes and quick add-to-bag",
      "Wishlist, account login, customer reviews and newsletter sign-up",
    ],
    tech: ["Next.js", "Vercel"],
    cover: desktop(
      "perferm",
      "cover.webp",
      "Perferm homepage with the headline “the art of arabian luxury” beside a portrait and a perfume bottle",
    ),
    gallery: [
      desktop(
        "perferm",
        "shot-2.webp",
        "Perferm signature collections: Arabian, Oud, Niche and Attars",
      ),
      desktop(
        "perferm",
        "shot-3.webp",
        "Perferm “the oud edit” feature section on a dark background",
      ),
      desktop(
        "perferm",
        "shot-4.webp",
        "Perferm shop page with collection and scent-family filters",
      ),
    ],
    mobile: mobile("perferm", "Perferm homepage on a phone"),
    ogImage: "/images/projects/perferm/og.jpg",
    featured: true,
  },
  {
    slug: "oats-collection",
    title: "OAT Collection",
    category: "Beauty Platform",
    url: "https://oats-collections.vercel.app/",
    tagline:
      "A calm, natural skincare store built around oat-based products.",
    summary:
      "An online skincare store for oat-based beauty products. Warm neutral tones, large serif type and soft product photography give it a quiet, premium feel.",
    metaDescription:
      "OAT Collection case study: a minimalist e-commerce site for oat-based skincare, with editorial layouts, a bestsellers showcase and a filterable product catalogue.",
    overview: [
      "OAT Collection is a skincare line built on oats: creams, serums, lip care and essential water. The site needed to look as gentle and natural as the products.",
      "The design uses a warm beige palette, oversized serif headlines and plenty of space. The homepage opens with the brand name set large across a product photo, followed by a photo mosaic and a bestsellers row. Shopping stays simple, with search, favourites and the cart one tap away on every page.",
    ],
    features: [
      "Editorial homepage with oversized type and a product photo mosaic",
      "Bestsellers showcase with clear prices and quick add-to-cart",
      "Product catalogue filtered by collection: skin, hair, bath and skin wellness",
      "Slide-out search, favourites list and cart",
      "Newsletter sign-up with a first-order discount",
    ],
    tech: ["Next.js", "Vercel"],
    cover: desktop(
      "oats-collection",
      "cover.webp",
      "OAT Collection homepage with the brand name in large serif type over a skincare product photo",
    ),
    gallery: [
      desktop(
        "oats-collection",
        "shot-2.webp",
        "OAT Collection product photo mosaic in warm neutral tones",
      ),
      desktop(
        "oats-collection",
        "shot-3.webp",
        "OAT Collection bestsellers row with oat cream, serum and lip mask",
      ),
      desktop(
        "oats-collection",
        "shot-4.webp",
        "OAT Collection cosmetics catalogue with collection filters",
      ),
    ],
    mobile: mobile("oats-collection", "OAT Collection homepage on a phone"),
    ogImage: "/images/projects/oats-collection/og.jpg",
    featured: true,
  },
  {
    slug: "hours-collection",
    title: "Hours Collection",
    category: "Fashion E-Commerce",
    url: "https://hours-store.vercel.app/",
    tagline:
      "A modern streetwear store with fast browsing and a bold, friendly look.",
    summary:
      "An online streetwear store for hoodies, trousers, sweatshirts and more. Bright product photography, clear prices and a quick path from browsing to cart.",
    metaDescription:
      "Hours Collection case study: a streetwear e-commerce site built with Nuxt, with category browsing, product search and filters, ratings and a light and dark theme.",
    overview: [
      "Hours Collection sells everyday streetwear: hoodies, trousers, T-shirts, sweatshirts, footwear and accessories. The goal was a store that feels current and is easy to shop on any device.",
      "The homepage leads with a full-width campaign photo, then moves quickly into top sellers, categories and trending pieces. Product cards show stock status, discounts, ratings and tags at a glance, so shoppers can decide without opening every item.",
    ],
    features: [
      "Product cards with stock status, discounts, ratings, tags and quick view",
      "Shop by category, plus a full catalogue with search, filters, sorting and grid or list view",
      "Top-sales and trending sections on the homepage",
      "Customer accounts with sign-in",
      "Light and dark theme switch",
      "Brand story, customer reviews and newsletter sign-up",
    ],
    tech: ["Nuxt", "Vue", "Vercel"],
    cover: desktop(
      "hours-collection",
      "cover.webp",
      "Hours Collection homepage with the headline “Define Your Moment” over a streetwear campaign photo",
    ),
    gallery: [
      desktop(
        "hours-collection",
        "shot-2.webp",
        "Hours Collection top sales with jeans, a hoodie and chinos",
      ),
      desktop(
        "hours-collection",
        "shot-3.webp",
        "Hours Collection “Redefining Streetwear” brand story section",
      ),
    ],
    mobile: mobile("hours-collection", "Hours Collection homepage on a phone"),
    ogImage: "/images/projects/hours-collection/og.jpg",
    featured: true,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
