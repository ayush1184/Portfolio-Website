'use client'

import { LiaGithub } from 'react-icons/lia'
import { navbarTabs } from '@/lib/constants'

export default function Footer() {
  const handleNavLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText.toLowerCase().split(' ')
    const id = text.length >= 2 ? text.slice(0).join('-') : text[0]
    const element = document.querySelector(`#${id}`)
    if (element) {
      const lenis = (window as any).lenis
      if (lenis) {
        lenis.scrollTo(element, { offset: -80, duration: 1.5 })
      } else {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="border-t border-dark-2 py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-4">
          {navbarTabs.map((tab) => (
            <div
              key={tab}
              className="px-4 py-2 text-sm font-light cursor-pointer hover:text-primary-1 transition-colors"
              onClick={handleNavLinkClick}
            >
              {tab}
            </div>
          ))}
        </div>

        <p className="text-sm text-light-font">
          Copyright &copy;{' '}
          <a
            href="https://github.com/ayush1184"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-1 hover:underline"
          >
            <LiaGithub />
            ayush1184
          </a>
        </p>
      </div>
    </footer>
  )
}
