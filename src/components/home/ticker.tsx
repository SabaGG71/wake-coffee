import { cn } from "@/lib/utils"
import { ticker } from "@/content/home"

function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4 shrink-0", className)} aria-hidden>
      <path
        d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

// The running strip from Wavy's design. Two copies so the loop is seamless.
export function Ticker() {
  return (
    <div className="overflow-hidden bg-ink py-4 text-white">
      <div className="flex w-max animate-[ticker_48s_linear_infinite] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0 items-center">
            {ticker.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-8 pr-8 text-[0.8125rem] font-semibold tracking-[0.16em] whitespace-nowrap uppercase"
              >
                {item}
                <Spark className={i % 2 ? "text-seafoam" : "text-gold"} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
