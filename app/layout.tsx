import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RK Wealth | Best Wealth Management in India",
  description:
    "RK Wealth offers trusted financial planning, mutual funds, retirement planning & investment advisory services across India. Start your wealth journey today!",
  keywords:
    "RK Wealth, wealth management India, financial planning, mutual funds India, insurance advisory, investment advisory, retirement planning, tax advisory, SIP investment, best financial advisor India",
  openGraph: {
    title: "RK Wealth | India's Trusted Wealth Management Partner",
    description:
      "Transform your financial future with RK Wealth's expert financial planning, mutual fund advisory, retirement and insurance services.",
    url: "https://rkwealth.co.in",
    siteName: "RK Wealth",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "RK Wealth | India's Trusted Wealth Management Partner",
    description:
      "Explore expert-backed financial planning, SIPs, insurance, and retirement solutions with RK Wealth. Start your journey today!",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://rkwealth.co.in"),
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="RK Wealth Pvt. Ltd." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://rkwealth.co.in" />
      </head>
      <body className={inter.className}>
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
