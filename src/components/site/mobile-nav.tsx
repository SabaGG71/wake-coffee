"use client"

import Link from "next/link"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

type Item = { label: string; href: string }

export function MobileNav({ items, wake }: { items: Item[]; wake: Item }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-lg" className="lg:hidden" aria-label="Open menu">
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-paper px-6 pt-16">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav aria-label="Mobile" className="flex flex-col">
          {items.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="border-b border-ink/10 py-4 font-heading text-2xl font-bold tracking-tight text-ink"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <SheetClose asChild>
          <Button asChild size="xl" className="mt-4">
            <Link href="/quote">Get a quote</Link>
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Link href={wake.href} className="mt-2 self-start text-[15px] font-semibold text-teal-deep link-underline">
            {wake.label}
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}
