import { JsonLd } from "@/components/json-ld"
import { Hero } from "@/components/home/hero"
import { Ticker } from "@/components/home/ticker"
import { Family } from "@/components/home/family"
import { Packages } from "@/components/home/packages"
import { Menu } from "@/components/home/menu"
import { Events } from "@/components/home/events"
import { Gallery } from "@/components/home/gallery"
import { How } from "@/components/home/how"
import { Area } from "@/components/home/area"
import { Reviews } from "@/components/home/reviews"
import { Quote } from "@/components/home/quote"

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Ticker />
      <Family />
      <Packages />
      <Menu />
      <Events />
      <Gallery />
      <How />
      <Area />
      <Reviews />
      <Quote />
    </>
  )
}
