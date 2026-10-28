import { ServiceMap } from "@/components/home/service-map"
import { counties } from "@/content/area"
import { site } from "@/content/site"

// Split card with the map, after the "Find us" card in Adam's Wavy's design.
export function Area() {
  return (
    <section id="area" className="shell py-20 lg:py-28">
      <div className="grid overflow-hidden rounded-[1.75rem] border-2 border-ink bg-white hard-shadow lg:grid-cols-[1fr_1.15fr]">
        <div className="p-8 sm:p-12">
          <p className="eyebrow">Where we serve</p>
          <h2 className="display mt-4 text-[clamp(2.1rem,3.8vw,3.25rem)]">
            Coffee catering across {site.region}.
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-slate">
            Wake Mobile Café is based in {site.base}, right next to Belmar. We bring the coffee truck or a cart to
            weddings, offices, and events across both counties, and we also travel to events in New Jersey,
            Pennsylvania, and New York City.
          </p>

          <div className="mt-9 space-y-7">
            {counties.map((county) => (
              <div key={county.name}>
                <h3 className="text-xs font-semibold tracking-[0.14em] text-slate/75 uppercase">{county.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5 font-heading text-[1.0625rem] font-bold text-ink">
                  {county.towns.map((town, i) => (
                    <li key={town} className="flex items-center gap-2">
                      {town}
                      {i < county.towns.length - 1 && (
                        <span className="text-teal" aria-hidden>
                          ·
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a href="#quote" className="mt-10 inline-block text-[1.0625rem] font-semibold text-teal-deep link-underline">
            → Not on the list? Check your date
          </a>
        </div>

        <div className="relative min-h-[26rem] border-t-2 border-ink bg-mint lg:border-t-0 lg:border-l-2">
          <div className="absolute inset-0">
            <ServiceMap />
          </div>
        </div>
      </div>
    </section>
  )
}
