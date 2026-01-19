'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { navbarTabs } from '@/lib/constants'

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Use Lenis scroll event instead of native scroll for better performance
    const lenis = (window as any).lenis
    if (!lenis) return

    const handleScroll = ({ scroll, limit }: { scroll: number; limit: number }) => {
      // Throttled scroll check
      setIsScrolled(scroll > 50)
    }

    lenis.on('scroll', handleScroll)

    return () => {
      lenis.off('scroll', handleScroll)
    }
  }, [])

  const handleNavLinkClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText.toLowerCase().split(' ')
    const id = text.length >= 2 ? text.slice(0).join('-') : text[0]
    const element = document.querySelector(`#${id}`)
    if (element) {
      const lenis = (window as any).lenis
      if (lenis) {
        // Use Lenis scrollTo for smooth scrolling
        lenis.scrollTo(element, { offset: -80, duration: 1.5 })
      } else {
        // Fallback to native scroll
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-4 py-2 rounded-full border border-dark-1 shadow-lg bg-white/80 backdrop-blur-sm ${
        isScrolled ? 'shadow-xl' : ''
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {navbarTabs.map((tab, i) => (
        <motion.div
          key={tab}
          className="px-4 py-2 text-sm font-light cursor-pointer relative group"
          onClick={handleNavLinkClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">{tab}</span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary-1 to-primary-2 rounded-full"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 0.5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </motion.nav>
  )
}
