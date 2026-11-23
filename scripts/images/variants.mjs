// Every photo and brand file the site shows through next/image, in a few
// widths of its own, so pages never need Vercel's image optimizer (the Hobby
// account's quota ran out on 2026-11-20 and every /_next/image request came
// back 402). Writes <name>.w<width>.webp beside each file, never wider than the
// file itself; src/lib/image-loader.ts picks the right one.
// Run after adding or changing a photo: node scripts/images/variants.mjs
import { readdirSync } from "node:fs"
import { join } from "node:path"
import sharp from "sharp"

export const WIDTHS = [384, 640, 828, 1200, 1600, 2048]
const ROOT = "public"
const DIRS = ["photos", "brand"]
const SKIP = /\.w\d+\.webp$/i

let made = 0
for (const dir of DIRS) {
  for (const name of readdirSync(join(ROOT, dir))) {
    if (!/\.(webp|png|jpe?g)$/i.test(name) || SKIP.test(name)) continue
    const file = join(ROOT, dir, name)
    const { width } = await sharp(file).metadata()
    for (const w of WIDTHS) {
      const out = file.replace(/\.(webp|png|jpe?g)$/i, `.w${w}.webp`)
      await sharp(file)
        .resize({ width: Math.min(w, width), withoutEnlargement: true })
        .webp({ quality: 80, effort: 5, alphaQuality: 90 })
        .toFile(out)
      made++
    }
  }
}
console.log(`${made} files`)
