import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { findBrand } from "@/lib/assets"
import {
  diets,
  mission,
  saladExtras,
  salads,
  sandwichNote,
  sandwiches,
  soups,
  type Diet,
  type Dish,
} from "@/content/menu"
import { Board, BoardTitle, DietTags, keepDots } from "@/components/menu/bits"

// The line from the bottom of the printed lunch menu, with the mascot walking
// across it the way he does on the print.
export function Mission() {
  const mascot = findBrand("mascot")

  return (
    <section className="border-y-2 border-ink bg-gold">
      <div className="shell grid items-center gap-8 py-14 sm:grid-cols-[auto_1fr] sm:gap-12 lg:py-16">
        {mascot && (
          <Image
            src={mascot}
            alt=""
            width={801}
            height={900}
            className="h-36 w-auto sm:h-44 lg:h-52"
          />
        )}
        <div>
          <h2 className="display text-[clamp(2.5rem,6vw,4.5rem)] text-ink">{mission.title}</h2>
          <p className="mt-4 max-w-3xl text-[1.0625rem] leading-[1.7] text-ink/80 sm:text-lg">{mission.line}</p>
        </div>
      </div>
    </section>
  )
}

function Dishes({ dishes, columns }: { dishes: Dish[]; columns?: boolean }) {
  return (
    <ul className={columns ? "sm:grid sm:grid-cols-2 sm:gap-x-10" : undefined}>
      {dishes.map((dish, i) => (
        <li
          key={dish.name}
          className={cn(
            "border-b border-ink/10 py-3.5 last:border-b-0 sm:py-4",
            // In two columns the last row has two items: drop the rule under both.
            columns && dishes.length % 2 === 0 && i === dishes.length - 2 && "sm:border-b-0",
          )}
        >
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <h4 className="font-heading text-[1.125rem] leading-snug font-bold text-ink">{dish.name}</h4>
            <DietTags diet={dish.diet} />
          </div>
          <p className="mt-1 text-[0.9375rem] leading-[1.6] text-slate sm:leading-[1.65]">{keepDots(dish.line)}</p>
        </li>
      ))}
    </ul>
  )
}

export function Kitchen() {
  return (
    <section className="shell py-16 lg:py-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">From the kitchen</p>
          <h2 className="display mt-4 text-[clamp(2.25rem,4.6vw,3.75rem)]">
            Scratch-made food, next to the coffee.
          </h2>
        </div>
        {/* Legend for the tags on each dish. */}
        <dl className="flex flex-wrap gap-x-5 gap-y-2 lg:max-w-md lg:justify-end">
          {(Object.keys(diets) as Diet[]).map((d) => (
            <div key={d} className="flex items-center gap-1.5 text-sm text-slate">
              <dt>
                <DietTags diet={[d]} />
              </dt>
              <dd>{diets[d]}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[1.25fr_1fr] lg:gap-7">
        <Board id="salads">
          <BoardTitle>Salads</BoardTitle>
          <Dishes dishes={salads} />
          <p className="mt-5 rounded-xl bg-mint px-4 py-3 text-[0.9375rem] font-semibold text-teal-deep">
            {saladExtras.join(" · ")}
          </p>
        </Board>

        <div className="grid content-start gap-6 lg:gap-7">
          <Board id="soup" className="bg-mint">
            <BoardTitle>Soup</BoardTitle>
            <Dishes dishes={soups} />
          </Board>

          {/* A quote prompt where the soup column runs short. */}
          <div className="rounded-[1.5rem] border-2 border-dashed border-ink/40 bg-sand p-6 sm:p-8">
            <p className="font-heading text-[1.5rem] leading-tight font-extrabold tracking-[-0.02em] text-ink">
              Feeding a crowd?
            </p>
            <p className="mt-2 text-[1.0625rem] leading-[1.65] text-slate">
              Tell us the event, the time of day, and the headcount. We’ll put the food and the coffee on one quote.
            </p>
            <Button asChild size="xl" className="mt-6">
              <Link href="/quote">Get my custom quote</Link>
            </Button>
          </div>
        </div>

        <Board id="sandwiches" className="lg:col-span-2">
          <BoardTitle
            aside={
              <span className="rounded-full bg-gold px-3 py-1 text-[0.75rem] font-bold tracking-[0.12em] text-ink uppercase">
                {sandwichNote}
              </span>
            }
          >
            Sandwiches
          </BoardTitle>
          <Dishes dishes={sandwiches} columns />
        </Board>
      </div>
    </section>
  )
}
