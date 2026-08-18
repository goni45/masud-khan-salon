'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PremiumHero() {
  const [content, setContent] = useState({
    logoUrl: 'https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/493520677_122128581446750971_331638292291089913_n.jpg',
    initials: 'MSK',
    missionStatement: 'We built this platform with a single purpose to eliminate operational chaos and restore balance to your daily grooming routine',
    paragraph1: 'I Was Exhausted By Salon Software That Demanded More Effort Than It Actually Saved. That Is Why We Engineered An Autonomous Architecture That Operates Silently In The Background.',
    paragraph2: 'Your Business Should Serve Your Life, Not Consume It. Let Our Booking System Handle The Heavy Lifting, So You Can Focus On The Experience.',
    videoUrl: 'https://res.cloudinary.com/daklr2whx/video/upload/v1778602552/track-video_2_s9lp53.mp4'
  })

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen w-full bg-[#0B0B0B] flex flex-col z-10">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center w-full pt-[80px] md:pt-[150px] pb-[60px]">
        <div className="flex flex-col items-center w-full px-4 md:px-8 text-center z-20 relative max-w-[900px] h-auto mx-auto">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <img
              src={content.logoUrl}
              alt="MSK Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </motion.div>

          {/* Mission Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-sm md:text-base leading-relaxed mb-8 md:mb-12 uppercase tracking-wider max-w-[400px] font-light"
          >
            {content.missionStatement}
          </motion.p>

          {/* Cursive Initials */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-marck text-white text-6xl md:text-8xl lg:text-9xl leading-none mb-8 md:mb-12"
            style={{ fontFamily: "'Marck Script', cursive" }}
          >
            {content.initials}
          </motion.div>

          {/* Two Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white leading-relaxed mb-12 md:mb-24 w-full flex flex-col items-center font-light"
          >
            <p className="mb-6 text-sm md:text-base w-full max-w-[500px] text-center">
              {content.paragraph1}
            </p>
            <p className="text-sm md:text-base w-full max-w-[500px] text-center">
              {content.paragraph2}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={scrollToBooking}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
            className="px-8 py-3 md:px-10 md:py-4 bg-[#D4AF37] text-black font-bold text-sm md:text-base rounded-full hover:bg-[#F4E5B2] transition-all duration-300 shadow-xl"
          >
            Book Your Appointment
          </motion.button>
        </div>
      </div>

      {/* Bottom Video Section */}
      <div className="relative w-full shrink-0">
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-gradient-to-b from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

        {/* Video */}
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block object-contain"
        >
          <source
            src={content.videoUrl}
            type="video/mp4"
          />
        </motion.video>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-[#D4AF37]"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
