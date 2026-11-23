import Link from "next/link"
import { CheckIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Photo } from "@/components/photo"
import { cn } from "@/lib/utils"
import {
  compareColumns,
  compareRows,
  packages,
  packagesReady,
  SHOW_EMPTY_PRICES,
  type CompareCell,
  type Package,
  type Pour,
} from "@/content/packages"

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

// "Starting at $___": the space Adam asked for, filled from packages.ts.
function StartingAt({ value }: { value: string }) {
  if (!value && !SHOW_EMPTY_PRICES) return null
  return (
    <p className="mt-5 flex items-baseline gap-2.5 border-t border-ink/10 pt-4">
      <span className="text-xs font-semibold tracking-[0.14em] text-slate/75 uppercase">Starting at</span>
      {value ? (
        <span className="font-heading text-[1.375rem] font-extrabold text-ink">${value}</span>
      ) : (
        <span className="font-heading text-[1.375rem] font-extrabold text-ink/35">
          $<span aria-hidden className="ml-0.5 inline-block w-16 border-b-2 border-dashed border-ink/25" />
          <span className="sr-only">price to come</span>
        </span>
      )}
    </p>
  )
}

function PackagePhotos({ pkg, wide }: { pkg: Package; wide: boolean }) {
  const ratio = wide ? "aspect-[4/3] lg:aspect-[16/9]" : "aspect-[4/3]"
  if (pkg.photos.length === 1) {
    const [p] = pkg.photos
    return (
      <Photo
        name={p.name}
        label={p.label}
        alt={p.alt}
        sizes={wide ? "(min-width: 1024px) 40rem, (min-width: 768px) 45vw, 92vw" : "(min-width: 1024px) 26rem, (min-width: 768px) 45vw, 92vw"}
        tone="tile"
        className={cn(ratio, "border-b-2 border-ink")}
      />
    )
  }
  // Two stations, two photos.
  return (
    <div className={cn(ratio, "grid grid-cols-2 border-b-2 border-ink")}>
      {pkg.photos.map((p, i) => (
        <Photo
          key={p.name}
          name={p.name}
          label={p.label}
          alt={p.alt}
          sizes="(min-width: 1024px) 20rem, (min-width: 768px) 23vw, 46vw"
          tone="tile"
          className={cn("h-full", i > 0 && "border-l-2 border-ink")}
        />
      ))}
    </div>
  )
}

function Cell({ value }: { value: CompareCell }) {
  if (value === true)
    return (
      <>
        <CheckIcon className="mx-auto size-5 stroke-[3] text-teal-deep" aria-hidden />
        <span className="sr-only">Yes</span>
      </>
    )
  if (value === false) return <span className="sr-only">No</span>
  if (typeof value === "number")
    return (
      <span role="img" aria-label={`${value} of 3`} className="inline-flex gap-1">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={cn("size-2.5 rounded-full border-2 border-teal-deep", n <= value ? "bg-teal-deep" : "bg-transparent")}
          />
        ))}
      </span>
    )
  return <span className="text-sm font-medium whitespace-nowrap text-slate">{value}</span>
}

export function Packages() {
  if (!packagesReady) return null

  return (
    <section id="packages" className="shell py-20 lg:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Packages</p>
          <h2 className="display mt-4 text-[clamp(2.25rem,4.6vw,3.75rem)]">Our mobile coffee packages.</h2>
        </div>
        <Link href="/quote" className="shrink-0 text-[1.0625rem] font-semibold text-teal-deep link-underline">
          → Not sure which? We’ll help you pick
        </Link>
      </div>

      <p className="mt-6 text-sm font-semibold text-teal-deep md:hidden">
        Swipe for all {packages.length} packages →
      </p>

      {/* Phones: one swipe row, the next card peeking in, so five packages take
          one card's height. md+: three across, then two wider ones, so no row is
          left half empty. Cards in a row share one height, and the price, details
          and button sit on the same line at the bottom of each.
          relative: screen-reader-only text inside can't widen the page. */}
      <ul className="relative -mx-5 mt-4 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pt-1 pb-5 [scrollbar-width:none] after:w-1 after:shrink-0 after:content-[''] md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pt-0 md:pb-0 md:after:hidden lg:mt-14 lg:grid-cols-6 lg:gap-7 [&::-webkit-scrollbar]:hidden">
        {packages.map((pkg, i) => {
          const wide = i >= 3
          return (
            <li
              key={pkg.name}
              className={cn(
                "relative flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-[1.5rem] border-2 border-ink bg-white shadow-[6px_6px_0_0_var(--color-ink)] md:w-auto",
                wide ? "lg:col-span-3" : "lg:col-span-2",
                i === packages.length - 1 && packages.length % 2 === 1 && "md:col-span-2",
              )}
            >
              <PackagePhotos pkg={pkg} wide={wide} />

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <PourTag pour={pkg.pour} />
                <h3 className="mt-4 font-heading text-[1.625rem] leading-[1.15] font-extrabold tracking-[-0.025em] text-ink">
                  {pkg.name}
                </h3>
                <p className="mt-1.5 font-heading text-[1.0625rem] leading-snug font-semibold text-teal-deep">
                  {pkg.tagline}
                </p>
                <p className="mt-3 text-[1rem] leading-[1.7] text-slate">{pkg.short}</p>

                {/* Pinned to the bottom, so every card in a row lines up. */}
                <div className="mt-auto">
                  <StartingAt value={pkg.startingAt} />

                  {/* Native <details>: folded for people, still in the HTML for Google. */}
                  <details className="group mt-4 border-t border-ink/10">
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
                      <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-slate/75 uppercase">At a glance</p>
                      <dl className="mt-2 divide-y divide-ink/10 border-y border-ink/10">
                        {pkg.glance.map((row) => (
                          <div key={row.label} className="grid gap-0.5 py-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                            <dt className="text-[0.875rem] font-semibold text-ink">{row.label}</dt>
                            <dd className="text-[0.9375rem] leading-snug text-slate">{row.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </details>

                  {/* Adam's own button line for each package. */}
                  <Button
                    asChild
                    size="xl"
                    className="mt-2 h-auto min-h-12 w-full py-3 text-center leading-snug whitespace-normal"
                  >
                    <Link href="/quote">{pkg.cta}</Link>
                  </Button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      {/* The comparison table from the end of Adam's packages document. */}
      <div className="mt-16 lg:mt-20">
        <h3 className="display text-[clamp(1.875rem,3.2vw,2.5rem)]">Compare the packages</h3>
        <p className="mt-2 text-sm text-slate md:hidden">Swipe the table to see every package.</p>
        {/* relative: the hidden "Yes"/"No" labels are absolutely positioned and
            would otherwise stretch the page sideways on phones. */}
        <div className="relative mt-6 overflow-x-auto rounded-[1.5rem] border-2 border-ink bg-white shadow-[6px_6px_0_0_var(--color-ink)]">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-ink bg-mint">
                <th scope="col" className="sticky left-0 z-10 bg-mint p-4">
                  <span className="sr-only">Feature</span>
                </th>
                {compareColumns.map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className="p-4 text-center font-heading text-[0.9375rem] leading-tight font-bold text-ink"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.label} className="border-b border-ink/10 last:border-b-0">
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-white p-4 text-[0.9375rem] font-semibold whitespace-nowrap text-ink"
                  >
                    {row.label}
                  </th>
                  {row.cells.map((cell, i) => (
                    <td key={compareColumns[i]} className="p-4 text-center">
                      <Cell value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
