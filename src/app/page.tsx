import { JsonLd } from "@/components/json-ld"
import { Hero } from "@/components/home/hero"
import { Ticker } from "@/components/home/ticker"
import { Setups } from "@/components/home/setups"
import { Menu } from "@/components/home/menu"
import { Events } from "@/components/home/events"
import { Gallery } from "@/components/home/gallery"
import { How } from "@/components/home/how"
import { Area } from "@/components/home/area"
import { Reviews } from "@/components/home/reviews"
import { Faq } from "@/components/home/faq"
import { Quote } from "@/components/home/quote"

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Ticker />
      <Setups />
      <Menu />
      <Events />
      <Gallery />
      <How />
      <Area />
      <Reviews />
      <Faq />
      <Quote />
    </>
  )
}
