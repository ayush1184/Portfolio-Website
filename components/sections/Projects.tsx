'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from '@/components/animations/ScrollReveal'
import Image from 'next/image'

// Register ScrollTrigger once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    projectTitle: 'Pig Game',
    description:
      'Pig Game is a two-player game. Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.',
    codeURL: 'https://github.com/ayush1184/Pig_Game',
    demoURL: 'https://ayush1184.github.io/Pig_Game/',
  },
  {
    projectTitle: 'Bankist',
    projectSubTitle: 'Accounts Page',
    description:
      'A Virtual banking experience. As a web developer, I have created a fictional online bank that provides a realistic user experience. It showcases my proficiency in DOM manipulation and user interaction. Log in to your account, transfer funds, take a loan, and manage your account, just like in an actual bank',
    codeURL: 'https://github.com/ayush1184/',
    demoURL: '',
  },
  {
    projectTitle: 'Bankist',
    projectSubTitle: 'Home Page',
    description: 'Bankist landing page made with some advanced DOM manipulation.',
    codeURL: 'https://github.com/ayush1184/',
    demoURL: '',
  },
  {
    projectTitle: 'Mapty',
    projectSubTitle: 'Workout Tracker',
    description:
      'This is a web application which will keep track of your workout. The goal is to log the workouts for the user in its desired location and set some specifications for his workout accordingly.',
    codeURL: 'https://github.com/ayush1184/Mapty-App',
    demoURL: 'https://mapty-app-ayush1184.vercel.app/',
  },
  {
    projectTitle: 'Weatherly',
    projectSubTitle: 'Weather App',
    description:
      'The weather app also provides atmospheric pressure, weather conditions, visibility distance, relative humidity, precipitation in different unites, dew point, wind speed and direction, in addition to seven days in future and hourly weather forecast.',
    codeURL: 'https://github.com/ayush1184/Weatherly',
    demoURL: 'https://weatherly-aks1184.vercel.app/',
  },
  {
    projectTitle: 'usePopcorn',
    projectSubTitle: 'Movie App',
    description:
      'usePopcorn is a React-based movie website that allows users to search for movies by title, rate them according to their choice, and add to list their favorite movies. The website is designed to be user-friendly and visually appealing.',
    codeURL: 'https://github.com/ayush1184/UsePopcorn',
    demoURL: 'https://usepopcorn-v2-ayush1184.vercel.app/',
  },
  {
    projectTitle: 'Wordle Game',
    projectSubTitle: 'Game',
    description:
      'Wordle is a daily word game that involves figuring out a secret five-letter word. You play by guessing different five-letter words to see how close they are to the secret word.',
    codeURL: 'https://github.com/ayush1184/Wordle_Game.git',
  },
  {
    projectTitle: 'Image Outliner',
    projectSubTitle: 'Image Convertor',
    description:
      'Convert your favorite images into captivating outline sketches effortlessly with this Python-based image processing project. This project converts an image into an outline or pencil sketch using a Laplacian filter. The implementation leverages OpenCV and NumPy libraries.',
    codeURL: 'https://github.com/ayush1184/Image-Outliner.git',
  },
  {
    projectTitle: 'Suduko Solver',
    projectSubTitle: 'Puzzle-Solver',
    description:
      'Sudoku Solver is a simple and intuitive desktop application built with Python and Tkinter that allows users to solve Sudoku puzzles with ease.',
    codeURL: 'https://github.com/ayush1184/Suduko_Solver.git',
  },
  {
    projectTitle: 'Tree Visualizer',
    projectSubTitle: 'Tool',
    description:
      'Tree Visualizer is a Python GUI tool for visualizing Binary Search Trees (BST) and AVL Trees. Utilizing PyQt5 and Matplotlib, it allows users to insert, delete, and search nodes, providing real-time visual feedback.',
    codeURL: 'https://github.com/ayush1184/Tree-visualizer.git',
  },
]

export default function Projects() {
  const horizontalRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!horizontalRef.current || !containerRef.current) return

    const horizontalSection = horizontalRef.current
    const scrollWidth = horizontalSection.scrollWidth
    const viewportWidth = window.innerWidth

    // Get Lenis instance for proper integration
    const lenis = (window as any).lenis

    const scrollTween = gsap.to(horizontalSection, {
      x: -(scrollWidth - viewportWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        // Optimize performance
        anticipatePin: 1,
        refreshPriority: -1,
      },
    })

    // Refresh ScrollTrigger after Lenis is ready
    if (lenis) {
      lenis.on('scroll', () => {
        ScrollTrigger.update()
      })
    }

    return () => {
      scrollTween.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 relative"
      ref={containerRef}
    >
      <div className="container mx-auto max-w-6xl mb-12">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-1">
            Projects
          </h2>
        </ScrollReveal>
      </div>

      <div className="overflow-hidden">
        <div
          ref={horizontalRef}
          className="flex gap-8 px-8"
          style={{ width: 'max-content' }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({
  project,
  index,
}: {
  project: typeof projects[0]
  index: number
}) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[90vw] md:w-[500px] bg-white rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, transition: { duration: 0.2, ease: 'easeOut' } }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="relative h-64 bg-gradient-to-br from-primary-1 to-primary-2">
        <Image
          src={`/images/project${index + 1}.png`}
          alt={project.projectTitle}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 90vw, 500px"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">
          {project.projectTitle}
          {project.projectSubTitle && (
            <span className="text-sm font-normal text-light-font ml-2">
              {project.projectSubTitle}
            </span>
          )}
        </h3>
        <p className="text-light-font mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-4">
          <a
            href={project.codeURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-1 hover:underline"
            aria-label={`View source code for ${project.projectTitle}`}
          >
            Source Code <span>&#x2197;</span>
          </a>
          {project.demoURL && (
            <a
              href={project.demoURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-1 hover:underline"
              aria-label={`View live demo of ${project.projectTitle}`}
            >
              Demo <span>&#x2197;</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
