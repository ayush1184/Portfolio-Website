'use client'

import { motion } from 'framer-motion'
import { ReactNode, memo } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

const ScrollReveal = memo(function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        initial: { opacity: 0, y: 30 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94], // Optimized easing
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

export default ScrollReveal
