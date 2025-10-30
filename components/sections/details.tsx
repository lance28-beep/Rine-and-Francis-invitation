"use client"

import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import { Clock, Utensils, Car, Shirt, Copy, Check, Navigation, Heart, Users, Camera, X, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
// Image import removed as images are no longer used in this section

export function Details() {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set())
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [showImageModal, setShowImageModal] = useState<string | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showImageModal) {
        setShowImageModal(null)
        setMapLoaded(false)
      }
    }
    
    if (showImageModal) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      setMapLoaded(false)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
      if (!showImageModal) {
        setMapLoaded(false)
      }
    }
  }, [showImageModal])

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItems(prev => new Set(prev).add(itemId))
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev)
          newSet.delete(itemId)
          return newSet
        })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Generate Google Maps links
  const ceremonyMapsLink = `https://maps.google.com/?q=${encodeURIComponent(siteConfig.ceremony.location)}`
  const receptionMapsLink = `https://maps.google.com/?q=${encodeURIComponent(siteConfig.reception.location)}`

  const openInMaps = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }


  return (
    <Section id="details" className="relative bg-[url('/background/detailsbg.png')] bg-center bg-cover py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background overlay for readability over the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#848B79]/60 via-[#ACACAC]/40 to-[#848B79]/60 pointer-events-none" />
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes with color palette */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#C0737B]/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-20 right-20 w-16 h-16 bg-[#FBFFE8]/15 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#C0737B]/8 rounded-full blur-2xl animate-pulse delay-2000" />
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-[#FBFFE8]/12 rounded-full blur-lg animate-pulse delay-500" />
        
        {/* Decorative lines with gradient */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0737B]/30 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/25 to-transparent" />
        
        {/* Corner decorative elements with color palette */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-br-3xl" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-tr-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-tl-3xl" />
        </div>

      <div className="relative z-10 text-center mb-12 sm:mb-16 lg:mb-20">
        {/* Decorative ornaments */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C0737B]/60 to-[#C0737B]/30" />
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-[#C0737B] rounded-full" />
            <div className="w-1 h-1 bg-[#FBFFE8] rounded-full self-center" />
            <div className="w-2 h-2 bg-[#C0737B] rounded-full" />
        </div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#C0737B]/60 to-[#C0737B]/30" />
        </div>
        
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#FBFFE8] mb-6 text-balance drop-shadow-lg relative">
          <span className="relative z-10">Event Details</span>
          {/* Text glow effect */}
          <span className="absolute inset-0 text-[#C0737B]/20 blur-2xl -z-10">Event Details</span>
          </h2>
  
        <p className="text-lg md:text-xl text-[#FBFFE8] font-sans font-light max-w-2xl mx-auto px-4 leading-relaxed mb-8">
          Everything you need to know about our special day
        </p>
        
        {/* Bottom decorative ornaments */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
          <div className="w-1 h-1 bg-[#FBFFE8] rounded-full" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
        </div>
      </div>

      {/* Ceremony and Reception */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
        {/* Ceremony */}
        <div 
          className="bg-gradient-to-br from-[#FBFFE8] via-[#FBFFE8]/60 to-[#FBFFE8] backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-8 shadow-[0_8px_32px_rgba(132,139,121,0.3),0_0_0_1px_rgba(192,115,123,0.2)] border-2 border-[#C0737B]/60 hover:border-[#C0737B] hover:shadow-[0_12px_48px_rgba(132,139,121,0.4),0_0_40px_rgba(192,115,123,0.5)] transition-all duration-700 hover:scale-[1.02] group relative overflow-hidden"
          onMouseEnter={() => setHoveredCard('ceremony')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Enhanced Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#C0737B]/20 via-[#FBFFE8]/15 to-[#C0737B]/20 rounded-full blur-2xl opacity-40 animate-pulse" />
          <div className="absolute top-4 right-4 w-20 h-20 bg-[#D1AB6D]/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
          
          {/* Inner decorative border with gradient */}
          <div className="absolute inset-2 border border-[#C0737B]/40 rounded-2xl" />
          
          {/* Shimmer effect layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-3xl" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 sm:mb-6 gap-3 sm:gap-4 relative z-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className={`bg-gradient-to-br from-[#C0737B]/30 via-[#FBFFE8]/20 to-[#C0737B]/30 p-2.5 sm:p-3 md:p-4 rounded-2xl transition-all duration-300 shadow-md group-hover:shadow-lg ${hoveredCard === 'ceremony' ? 'scale-110 rotate-[3deg]' : ''}`}>
                <Heart className="text-[#848B79] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#848B79]">Ceremony</h3>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 self-end sm:self-auto">
              <button
                onClick={() => openInMaps(ceremonyMapsLink)}
                className="p-2 sm:p-2.5 text-[#848B79]/70 hover:text-[#848B79] hover:bg-gradient-to-br hover:from-[#848B79]/10 hover:to-[#848B79]/5 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95"
                title="Open in Google Maps"
              >
                <Navigation className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={() => copyToClipboard(siteConfig.ceremony.location, 'ceremony')}
                className="p-2 sm:p-2.5 text-[#848B79]/70 hover:text-[#848B79] hover:bg-gradient-to-br hover:from-[#848B79]/10 hover:to-[#848B79]/5 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95"
                title="Copy ceremony details"
              >
                {copiedItems.has('ceremony') ? <Check className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" /> : <Copy className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
              </button>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6 relative z-10">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-[#848B79]">{siteConfig.ceremony.venue}</p>
            <p className="text-xs sm:text-sm text-[#848B79] opacity-70">{siteConfig.ceremony.location}</p>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-[#848B79]">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#C0737B] flex-shrink-0" />
              <span>
                {siteConfig.ceremony.date} at 2:00 PM
              </span>
              </div>
            </div>
            
          {/* Image removed as requested */}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10">
            <button
              onClick={() => setShowImageModal('ceremony')}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#C0737B] to-[#C0737B]/90 hover:from-[#C0737B]/90 hover:to-[#C0737B] text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg"
            >
              <MapPin className="w-4 h-4" />
              <span>View Map</span>
            </button>
            <button
              onClick={() => openInMaps(ceremonyMapsLink)}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-white border-2 border-[#C0737B] text-[#848B79] rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md hover:bg-[#FBFFE8]/30"
            >
              <Navigation className="w-4 h-4" />
              <span>Google Maps</span>
            </button>
          </div>
        </div>

        {/* Reception */}
        <div 
          className="bg-gradient-to-br from-[#FBFFE8] via-[#FBFFE8]/60 to-[#FBFFE8] backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-8 shadow-[0_8px_32px_rgba(132,139,121,0.3),0_0_0_1px_rgba(192,115,123,0.2)] border-2 border-[#C0737B]/60 hover:border-[#C0737B] hover:shadow-[0_12px_48px_rgba(132,139,121,0.4),0_0_40px_rgba(192,115,123,0.5)] transition-all duration-700 hover:scale-[1.02] group relative overflow-hidden"
          onMouseEnter={() => setHoveredCard('reception')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Enhanced Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#C0737B]/20 via-[#FBFFE8]/15 to-[#C0737B]/20 rounded-full blur-2xl opacity-40 animate-pulse" />
          <div className="absolute top-4 right-4 w-20 h-20 bg-[#D1AB6D]/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
          
          {/* Inner decorative border with gradient */}
          <div className="absolute inset-2 border border-[#C0737B]/40 rounded-2xl" />
          
          {/* Shimmer effect layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-3xl" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 sm:mb-6 gap-3 sm:gap-4 relative z-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className={`bg-gradient-to-br from-[#C0737B]/30 via-[#FBFFE8]/20 to-[#C0737B]/30 p-2.5 sm:p-3 md:p-4 rounded-2xl transition-all duration-300 shadow-md group-hover:shadow-lg ${hoveredCard === 'reception' ? 'scale-110 rotate-[3deg]' : ''}`}>
                <Utensils className="text-[#848B79] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#848B79]">Reception</h3>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 self-end sm:self-auto">
              <button
                onClick={() => openInMaps(receptionMapsLink)}
                className="p-2 sm:p-2.5 text-[#848B79]/70 hover:text-[#848B79] hover:bg-gradient-to-br hover:from-[#848B79]/10 hover:to-[#848B79]/5 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95"
                title="Open in Google Maps"
              >
                <Navigation className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={() => copyToClipboard(siteConfig.reception.location, 'reception')}
                className="p-2 sm:p-2.5 text-[#848B79]/70 hover:text-[#848B79] hover:bg-gradient-to-br hover:from-[#848B79]/10 hover:to-[#848B79]/5 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95"
                title="Copy reception details"
              >
                {copiedItems.has('reception') ? <Check className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" /> : <Copy className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
              </button>
                </div>
              </div>

          <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6 relative z-10">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-[#848B79]">{siteConfig.reception.venue}</p>
            <p className="text-xs sm:text-sm text-[#848B79] opacity-70">{siteConfig.reception.location}</p>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-[#848B79]">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#C0737B] flex-shrink-0" />
              <span>
                {siteConfig.reception.date} - {siteConfig.reception.time}
              </span>
            </div>
          </div>

          {/* Image removed as requested */}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10">
            <button
              onClick={() => setShowImageModal('reception')}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#C0737B] to-[#C0737B]/90 hover:from-[#C0737B]/90 hover:to-[#C0737B] text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg"
            >
              <MapPin className="w-4 h-4" />
              <span>View Map</span>
            </button>
            <button
              onClick={() => openInMaps(receptionMapsLink)}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-white border-2 border-[#C0737B] text-[#848B79] rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md hover:bg-[#FBFFE8]/30"
            >
              <Navigation className="w-4 h-4" />
              <span>Google Maps</span>
            </button>
          </div>
                </div>
              </div>

      {/* Additional Information */}
      <div className="relative z-10 mb-8 sm:mb-12 lg:mb-16">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="hidden sm:block h-px w-8 bg-gradient-to-r from-transparent to-[#D1AB6D]/50" />
            <div className="bg-[#D1AB6D]/20 p-3 rounded-full shadow-lg">
              <Users className="text-[#FBFFE8] w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="hidden sm:block h-px w-8 bg-gradient-to-l from-transparent to-[#D1AB6D]/50" />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#FBFFE8]">Important Information</h3>
          <p className="text-sm sm:text-base text-[#F0F0F0] opacity-80">Everything you need to know</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Dress Code */}
          <div className="bg-gradient-to-br from-[#F0F0F0] via-[#FBFFE8]/50 to-[#F0F0F0] backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-7 border-2 border-[#D1AB6D]/60 hover:border-[#D1AB6D] hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1 active:scale-[0.99] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D1AB6D]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-1.5 sm:gap-2 mb-4">
              <div className="bg-[#D1AB6D]/30 p-2 rounded-full shadow-md">
                <Shirt className="text-[#525E2C] w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h4 className="font-bold text-base sm:text-lg text-[#525E2C]">Dress Code</h4>
            </div>
            
            {/* Theme Badge */}
            <div className="mb-4">
              <span className="text-xs sm:text-sm font-semibold text-[#525E2C] bg-[#FBFFE8]/40 px-3 py-1.5 rounded-full">{typeof siteConfig.dressCode === 'object' ? siteConfig.dressCode.theme : siteConfig.dressCode}</span>
            </div>

            {/* Color Palette */}
            {typeof siteConfig.dressCode === 'object' && siteConfig.dressCode.colors && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-[#525E2C] mb-2">Color Palette</p>
                <div className="flex gap-2 flex-wrap">
                  {siteConfig.dressCode.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md border-2 border-white ring-2 ring-[#D1AB6D]/20"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Principal Sponsors */}
            {typeof siteConfig.dressCode === 'object' && siteConfig.dressCode.sponsors && (
              <div className="mb-4 bg-white/50 rounded-lg p-3 border border-[#D1AB6D]/20">
                <p className="text-xs font-semibold text-[#525E2C] mb-2">Principal Sponsors</p>
                <p className="text-xs text-[#525E2C] opacity-80 mb-1">Ladies: {siteConfig.dressCode.sponsors.ladies}</p>
                <p className="text-xs text-[#525E2C] opacity-80">Gentlemen: {siteConfig.dressCode.sponsors.gentlemen}</p>
              </div>
            )}

            {/* Guests */}
            {typeof siteConfig.dressCode === 'object' && siteConfig.dressCode.guests && (
              <div className="mb-4 bg-white/50 rounded-lg p-3 border border-[#D1AB6D]/20">
                <p className="text-xs font-semibold text-[#525E2C] mb-2">Guests</p>
                <p className="text-xs text-[#525E2C] opacity-80 mb-1">Ladies: {siteConfig.dressCode.guests.ladies}</p>
                <p className="text-xs text-[#525E2C] opacity-80 mb-2">Gentlemen: {siteConfig.dressCode.guests.gentlemen}</p>
               
              </div>
            )}
          </div>

          {/* Travel & Comfort - Combined */}
          <div className="bg-gradient-to-br from-[#F0F0F0] via-[#FBFFE8]/50 to-[#F0F0F0] backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-7 border-2 border-[#D1AB6D]/60 hover:border-[#D1AB6D] hover:shadow-xl transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1 active:scale-[0.99] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D1AB6D]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex items-center gap-1.5 sm:gap-2 mb-4 relative z-10">
              <div className="bg-[#D1AB6D]/30 p-2 rounded-full shadow-md">
                <Car className="text-[#525E2C] w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h4 className="font-bold text-base sm:text-lg text-[#525E2C]">Parking & Travel</h4>
            </div>
            
            <div className="space-y-3">
              {/* Parking Information */}
              <div className="bg-gradient-to-br from:white to-[#FBFFE8]/30 rounded-xl p-3 sm:p-4 border-2 border-[#D1AB6D]/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-2 mb-2">
                  <div className="bg-[#D1AB6D]/20 p-1.5 rounded-full mt-0.5">
                    <Car className="w-3 h-3 text-[#525E2C]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#525E2C] mb-1">Parking Available</p>
                    <p className="text-xs text-[#525E2C] opacity-70 leading-relaxed">
                      Ample parking is available at both venues. We recommend arriving 15-20 minutes early.
                    </p>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="bg-gradient-to-br from:white to-[#FBFFE8]/30 rounded-xl p-3 sm:p-4 border-2 border-[#D1AB6D]/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-2 mb-2">
                  <div className="bg-[#D1AB6D]/20 p-1.5 rounded-full mt-0.5">
                    <Navigation className="w-3 h-3 text-[#525E2C]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#525E2C] mb-1">Transportation</p>
                    <p className="text-xs text-[#525E2C] opacity-70 leading-relaxed mb-2">
                      💡 Book transportation in advance for a stress-free day
                    </p>
                    <p className="text-xs text-[#525E2C] opacity-70 leading-relaxed">
                      Taxis, Grab, and private vehicles are welcome. Both venues are easily accessible.
                    </p>
                  </div>
                </div>
              </div>

              {/* Travel Tips */}
              <div className="bg-gradient-to-br from-[#D1AB6D]/10 to-[#FBFFE8]/20 rounded-xl p-3 sm:p-4 border-2 border-[#D1AB6D]/40 shadow-sm">
                <p className="text-xs font-semibold text-[#525E2C] mb-2 flex items-center gap-1.5">
                  <span className="text-sm">📍</span>
                  Quick Tips
                </p>
                <ul className="text-xs text-[#525E2C] opacity-70 space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D1AB6D] mt-0.5">•</span>
                    <span>Plan your route ahead of time to avoid delays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D1AB6D] mt-0.5">•</span>
                    <span>Wear comfortable shoes for easy movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D1AB6D] mt-0.5">•</span>
                    <span>Coordinate with friends for carpooling</span>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Enhanced Map Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-0 sm:p-2 md:p-4 lg:p-6 animate-in fade-in duration-500 overflow-y-auto"
          onClick={() => {
            setShowImageModal(null)
            setMapLoaded(false)
          }}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#848B79]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C0737B]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative w-full h-full sm:h-auto sm:max-w-6xl sm:w-[95vw] md:w-[92vw] lg:w-[85vw] sm:max-h-[90vh] sm:my-4 bg-gradient-to-br from-white via-white to-[#FBFFE8]/20 rounded-none sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-0 sm:border-2 border-[#C0737B]/30 animate-in zoom-in-95 duration-500 motion-reduce:animate-none group grid grid-rows-[auto,1fr,auto] min-h-screen sm:min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative top accent with subtle pulse */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#848B79] via-[#C0737B] to-[#848B79] animate-pulse" />
            
            {/* Enhanced close button - positioned lower to avoid navbar */}
            <button
              onClick={() => {
                setShowImageModal(null)
                setMapLoaded(false)
              }}
              className="absolute top-12 right-3 sm:top-5 sm:right-5 md:top-6 md:right-6 z-20 bg-white/95 hover:bg-white backdrop-blur-sm p-2 sm:p-2.5 rounded-lg sm:rounded-xl shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 border-2 border-[#C0737B]/40 group/close focus:outline-none focus:ring-2 focus:ring-[#C0737B]/50 focus:ring-offset-2"
              title="Close (ESC)"
              style={{ color: '#848B79' }}
              aria-label="Close map modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover/close:text-red-500 transition-all duration-300 group-hover/close:rotate-90" />
            </button>

            {/* Venue badge - compact on mobile with improved animation */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 lg:top-6 lg:left-6 z-20 animate-in slide-in-from-left-4 duration-500">
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 bg-white/95 backdrop-blur-md px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2 rounded-full shadow-xl border-2 border-[#C0737B]/40 hover:border-[#C0737B] transition-all duration-300 hover:shadow-2xl group/badge">
                {showImageModal === 'ceremony' ? (
                  <>
                    <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#848B79] group-hover/badge:text-[#C0737B] transition-colors duration-300" fill="currentColor" />
                    <span className="text-[10px] sm:text-xs md:text-sm font-bold text-[#848B79] group-hover/badge:text-[#C0737B] transition-colors duration-300">Venue</span>
                  </>
                ) : (
                  <>
                    <Utensils className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#848B79] group-hover/badge:text-[#C0737B] transition-colors duration-300" />
                    <span className="text-[10px] sm:text-xs md:text-sm font-bold text-[#848B79] group-hover/badge:text-[#C0737B] transition-colors duration-300">Venue</span>
                  </>
                )}
              </div>
            </div>

            {/* Map section - flexible height for small screens with loading state */}
            <div className="relative w-full h-[40vh] min-h-[250px] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] sm:min-h-0 bg-gradient-to-br from-[#ACACAC]/10 via-white/80 to-[#FBFFE8]/20 overflow-hidden row-start-2 row-end-3">
              {/* Loading skeleton */}
              {!mapLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#ACACAC]/20 via-gray-200 to-[#FBFFE8]/30 animate-pulse flex items-center justify-center z-10">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 border-4 border-[#C0737B]/30 border-t-[#C0737B] rounded-full animate-spin" />
                    <p className="text-sm font-medium text-[#848B79] opacity-70">Loading map...</p>
                  </div>
                </div>
              )}
              
              {/* Map iframe with fade-in */}
              <iframe
                title={showImageModal === 'ceremony' ? 'Ceremony Location Map' : 'Reception Location Map'}
                src={`https://www.google.com/maps?q=${encodeURIComponent(showImageModal === 'ceremony' ? siteConfig.ceremony.location : siteConfig.reception.location)}&output=embed&z=16&iwloc=near`}
                className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map"
                onLoad={() => {
                  setTimeout(() => setMapLoaded(true), 100)
                }}
              />
            </div>

            {/* Enhanced content section */}
            <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-white to-white/95 backdrop-blur-sm border-t-2 border-[#C0737B]/30 relative row-start-3 row-end-4 overflow-y-auto max-h-[45vh] sm:max-h-none">
              {/* Decorative line */}
              <div className="absolute top-0 left-4 sm:left-8 right-4 sm:right-8 h-px bg-gradient-to-r from-transparent via-[#D1AB6D]/40 to-transparent" />
              
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {/* Header with venue info */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="space-y-2 flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-2 sm:gap-3 text-[#848B79] break-words group/venue">
                      {showImageModal === 'ceremony' ? (
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#C0737B] flex-shrink-0 group-hover/venue:scale-110 transition-transform duration-300" fill="currentColor" />
                      ) : (
                        <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[#C0737B] flex-shrink-0 group-hover/venue:scale-110 transition-transform duration-300" />
                      )}
                      <span className="break-words group-hover/venue:text-[#C0737B] transition-colors duration-300">
                        {showImageModal === 'ceremony' ? siteConfig.ceremony.venue : siteConfig.reception.venue}
                      </span>
                    </h3>
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[#848B79] opacity-70 hover:opacity-100 transition-opacity duration-300 group/location">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C0737B] flex-shrink-0 mt-0.5 group-hover/location:animate-bounce" />
                      <span className="break-words">{showImageModal === 'ceremony' ? siteConfig.ceremony.location : siteConfig.reception.location}</span>
                    </div>

                    {/* Date & Time info */}
                    {showImageModal === 'ceremony' && (
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#848B79] bg-gradient-to-r from-[#FBFFE8]/60 to-[#FBFFE8]/40 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-[#C0737B]/20 hover:border-[#C0737B]/40 transition-all duration-300 hover:shadow-md group/time">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C0737B] flex-shrink-0 group-hover/time:animate-pulse" />
                        <span className="break-words">{siteConfig.ceremony.date} at {siteConfig.ceremony.time}</span>
                      </div>
                    )}
                    {showImageModal === 'reception' && (
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#848B79] bg-gradient-to-r from-[#FBFFE8]/60 to-[#FBFFE8]/40 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-[#C0737B]/20 hover:border-[#C0737B]/40 transition-all duration-300 hover:shadow-md group/time">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C0737B] flex-shrink-0 group-hover/time:animate-pulse" />
                        <span className="break-words">{siteConfig.reception.date} - {siteConfig.reception.time}</span>
                      </div>
                    )}
                  </div>

                  {/* Action buttons with enhanced interactions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 flex-shrink-0">
                    <button
                      onClick={() => copyToClipboard(
                        showImageModal === 'ceremony' 
                          ? siteConfig.ceremony.location
                          : siteConfig.reception.location,
                        `modal-${showImageModal}`
                      )}
                      className={`relative flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-white border-2 border-[#C0737B] text-[#848B79] rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md hover:bg-[#FBFFE8]/30 focus:outline-none focus:ring-2 focus:ring-[#C0737B]/50 focus:ring-offset-2 overflow-hidden group/copy ${copiedItems.has(`modal-${showImageModal}`) ? 'bg-[#FBFFE8] border-[#C0737B]' : ''}`}
                      title="Copy address"
                      disabled={copiedItems.has(`modal-${showImageModal}`)}
                    >
                      {/* Ripple effect background */}
                      <span className="absolute inset-0 bg-gradient-to-r from-[#C0737B]/10 via-[#C0737B]/5 to-[#C0737B]/10 transform scale-x-0 group-hover/copy:scale-x-100 transition-transform duration-500 origin-left" />
                      
                      {copiedItems.has(`modal-${showImageModal}`) ? (
                        <>
                          <Check className="w-4 h-4 flex-shrink-0 text-[#C0737B] animate-in zoom-in duration-300" />
                          <span className="relative z-10 text-[#C0737B] font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 flex-shrink-0 relative z-10 group-hover/copy:rotate-12 transition-transform duration-300" />
                          <span className="relative z-10 hidden sm:inline">Copy Address</span>
                          <span className="relative z-10 sm:hidden">Copy</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => openInMaps(showImageModal === 'ceremony' ? ceremonyMapsLink : receptionMapsLink)}
                      className="relative flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 bg-gradient-to-r from-[#C0737B] to-[#C0737B]/90 hover:from-[#C0737B]/90 hover:to-[#C0737B] text-white rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C0737B]/50 focus:ring-offset-2 overflow-hidden group/maps"
                    >
                      {/* Shimmer effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/maps:translate-x-full transition-transform duration-1000" />
                      
                      <Navigation className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 relative z-10 group-hover/maps:translate-x-1 transition-transform duration-300" />
                      <span className="relative z-10 hidden sm:inline">Open in Maps</span>
                      <span className="relative z-10 sm:hidden">Maps</span>
                    </button>
                  </div>
                </div>

                {/* Additional info */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#848B79] opacity-60">
                  <span className="flex items-center gap-1">
                    <Camera className="w-3 h-3 flex-shrink-0" />
                    <span className="hidden sm:inline">Tap outside to close</span>
                    <span className="sm:hidden">Tap to close</span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline-flex items-center gap-1.5">
                    Press ESC to close
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}

