import {
  classics,
  riptides,
  salads,
  sandwiches,
  seasonal,
  signatures,
  soups,
  tea,
  type Dish,
  type Item,
} from "@/content/menu"
import { site } from "@/content/site"

// schema.org Menu built from the same lists the page shows. No prices, like the page.
export function MenuJsonLd() {
  const absolute = (path: string) => (site.url ? new URL(path, site.url).toString() : undefined)
  const item = (i: Item | Dish) => ({ "@type": "MenuItem", name: i.name, ...(i.line && { description: i.line }) })
  const section = (name: string, items: (Item | Dish)[]) => ({
    "@type": "MenuSection",
    name,
    hasMenuItem: items.map(item),
  })

  const data = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${site.name} catering menu`,
    url: absolute("/menu"),
    provider: { "@type": "LocalBusiness", name: site.name, "@id": absolute("/#business") },
    hasMenuSection: [
      section("Craft beverages", signatures),
      section("Classics", classics),
      section("Tea", tea),
      section(
        "Riptides",
        riptides.flavors.map((f) => ({ name: f.name, line: f.line })),
      ),
      section(seasonal.title, seasonal.items),
      section("Salads", salads),
      section("Soup", soups),
      section("Sandwiches", sandwiches),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
