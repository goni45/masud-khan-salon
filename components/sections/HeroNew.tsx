'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2 }}
          className="text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wider text-white leading-none">
            BOOK YOUR
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wider text-white leading-none">
            APPOINTMENT
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wider text-white leading-none">
            NOW
          </h1>
        </motion.div>
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      {/* Image Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-5 w-full h-full flex items-center justify-center"
      >
        <img
          src="/barber-hero.png"
          alt="Premium Barber"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-2xl px-4"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            <span className="block">PREMIUM</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4E5B2]">
              GROOMING
            </span>
            <span className="block">EXPERIENCE</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-8 font-light"
          >
            Masud Khan Men's Salon - Where Excellence Meets Tradition
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Booking Button */}
      <motion.button
        onClick={scrollToBooking}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 100 }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 px-8 py-4 bg-[#D4AF37] text-black font-bold text-lg rounded-full hover:bg-[#F4E5B2] transition-all duration-300 shadow-2xl cursor-pointer"
      >
        Book Appointment
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30 text-[#D4AF37]"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
