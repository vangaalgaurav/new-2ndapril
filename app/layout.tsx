import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voice Agent Chart Busters',
  description: 'Discover the hottest voice agents and watch them climb the charts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 