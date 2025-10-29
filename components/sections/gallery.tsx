"use client"

import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Section } from "@/components/section"
// Removed circular gallery in favor of a responsive masonry layout

const galleryItems = [
  { image: "/Couple_img/couple (1).jpg", text: "Rine & Francis" },   
  { image: "/Couple_img/couple (2).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (3).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (4).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (5).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (6).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (7).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (8).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (9).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (10).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (11).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (12).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (13).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (14).jpg", text: "Rine & Francis" },
  { image: "/Couple_img/couple (15).jpg", text: "Rine & Francis" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  // reserved for potential skeleton tracking; not used after fade-in simplification
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchDeltaX, setTouchDeltaX] = useState(0)
  const [zoomScale, setZoomScale] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [pinchStartDist, setPinchStartDist] = useState<number | null>(null)
  const [pinchStartScale, setPinchStartScale] = useState(1)
  const [lastTap, setLastTap] = useState(0)
  const [panStart, setPanStart] = useState<{ x: number; y: number; panX: number; panY: number } | null>(null)

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex
      if (direction === 'next') {
        newIndex = (prevIndex + 1) % galleryItems.length
      } else {
        newIndex = (prevIndex - 1 + galleryItems.length) % galleryItems.length
      }
      setSelectedImage(galleryItems[newIndex])
      return newIndex
    })
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return
      if (e.key === 'ArrowLeft') navigateImage('prev')
      if (e.key === 'ArrowRight') navigateImage('next')
      if (e.key === 'Escape') setSelectedImage(null)
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage, currentIndex, navigateImage])

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  // Preload adjacent images for smoother nav
  useEffect(() => {
    if (selectedImage) {
      const next = new Image()
      next.src = galleryItems[(currentIndex + 1) % galleryItems.length].image
      const prev = new Image()
      prev.src = galleryItems[(currentIndex - 1 + galleryItems.length) % galleryItems.length].image
    }
  }, [selectedImage, currentIndex])

  const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val))
  const resetZoom = () => {
    setZoomScale(1)
    setPan({ x: 0, y: 0 })
    setPanStart(null)
  }

  return (
    <Section
      id="gallery"
      className="relative bg-[url('/background/gallerybackground.png')] bg-center bg-cover py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background overlay for readability over the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#848B79]/60 via-[#ACACAC]/40 to-[#848B79]/60 pointer-events-none" />
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
        {/* Floating geometric shapes with color palette - hidden on small screens */}
        <div className="hidden sm:block absolute top-10 left-10 w-20 h-20 bg-[#C0737B]/10 rounded-full blur-xl animate-pulse" />
        <div className="hidden sm:block absolute top-20 right-20 w-16 h-16 bg-[#FBFFE8]/15 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="hidden sm:block absolute bottom-20 left-20 w-24 h-24 bg-[#C0737B]/8 rounded-full blur-2xl animate-pulse delay-2000" />
        <div className="hidden sm:block absolute bottom-10 right-10 w-12 h-12 bg-[#FBFFE8]/12 rounded-full blur-lg animate-pulse delay-500" />
        
        {/* Smaller mobile decorative elements */}
        <div className="sm:hidden absolute top-8 left-8 w-12 h-12 bg-[#C0737B]/8 rounded-full blur-lg animate-pulse" />
        <div className="sm:hidden absolute bottom-8 right-8 w-10 h-10 bg-[#FBFFE8]/10 rounded-full blur-md animate-pulse delay-1000" />
        
        {/* Decorative lines with gradient */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0737B]/30 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/25 to-transparent" />
        
        {/* Corner decorative elements with color palette - reduced on mobile */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-br from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-br-3xl" />
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-bl from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-tr from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-tr-3xl" />
        <div className="absolute bottom-0 right-0 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-tl from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-tl-3xl" />
      </div>

      {/* Custom larger title */}
      <div className="relative text-center mb-12 sm:mb-16 md:mb-20 px-4" style={{ zIndex: 10 }}>
        {/* Decorative ornaments */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
          <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#C0737B]/60 to-[#C0737B]/30" />
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C0737B] rounded-full" />
            <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-[#FBFFE8] rounded-full self-center" />
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C0737B] rounded-full" />
          </div>
          <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent via-[#C0737B]/60 to-[#C0737B]/30" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-[#FBFFE8] mb-4 sm:mb-6 text-balance drop-shadow-lg relative px-2">
          <span className="relative z-10">Our Moments</span>
          {/* Text glow effect */}
          <span className="absolute inset-0 text-[#C0737B]/20 blur-2xl -z-10">Our Moments</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-[#FBFFE8] font-sans font-light max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
          Every moment, a treasured memory made eternal
        </p>
        
        {/* Bottom decorative ornaments */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8">
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
          <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-[#FBFFE8] rounded-full" />
          <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
        </div>
      </div>

      {/* Gallery content */}
      <div className="relative w-full" style={{ zIndex: 10 }}>
        <div className="flex justify-center px-2 sm:px-4">
          <div className="max-w-6xl w-full">
            {/* Enhanced gallery container */}
            <div className="relative">
              {/* Multiple layered glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C0737B]/20 via-[#FBFFE8]/15 to-[#C0737B]/20 rounded-3xl blur-2xl opacity-40 animate-pulse" />
              <div className="absolute -inset-3 bg-gradient-to-r from-[#C0737B]/30 via-[#FBFFE8]/20 to-[#C0737B]/30 rounded-3xl blur-md opacity-50 animate-pulse" />

              {/* Enhanced decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-5 h-5 bg-gradient-to-br from-[#C0737B] via-[#FBFFE8] to-[#C0737B] rounded-full blur-sm opacity-70 shadow-lg" />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-bl from-[#C0737B] via-[#FBFFE8] to-[#C0737B] rounded-full blur-sm opacity-70 shadow-lg" />
              <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-gradient-to-tr from-[#C0737B] via-[#FBFFE8] to-[#C0737B] rounded-full blur-sm opacity-70 shadow-lg" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-gradient-to-tl from-[#C0737B] via-[#FBFFE8] to-[#C0737B] rounded-full blur-sm opacity-70 shadow-lg" />

              {/* Main gallery card with enhanced multi-layer styling */}
              <div className="relative bg-gradient-to-br from-[#848B79]/95 via-[#848B79]/95 to-[#848B79]/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-7 lg:p-9 border-2 border-[#C0737B]/60 shadow-[0_8px_32px_rgba(132,139,121,0.3),0_0_0_1px_rgba(192,115,123,0.2)]">
                
                {/* Inner decorative border with gradient */}
                <div className="absolute inset-1 sm:inset-2 border border-[#C0737B]/40 rounded-xl sm:rounded-2xl" />
                
                {/* Additional inner glow */}
                <div className="absolute inset-2 sm:inset-3 bg-gradient-to-br from-[#C0737B]/10 to-transparent rounded-xl sm:rounded-2xl" />
                
                {/* Gallery content */}
                <div className="relative z-10 w-full">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
                      <div className="w-16 h-16 border-4 border-[#C0737B]/30 border-t-[#C0737B] rounded-full animate-spin" />
                    </div>
                  ) : null}

                  <div className="columns-2 sm:columns-3 md:columns-4 gap-2 sm:gap-3 md:gap-4">
                    {galleryItems.map((item, index) => (
                      <button
                        key={item.image + index}
                        type="button"
                        className="group mb-2 sm:mb-3 md:mb-4 w-full break-inside-avoid overflow-hidden rounded-lg border border-[#C0737B]/40 bg-[#848B79]/30 shadow-[0_4px_20px_rgba(132,139,121,0.25)] hover:shadow-[0_8px_28px_rgba(132,139,121,0.35)] transition-shadow"
                        onClick={() => {
                          setSelectedImage(item)
                          setCurrentIndex(index)
                        }}
                        aria-label={`Open image`}
                      >
                        <img
                          src={item.image}
                          alt={item.text}
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                          className="w-full h-auto object-cover align-top transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced decorative sparkle effects */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-2 h-2 sm:w-3 sm:h-3 bg-[#C0737B] rounded-full animate-ping opacity-80 shadow-lg" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#ACACAC] rounded-full animate-pulse opacity-70 shadow-md" />
                <div className="absolute top-1/2 left-1 sm:left-2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#FBFFE8] rounded-full animate-pulse opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
        {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
            <div
              className="relative max-w-6xl w-full h-full sm:h-auto flex flex-col items-center justify-center"
              onTouchStart={(e) => {
                if (e.touches.length === 1) {
                  const now = Date.now()
                  if (now - lastTap < 300) {
                    setZoomScale((s) => (s > 1 ? 1 : 2))
                    setPan({ x: 0, y: 0 })
                  }
                  setLastTap(now)
                  const t = e.touches[0]
                  setTouchStartX(t.clientX)
                  setTouchDeltaX(0)
                  if (zoomScale > 1) {
                    setPanStart({ x: t.clientX, y: t.clientY, panX: pan.x, panY: pan.y })
                  }
                }
                if (e.touches.length === 2) {
                  const dx = e.touches[0].clientX - e.touches[1].clientX
                  const dy = e.touches[0].clientY - e.touches[1].clientY
                  const dist = Math.hypot(dx, dy)
                  setPinchStartDist(dist)
                  setPinchStartScale(zoomScale)
                }
              }}
              onTouchMove={(e) => {
                if (e.touches.length === 2 && pinchStartDist) {
                  const dx = e.touches[0].clientX - e.touches[1].clientX
                  const dy = e.touches[0].clientY - e.touches[1].clientY
                  const dist = Math.hypot(dx, dy)
                  const scale = clamp((dist / pinchStartDist) * pinchStartScale, 1, 3)
                  setZoomScale(scale)
                } else if (e.touches.length === 1) {
                  const t = e.touches[0]
                  if (zoomScale > 1 && panStart) {
                    const dx = t.clientX - panStart.x
                    const dy = t.clientY - panStart.y
                    setPan({ x: panStart.panX + dx, y: panStart.panY + dy })
                  } else if (touchStartX !== null) {
                    setTouchDeltaX(t.clientX - touchStartX)
                  }
                }
              }}
              onTouchEnd={() => {
                setPinchStartDist(null)
                setPanStart(null)
                if (zoomScale === 1 && Math.abs(touchDeltaX) > 50) {
                  navigateImage(touchDeltaX > 0 ? 'prev' : 'next')
                }
                setTouchStartX(null)
                setTouchDeltaX(0)
              }}
            >
            {/* Top gradient for button contrast and safe area */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-b from-black/60 to-transparent" />
            {/* Image counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:top-6 z-20 bg-[#D1AB6D]/20 backdrop-blur-md rounded-full px-4 py-2 border border-[#D1AB6D]/40">
              <span className="text-sm sm:text-base font-semibold text-[#E0CFB5]">
                {currentIndex + 1} / {galleryItems.length}
              </span>
            </div>

            {/* Navigation buttons */}

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 sm:p-4 transition-all duration-300 border border-white/20 hover:border-white/40"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} className="sm:w-9 sm:h-9 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 sm:p-4 transition-all duration-300 border border-white/20 hover:border-white/40"
              aria-label="Next image"
            >
              <ChevronRight size={28} className="sm:w-9 sm:h-9 text-white" />
            </button>

            {/* Image container */}
            <div className="relative w-full h-full flex items-center justify-center mt-12 sm:mt-16 mb-20 overflow-hidden">
              <div
                className="relative inline-block"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.text}
                  style={{ transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoomScale})`, transition: pinchStartDist ? 'none' : 'transform 200ms ease-out' }}
                  className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg shadow-2xl will-change-transform"
                />
                {/* Close button anchored to image corner */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(null)
                  }}
                  className="absolute top-2 right-2 z-30 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full p-2 sm:p-2.5 transition-all duration-200 border border-white/30"
                  aria-label="Close lightbox"
                >
                  <X size={20} className="text-white" />
                </button>
                {zoomScale > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      resetZoom()
                    }}
                    className="absolute bottom-2 right-2 bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-1 text-xs border border-white/30"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Image description */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 bg-[#D1AB6D]/20 backdrop-blur-md rounded-full px-4 py-2 border border-[#D1AB6D]/40">
              <p className="text-sm sm:text-base font-medium text-[#E0CFB5] text-center">
                {selectedImage.text}
              </p>
            </div>

            {/* Mobile swipe hint */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:hidden text-white/50 text-xs">
              Swipe to navigate
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
