'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 flex items-center justify-center"
    >
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-1 mb-12">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <p className="text-light-font leading-relaxed">
                I'm a passionate Computer Science student at the University of
                Houston, constantly exploring the intersection of technology and
                creativity. My journey in tech started with curiosity and has
                evolved into a deep love for building solutions that make a
                difference.
              </p>
              <p className="text-light-font leading-relaxed">
                When I'm not coding, you'll find me working on personal
                projects, learning new technologies, or contributing to open
                source. I believe in continuous learning and pushing boundaries
                to achieve the impossible.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <motion.div
              className="relative h-64 lg:h-96 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary-1 to-primary-2 opacity-20" />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
