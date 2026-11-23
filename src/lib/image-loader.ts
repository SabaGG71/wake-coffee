// next/image without Vercel's optimizer: each photo is already saved in a
// few widths beside itself (scripts/images/variants.mjs), and this picks the
// smallest one at least as wide as the browser asks for.
const WIDTHS = [384, 640, 828, 1200, 1600, 2048]

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("/") || src.startsWith("//") || !/\.(webp|png|jpe?g)$/i.test(src)) return src
  const w = WIDTHS.find((x) => x >= width) ?? WIDTHS[WIDTHS.length - 1]
  return src.replace(/\.(webp|png|jpe?g)$/i, `.w${w}.webp`)
}
