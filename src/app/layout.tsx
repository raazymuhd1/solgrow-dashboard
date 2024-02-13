import type { Metadata } from 'next'
import './globals.css'

import { Provider } from "@/components" 
import ReflectProvider from "@/Context"

export const metadata: Metadata = {
  title: 'Solgrow - Dashboard',
  description: 'Solgrow dashboard',
  keywords: ["solgrow", "solgrow dashboard"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
      <html lang="en">
        <Provider>
          <ReflectProvider>
            <body className="bg-[#2a2e43]">
                  {children}
              </body>
          </ReflectProvider>
        </Provider>
      </html>
  )
}
