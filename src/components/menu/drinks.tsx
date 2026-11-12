import { Photo } from "@/components/photo"
import { cn } from "@/lib/utils"
import { classics, riptides, seasonal, signatures, tea } from "@/content/menu"
import { Board, BoardTitle, DraftTag, TwoTone, keepDots } from "@/components/menu/bits"

export function Signatures() {
  const [star, ...rest] = signatures

  return (
    <section id="signatures" className="shell pt-10 pb-10 lg:pt-14 lg:pb-14">
      <p className="eyebrow">From the bar</p>
      <h2 className="display mt-4 text-[clamp(2.25rem,4.6vw,3.75rem)]">Craft beverages</h2>

      <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-7">
        {/* The house signature, big, with the draft tag the Tap Truck shares. */}
        <article className="grid overflow-hidden rounded-[1.75rem] border-2 border-ink bg-mint hard-shadow sm:grid-cols-[1fr_1.15fr] lg:col-span-7">
          <Photo
            name="wake-iced-latte"
            label="An iced latte in a Wake cup"
            alt="An iced latte in a clear cup with the Wake wave mascot sticker"
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 92vw"
            preload
            tone="tile"
            className="aspect-[4/3] border-b-2 border-ink sm:aspect-auto sm:border-r-2 sm:border-b-0"
          />
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <DraftTag />
              <span className="rounded-full border-2 border-ink bg-white px-3 py-1 text-[0.6875rem] font-bold tracking-[0.14em] text-ink uppercase">
                Our signature
              </span>
            </div>
            <h3 className="mt-6 font-heading text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance text-ink">
              <TwoTone name={star.name} accent={star.accent} />
            </h3>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-slate">{star.line}</p>
          </div>
        </article>

        <div className="grid gap-6 lg:col-span-5 lg:gap-7">
          {rest.map((drink) => (
            <article
              key={drink.name}
              className="rounded-[1.5rem] border-2 border-ink bg-white p-6 shadow-[6px_6px_0_0_var(--color-ink)]"
            >
              <h3 className="font-heading text-[1.4375rem] leading-[1.15] font-extrabold tracking-[-0.02em] text-ink">
                <TwoTone name={drink.name} accent={drink.accent} />
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-[1.65] text-slate">{drink.line}</p>
              {drink.flavors && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Flavors">
                  {drink.flavors.map((flavor) => (
                    <li
                      key={flavor}
                      className="rounded-full bg-mint px-3 py-1 font-heading text-sm font-semibold text-teal-deep"
                    >
                      {flavor}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ClassicsAndTea() {
  return (
    <section className="shell grid gap-6 pb-16 lg:grid-cols-[1.15fr_1fr] lg:gap-7 lg:pb-24">
      <Board id="classics">
        <BoardTitle>Classics</BoardTitle>
        {/* columns, not grid: the list reads down the first column like the print. */}
        <ul className="mt-2 columns-2 gap-x-6 sm:gap-x-8">
          {classics.map((drink) => (
            <li
              key={drink.name}
              className="break-inside-avoid border-b border-ink/10 py-3.5 font-heading text-[0.9375rem] font-semibold whitespace-nowrap text-ink sm:text-[1.0625rem]"
            >
              {drink.name}
              {drink.note && <span className="ml-1.5 text-sm font-medium text-slate/80">{drink.note}</span>}
            </li>
          ))}
        </ul>
      </Board>

      <Board id="tea" className="bg-sand">
        <BoardTitle>Tea</BoardTitle>
        <ul className="mt-2">
          {tea.map((drink) => (
            <li key={drink.name} className="border-b border-ink/10 py-3.5 last:border-b-0">
              <p className="font-heading text-[1.0625rem] font-bold text-ink">{drink.name}</p>
              <p className="mt-0.5 text-[0.9375rem] text-slate">{keepDots(drink.line ?? "")}</p>
            </li>
          ))}
        </ul>
      </Board>
    </section>
  )
}

// A round swatch in the flavour's fruit colours, with a few bubbles: sparkling.
function Swatch({ colors }: { colors: string[] }) {
  const stops = colors.map((c, i) => `${c} ${Math.round((i / colors.length) * 100)}% ${Math.round(((i + 1) / colors.length) * 100)}%`)
  return (
    <span
      aria-hidden
      className="relative block size-12 shrink-0 overflow-hidden rounded-full border-2 border-ink"
      style={{ background: `linear-gradient(160deg, ${stops.join(", ")})` }}
    >
      <span className="absolute top-2 left-2.5 size-2 rounded-full bg-white/85" />
      <span className="absolute top-5 left-6 size-1.5 rounded-full bg-white/75" />
      <span className="absolute bottom-2.5 left-3.5 size-1 rounded-full bg-white/70" />
    </span>
  )
}

export function Riptides() {
  return (
    <section id="riptides" className="border-y-2 border-ink bg-tile py-16 lg:py-24">
      <div className="shell grid items-center gap-10 lg:grid-cols-[1fr_1.75fr] lg:gap-16">
        <div>
          <p className="eyebrow">{riptides.line}</p>
          <h2 className="display mt-3 text-[clamp(3.5rem,10vw,6.5rem)] text-ink">Riptides</h2>
          <p className="mt-4 max-w-sm text-[1.0625rem] leading-[1.7] text-slate">
            {riptides.flavors.length} flavors to pick from.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {riptides.flavors.map((flavor) => (
            <li
              key={flavor.name}
              className="flex flex-col gap-4 rounded-2xl border-2 border-ink bg-white p-4 shadow-[4px_4px_0_0_var(--color-ink)] sm:p-5"
            >
              <Swatch colors={flavor.colors} />
              <div>
                <p className="font-heading text-[1.0625rem] leading-tight font-bold text-ink">{flavor.name}</p>
                <p className="mt-1 text-sm leading-snug text-slate">{flavor.line}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Seasonal() {
  return (
    <section id="seasonal" className="shell py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <Photo
          name="branded-iced-coffee-cups"
          label="Iced lattes at an event"
          alt="Two guests clinking iced lattes in Wake cups"
          sizes="(min-width: 1024px) 30rem, 92vw"
          tone="sand"
          className="mx-auto aspect-[4/3] w-full max-w-[30rem] rounded-[1.75rem] border-2 border-ink hard-shadow sm:aspect-[4/5] lg:mx-0"
        />

        <div>
          <p className="eyebrow">{seasonal.title}</p>
          <h2 className="display mt-4 text-[clamp(2.25rem,4.6vw,3.5rem)]">{seasonal.line}</h2>
          <ol className="mt-10 border-t-2 border-ink">
            {seasonal.items.map((drink, i) => (
              <li key={drink.name} className={cn("grid gap-1 py-6 sm:grid-cols-[3rem_1fr]", i > 0 && "border-t border-ink/15")}>
                <span aria-hidden className="font-heading text-sm font-bold text-teal-deep">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-[1.5rem] leading-tight font-extrabold tracking-[-0.02em] text-ink">
                    <TwoTone name={drink.name} accent={drink.accent} />
                  </h3>
                  <p className="mt-2 max-w-xl text-[1.0625rem] leading-[1.7] text-slate">{drink.line}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
