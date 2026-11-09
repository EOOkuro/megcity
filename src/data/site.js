export const SITE = {
  name: import.meta.env.VITE_SITE_BRAND || "MegCity Foundation",
  email: "hello@tekkerz.co",
  social: [
    { label: "Instagram", url: "https://www.instagram.com/megcityfutboltraining/" },
    { label: "TikTok", url: "https://www.tiktok.com/@megcityfc" },
    { label: "Meg.city", url: "https://meg.city" },
  ],
  sister: { label: "MegCity Futbol Training", url: import.meta.env.VITE_TRAINING_URL || "" },
};
