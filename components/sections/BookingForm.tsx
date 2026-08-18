'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { createBooking } from '@/lib/supabase/bookings'

interface Service {
  id: string
  name: string
  nameBn: string
}

interface BookingFormProps {
  services: Service[]
  selectedService?: Service
  barbers?: { id: string; name: string; specialty: string }[]
}

export default function BookingForm({ services, selectedService, barbers = [] }: BookingFormProps) {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_phone: '',
    service: selectedService?.name || '',
    barber: '',
    booking_date: '',
    booking_time: '',
    notes: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await createBooking({
        ...formData,
        status: 'pending',
      })
      setStatus('success')
      setFormData({
        customer_name: '',
        customer_phone: '',
        service: '',
        barber: '',
        booking_date: '',
        booking_time: '',
        notes: '',
      })
    } catch (error) {
      setStatus('error')
    }
  }

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '09:00 PM',
  ]

  return (
    <section id="booking" className="py-20 px-4 bg-[#0B0B0B]">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Book Your </span>
            <span className="text-[#D4AF37]">Appointment</span>
          </h2>
          <p className="text-gray-400 text-lg">Schedule your visit with our expert barbers</p>
        </motion.div>

        {/* Booking Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-2xl p-8 space-y-6"
        >
          {/* Name & Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.customer_name}
                onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.customer_phone}
                onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
                className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="01XXX-XXXXXX"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Service *
            </label>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
            >
              <option value="">Choose a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name} - {service.nameBn}
                </option>
              ))}
              {services.length === 0 && (
                <>
                  <option value="Hair Cut">Hair Cut - হেয়ার কাট</option>
                  <option value="Facial">Facial - ফেসিয়াল</option>
                  <option value="Body Massage">Body Massage - বডি মাসাজ</option>
                  <option value="Grooming & Makeover">Grooming & Makeover - গ্রুমিং ও মেকওভার</option>
                </>
              )}
            </select>
          </div>

          {/* Barber Selection */}
          {barbers.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Barber (Optional)
              </label>
              <select
                value={formData.barber}
                onChange={(e) => setFormData({ ...formData, barber: e.target.value })}
                className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
              >
                <option value="">Any Available</option>
                {barbers.map((barber) => (
                  <option key={barber.id} value={barber.name}>
                    {barber.name} - {barber.specialty}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                required
                value={formData.booking_date}
                onChange={(e) => setFormData({ ...formData, booking_date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Time *
              </label>
              <select
                required
                value={formData.booking_time}
                onChange={(e) => setFormData({ ...formData, booking_time: e.target.value })}
                className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
              >
                <option value="">Select time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Special Requests (Optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
              placeholder="Any special requests or notes..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#B8960C] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Booking...' : 'Book Appointment'}
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg p-4"
            >
              Booking confirmed! We'll contact you shortly.
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg p-4"
            >
              Something went wrong. Please try again or contact us directly.
            </motion.div>
          )}
        </motion.form>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 mb-4">Or book directly via:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8801304603705"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all duration-300"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+8801304603705"
              className="px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
