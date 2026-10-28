// Service area. wakeck.com says "Proudly serving Monmouth & Ocean County,
// including Belmar, Spring Lake, Rumson, Red Bank, Toms River" (named: true).
// The other towns sit inside those two counties; Adam to confirm the list.
// Coordinates from OpenStreetMap Nominatim, 2026-10-28.

export const base = { name: "Wall Township", lat: 40.1743, lng: -74.0902 }

export const towns = [
  { name: "Belmar", county: "Monmouth", lat: 40.1784, lng: -74.0218, named: true },
  { name: "Spring Lake", county: "Monmouth", lat: 40.1535, lng: -74.0294, named: true },
  { name: "Rumson", county: "Monmouth", lat: 40.3721, lng: -73.999, named: true },
  { name: "Red Bank", county: "Monmouth", lat: 40.3471, lng: -74.0643, named: true },
  { name: "Toms River", county: "Ocean", lat: 39.9528, lng: -74.1967, named: true },
  { name: "Asbury Park", county: "Monmouth", lat: 40.2204, lng: -74.0121, named: false },
  { name: "Sea Girt", county: "Monmouth", lat: 40.1321, lng: -74.0346, named: false },
  { name: "Manasquan", county: "Monmouth", lat: 40.1262, lng: -74.0493, named: false },
  { name: "Long Branch", county: "Monmouth", lat: 40.3043, lng: -73.9924, named: false },
  { name: "Freehold", county: "Monmouth", lat: 40.2601, lng: -74.2738, named: false },
  { name: "Point Pleasant", county: "Ocean", lat: 40.0832, lng: -74.0682, named: false },
  { name: "Brick", county: "Ocean", lat: 40.0707, lng: -74.1281, named: false },
  { name: "Lakewood", county: "Ocean", lat: 40.0941, lng: -74.215, named: false },
]

export const counties = ["Monmouth", "Ocean"].map((county) => ({
  name: `${county} County`,
  towns: [...(county === "Monmouth" ? [base.name] : []), ...towns.filter((t) => t.county === county).map((t) => t.name)],
}))
