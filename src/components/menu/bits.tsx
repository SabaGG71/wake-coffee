import { cn } from "@/lib/utils"
import { diets, type Diet } from "@/content/menu"

// "Cookie Butter Draft Latte" with "Cookie Butter" in teal, as on the printed menu.
export function TwoTone({ name, accent }: { name: string; accent?: string }) {
  if (!accent || !name.includes(accent)) return <>{name}</>
  const [before, after] = name.split(accent)
  return (
    <>
      {before}
      <span className="text-teal">{accent}</span>
      {after}
    </>
  )
}

// Same gold as the "Draft" label on the package cards, so the tap reads as one thing.
export function DraftTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border-2 border-ink bg-gold px-3 py-1 text-[0.6875rem] font-bold tracking-[0.14em] text-ink uppercase",
        className,
      )}
    >
      On draft
    </span>
  )
}

export function DietTags({ diet }: { diet?: Diet[] }) {
  if (!diet?.length) return null
  return (
    <span className="inline-flex flex-wrap gap-1 align-middle">
      {diet.map((d) => (
        <abbr
          key={d}
          title={diets[d]}
          className="rounded-md border border-teal/40 bg-mint px-1.5 py-px text-[0.6875rem] font-bold tracking-wide text-teal-deep no-underline"
        >
          {d}
        </abbr>
      ))}
    </span>
  )
}

// "Beef · Cheddar" with a no-break space before each dot, so a wrapped line
// never starts with "·".
export const keepDots = (line: string) => line.replaceAll(" · ", "\u00a0· ")

// Board: the white, ink-framed card the whole menu is set on.
export function Board({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-[1.5rem] border-2 border-ink bg-white p-5 shadow-[6px_6px_0_0_var(--color-ink)] sm:p-8",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function BoardTitle({ children, aside }: { children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b-2 border-ink pb-4">
      <h3 className="display text-[clamp(1.875rem,3.4vw,2.5rem)] text-ink">{children}</h3>
      {aside}
    </div>
  )
}
