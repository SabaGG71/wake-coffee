import type { Metadata } from "next"
import { Caveat, Poppins, Work_Sans } from "next/font/google"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { site } from "@/content/site"
import "./globals.css"

// Poppins and Work Sans are the pair Adam used in the Wake design. Caveat
// stands in for the brand's Beloved Script, used once.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
})

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
})

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
})

const title = "Coffee Catering in Monmouth & Ocean County, NJ | Wake Mobile Café"
const description =
  "Mobile espresso bar and coffee truck catering for weddings, offices, and events across Monmouth & Ocean County, NJ. Scratch-made food from Wake Coffee & Kitchen too."

export const metadata: Metadata = {
  // TODO: absolute URLs (canonical, OG image) resolve once site.url is set.
  ...(site.url && { metadataBase: new URL(site.url) }),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, locale: "en_US", title, description },
  twitter: { card: "summary_large_image", title, description },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${workSans.variable} ${caveat.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
