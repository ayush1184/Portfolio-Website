import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ayush Singh - Computer Science Student & Developer',
  description: 'Portfolio website of Ayush Singh, a Computer Science student at University of Houston, showcasing projects, skills, and achievements.',
  keywords: ['portfolio', 'developer', 'computer science', 'react', 'next.js', 'web development'],
  authors: [{ name: 'Ayush Singh' }],
  creator: 'Ayush Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ayushsingh.dev',
    title: 'Ayush Singh - Computer Science Student & Developer',
    description: 'Portfolio website showcasing projects, skills, and achievements',
    siteName: 'Ayush Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Singh - Computer Science Student & Developer',
    description: 'Portfolio website showcasing projects, skills, and achievements',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0061ff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ayush Singh',
              jobTitle: 'Computer Science Student',
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'University of Houston',
              },
              url: 'https://ayushsingh.dev',
              sameAs: [
                'https://github.com/ayush1184',
                'https://www.linkedin.com/in/ad1184/',
                'https://twitter.com/ayushsingh1184',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
