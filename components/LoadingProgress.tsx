"use client"

import { useEffect, useState } from 'react'

interface LoadingProgressProps {
  isLoading: boolean
  progress: number
}

export default function LoadingProgress({ isLoading, progress }: LoadingProgressProps) {
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setDisplayProgress(progress)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setDisplayProgress(100)
      const timer = setTimeout(() => {
        setDisplayProgress(0)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isLoading, progress])

  if (!isLoading && displayProgress === 0) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="h-1 bg-primary transition-all duration-300 ease-out"
        style={{ 
          width: `${displayProgress}%`,
          opacity: isLoading ? 1 : 0
        }}
      />
    </div>
  )
}