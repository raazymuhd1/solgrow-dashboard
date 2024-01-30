import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simple Dashboard',
  description: 'Simple dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-[#2a2e43]">
            {/* header */}
            {children}
            {/* footer */}
      </body>
    </html>
  )
}
