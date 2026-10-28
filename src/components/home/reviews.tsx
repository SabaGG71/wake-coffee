import { reviews } from "@/content/home"

export function Reviews() {
  return (
    <section className="shell py-20 lg:py-24">
      <p className="eyebrow">What people say about the Wake team</p>
      <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
        {reviews.map((quote) => (
          <figure key={quote}>
            <div className="h-1 w-16 rounded-full bg-gold" />
            <blockquote className="mt-6 font-heading text-[clamp(1.375rem,2.4vw,1.875rem)] leading-[1.3] font-semibold tracking-[-0.015em] text-ink">
              “{quote}”
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  )
}
