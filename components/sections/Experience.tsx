'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Company Name',
      period: 'Summer 2024',
      description: 'Worked on building scalable web applications using React and Node.js.',
    },
    // Add more experiences as needed
  ]

  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-1 mb-12">
            Experience
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="absolute left-6 w-4 h-4 bg-primary-1 rounded-full -translate-x-1/2" />
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-primary-1 mb-2">{exp.company}</p>
                  <p className="text-sm text-light-font mb-4">{exp.period}</p>
                  <p className="text-light-font">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
