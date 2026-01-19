'use client'

import { useEffect, ReactNode, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SmoothScrollProviderProps {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Optimized RAF loop - only runs when needed
    let rafId: number
    let isRunning = false

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    // Start RAF loop
    rafId = requestAnimationFrame(raf)
    isRunning = true

    // Pause RAF when page is hidden (performance optimization)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (isRunning) {
          cancelAnimationFrame(rafId)
          isRunning = false
        }
      } else {
        if (!isRunning) {
          rafId = requestAnimationFrame(raf)
          isRunning = true
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Make lenis available globally for scrollTo
    ;(window as any).lenis = lenis

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (rafId) cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
      delete (window as any).lenis
    }
  }, [])

  return <>{children}</>
}
