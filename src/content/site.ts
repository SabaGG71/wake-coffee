// Every contact detail on the site lives here, so nothing from another client
// can hide in a component. Empty strings stay hidden.
// Sources: wakeck.com and wakeck.com/mobile-coffee-service (read 2026-10-28),
// Adam's Wake and Wavy's designs (10.13.26), and the truck's side panel.
//
// The site has no links that leave the page (Saba, 2026-10-28). The `url`
// fields below are data for the JSON-LD only, never rendered as links.

export const site = {
  name: "Wake Mobile Café",
  parent: "Wake Coffee & Kitchen",
  url: "", // TODO: production domain, ask Kent.
  base: "Wall Township, NJ",
  region: "Monmouth & Ocean County",
  reach: "NJ, PA & NYC",
  towns: ["Belmar", "Spring Lake", "Rumson", "Red Bank", "Toms River"],

  // Painted on the truck, next to @wakemobilecafe.
  phone: { label: "(848) 200-2132", href: "tel:+18482002132" },
  email: "",

  // Lead capture is the FlashQuotes form already embedded on wakeck.com/quote.
  flashQuotesFormId: "cmfpda9c7001zl10430rbo50v",

  instagram: { label: "@wakemobilecafe", url: "https://www.instagram.com/wakemobilecafe" },
  facebook: "", // TODO: ask whether the mobile café has its own page.
}

export const nav = [
  { label: "Setups", href: "#setups" },
  { label: "Menu", href: "#menu" },
  { label: "Events", href: "#events" },
  { label: "Service area", href: "#area" },
  { label: "FAQ", href: "#faq" },
]

// "One team, one standard, three ways to get it." from Adam's Wake design.
export const family = [
  {
    name: "Wake Coffee & Kitchen",
    line: "The flagship. A specialty coffee bar and scratch kitchen in Wall, NJ.",
    url: "https://wakeck.com",
  },
  {
    name: "Wavy’s",
    line: "Our sister spot on the Belmar train platform.",
  },
  {
    name: "Wake Mobile Café",
    line: "Brings it to you.",
    current: true,
  },
]
