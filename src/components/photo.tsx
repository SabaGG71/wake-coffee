import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { findPhoto } from "@/lib/assets"

type PhotoProps = {
  // File name in public/photos, without the extension.
  name: string
  alt: string
  // What the photo should show, printed on the placeholder until it arrives.
  label: string
  sizes: string
  preload?: boolean
  tone?: "sand" | "tile"
  className?: string
}

export function Photo({ name, alt, label, sizes, preload, tone = "sand", className }: PhotoProps) {
  const src = findPhoto(name)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" />
      ) : (
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center text-slate/80",
            tone === "sand" ? "bg-sand" : "bg-tile",
          )}
        >
          <ImageIcon className="size-8 stroke-[1.5]" aria-hidden />
          <span className="text-[15px] font-medium">{label}</span>
          {process.env.NODE_ENV === "development" && (
            <code className="text-xs opacity-70">public/photos/{name}.jpg</code>
          )}
        </div>
      )}
    </div>
  )
}
