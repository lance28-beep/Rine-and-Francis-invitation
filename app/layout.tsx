import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Rine & Francis - Wedding Invitation",
  description:
    "You're invited to the wedding of Rine & Fran! Join us on December 27, 2025 . A celebration of love, faith, and forever. RSVP, read our love story, view our gallery, and leave a message for the couple.",
  keywords:
    "Rine & Francis wedding, Filipino wedding, RSVP, wedding gallery, wedding message wall, wedding invitation, 2025 weddings, love story, guestbook, wedding registry, wedding details, wedding venues Cebu, #RineAndFrancisWedding",
  authors: [
    { name: "Rine Anfone" },
    { name: "Francis Ybañez" },
  ],
  creator: "Rine Anfone & Francis Ybañez",
  publisher: "Rine Anfone & Francis Ybañez",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://Rine-and-Francis-invitation.vercel.app/"),
  alternates: {
    canonical: "https://Rine-and-Francis-invitation.vercel.app/",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Rine & Francis Wedding | December 27, 2025",
    description:
      "Celebrate the union of Rine & Fran on December 27, 2025. A celebration of love, faith, and forever. Discover our love story, RSVP, view the gallery, and leave your wishes!",
    url: "https://Rine-and-Francis-invitation.vercel.app/",
    siteName: "Rine & Francis Wedding",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://Rine-and-Francis-invitation.vercel.app/couple.png",
        width: 1200,
        height: 630,
        alt: "Rine & Francis Wedding Invitation - December 27, 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rine & Fran Wedding Invitation",
    description:
      "You're invited to the wedding of Rine & Fran! December 27, 2025. A celebration of love, faith, and forever. RSVP, view our gallery, and leave a message! ",
    images: ["https://Rine-and-Francis-invitation.vercel.app/couple.png"],
    creator: "@rineandfrancis",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Rine & Fran Wedding",
      startDate: "2026-01-10T14:00:00+08:00",
      endDate: "2026-01-10T22:00:00+08:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: [
        {
          "@type": "Place",
          name: "UCCP Mabinay Central Church",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mabinay, Negros Oriental",
            addressCountry: "PH",
          },
        },
      ],
      image: ["https://Rine-and-Francis-invitation.vercel.app/couple.png"],
      description:
        "You're invited to the wedding of Rine & Fran! Join us on December 27, 2025. A celebration of love, faith, and forever. RSVP, read our love story, view our gallery, and leave a message for the couple.",
      organizer: {
        "@type": "Person",
        name: "Rine & Fran",
      },
      offers: {
        "@type": "Offer",
        url: "https://Rine-and-Francis-invitation.vercel.app/",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "PHP",
      },
      eventHashtag: "#RineAndFrancisWedding",
    }),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#525E2C" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${greatVibes.variable} font-inter antialiased text-foreground`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
