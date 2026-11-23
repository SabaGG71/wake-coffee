import Image from "next/image"
import { FlashQuotes } from "@/components/home/flash-quotes"
import { cn } from "@/lib/utils"
import { findBrand } from "@/lib/assets"
import { site } from "@/content/site"

// What one quote can cover. Same labels and colours as the package cards.
// Lines come from Adam's packages document and wakeck.com.
const onIt = [
  { tag: "Espresso", tone: "bg-teal text-white", line: "Handcrafted drinks, made to order by trained Wake baristas." },
  { tag: "Draft", tone: "bg-gold text-ink", line: "Signature draft lattes and cold brew, poured in seconds." },
  { tag: "Food", tone: "bg-mint text-teal-deep", line: "Scratch-made breakfast and lunch from Wake Coffee & Kitchen." },
]

const strip = ["Check your date", "Tell us about the event", "Get your custom quote"]

// The Wake waves, drawn as a faint repeating line on the mint panel.
const waves =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='26'%3E%3Cpath d='M0 13 Q12 3 24 13 T48 13 T72 13 T96 13' fill='none' stroke='%2321857a' stroke-opacity='.16' stroke-width='2'/%3E%3C/svg%3E\")"

function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-3.5 shrink-0", className)} aria-hidden>
      <path
        d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Wavy's running strip, small, as the header of the form card.
function Strip() {
  return (
    <div className="min-w-0 overflow-hidden border-b-2 border-ink bg-ink py-3 text-white" aria-hidden>
      <div className="flex w-max animate-[ticker_36s_linear_infinite] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {strip.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-5 pr-5 text-[0.6875rem] font-semibold tracking-[0.16em] whitespace-nowrap uppercase"
              >
                {item}
                <Spark className={i % 2 ? "text-seafoam" : "text-gold"} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export function QuoteDesk() {
  const mascot = findBrand("mascot")

  return (
    <section id="quote" className="relative overflow-hidden">
      {/* Mint panel behind the form on desktop: from the viewport edge to just left of the card. */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden border-b-2 border-l-2 border-ink bg-mint lg:block lg:w-[calc((100%_-_min(100%,84rem))/2_+_34rem)]"
        style={{ backgroundImage: waves }}
      />

      <div className="shell relative grid grid-cols-[minmax(0,1fr)] gap-x-16 gap-y-10 pt-8 pb-16 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_28rem] lg:grid-rows-[auto_1fr] lg:pt-14 lg:pb-20">
        {/* 1. Intro. On phones the form follows straight after it. */}
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="eyebrow">Get a quote</p>
          <h1 className="display mt-5 text-[clamp(2.5rem,8vw,3.5rem)] text-ink lg:text-[64px]">
            Get a custom coffee <span className="text-teal">catering quote.</span>
          </h1>
          <p className="mt-5 max-w-[34rem] text-lg leading-[1.7] text-slate">
            Check your date and tell us about the event. We’ll come back with the right setup and a custom quote.
          </p>
        </div>

        {/* 2. The form card, with the mascot walking along its top edge. */}
        <div className="relative mx-auto w-full max-w-[28rem] min-w-0 pt-[5.25rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:self-start">
          {mascot && (
            <Image
              src={mascot}
              alt=""
              width={801}
              height={900}
              preload
              className="absolute top-0 right-7 z-10 h-[5.75rem] w-auto"
            />
          )}
          <div className="overflow-hidden rounded-[1.75rem] border-2 border-ink bg-white hard-shadow">
            <Strip />
            <div className="p-3 sm:p-5">
              <FlashQuotes formId={site.flashQuotesFormId} />
            </div>
          </div>
        </div>

        {/* 3. What one quote covers, and the phone for people who'd rather call. */}
        <div className="lg:col-start-1 lg:row-start-2 lg:max-w-[38rem]">
          <p className="text-xs font-semibold tracking-[0.14em] text-slate/75 uppercase">One team, one quote</p>
          <ul className="mt-3 border-t-2 border-ink">
            {onIt.map((item) => (
              <li key={item.tag} className="flex items-center gap-4 border-b border-ink/10 py-3.5">
                <span
                  className={cn(
                    "w-[5.5rem] shrink-0 rounded-full border-2 border-ink py-1 text-center text-[0.6875rem] font-bold tracking-[0.14em] uppercase",
                    item.tone,
                  )}
                >
                  {item.tag}
                </span>
                <span className="text-[1.0625rem] leading-snug text-slate">{item.line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-6 rounded-[1.5rem] border-2 border-ink bg-white p-6 shadow-[6px_6px_0_0_var(--color-ink)] sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10 sm:p-7">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-slate/75 uppercase">Rather talk it through?</p>
              <a
                href={site.phone.href}
                className="mt-1.5 block font-heading text-[1.75rem] font-extrabold tracking-[-0.02em] whitespace-nowrap text-teal-deep transition-colors hover:text-teal"
              >
                {site.phone.label}
              </a>
            </div>
            <dl className="grid gap-2 border-t border-ink/10 pt-4 text-[0.9375rem] sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
              <div className="flex gap-2">
                <dt className="text-slate/75">Based in</dt>
                <dd className="font-semibold text-ink">{site.base}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-slate/75">Serving</dt>
                <dd className="font-semibold text-ink">
                  {site.region}
                  {"\u00a0· "}
                  {site.reach}
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-slate/75">Instagram</dt>
                <dd className="font-semibold text-ink">{site.instagram.label}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
