// ─────────────────────────────────────────────────────────────
// All Foundation content lives here. Edit this file to update the site.
// ─────────────────────────────────────────────────────────────

export const MISSION =
  "We aim to grow the game of soccer by making it accessible for all, from first kick to last, and using it as a change agent.";

export const LEAGUES = [
  {
    name: "Chicago Futsal League",
    url: "https://chicagofutsaleague.vercel.app",
    blurb: "A network of futsal leagues with host venues across Chicago, joined by promotion and relegation.",
  },
  {
    name: "Chicago Super League",
    url: "https://chicagosuperleague.com",
    blurb: "South Side soccer leagues for every age, from 4 to adult.",
  },
  {
    name: "SMESL",
    url: "https://smesl.vercel.app",
    blurb: "The Southside Middle & Elementary School Soccer League: school teams from Pre-K through 8th grade at Tuley Park.",
  },
];

export const INCUBATION = {
  statement: "We help soccer grow everywhere.",
  places: ["Chicago, IL", "Kisumu, Kenya", "Migori, Kenya"],
};

// Add more clubs here as they join.
export const CLUBS = ["Hyde Park Rangers FC", "Englewood Athletic Club"];

export const PARTNERS = [
  { name: "St. Thomas the Apostle School", note: "Hyde Park", url: "https://www.stthomashydepark.org/" },
  { name: "Cambridge Classical Academy", note: "Bronzeville", url: "https://www.cambridgeclassicalacademy.com/" },
];

// Set the address of the FedOs app when it is live. Leave empty to hide the button.
export const FEDOS = { url: "" };

// Older MegCity league pages from the WordPress site, still available.
export const LEGACY = [
  { label: "MegCity Futsal League registration", to: "/register-megcity-futsal-league" },
  { label: "Winter Indoor Soccer League", to: "/winter-indoor-soccer-league" },
  { label: "April Mini Soccer Leagues", to: "/april-mini-soccer-leagues" },
  { label: "Summer Soccer League", to: "/summer-soccer-league" },
  { label: "Membership", to: "/membership" },
];
