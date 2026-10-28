import { Mascot } from "@/components/logo"
import { events } from "@/content/home"

export function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <Mascot className="absolute -right-20 -bottom-16 size-[28rem] opacity-[0.07]" />

      <div className="relative shell grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          {/* The brand's script accent, used once, as in Adam's "One standard". */}
          <p className="font-script text-3xl font-semibold text-seafoam">Wherever you are</p>
          <h2 className="display mt-3 text-[clamp(2.25rem,4.6vw,3.75rem)]">
            Coffee catering for offices, weddings, and everything in between.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-[1.7] text-white/70">
            We bring the bar, the baristas, and the food if you want it. You tell us where.
          </p>
          <a href="#quote" className="mt-8 inline-block text-[1.0625rem] font-semibold text-seafoam link-underline">
            → Check your date
          </a>
        </div>

        <ul className="border-t border-white/15">
          {events.map((event) => (
            <li key={event.name} className="border-b border-white/15 py-6">
              <h3 className="font-heading text-xl font-bold tracking-[-0.01em] sm:text-2xl">{event.name}</h3>
              <p className="mt-1.5 text-white/65">{event.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
