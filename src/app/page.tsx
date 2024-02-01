import { Suspense } from "react"
import { Dashboard, LoadingSkeleton } from "@/components"

export default function Home() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <main className="h-screen w-full">
        <Dashboard />
      </main>
    </Suspense>
  )
}
