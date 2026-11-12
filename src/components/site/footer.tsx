import Link from "next/link"
import { Logo } from "@/components/logo"
import { nav, site } from "@/content/site"

export function Footer() {
  return (
    <footer className="bg-pine text-white">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
              {[...nav, { label: "Get a quote", href: "/quote" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/85 hover:text-white">
                    {item.label}
                  </Link>
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
