'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Image from 'next/image'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Sass',
  'Java',
  'Tailwind CSS',
  'NPM',
  'REACT',
  'Node JS',
  'Git',
  'Python',
  'Next',
  'VsCode',
  'Vite',
]

const imageURLTemplate = `https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/`

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-1 mb-12">
            Skills & Technology
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
              whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
            >
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={`${imageURLTemplate}${skill.split(' ').join('').toLowerCase()}.svg`}
                  alt={`${skill} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-center">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
