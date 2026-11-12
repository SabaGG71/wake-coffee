import Link from "next/link"
import { Button } from "@/components/ui/button"

// A short intro, not a hero: the menu itself starts in the first screen.
export function MenuIntro() {
  return (
    <section className="shell flex flex-col gap-5 pt-8 pb-7 sm:pt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pt-12 lg:pb-9">
      <div className="max-w-3xl">
        <h1 className="display text-[clamp(2.25rem,6vw,3.5rem)] text-ink">
          Coffee and food <span className="text-teal">catering menu.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-[1.0625rem] leading-[1.65] text-slate sm:text-lg">
          Drinks from our bar and food from our scratch kitchen at Wake Coffee &amp; Kitchen. Pick your favorites and
          we’ll build your event menu with you.
        </p>
      </div>
      <Button asChild size="xl" className="self-start lg:self-auto">
        <Link href="/quote">Get my custom quote</Link>
      </Button>
    </section>
  )
}
