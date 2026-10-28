import Image from "next/image"
import { cn } from "@/lib/utils"
import { findBrand } from "@/lib/assets"
import { site } from "@/content/site"

// Header lockup in the shape of Adam's Wake header: mascot, WAKE wordmark,
// then the business line. On dark grounds, the Mobile Café badge in light
// teal, the way it is painted on the truck.
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  if (tone === "light") {
    const badge = findBrand("mobile-logo-light")
    if (badge) {
      return (
        <Image src={badge} alt={site.name} width={1160} height={1200} className={cn("h-28 w-auto", className)} />
      )
    }
  }

  const mascot = findBrand("mascot")
  const wordmark = findBrand("wake-wordmark")

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {mascot && <Image src={mascot} alt="" width={801} height={900} className="h-12 w-auto" />}
      <span className="flex flex-col items-center leading-none">
        {wordmark && tone === "dark" ? (
          <Image src={wordmark} alt="Wake" width={1468} height={421} className="h-7 w-auto" />
        ) : (
          <span
            className={cn(
              "font-heading text-[2rem] font-extrabold tracking-[-0.04em]",
              tone === "light" ? "text-white" : "text-teal",
            )}
          >
            WAKE
          </span>
        )}
        <span
          className={cn(
            "mt-1 font-heading text-[0.625rem] font-bold tracking-[0.22em]",
            tone === "light" ? "text-white/85" : "text-ink",
          )}
        >
          MOBILE CAFE
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  )
}

// Wavy, the shared mascot. Renders nothing until public/brand/mascot arrives.
export function Mascot({ className }: { className?: string }) {
  const src = findBrand("mascot")
  if (!src) return null

  return (
    <span className={cn("pointer-events-none relative block", className)} aria-hidden>
      <Image src={src} alt="" fill sizes="448px" className="object-contain" />
    </span>
  )
}
