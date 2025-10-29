"use client"

import { useState } from "react"
import Image from "next/image"
import { Section } from "@/components/section"
import { Gift, Heart, Download, ExternalLink, X } from "lucide-react"

export function Registry() {
  const [showGCash, setShowGCash] = useState(false)
  const [selectedQR, setSelectedQR] = useState<{ src: string; label: string } | null>(null)
  
  return (
    <Section id="registry" className="relative py-16 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center mb-12 md:mb-16">
        <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Gift className="w-7 h-7 sm:w-8 sm:h-8 text-[#C0737B]" />
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#FBFFE8] text-balance drop-shadow-lg">
            Monetary Gifts
          </h2>
          <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#C0737B]" />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-[#FBFFE8] leading-relaxed font-sans max-w-3xl mx-auto px-4">
          Your love and presence are more than enough. If you wish to bless us with a monetary gift,
          please feel free to use the option below. Thank you for being part of our story.
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {/* Appreciation Note */}
        <div className="rounded-2xl p-5 sm:p-8 md:p-10 border-2 border-[#C0737B]/30 bg-gradient-to-br from-[#FBFFE8]/90 to-[#FBFFE8]/70 backdrop-blur-md shadow-lg mb-8 sm:mb-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[#C0737B] mr-2" />
              <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#848B79' }}>A Note from Us</h3>
              <Heart className="w-6 h-6 text-[#C0737B] ml-2" />
            </div>
            <p className="leading-relaxed text-base sm:text-lg font-normal max-w-2xl mx-auto" style={{ color: '#848B79' }}>
              With all that we have, we are truly blessed. Your presence and prayers are what we request.
              But if you desire to give nonetheless, monetary gift is the one we suggest.
            </p>
          </div>
        </div>

        {/* GCash QR Card */}
        <div className="rounded-2xl border-2 border-[#C0737B]/30 bg-gradient-to-br from-[#FBFFE8] to-[#FBFFE8]/90 p-5 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="mb-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#C0737B] to-[#C0737B]/80 flex items-center justify-center shadow-lg ring-4 ring-[#C0737B]/20">
                  <span className="text-white font-bold text-2xl sm:text-3xl">₱</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-1" style={{ color: '#848B79' }}>Monetary Options</h3>
                  <p className="text-xs sm:text-base" style={{ color: '#848B79' }}>Scan any QR below to send your gift</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGCash(v => !v)}
                aria-expanded={showGCash}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm sm:text-base font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 shrink-0 shadow-lg hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: '#C0737B', color: '#FBFFE8' }}
              >
                {showGCash ? "Hide QR" : "Show QR Options"}
              </button>
            </div>
          </div>

          {/* QR Code Display */}
          <div className={`transition-all duration-500 overflow-hidden ${showGCash ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="mb-4 text-sm sm:text-lg leading-relaxed" style={{ color: '#848B79' }}>Scan any QR below or open full size to send via your preferred app</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { src: '/QR/QR_1.png', label: 'QR Option 1' },
                { src: '/QR/QR_2.png', label: 'QR Option 2' },
                { src: '/QR/QR_3.png', label: 'QR Option 3' },
              ].map(({ src, label }) => (
                <div key={src} className="group rounded-2xl border-2 border-[#C0737B]/20 bg-white/80 p-3 sm:p-4 shadow-md hover:shadow-lg transition-all">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setSelectedQR({ src, label })}
                      className="w-full"
                      aria-label={`Preview ${label}`}
                    >
                      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-white to-[#FBFFE8] p-3 sm:p-5 ring-0 group-hover:ring-4 ring-[#C0737B]/30 transition-all duration-300">
                        <Image
                          src={src}
                          alt={label}
                          width={800}
                          height={800}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </button>
                  </div>
                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                   
                    <div className="flex gap-2 w-full sm:w-auto">
                      <a
                        href={src}
                        download
                        aria-label={`Download ${label} QR`}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#C0737B]/30 px-3 py-1.5 text-xs font-semibold text-[#848B79] hover:bg-[#FBFFE8] transition-colors flex-1 sm:flex-none"
                      >
                        <Download className="w-4 h-4" />
                        
                      </a>
                      <a
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${label} QR`}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C0737B] text-white px-3 py-1.5 text-xs font-semibold hover:opacity-90 transition-opacity flex-1 sm:flex-none"
                      >
                        <ExternalLink className="w-4 h-4" />
                       
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#C0737B]/10 border border-[#C0737B]/20">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💡</div>
                <div>
                  <p className="text-sm sm:text-base font-semibold mb-1" style={{ color: '#848B79' }}>How to use:</p>
                  <ol className="text-xs sm:text-base space-y-1 list-decimal list-inside ml-2" style={{ color: '#848B79' }}>
                    <li>Open your preferred app (GCash, bank, etc.)</li>
                    <li>Tap on "Scan QR"</li>
                    <li>Point your camera at the QR code</li>
                    <li>Enter your desired amount and send</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#registry"
                className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#C0737B]/30 bg-[#FBFFE8]/80 backdrop-blur-sm hover:bg-[#FBFFE8] hover:border-[#C0737B]/40 px-5 py-3 text-sm sm:text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0737B]/30 text-[#848B79]"
              >
                <Download className="w-5 h-5" />
                <span>Save QRs</span>
              </a>
              <a
                href="#registry"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#C0737B] text-white px-5 py-3 text-sm sm:text-base font-semibold hover:opacity-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0737B]/40 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Options</span>
              </a>
            </div>
          </div>
        </div>

        {/* Thank you message */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm sm:text-lg text-white italic">
            Thank you for your generosity ❤️
          </p>
        </div>
      </div>
      {/* QR Lightbox Modal */}
      {selectedQR && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedQR(null)}
        >
          <div className="relative w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="absolute -top-3 -right-3 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg border border-[#C0737B]/30"
              aria-label="Close"
              onClick={() => setSelectedQR(null)}
            >
              <X className="w-5 h-5 text-[#848B79]" />
            </button>
            <div className="rounded-2xl bg-gradient-to-br from-white to-[#FBFFE8] p-4 sm:p-6 shadow-2xl border-2 border-[#C0737B]/30">
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-white p-3 sm:p-6">
                <Image
                  src={selectedQR.src}
                  alt={selectedQR.label}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-[#848B79]">{selectedQR.label}</span>
                <div className="flex gap-2">
                  <a
                    href={selectedQR.src}
                    download
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-[#C0737B]/30 px-3 py-1.5 text-xs font-semibold text-[#848B79] hover:bg-[#FBFFE8] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                  <a
                    href={selectedQR.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#C0737B] text-white px-3 py-1.5 text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
