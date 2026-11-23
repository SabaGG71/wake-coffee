// Homepage copy. Wording follows wakeck.com/mobile-coffee-service and Adam's
// designs. Anything not taken from those is marked as a draft for Adam.

export const facts = [
  { label: "Based in", value: "Wall Township, NJ" },
  // Adam, 2026-11-17.
  { label: "As seen at", value: "NJ Coffee Festival" },
  { label: "On the menu", value: "Coffee + food" },
]

export const ticker = [
  "Draft lattes + cold brew on tap",
  "Handcrafted espresso",
  "House-made syrups",
  "Scratch-made breakfast + lunch",
  "Expert baristas",
  "One team, one quote",
  "Monmouth & Ocean County",
]

export const included = [
  { title: "Espresso program", line: "Handcrafted drinks from trained baristas." },
  { title: "Scratch kitchen", line: "Breakfast and lunch from Wake Coffee & Kitchen." },
  { title: "House-made", line: "Syrups, dressings, and baked goods." },
]

// Adam's top three (email, 2026-11-17, "in no order"), then the events he'd
// take when the schedule allows. The lines under each are ours, built from the
// "Ideal for" lists in his packages document.
export const events = [
  {
    name: "Corporate + teacher appreciation",
    line: "Office breakfasts, employee appreciation, conferences, and thank-you days at school.",
  },
  { name: "Brand activations + grand openings", line: "The kei truck draws the crowd, and draft service keeps the line moving." },
  { name: "Weddings + post-wedding brunches", line: "Espresso, draft lattes, or both, for the reception or the morning after." },
  { name: "Private parties", line: "Birthdays, showers, graduations, and get-togethers." },
  { name: "Open houses, farmers markets + community events", line: "When our schedule allows." },
]

// Adam, 2026-11-17: "We've done events with ..."
export const pastEvents = {
  with: ["Clean Ocean Action", "FPA Engineers", "Beacon Events"],
  beacon: ["Asbury Park Santa Run", "Shamrock ’N Roll 5k"],
  seenAt: "NJ Coffee Festival",
}

export const steps = [
  {
    title: "Check your date",
    body: "Tell us the date, the place, and roughly how many guests in the quote form below.",
  },
  {
    title: "Get your custom quote",
    body: "We match the truck or a cart, and a menu, to your crowd and send back a clear quote.",
  },
  {
    title: "We pull up and pour",
    body: "Our baristas arrive, set up, serve, and pack out. You enjoy the event.",
  },
]

// Spans: "wide" takes two columns, "tall" two rows, "big" both.
export const gallery = [
  { photo: "wake-mobile-cafe-food-truck", span: "big", alt: "The Wake Mobile Café truck serving at an outdoor event on a sunny day" },
  { photo: "wake-coffee-and-kitchen-mobile-cart-4", span: "tall", alt: "A Wake coffee cart set up inside a gym" },
  { photo: "branded-iced-coffee-cups-at-event", span: "", alt: "Two iced lattes in Wake cups held up at an event" },
  { photo: "wake-mobile-coffee-truck-setup-at-sunrise", span: "", alt: "A Wake cart and flag set up at sunrise" },
  { photo: "wake-coffee-mobile-truck-setup", span: "wide", alt: "The truck and a cart side by side at an indoor event" },
  { photo: "wake-coffee-and-kitchen-mobile-cart-5", span: "", alt: "A Wake coffee cart set up in an office" },
  { photo: "wake-coffee-cup-with-latte-art", span: "", alt: "A latte with heart art in a Wake cup" },
]

// From Adam's Wake design. Shown as reviews of the Wake team, not the truck.
export const reviews = [
  "The owners really care about coffee and affectionately called themselves ‘coffee nerds.’",
  "The staff operates like a finely tuned machine… it showed true hospitality craft.",
]
