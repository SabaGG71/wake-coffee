import { cn } from "@/lib/utils"
import { site } from "@/content/site"
import { steps } from "@/content/home"

export function How() {
  return (
    <section id="how" className="shell py-20 lg:py-28">
      <p className="eyebrow">How booking works</p>
      <h2 className="display mt-4 max-w-3xl text-[clamp(2.25rem,4.6vw,3.75rem)]">
        Three steps. We take it from there.
      </h2>

      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
        {steps.map((step, i) => (
          <li key={step.title} className={cn("md:px-8", i === 0 ? "md:pl-0" : "md:border-l md:border-ink/15")}>
            {/* Gold numerals with an ink outline, after Wavy's "SMASH." */}
            <span
              aria-hidden
              className="block font-heading text-6xl leading-none font-extrabold tracking-[-0.04em] text-gold [paint-order:stroke_fill] [-webkit-text-stroke:3px_var(--color-ink)]"
            >
              0{i + 1}
            </span>
            <h3 className="mt-6 font-heading text-[1.375rem] font-bold tracking-[-0.015em] text-ink">{step.title}</h3>
            <p className="mt-2 text-[1.0625rem] leading-[1.7] text-slate">{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-14 border-t-2 border-ink pt-6 text-[1.0625rem] text-slate">
        Rather talk it through first? Call{" "}
        <a href={site.phone.href} className="font-semibold text-teal-deep link-underline">
          {site.phone.label}
        </a>
        .
      </p>
    </section>
  )
}
