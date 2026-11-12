import { cn } from "@/lib/utils"
import { family } from "@/content/site"

// "One team, one standard, three ways to get it." from Adam's Wake design.
// The three ways are the three Wake places, not the packages, so the brands
// always sit right next to the line. The header pill scrolls here.
export function Family() {
  return (
    <section id="family" className="shell py-14 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-end lg:gap-16">
        <div>
          <p className="eyebrow">The Wake family</p>
          <h2 className="display mt-4 text-[clamp(2rem,4vw,3rem)]">One team, one standard, three ways to get it.</h2>
        </div>

        <ul className="grid border-t-2 border-ink sm:grid-cols-3">
          {family.map((brand, i) => (
            <li
              key={brand.name}
              className={cn(
                "border-b border-ink/15 py-4 sm:border-b-0 sm:px-5 sm:pt-5 sm:pb-0",
                i === 0 ? "sm:pl-0" : "sm:border-l sm:border-ink/15",
              )}
            >
              <div className="flex items-baseline justify-between gap-3 sm:block">
                <h3 className="font-heading text-lg font-bold text-ink">{brand.name}</h3>
                {brand.current && (
                  <span className="shrink-0 text-[0.6875rem] font-semibold tracking-[0.14em] text-teal-deep uppercase sm:mt-1 sm:block">
                    You are here
                  </span>
                )}
              </div>
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-slate">{brand.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
