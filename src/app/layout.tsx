import type { Metadata } from 'next'
import './globals.css'

import { Provider } from "@/components" 

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
        <Provider>
          <body className="bg-[#2a2e43]">
                    {/* header */}
                {children}
                    {/* footer */}
            </body>
        </Provider>
      </html>
  )
}
