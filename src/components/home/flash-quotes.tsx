"use client"

import { useEffect, useRef } from "react"

const FLASHQUOTES = "https://app.flashquotes.com"

// Mounts the client's existing FlashQuotes form (the one on wakeck.com/quote).
// The official embed script reads its own <script form-id> tag and inserts an
// iframe beside it, so the tag has to be created inside this container.
//
// On a "localhost" hostname that script points the iframe at the current
// origin (FlashQuotes' own dev setup), which loads our 404 page. There we
// render the form's iframe directly instead. Everywhere else the official
// script runs, so lead tracking and auto-height stay FlashQuotes' own.
export function FlashQuotes({ formId }: { formId: string }) {
  const host = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = host.current
    if (!el || el.childElementCount > 0) return

    if (window.location.hostname === "localhost") {
      const iframe = document.createElement("iframe")
      iframe.src = `${FLASHQUOTES}/forms/public/quote/${formId}`
      iframe.title = "Get a quote"
      Object.assign(iframe.style, {
        border: "none",
        display: "block",
        width: "100%",
        minWidth: "316px",
        maxWidth: "400px",
        height: "520px",
        margin: "0 auto",
      })
      el.appendChild(iframe)
      return
    }

    const script = document.createElement("script")
    script.src = `${FLASHQUOTES}/embed.js`
    script.async = true
    script.setAttribute("form-id", formId)
    el.appendChild(script)
  }, [formId])

  // The form renders about 450px tall and caps itself at 400px wide.
  return <div ref={host} className="min-h-[32rem] w-full" />
}
