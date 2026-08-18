'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface GalleryImage {
  id: string
  title: string
  beforeImage?: string
  afterImage?: string
  description?: string
}

export default function Gallery({ images = [] }: { images?: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Default placeholder images
  const defaultImages: GalleryImage[] = [
    { id: '1', title: 'Classic Fade', description: 'Sharp and clean finish' },
    { id: '2', title: 'Beard Transformation', description: 'From scruffy to sophisticated' },
    { id: '3', title: 'Modern Pompadour', description: 'Volume and style' },
    { id: '4', title: 'Skin Fade', description: 'Seamless blend' },
    { id: '5', title: 'Textured Crop', description: 'Natural movement' },
    { id: '6', title: 'Executive Cut', description: 'Professional look' },
  ]

  const displayImages = images.length > 0 ? images : defaultImages

  return (
    <section id="gallery" className="py-20 px-4 bg-[#0B0B0B]">
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
            <span className="text-[#D4AF37]">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg">Transformations that speak for themselves</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0B] flex items-center justify-center">
                {image.afterImage ? (
                  <img
                    src={image.afterImage}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-4xl md:text-6xl mb-2 text-[#D4AF37]">✂</div>
                    <p className="text-[#D4AF37] font-medium text-sm md:text-base">{image.title}</p>
                  </div>
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                  {image.description && (
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">See more transformations on our social media</p>
          <a
            href="https://www.facebook.com/MasudKhanMensSalonMymensingh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Follow us on Facebook
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#1a1a1a] rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-[#0B0B0B] flex items-center justify-center">
              {selectedImage.afterImage ? (
                <img
                  src={selectedImage.afterImage}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="text-8xl mb-4">✂️</div>
                  <h3 className="text-2xl font-bold text-[#D4AF37]">{selectedImage.title}</h3>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              {selectedImage.description && (
                <p className="text-gray-400">{selectedImage.description}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
