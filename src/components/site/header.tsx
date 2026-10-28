import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/site/mobile-nav"
import { family, nav } from "@/content/site"

export function Header() {
  // Mirrors the "Wake Mobile Café ↗" pill on Adam's Wake header, but scrolls
  // to the family block in the footer: the site links nowhere else.
  const wake = { label: family[0].name, href: "#family" }

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="shell flex h-[4.75rem] items-center gap-3 lg:gap-8">
        <Link href="/" aria-label="Wake Mobile Café home" className="mr-auto">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-semibold text-ink transition-colors hover:text-teal-deep"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* The two buttons sit together, set well apart from the nav links. */}
        <div className="flex items-center gap-2.5 lg:ml-2 xl:ml-4">
          <a
            href={wake.href}
            className="hidden h-12 items-center rounded-xl border border-teal px-4 text-[15px] font-semibold text-teal-deep transition-colors hover:bg-mint xl:inline-flex"
          >
            {wake.label}
          </a>
          <Button asChild size="xl" className="h-10 px-4 sm:h-12 sm:px-6">
            <a href="#quote">Get a quote</a>
          </Button>
          <MobileNav items={nav} wake={wake} />
        </div>
      </div>
    </header>
  )
}
