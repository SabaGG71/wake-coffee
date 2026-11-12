import Link from "next/link"
import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { packages, upgrades, type Pour } from "@/content/packages"

// What each package pours, so Tap and Espresso never blur together.
const segments: Record<Pour, ("espresso" | "draft")[]> = {
  espresso: ["espresso"],
  draft: ["draft"],
  both: ["espresso", "draft"],
}

function PourTag({ pour }: { pour: Pour }) {
  return (
    <p className="inline-flex self-start overflow-hidden rounded-full border-2 border-ink text-[0.6875rem] font-bold tracking-[0.14em] uppercase">
      {segments[pour].map((s, i) => (
        <span
          key={s}
          className={cn(
            "px-3 py-1",
            s === "espresso" ? "bg-teal text-white" : "bg-gold text-ink",
            i > 0 && "border-l-2 border-ink",
          )}
        >
          {s === "espresso" ? "Espresso" : "Draft"}
        </span>
      ))}
    </p>
  )
}

export function Packages() {
  return (
    <section id="packages" className="shell py-20 lg:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Packages</p>
          <h2 className="display mt-4 text-[clamp(2.25rem,4.6vw,3.75rem)]">Find the package that fits your event.</h2>
        </div>
        <Link href="/quote" className="shrink-0 text-[1.0625rem] font-semibold text-teal-deep link-underline">
          → Not sure which? We’ll help you pick
        </Link>
      </div>

      {/* Five cards: three across, then two wider ones, so no row is left half
          empty. items-start: opening one card doesn't stretch its neighbours. */}
      <ul className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-6 lg:gap-7">
        {packages.map((pkg, i) => (
          <li
            key={pkg.name}
            className={cn(
              "flex flex-col rounded-[1.5rem] border-2 border-ink bg-white p-6 shadow-[6px_6px_0_0_var(--color-ink)] sm:p-8",
              i < 3 ? "lg:col-span-2" : "lg:col-span-3",
              i === packages.length - 1 && packages.length % 2 === 1 && "md:col-span-2",
            )}
          >
            <PourTag pour={pkg.pour} />
            <h3 className="mt-5 font-heading text-[1.625rem] leading-[1.15] font-extrabold tracking-[-0.025em] text-ink">
              {pkg.name}
            </h3>
            <p className="mt-2 font-heading text-[1.0625rem] leading-snug font-semibold text-teal-deep">
              {pkg.tagline}
            </p>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-slate">{pkg.short}</p>

            <div className="mt-auto pt-6">
              {/* Native <details>: folded for people, still in the HTML for Google. */}
              <details className="group border-t border-ink/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[0.9375rem] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <span>
                    Full details<span className="sr-only"> for {pkg.name}</span>
                  </span>
                  <PlusIcon
                    className="size-5 shrink-0 text-teal-deep transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <div className="pb-5">
                  <div className="space-y-3 text-[0.9375rem] leading-[1.7] text-slate">
                    {pkg.full.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                  {pkg.greatFor.length > 0 && (
                    <>
                      <p className="mt-5 text-xs font-semibold tracking-[0.14em] text-slate/75 uppercase">Great for</p>
                      <ul className="mt-2 divide-y divide-ink/10 border-y border-ink/10">
                        {pkg.greatFor.map((item, j) => (
                          <li key={`${item}-${j}`} className="py-2.5 text-[0.9375rem] font-medium text-ink">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </details>

              <Button asChild size="xl" className="mt-2 w-full">
                <Link href="/quote" aria-label={`Request a quote for ${pkg.name}`}>
                  Request a quote
                </Link>
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {/* Upgrades once, under all five, instead of repeated on every card. */}
      {upgrades.length > 0 && (
        <div className="mt-12 grid gap-8 rounded-[1.5rem] border-2 border-ink bg-sand p-6 sm:p-10 lg:mt-14 lg:grid-cols-[1fr_2.4fr] lg:gap-14">
          <div>
            <p className="eyebrow">Add to your package</p>
            <h3 className="display mt-3 text-[clamp(1.875rem,3.2vw,2.5rem)]">Upgrades</h3>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2 xl:grid-cols-3">
            {upgrades.map((u, i) => (
              <li key={`${u.name}-${i}`} className="border-t border-ink/15 py-4">
                <p className="font-heading text-[1.0625rem] font-bold text-ink">{u.name}</p>
                {u.detail && <p className="mt-1 text-[0.9375rem] leading-relaxed text-slate">{u.detail}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
