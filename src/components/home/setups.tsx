import { Photo } from "@/components/photo"
import { setups } from "@/content/home"

export function Setups() {
  return (
    <section id="setups" className="shell py-20 lg:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">The fleet</p>
          <h2 className="display mt-4 text-[clamp(2.25rem,4.6vw,3.75rem)]">
            A coffee truck and two coffee carts, sized to fit any event.
          </h2>
        </div>
        <a href="#quote" className="shrink-0 text-[1.0625rem] font-semibold text-teal-deep link-underline">
          → Not sure which? We’ll help you pick
        </a>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-14 lg:gap-12">
        {setups.map((setup, i) => (
          <article
            key={setup.photo}
            className="flex flex-col overflow-hidden rounded-[1.75rem] border-2 border-ink bg-white hard-shadow"
          >
            <Photo
              name={setup.photo}
              label={setup.photoLabel}
              alt={setup.photoAlt}
              sizes="(min-width: 768px) 38rem, 92vw"
              tone={i % 2 ? "tile" : "sand"}
              className="aspect-[4/3] border-b-2 border-ink"
            />
            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <p className="eyebrow">{setup.kicker}</p>
              <h3 className="mt-3 font-heading text-[1.75rem] leading-[1.15] font-extrabold tracking-[-0.025em] text-balance">
                {setup.title}
              </h3>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-slate">{setup.body}</p>
              <p className="mt-7 text-xs font-semibold tracking-[0.14em] text-slate/75 uppercase">Great for</p>
              <ul className="mt-2 divide-y divide-ink/10 border-y border-ink/10">
                {setup.goodFor.map((item) => (
                  <li key={item} className="py-3 text-[0.9375rem] font-medium text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
