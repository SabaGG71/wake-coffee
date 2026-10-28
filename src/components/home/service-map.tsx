"use client"

import "leaflet/dist/leaflet.css"
import { useEffect, useRef } from "react"
import { base, towns } from "@/content/area"

// Teardrop pin: head centred at (28, 27), tip at (28, 68).
const PIN = "M28 68C28 68 3 43 3 27a25 25 0 0 1 50 0c0 16-25 41-25 41z"

const basePinHtml = `
<svg viewBox="0 0 60 74" width="60" height="74" aria-hidden="true">
  <defs><clipPath id="wake-pin-face"><circle cx="28" cy="27" r="17" /></clipPath></defs>
  <path d="${PIN}" transform="translate(4 4)" fill="#00101b" />
  <path d="${PIN}" fill="#21857a" stroke="#00101b" stroke-width="2.5" />
  <circle cx="28" cy="27" r="18" fill="#fbf9f5" stroke="#00101b" stroke-width="2" />
  <image href="/brand/mascot.webp" x="13" y="10" width="30" height="34" clip-path="url(#wake-pin-face)" />
</svg>`

// Keyless OpenStreetMap tiles (CARTO now needs a key). The credit is required
// by the licence; it stays plain text because the site links nowhere else.
// globals.css mutes the colours so the brand pins carry the map.
const TILES = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
const ATTRIBUTION = "&copy; OpenStreetMap contributors"

export function ServiceMap() {
  const host = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = host.current
    if (!el) return
    let map: import("leaflet").Map | undefined
    let cancelled = false

    async function init() {
      const mod = await import("leaflet")
      const L = (mod as unknown as { default?: typeof mod }).default ?? mod
      if (cancelled || !el) return

      map = L.map(el, {
        scrollWheelZoom: false,
        // One-finger drags should scroll the page on phones, not pan the map.
        dragging: !L.Browser.mobile,
        zoomSnap: 0.25,
      })
      map.attributionControl.setPrefix(false)
      L.tileLayer(TILES, { maxZoom: 18, attribution: ATTRIBUTION }).addTo(map)

      L.marker([base.lat, base.lng], {
        icon: L.divIcon({
          className: "wake-pin",
          html: basePinHtml,
          iconSize: [60, 74],
          iconAnchor: [28, 68],
          tooltipAnchor: [0, -70],
        }),
        title: `${base.name}, home base`,
        zIndexOffset: 1000,
      })
        // Above the pin, so it never runs off the edge of a narrow map.
        .bindTooltip(`${base.name} · home base`, {
          permanent: true,
          direction: "top",
          className: "wake-label",
        })
        .addTo(map)

      for (const town of towns) {
        const size = town.named ? 16 : 10
        const marker = L.marker([town.lat, town.lng], {
          icon: L.divIcon({
            className: town.named ? "wake-town" : "wake-dot",
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2],
          }),
          title: town.name,
          keyboard: false,
        })
        marker.bindTooltip(town.name, {
          permanent: town.named,
          direction: "right",
          offset: [6, 0],
          className: town.named ? "wake-town-label" : "wake-label",
        })
        marker.addTo(map)
      }

      const points = [base, ...towns].map((p) => L.latLng(p.lat, p.lng))
      map.fitBounds(L.latLngBounds(points), { padding: [48, 48] })
    }

    // Load Leaflet and the tiles only when the map is about to scroll into view.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect()
          init()
        }
      },
      { rootMargin: "400px" },
    )
    io.observe(el)

    return () => {
      cancelled = true
      io.disconnect()
      map?.remove()
    }
  }, [])

  return (
    <div
      ref={host}
      role="region"
      aria-label={`Map of the Wake Mobile Café service area around ${base.name}, New Jersey`}
      className="isolate size-full"
    />
  )
}
