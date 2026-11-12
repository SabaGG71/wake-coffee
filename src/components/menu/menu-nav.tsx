"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { menuNav } from "@/content/menu"

const ids = menuNav.flatMap((group) => group.items.map((item) => item.id))
// Header (76px) plus this bar (about 68px), with a little room.
const LINE = 180

// Sticky section bar. Lights up the section you're reading and, on phones,
// keeps that chip in view. Plain anchors, so it works without JavaScript.
export function MenuNav() {
  const [active, setActive] = useState(ids[0])
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= LINE) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    frame = requestAnimationFrame(update)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const box = bar.current
    const chip = box?.querySelector<HTMLElement>(`[data-id="${active}"]`)
    if (!box || !chip || box.scrollWidth <= box.clientWidth) return
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    box.scrollTo({
      left: chip.offsetLeft - box.clientWidth / 2 + chip.offsetWidth / 2,
      behavior: still ? "auto" : "smooth",
    })
  }, [active])

  return (
    <nav aria-label="Menu sections" className="sticky top-[4.75rem] z-30 border-y border-ink/10 bg-paper/95 backdrop-blur-md">
      <div
        ref={bar}
        className="shell relative flex items-center gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {menuNav.map((group, g) => (
          <Fragment key={group.label}>
            {g > 0 && <span aria-hidden className="mx-2 h-7 w-px shrink-0 bg-ink/15" />}
            <span className="shrink-0 pr-1 text-[0.6875rem] font-semibold tracking-[0.16em] text-slate/70 uppercase">
              {group.label}
            </span>
            {group.items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-id={item.id}
                aria-current={active === item.id ? "location" : undefined}
                className={cn(
                  "inline-flex h-11 shrink-0 items-center rounded-full border-2 px-4 text-[0.9375rem] font-semibold transition-colors",
                  active === item.id
                    ? "border-ink bg-teal text-white"
                    : "border-teal/35 bg-white text-teal-deep hover:border-teal hover:bg-mint",
                )}
              >
                {item.label}
              </a>
            ))}
          </Fragment>
        ))}
      </div>
    </nav>
  )
}
