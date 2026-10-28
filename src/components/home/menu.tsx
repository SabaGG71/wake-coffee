import { Photo } from "@/components/photo"
import { included } from "@/content/home"

// "Coffee, plus a real menu": the line that sets them apart on wakeck.com.
export function Menu() {
  return (
    <section id="menu" className="bg-mint py-20 lg:py-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Photo
          name="wake-iced-latte"
          label="Coffee and food spread at an event"
          alt="An iced latte in a Wake cup printed with the wave mascot"
          sizes="(min-width: 1024px) 34rem, 92vw"
          tone="tile"
          className="mx-auto aspect-[4/5] w-full max-w-[34rem] rounded-[1.75rem] border-2 border-ink hard-shadow lg:mx-0"
        />

        <div>
          <p className="eyebrow">Backed by Wake Coffee &amp; Kitchen</p>
          <h2 className="display mt-4 text-[clamp(2.25rem,4.6vw,3.75rem)]">Coffee, plus a real menu.</h2>
          <div className="mt-6 max-w-[36rem] space-y-4 text-[1.0625rem] leading-[1.75] text-slate sm:text-lg">
            <p>
              Most mobile coffee companies are coffee-only. We’re backed by our sister restaurant, so your event
              can have the same scratch-made breakfast and lunch next to our espresso program.
            </p>
            <p>No juggling a separate caterer and a separate coffee vendor. One team handles both.</p>
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {included.map((item) => (
              <li key={item.title}>
                <div className="h-1 w-12 rounded-full bg-gold" />
                <h3 className="mt-4 font-heading text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-slate">{item.line}</p>
              </li>
            ))}
          </ul>

          <a href="#quote" className="mt-10 inline-block text-[1.0625rem] font-semibold text-teal-deep link-underline">
            → Ask for the event menu
          </a>
        </div>
      </div>
    </section>
  )
}
