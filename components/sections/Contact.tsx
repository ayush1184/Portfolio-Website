'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      console.error('EmailJS error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-1 mb-12 text-center">
            Get In Touch
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 border border-dark-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-accent-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full px-4 py-2 border border-dark-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-accent-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-2 border border-dark-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1 resize-none"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-accent-1">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary-1 text-white rounded-lg font-medium hover:bg-primary-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-600"
              >
                Message sent successfully!
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-accent-1"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
