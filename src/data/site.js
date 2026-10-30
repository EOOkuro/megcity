export const SITE = {
  name: import.meta.env.VITE_SITE_BRAND || "MegCity Foundation",
  tagline: "LEAGUES · CLUBS · INCUBATION",
  email: "hello@tekkerz.co",
  // Optional link to the sister site. Set VITE_TRAINING_URL in Vercel to show it in the footer.
  sister: { label: "MegCity Futbol Training", url: import.meta.env.VITE_TRAINING_URL || "" },
};
