import { Logo } from "@/components/logo"
import { family, nav, site } from "@/content/site"

export function Footer() {
  return (
    <footer className="bg-pine text-white">
      <div className="shell py-16 lg:py-20">
        {/* The family block from Adam's Wake design; the header pill scrolls here. */}
        <div id="family" className="grid scroll-mt-28 gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-seafoam!">The family</p>
            <h2 className="display mt-4 text-[clamp(2.25rem,4.4vw,3.5rem)]">
              One team, one standard, three ways to get it.
            </h2>
          </div>
          <ul className="border-t border-white/15">
            {family.map((brand) => (
              <li key={brand.name} className="border-b border-white/15 py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-heading text-xl font-bold">{brand.name}</h3>
                  {brand.current && (
                    <span className="text-xs font-semibold tracking-[0.14em] text-seafoam uppercase">You are here</span>
                  )}
                </div>
                <p className="mt-1 text-white/65">{brand.line}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm leading-relaxed text-white/70">
              Full-service specialty coffee for offices, weddings, and events, from the team behind Wake Coffee
              &amp; Kitchen.
            </p>
          </div>
          <div>
            <p className="eyebrow text-seafoam!">Explore</p>
            <ul className="mt-4 space-y-3">
              {[...nav, { label: "Get a quote", href: "#quote" }].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/85 hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-seafoam!">Contact</p>
            <ul className="mt-4 space-y-3 text-white/85">
              <li>
                <a href={site.phone.href} className="hover:text-white">
                  {site.phone.label}
                </a>
              </li>
              <li>Instagram {site.instagram.label}</li>
              <li>{site.base}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-white/55 sm:flex-row sm:justify-between">
          <p>© 2026 Wake Mobile Café · A Wake Coffee &amp; Kitchen brand</p>
          <p>
            {site.base} · Serving {site.region}
          </p>
        </div>
      </div>
    </footer>
  )
}
