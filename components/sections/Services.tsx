'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Service {
  id: string
  name: string
  nameBn: string
  description?: string
  price?: number
  duration?: string
  category: string
  image?: string
  featured: boolean
}

export default function ServicesSection({ services }: { services: Service[] }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(services.map(s => s.category))]

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory)

  const handleSelectService = (service: Service) => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 px-4 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">Premium grooming services for the modern gentleman</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#D4AF37] text-black'
                  : 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all duration-300 group"
            >
              {/* Service Image */}
              {service.image && (
                <div className="h-48 bg-[#0B0B0B] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Service Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                    <p className="text-sm text-[#D4AF37]">{service.nameBn}</p>
                  </div>
                  {service.price && (
                    <span className="text-2xl font-bold text-[#D4AF37]">
                      ৳{service.price}
                    </span>
                  )}
                </div>

                {service.description && (
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                )}

                <div className="flex justify-between items-center">
                  {service.duration && (
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </span>
                  )}
                  <button
                    onClick={() => handleSelectService(service)}
                    className="px-6 py-2 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#B8960C] transition-all duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Default Services (if no Notion data) */}
        {filteredServices.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defaultServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-xl p-6 hover:border-[#D4AF37] transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                <p className="text-sm text-[#D4AF37] mb-3">{service.nameBn}</p>
                <button
                  onClick={() => handleSelectService(service)}
                  className="w-full px-6 py-2 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#B8960C] transition-all duration-300"
                >
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// Default services for fallback
const defaultServices: Service[] = [
  { id: '1', name: 'Hair Cut', nameBn: 'হেয়ার কাট', category: 'Hair', featured: true },
  { id: '2', name: 'Hair Styling', nameBn: 'হেয়ার স্টাইলিং', category: 'Hair', featured: false },
  { id: '3', name: 'Hair Colour', nameBn: 'হেয়ার কালার', category: 'Hair', featured: true },
  { id: '4', name: 'Hair Spa & Massage', nameBn: 'হেয়ার স্পা ও মাসাজ', category: 'Spa', featured: false },
  { id: '5', name: 'Facial', nameBn: 'ফেসিয়াল', category: 'Skin', featured: true },
  { id: '6', name: 'Face Massage', nameBn: 'ফেস মাসাজ', category: 'Skin', featured: false },
  { id: '7', name: 'Manicure & Pedicure', nameBn: 'ম্যানিকিউর ও পেডিকিউর', category: 'Care', featured: false },
  { id: '8', name: 'Body Massage', nameBn: 'বডি মাসাজ', category: 'Spa', featured: true },
  { id: '9', name: 'Grooming & Makeover', nameBn: 'গ্রুমিং ও মেকওভার', category: 'Special', featured: true },
]
