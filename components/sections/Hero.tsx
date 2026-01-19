'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  LiaDiscord,
  LiaFacebook,
  LiaGithub,
  LiaInstagram,
  LiaLinkedin,
  LiaTwitter,
} from 'react-icons/lia'
import { IoMailOutline, IoDocumentAttachOutline } from 'react-icons/io5'
import { SiBento } from 'react-icons/si'
import { contacts } from '@/lib/constants'
import Image from 'next/image'

const iconMap: Record<string, any> = {
  LiaInstagram,
  LiaLinkedin,
  LiaTwitter,
  LiaFacebook,
  IoMailOutline,
  LiaGithub,
  SiBento,
  LiaDiscord,
  IoDocumentAttachOutline,
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2">
        <Image
          src="/hero-devices.svg"
          alt="Hero devices"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-6 lg:gap-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            I'm{' '}
            <span className="gradient-text">
              <TypeAnimation
                sequence={[
                  'a Student,',
                  1000,
                  'a Developer,',
                  1000,
                  'a Tech-Enthusiast,',
                  1000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </span>
          </h1>

          <motion.p
            className="text-light-font mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            👋👋 Hey there,
            <br />
            <span className="ml-12">
              I'm Ayush, I'm a sophomore student majoring in Computer Science{' '}
              <a
                href="https://www.eecs.mit.edu/research/computer-science/#:~:text=Computer%20science%20deals%20with%20the,of%20user%20requests%20per%20day."
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-1 hover:underline"
              >
                (CS)
              </a>{' '}
              at the University of Houston{' '}
              <a
                href="https://www.uh.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-1 hover:underline"
              >
                (UH)
              </a>
              . As a CS student, I strive to bridge the gap between creativity
              and technology by constantly seeking new challenges to turn lines
              of code into elegant solutions.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {contacts.map((contact) => {
              const IconComponent = iconMap[contact.icon]
              if (!IconComponent) return null

              return (
                <a
                  key={contact.name}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#71717a] text-2xl hover:text-primary-1 transition-colors"
                  aria-label={contact.name}
                >
                  <IconComponent />
                </a>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Recent Achievements and Goals will go here */}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-primary-1 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary-1 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
