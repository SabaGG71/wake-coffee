import "server-only"
import fs from "node:fs"
import path from "node:path"

const PHOTO_EXTS = ["jpg", "jpeg", "png", "webp", "avif"]
const LOGO_EXTS = ["svg", "png", "webp"]

// Photos and logos are dropped into /public by hand, under fixed names, in
// whatever format the client sends. Returns the public URL, or null while the
// file is still missing so the page can show a labelled placeholder.
function find(base: string, exts: string[]) {
  for (const ext of exts) {
    const rel = `${base}.${ext}`
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return `/${rel}`
  }
  return null
}

export const findPhoto = (name: string) => find(`photos/${name}`, PHOTO_EXTS)
export const findBrand = (name: string) => find(`brand/${name}`, LOGO_EXTS)
