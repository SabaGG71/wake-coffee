import type { Metadata } from "next"
import { Photo } from "@/components/photo"
import { QuoteDesk } from "@/components/quote/quote-desk"
import { site } from "@/content/site"

const title = "Get a Coffee Catering Quote | Wake Mobile Café"
const description =
  "Check your date and get a custom quote for coffee and food catering in Monmouth & Ocean County, NJ: espresso, draft lattes, and scratch-made food from Wake Coffee & Kitchen."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/quote" },
  openGraph: { type: "website", siteName: site.name, locale: "en_US", title, description },
  twitter: { card: "summary_large_image", title, description },
}

// Real event photos under the form: what the quote turns into.
const moments = [
  {
    photo: "wake-coffee-mobile-truck",
    caption: "The truck",
    alt: "The grey Wake Mobile Café truck with its service window open at an indoor event",
  },
  {
    photo: "wake-coffee-mobile-cafe-setup",
    caption: "A cart",
    alt: "A Wake Coffee & Kitchen cart with an espresso machine set up outdoors",
  },
  {
    photo: "branded-iced-coffee-cups-at-event",
    caption: "Your guests",
    alt: "Two iced lattes in Wake cups held up at an event",
  },
]

export default function QuotePage() {
  return (
    <>
      <QuoteDesk />
      <section className="shell pb-20 lg:pb-28">
        <h2 className="display max-w-2xl text-[clamp(1.875rem,3.6vw,2.75rem)]">
          The truck, the carts, and the team behind Wake Coffee &amp; Kitchen.
        </h2>
        <ul className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 lg:mt-10 lg:gap-8">
          {moments.map((m) => (
            <li key={m.photo}>
              <Photo
                name={m.photo}
                label={m.caption}
                alt={m.alt}
                sizes="(min-width: 1024px) 26rem, 31vw"
                tone="tile"
                className="aspect-[3/4] rounded-xl border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] sm:rounded-[1.5rem] sm:shadow-[6px_6px_0_0_var(--color-ink)] lg:aspect-[4/5]"
              />
              <p className="mt-3 font-heading text-sm font-bold text-ink sm:mt-4 sm:text-base">{m.caption}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
