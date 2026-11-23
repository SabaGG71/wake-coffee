// "Our mobile coffee packages": Adam's packages document (email to Kent,
// 2026-11-17), word for word. Only line breaks from the PDF were joined
// ("house-\nmade" → "house-made") and quotes curled.
//
// - `pour` sets the label on the card: "espresso", "draft", or "both".
// - `startingAt`: Adam asked for a "Starting at $___" space he fills in later.
//   Put the number in as a string ("450"). While it is empty the card shows the
//   blank line he asked for; set SHOW_EMPTY_PRICES to false before launch if a
//   price is still missing, and that card's line disappears.
// - Order is Adam's (simplest to fullest). Kent and Zane may flip it so the
//   biggest package comes first. Reordering this array is the only change.

export const packagesReady = true
export const SHOW_EMPTY_PRICES = true

export type Pour = "espresso" | "draft" | "both"

export type Package = {
  name: string
  pour: Pour
  tagline: string
  short: string
  // One string per paragraph of the full description.
  full: string[]
  glance: { label: string; value: string }[]
  cta: string
  startingAt: string
  // One photo, or two shown side by side for the two-station packages.
  photos: { name: string; alt: string; label: string }[]
}

const photo = {
  tapCart: {
    name: "wake-coffee-and-kitchen-mobile-cart",
    alt: "The Wake Tap Cart with its draft tap, cup tower, and a plant on top, set up outside",
    label: "The Tap Cart",
  },
  tapTruck: {
    name: "wake-mobile-cafe-draft-latte-truck",
    alt: "The Wake Mobile Café kei truck with its window open and the sign Draft lattes on tap",
    label: "The Tap Truck",
  },
  espressoBar: {
    name: "wake-espresso-bar-teacher-appreciation",
    alt: "The Wake Espresso Bar set up indoors at a school, with an espresso machine and grinder",
    label: "The Espresso Bar",
  },
  espressoCart: {
    name: "wake-coffee-and-kitchen-espresso-bar",
    alt: "The Wake Coffee & Kitchen espresso cart with its Now Pouring menu",
    label: "The Espresso Bar",
  },
  truckAndCart: {
    name: "wake-coffee-mobile-truck-setup",
    alt: "The Wake kei truck and an espresso cart side by side at an indoor event",
    label: "Espresso Bar + Tap Truck",
  },
}

export const packages: Package[] = [
  {
    name: "Tap Cart",
    pour: "draft",
    tagline: "Great coffee. Poured in seconds.",
    short:
      "Signature draft lattes and cold brew served from our beautifully designed mobile coffee cart. Exceptional coffee, remarkably fast service, and a seamless experience for your guests.",
    full: [
      "Great coffee shouldn’t come with a long wait. Our Tap Cart brings Wake’s signature draft coffee experience directly to your event, serving rich, creamy draft lattes and smooth cold brew in seconds.",
      "Designed for speed without sacrificing quality, the Tap Cart keeps guests moving and conversations flowing. With a polished setup and friendly Wake hospitality, it’s an effortless way to make great coffee part of your gathering.",
    ],
    glance: [
      { label: "Coffee menu", value: "Draft lattes and cold brew" },
      { label: "Service style", value: "Fast, freshly poured beverages" },
      { label: "Setup", value: "Compact, thoughtfully designed mobile cart" },
      {
        label: "Ideal for",
        value:
          "Office breakfasts, employee appreciation, open houses, private parties, showers, school events, and community gatherings",
      },
    ],
    cta: "Request a Tap Cart Quote",
    startingAt: "",
    photos: [photo.tapCart],
  },
  {
    name: "Tap Truck",
    pour: "draft",
    tagline: "Great coffee. Serious presence.",
    short:
      "Our signature draft coffee, served from our one-of-a-kind custom-converted kei truck. All the quality and speed of our Tap Cart, with an unforgettable visual centerpiece.",
    full: [
      "Some events call for something beyond a traditional coffee station.",
      "Our Tap Truck brings Wake’s signature draft lattes and cold brew to your event in a custom-converted Japanese kei truck designed to stand out.",
      "Guests enjoy the same specialty coffee and fast service as our Tap Cart, delivered through a distinctive mobile setup that becomes part of the atmosphere. It’s a coffee experience people notice, gather around, and remember.",
      "Perfect for events where presentation matters as much as what’s being served.",
    ],
    glance: [
      { label: "Coffee menu", value: "Draft lattes and cold brew" },
      { label: "Service style", value: "Fast, freshly poured beverages" },
      { label: "Setup", value: "Custom-converted kei truck" },
      {
        label: "Ideal for",
        value:
          "Grand openings, brand activations, weddings, corporate events, graduation parties, community celebrations, and residential events",
      },
    ],
    cta: "Request a Tap Truck Quote",
    startingAt: "",
    photos: [photo.tapTruck],
  },
  {
    name: "Espresso Bar",
    pour: "espresso",
    tagline: "Your favorite café. Wherever you are.",
    short:
      "A complete specialty espresso bar brought to your event. Handcrafted hot and iced drinks, made to order by trained Wake baristas using professional equipment and house-made flavors.",
    full: [
      "Bring the experience of a great neighborhood café directly to your guests.",
      "Our Espresso Bar features professional espresso equipment, trained Wake baristas, and a menu of handcrafted favorites, from classic cappuccinos and americanos to lattes made with our house-made syrups.",
      "Every drink is prepared individually, giving guests the opportunity to order exactly what they love.",
      "More than simply serving coffee, our baristas create a warm, welcoming experience that makes every guest feel taken care of.",
    ],
    glance: [
      { label: "Coffee menu", value: "Espresso, lattes, cappuccinos, americanos, and more" },
      { label: "Service style", value: "Handcrafted, made-to-order hot and iced beverages" },
      { label: "Setup", value: "Professional mobile espresso station" },
      {
        label: "Ideal for",
        value:
          "Weddings, bridal showers, corporate gatherings, conferences, receptions, and private celebrations",
      },
    ],
    cta: "Request an Espresso Bar Quote",
    startingAt: "",
    photos: [photo.espressoBar],
  },
  {
    name: "Espresso Bar + Tap Cart",
    pour: "both",
    tagline: "The full café experience. Built to keep things moving.",
    short:
      "The best of both worlds: handcrafted espresso drinks alongside our signature draft lattes and cold brew, served through two coordinated coffee stations.",
    full: [
      "Why choose between handcrafted espresso and the speed of draft coffee when your guests can enjoy both?",
      "Our Espresso Bar + Tap Cart combines the personal experience of a traditional café with the efficiency of our signature draft coffee system.",
      "Guests can enjoy made-to-order cappuccinos, lattes, and americanos, while others grab creamy draft lattes and cold brew poured in seconds.",
      "Two complementary stations help distribute demand, reduce waiting, and create a seamless coffee experience for gatherings with different tastes and service needs.",
      "The result is more choice for your guests and less to worry about for you.",
    ],
    glance: [
      { label: "Coffee menu", value: "Full espresso menu, draft lattes, and cold brew" },
      { label: "Service style", value: "Made-to-order drinks plus high-speed draft service" },
      { label: "Setup", value: "Two coordinated mobile coffee stations" },
      {
        label: "Ideal for",
        value: "Larger corporate gatherings, conferences, weddings, fundraisers, festivals, and busy receptions",
      },
    ],
    cta: "Request a Combined Coffee Bar Quote",
    startingAt: "",
    photos: [photo.espressoCart, photo.tapCart],
  },
  {
    name: "Espresso Bar + Tap Truck",
    pour: "both",
    tagline: "The complete Wake experience. An unforgettable centerpiece.",
    short:
      "Handcrafted espresso, signature draft coffee, and our distinctive kei truck. The ultimate Wake Mobile experience for events where quality, service, and visual impact all matter.",
    full: [
      "For events that deserve the full Wake experience.",
      "Our Espresso Bar + Tap Truck combines everything we do best: handcrafted espresso drinks made to order, signature draft lattes and cold brew served in seconds, and a one-of-a-kind mobile coffee truck that becomes part of your event’s story.",
      "Guests enjoy the variety of a complete specialty café, while two coordinated service stations keep drinks moving efficiently.",
      "The truck provides a distinctive visual focal point, while our team brings the same care, professionalism, and hospitality that defines Wake.",
      "It’s coffee service designed to make a lasting impression without adding another detail for you to manage.",
    ],
    glance: [
      { label: "Coffee menu", value: "Full espresso menu, draft lattes, and cold brew" },
      { label: "Service style", value: "Made-to-order drinks plus high-speed draft service" },
      { label: "Setup", value: "Professional espresso station and custom kei truck" },
      {
        label: "Ideal for",
        value:
          "Large corporate events, brand activations, grand openings, weddings, celebrations, and events where presentation is a priority",
      },
    ],
    cta: "Request the Complete Wake Experience",
    startingAt: "",
    photos: [photo.truckAndCart],
  },
]

// The comparison table at the end of Adam's document. The PDF lost its column
// lines, so rows with fewer marks were placed by sense: draft and cold brew
// are not on the Espresso Bar, and the truck is the "venue dependent" one
// indoors. Check against the original before launch.
export const compareColumns = ["Tap Cart", "Tap Truck", "Espresso Bar", "Espresso + Draft"]

// true = ✓, false = blank, a number = that many of three dots, a string = as written.
export type CompareCell = boolean | number | string

export const compareRows: { label: string; cells: CompareCell[] }[] = [
  { label: "Draft lattes", cells: [true, true, false, true] },
  { label: "Cold brew", cells: [true, true, false, true] },
  { label: "Hot drinks", cells: ["Drip Only", "Drip Only", true, true] },
  { label: "Made-to-order espresso", cells: [false, false, true, true] },
  { label: "Fastest throughput", cells: [3, 3, 1, 3] },
  { label: "Visual centerpiece", cells: [2, 3, 2, 3] },
  { label: "Best for large crowds", cells: [true, true, false, true] },
  { label: "Indoor-friendly", cells: [true, "Venue dependent", true, true] },
]
