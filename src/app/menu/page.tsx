import type { Metadata } from "next"
import { Quote } from "@/components/home/quote"
import { MenuIntro } from "@/components/menu/menu-intro"
import { MenuNav } from "@/components/menu/menu-nav"
import { ClassicsAndTea, Riptides, Seasonal, Signatures } from "@/components/menu/drinks"
import { Kitchen, Mission } from "@/components/menu/kitchen"
import { MenuJsonLd } from "@/components/menu/menu-json-ld"
import { site } from "@/content/site"

const title = "Coffee & Food Catering Menu | Wake Mobile Café"
const description =
  "The Wake Mobile Café catering menu: draft lattes, signature lattes, tea, Riptides sparkling energy drinks, and scratch-made salads, soup, and sandwiches from Wake Coffee & Kitchen."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/menu" },
  openGraph: { type: "website", siteName: site.name, locale: "en_US", title, description },
  twitter: { card: "summary_large_image", title, description },
}

export default function MenuPage() {
  return (
    <>
      <MenuJsonLd />
      <MenuIntro />
      {/* The section bar only sticks while the menu is on screen, never over the quote form. */}
      <div>
        <MenuNav />
        <Signatures />
        <ClassicsAndTea />
        <Riptides />
        <Seasonal />
        <Mission />
        <Kitchen />
      </div>
      <Quote />
    </>
  )
}
