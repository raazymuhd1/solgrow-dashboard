"use client"
import React from 'react'
import { LoadingSkeleton } from "@/components"
import { useReflectContext } from '@/Context'

const Loading = () => {
     const { loading } = useReflectContext()

  return (
    <div className="w-full h-screen fixed top-0 bg-[#b4adad]">
       { loading && <LoadingSkeleton /> }
    </div>
  )
}

export default Loading