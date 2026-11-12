// The five packages and the upgrades, in the client's own words.
//
// Rules for this file (Kent's brief, 2026-11-12):
// - Paste the client's text verbatim. Do not rewrite it.
// - No prices, hours, or guest counts anywhere on the card.
// - `pour` sets the label on the card: "espresso", "draft", or "both".
//   The Tap Truck is draft only.
// - Order is the client's (simplest to fullest). Kent and Zane may flip it so
//   the biggest package comes first. Reordering this array is the only change.
//
// TEST COPY BELOW. It only exists to check the layout at 390 and 1440. Replace
// every entry with the client's text before anyone outside LocalEyes sees it.
//
// While this is false the packages section, its "Packages" nav link and the
// hero's "See the packages" button stay hidden, so the shared Vercel link never
// shows TEST copy. Flip it to true once the client's text is in.
export const packagesReady = false

export type Pour = "espresso" | "draft" | "both"

export type Package = {
  name: string
  pour: Pour
  tagline: string
  short: string
  // One string per paragraph of the full description.
  full: string[]
  greatFor: string[]
}

export const packages: Package[] = [
  {
    name: "Package 1",
    pour: "espresso",
    tagline: "TEST: tagline from the client’s list.",
    short: "TEST: the short description goes here, one or two sentences long, in the client’s words.",
    full: [
      "TEST: the full description goes here. It can run to a few sentences and stays folded until someone opens it.",
    ],
    greatFor: ["TEST: event type", "TEST: event type", "TEST: event type"],
  },
  {
    name: "Package 2",
    pour: "espresso",
    tagline: "TEST: tagline from the client’s list.",
    short: "TEST: the short description goes here, one or two sentences long, in the client’s words.",
    full: [
      "TEST: the full description goes here. It can run to a few sentences and stays folded until someone opens it.",
    ],
    greatFor: ["TEST: event type", "TEST: event type"],
  },
  {
    name: "Tap Truck",
    pour: "draft",
    tagline: "TEST: tagline from the client’s list.",
    short: "TEST: the short description goes here, one or two sentences long, in the client’s words.",
    full: [
      "TEST: the full description goes here. It can run to a few sentences and stays folded until someone opens it.",
    ],
    greatFor: ["TEST: event type", "TEST: event type", "TEST: event type"],
  },
  {
    name: "Package 4",
    pour: "both",
    tagline: "TEST: tagline from the client’s list.",
    short: "TEST: the short description goes here, one or two sentences long, in the client’s words.",
    full: [
      "TEST: the full description goes here. It can run to a few sentences and stays folded until someone opens it.",
      "TEST: a second paragraph, if the client wrote one.",
    ],
    greatFor: ["TEST: event type", "TEST: event type", "TEST: event type"],
  },
  {
    name: "Package 5",
    pour: "both",
    tagline: "TEST: tagline from the client’s list.",
    short: "TEST: the short description goes here, one or two sentences long, in the client’s words.",
    full: [
      "TEST: the full description goes here. It can run to a few sentences and stays folded until someone opens it.",
    ],
    greatFor: ["TEST: event type", "TEST: event type", "TEST: event type"],
  },
]

// Listed once, under all five packages. `detail` is optional.
export const upgrades: { name: string; detail?: string }[] = [
  { name: "TEST: upgrade", detail: "TEST: one line about it, if the client gave one." },
  { name: "TEST: upgrade", detail: "TEST: one line about it, if the client gave one." },
  { name: "TEST: upgrade", detail: "TEST: one line about it, if the client gave one." },
  { name: "TEST: upgrade" },
  { name: "TEST: upgrade" },
  { name: "TEST: upgrade" },
]
