import { base, towns } from "@/content/area"
import { faq } from "@/content/faq"
import { family, site } from "@/content/site"

// LocalBusiness + FAQPage structured data. Image and url join once the
// production domain is set in site.url.
export function JsonLd() {
  const absolute = (path: string) => (site.url ? new URL(path, site.url).toString() : undefined)

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": absolute("/#business"),
        name: site.name,
        description:
          "Specialty coffee catering and mobile espresso bar for weddings, offices, and events in Monmouth & Ocean County, NJ, with scratch-made food from Wake Coffee & Kitchen.",
        url: absolute("/"),
        image: absolute("/photos/wake-coffee-mobile-truck.webp"),
        telephone: "+1-848-200-2132",
        address: {
          "@type": "PostalAddress",
          addressLocality: base.name,
          addressRegion: "NJ",
          addressCountry: "US",
        },
        geo: { "@type": "GeoCoordinates", latitude: base.lat, longitude: base.lng },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Monmouth County, NJ" },
          { "@type": "AdministrativeArea", name: "Ocean County, NJ" },
          ...towns.filter((t) => t.named).map((t) => ({ "@type": "City", name: `${t.name}, NJ` })),
        ],
        sameAs: [site.instagram.url],
        parentOrganization: { "@type": "Organization", name: family[0].name, url: family[0].url },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
