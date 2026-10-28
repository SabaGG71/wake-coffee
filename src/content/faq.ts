// Every answer comes from wakeck.com/mobile-coffee-service, the truck's side
// panel, or Adam's designs. No prices or lead times until Adam gives them.
import { site } from "@/content/site"

export const faq = [
  {
    q: "What areas do you serve?",
    a: `We’re based in ${site.base} and cater events across ${site.region}, including Belmar, Spring Lake, Rumson, Red Bank, and Toms River. We also travel to events in New Jersey, Pennsylvania, and New York City.`,
  },
  {
    q: "Do you bring a coffee truck or a coffee cart?",
    a: "Either one. Our custom-built coffee truck is compact enough to fit where most food trucks can’t, and our two coffee carts are made for indoor venues and tighter spaces. Tell us about the space and we’ll suggest the right setup.",
  },
  {
    q: "Can you cater food as well as coffee?",
    a: "Yes. We’re backed by our sister restaurant, Wake Coffee & Kitchen, so your event can have the same scratch-made breakfast and lunch, with house-made syrups, dressings, and baked goods, next to the espresso bar. One team, one quote.",
  },
  {
    q: "Can the coffee cart set up indoors?",
    a: "Yes. Our carts have a small footprint and carry the same pro gear we use in our shop, so they work in indoor venues, offices, and tight spaces where a truck can’t go.",
  },
  {
    q: "What kinds of events do you cater?",
    a: "Weddings and receptions, company events and employee appreciation, high-volume brand activations, private parties, fundraisers, and teacher appreciation and community events.",
  },
  {
    q: "Who makes the drinks?",
    a: `Expert Wake baristas, with the same pro equipment and house-made syrups as our café in ${site.base}.`,
  },
  {
    q: "How do I check availability and get a price?",
    a: `Use the quote form on this page to check your date and tell us about the event, and we’ll send back a custom quote. You can also call us at ${site.phone.label}.`,
  },
]
