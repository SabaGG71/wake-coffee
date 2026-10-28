import { FlashQuotes } from "@/components/home/flash-quotes"
import { site } from "@/content/site"

export function Quote() {
  const contacts = [
    { label: "Call", value: site.phone.label, href: site.phone.href },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Based in", value: site.base },
  ].filter((c) => c.value)

  return (
    <section id="quote" className="shell pt-4 pb-24 lg:pb-32">
      <div className="grid overflow-hidden rounded-[1.75rem] border-2 border-ink bg-white hard-shadow lg:grid-cols-[1.25fr_1fr]">
        <div className="border-b-2 border-ink bg-mint p-8 sm:p-12 lg:border-r-2 lg:border-b-0">
          <p className="eyebrow">Get a quote</p>
          <h2 className="display mt-4 text-[clamp(2.25rem,4vw,3.25rem)]">
            Bring the full Wake experience to your next event.
          </h2>
          <p className="mt-5 text-lg leading-[1.7] text-slate">
            Check your date and tell us about the event. We’ll come back with the right setup and a custom quote.
          </p>

          <dl className="mt-10 space-y-5 border-t border-ink/15 pt-8">
            {contacts.map((c) => (
              <div key={c.label}>
                <dt className="text-xs font-semibold tracking-[0.14em] text-slate/75 uppercase">{c.label}</dt>
                <dd className="mt-1 font-heading text-lg font-bold text-ink">
                  {c.href ? (
                    <a href={c.href} className="transition-colors hover:text-teal-deep">
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex items-center p-3 sm:p-8">
          <FlashQuotes formId={site.flashQuotesFormId} />
        </div>
      </div>
    </section>
  )
}
