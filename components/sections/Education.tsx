'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-1 mb-12">
            Education
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-2">
                University of Houston
              </h3>
              <p className="text-light-font mb-2">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-sm text-light-font">2023 - Present</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
