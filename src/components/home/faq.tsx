import { PlusIcon } from "lucide-react"
import { faq } from "@/content/faq"
import { site } from "@/content/site"

// Native <details> so every answer stays in the HTML for search engines.
export function Faq() {
  return (
    <section id="faq" className="shell py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-4 text-[clamp(2.25rem,4.6vw,3.75rem)]">Coffee catering questions, answered.</h2>
          <p className="mt-5 max-w-sm text-[1.0625rem] leading-[1.7] text-slate">
            Something else on your mind? Call{" "}
            <a href={site.phone.href} className="font-semibold text-teal-deep link-underline">
              {site.phone.label}
            </a>
            .
          </p>
        </div>

        <div className="border-t-2 border-ink">
          {faq.map((item, i) => (
            <details key={item.q} open={i === 0} className="group border-b border-ink/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-heading text-lg leading-snug font-bold text-ink sm:text-xl">{item.q}</h3>
                <PlusIcon
                  className="size-5 shrink-0 text-teal-deep transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="max-w-2xl pr-10 pb-7 text-[1.0625rem] leading-[1.75] text-slate">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
