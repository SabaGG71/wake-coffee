import { Button } from "@/components/ui/button"
import { Photo } from "@/components/photo"
import { cn } from "@/lib/utils"
import { facts } from "@/content/home"
import { site } from "@/content/site"

export function Hero() {
  return (
    <section className="shell grid items-center gap-14 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-16 lg:pb-24">
      <div>
        <p className="eyebrow text-balance">Wake Mobile Café · Mobile espresso bar</p>
        <h1 className="display mt-5 text-[clamp(2.6rem,9vw,3.5rem)] text-ink lg:text-[72px]">
          Coffee catering in <span className="text-teal">{site.region}, NJ.</span>
        </h1>
        <p className="mt-6 max-w-[34rem] text-lg leading-[1.7] text-slate sm:text-xl sm:leading-[1.65]">
          We bring the whole café to you. Specialty coffee for offices, weddings, and events, plus scratch-made
          food from Wake Coffee &amp; Kitchen.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="xl">
            <a href="#quote">Get my custom quote</a>
          </Button>
          <Button asChild size="xl" variant="line">
            <a href="#setups">See the truck &amp; carts</a>
          </Button>
        </div>

        {/* Rows (label left, value right) until xl, then Wavy's divided row, each
            column at its natural width so no value wraps. */}
        <dl className="mt-12 border-t-2 border-ink xl:flex xl:pt-6">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={cn(
                "flex items-baseline justify-between gap-6 border-b border-ink/10 py-3.5 xl:block xl:border-b-0 xl:py-0",
                i > 0 && "xl:border-l xl:border-ink/15 xl:pl-7",
                i < facts.length - 1 && "xl:pr-7",
              )}
            >
              <dt className="text-xs font-semibold tracking-[0.14em] text-slate/75 uppercase">{fact.label}</dt>
              <dd className="font-heading text-[1.0625rem] font-bold whitespace-nowrap text-ink xl:mt-1">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto w-full max-w-[34rem] pr-2.5 lg:mr-0">
        <Photo
          name="barista-at-outdoor-coffee-cart"
          label="Hero: the truck or a cart serving at an event"
          alt="A Wake barista making drinks at an outdoor coffee cart"
          sizes="(min-width: 1024px) 34rem, 92vw"
          preload
          tone="tile"
          className="aspect-[4/5] rounded-[1.75rem] border-2 border-ink hard-shadow"
        />
        {/* Sticker in the spirit of Wavy's "The Original" badge. */}
        <div className="absolute -top-6 -left-3 flex size-28 rotate-[-10deg] flex-col items-center justify-center rounded-full border-2 border-ink bg-gold text-ink sm:-left-6 sm:size-32">
          <span className="text-[0.625rem] font-bold tracking-[0.18em] uppercase">From the</span>
          <span className="font-heading text-lg leading-none font-extrabold tracking-tight sm:text-xl">WAKE TEAM</span>
        </div>
      </div>
    </section>
  )
}
