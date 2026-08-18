'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'MASUD KHAN'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="text-[20vw] font-black text-white tracking-wider"
        >
          {typedText}
        </motion.h1>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Men's </span>
            <span className="text-[#D4AF37]">Salon</span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 px-4"
        >
          The Art of Modern Grooming
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-12 text-xs md:text-sm px-4"
        >
          <span className="px-3 py-1.5 border border-[#D4AF37] text-[#D4AF37] rounded-full whitespace-nowrap">
            Customized Haircut & Beard Design
          </span>
          <span className="px-3 py-1.5 border border-[#D4AF37] text-[#D4AF37] rounded-full whitespace-nowrap">
            VIP Zone
          </span>
          <span className="px-3 py-1.5 border border-[#D4AF37] text-[#D4AF37] rounded-full whitespace-nowrap">
            Bridal Grooming
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToBooking}
            className="px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#B8960C] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D4AF37]/20"
          >
            Book Appointment
          </button>
          <a
            href="https://wa.me/8801304603705"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#D4AF37] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
