import { Photo } from "@/components/photo"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"
import { gallery } from "@/content/home"

const spans: Record<string, string> = {
  big: "col-span-2 row-span-2",
  tall: "row-span-2",
  wide: "col-span-2",
  "": "",
}

export function Gallery() {
  return (
    <section className="shell py-20 lg:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">On location</p>
          <h2 className="display mt-4 text-[clamp(2.25rem,4.6vw,3.75rem)]">From recent events.</h2>
        </div>
        <p className="shrink-0 text-[1.0625rem] text-slate">
          More on Instagram, <span className="font-semibold text-ink">{site.instagram.label}</span>
        </p>
      </div>

      <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[16rem]">
        {gallery.map((item) => (
          <Photo
            key={item.photo}
            name={item.photo}
            label={item.alt}
            alt={item.alt}
            sizes={item.span === "big" || item.span === "wide" ? "(min-width: 1024px) 40rem, 92vw" : "(min-width: 1024px) 20rem, 46vw"}
            className={cn("rounded-2xl border-2 border-ink", spans[item.span])}
          />
        ))}
      </div>
    </section>
  )
}
