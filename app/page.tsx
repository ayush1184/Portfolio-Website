import { lazy, Suspense } from 'react'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Footer from '@/components/ui/Footer'

// Lazy load heavy components
const Projects = lazy(() => import('@/components/sections/Projects'))
const Experience = lazy(() => import('@/components/sections/Experience'))
const ImpossibleList = lazy(() => import('@/components/sections/ImpossibleList'))
const Contact = lazy(() => import('@/components/sections/Contact'))

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-8 h-8 border-4 border-primary-1 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Skills />
      <Education />
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ImpossibleList />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      <Footer />
    </main>
  )
}
