"use client"

import { principalSponsors } from "@/content/site"
import { Heart } from "lucide-react"

export function PrincipalSponsors() {
  return (
    <section 
      id="sponsors" 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[url('/background/detailsbg.png')] bg-center bg-cover"
    >
      {/* Background overlay for readability over the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#848B79]/60 via-[#ACACAC]/40 to-[#848B79]/60 pointer-events-none" />
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#C0737B]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#FBFFE8]/15 rounded-full progress-blur-lg animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#C0737B]/8 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#FBFFE8]/12 rounded-full blur-xl animate-pulse delay-500" />
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0737B]/30 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/25 to-transparent" />
        
        {/* Corner decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-br-3xl" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-tr-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-tl-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
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
            <span className="relative z-10">Principal Sponsors</span>
            {/* Text glow effect */}
            <span className="absolute inset-0 text-[#C0737B]/20 blur-2xl -z-10">Principal Sponsors</span>
          </h2>
 
          <p className="text-lg md:text-xl text-[#FBFFE8] font-sans font-light max-w-2xl mx-auto px-4 leading-relaxed">
            Our Beloved Godparents
          </p>

          {/* Bottom decorative ornaments */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
            <div className="w-1 h-1 bg-[#FBFFE8] rounded-full" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
          </div>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {principalSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C0737B]/20 via-[#FBFFE8]/10 to-[#C0737B]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-[#FBFFE8] via-white to-[#FBFFE8] backdrop-blur-md rounded-2xl p-5 sm:p-6 border-2 border-[#C0737B]/30 shadow-lg hover:shadow-2xl hover:border-[#C0737B]/60 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
                {/* Decorative corner accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-bl from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-tr from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-tl from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
                
                {/* Inner decorative border */}
                <div className="absolute inset-2 border border-[#C0737B]/20 rounded-xl group-hover:border-[#C0737B]/40 transition-all duration-500" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10 text-center space-y-3">
                  {/* Heart icon */}
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-gradient-to-br from-[#C0737B]/20 to-[#FBFFE8]/20 rounded-full group-hover:scale-110 transition-transform duration-500">
                      <Heart className="w-5 h-5 text-[#848B79]" />
                    </div>
                  </div>
                  
                  {/* Names */}
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base font-semibold text-[#848B79] leading-relaxed group-hover:text-[#C0737B] transition-colors duration-300">
                      {sponsor.name}
                    </p>
                    {!!sponsor.spouse && (
                      <>
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#C0737B]/40 to-transparent" />
                          <span className="text-xs text-[#ACACAC]">&</span>
                          <div className="w-8 h-px bg-gradient-to-l from-transparent via-[#C0737B]/40 to-transparent" />
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-[#848B79] leading-relaxed group-hover:text-[#C0737B] transition-colors duration-300">
                          {sponsor.spouse}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
