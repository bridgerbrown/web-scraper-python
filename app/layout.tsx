import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Scraper',
  description: 'A Web Scraper built with Python, JS, TS, React, and NextJS! By Bridger Brown',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  )
}
