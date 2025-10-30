"use client"

import { useEffect, useState } from "react"
import { Section } from "@/components/section"
import Counter from "@/components/counter"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Create target date explicitly for December 27, 2025 at 2:00 PM
      const targetDate = new Date("2025-12-27T14:00:00+08:00").getTime() // GMT+8 timezone
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // Wedding has passed or is happening now
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
        <div className="relative group">
          {/* Multiple layered glow effects with staggered animation */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FBFFE8]/20 via-[#FBFFE8]/15 to-[#FBFFE8]/20 rounded-full blur-2xl opacity-40 animate-pulse" />
          <div className="absolute -inset-3 bg-gradient-to-r from-[#FBFFE8]/30 via-[#FBFFE8]/20 to-[#FBFFE8]/30 rounded-full blur-md opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Decorative glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FBFFE8]/40 via-[#FBFFE8]/20 to-[#FBFFE8]/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110" />

          {/* Enhanced decorative corner accents with animation */}
          <div className="absolute -top-2 -left-2 w-5 h-5 bg-gradient-to-br from-[#FBFFE8] via-[#FBFFE8] to-[#FBFFE8] rounded-full blur-sm opacity-70 shadow-lg animate-pulse" />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-bl from-[#FBFFE8] via-[#FBFFE8] to-[#FBFFE8] rounded-full blur-sm opacity-70 shadow-lg animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-gradient-to-tr from-[#FBFFE8] via-[#FBFFE8] to-[#FBFFE8] rounded-full blur-sm opacity-70 shadow-lg animate-pulse" style={{ animationDelay: '0.6s' }} />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-gradient-to-tl from-[#FBFFE8] via-[#FBFFE8] to-[#FBFFE8] rounded-full blur-sm opacity-70 shadow-lg animate-pulse" style={{ animationDelay: '0.9s' }} />

        {/* Main card with enhanced multi-layer styling */}
        <div className="relative bg-gradient-to-br from-[#FBFFE8] via-[#FBFFE8]/50 to-[#FBFFE8] backdrop-blur-md rounded-3xl p-5 sm:p-7 md:p-9 border-2 border-[#FBFFE8]/60 shadow-[0_8px_32px_rgba(132,139,121,0.3),0_0_0_1px_rgba(192,115,123,0.2)] hover:shadow-[0_12px_48px_rgba(132,139,121,0.4),0_0_40px_rgba(192,115,123,0.5)] transition-all duration-700 min-w-24 sm:min-w-28 md:min-w-36 lg:min-w-44 hover:scale-[1.08] hover:border-[#FBFFE8]">
          {/* Shimmer effect layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-3xl" />
          
          {/* Inner decorative border with gradient */}
          <div className="absolute inset-2 border border-[#FBFFE8]/40 rounded-2xl group-hover:border-[#FBFFE8]/60 transition-all duration-500" />
          
          {/* Additional inner glow */}
          <div className="absolute inset-3 bg-gradient-to-br from-[#FBFFE8]/10 to-transparent rounded-2xl group-hover:from-[#FBFFE8]/20 transition-all duration-500" />
          
          {/* Counter with enhanced styling */}
          <div className="relative z-10 flex items-center justify-center">
            <Counter
              value={value}
              places={[10, 1]}
              fontSize={56}
              padding={10}
              gap={5}
              textColor="#848B79"
              fontWeight={900}
              borderRadius={18}
              horizontalPadding={8}
              gradientHeight={18}
              gradientFrom="rgba(251,255,232,0.9)"
              gradientTo="transparent"
            />
          </div>
          
          {/* Enhanced decorative sparkle effects */}
          <div className="absolute top-3 right-3 w-3 h-3 bg-[#FBFFE8] rounded-full animate-ping opacity-80 shadow-lg" />
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#73C0B8] rounded-full animate-pulse opacity-70 shadow-md" style={{ animationDelay: '0.7s' }} />
          <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-[#FBFFE8] rounded-full animate-pulse opacity-50" style={{ animationDelay: '1.4s' }} />
        </div>
      </div>

      {/* Label with enhanced styling */}
      <div className="relative">
        <span className="text-sm sm:text-base md:text-lg font-bold text-[#FBFFE8] uppercase tracking-widest drop-shadow-lg relative z-10 group-hover:text-[#FBFFE8] transition-colors duration-500">
          {label}
        </span>
        {/* Label background glow with multiple layers */}
        <div className="absolute inset-0 bg-[#FBFFE8]/10 rounded-lg blur-sm -z-10 group-hover:bg-[#FBFFE8]/20 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBFFE8]/5 via-[#FBFFE8]/10 to-[#FBFFE8]/5 rounded-lg blur-md -z-20 group-hover:from-[#FBFFE8]/10 group-hover:via-[#FBFFE8]/15 group-hover:to-[#FBFFE8]/10 transition-all duration-500" />
      </div>
    </div>
  )

  return (
    <Section
      id="countdown"
      className="relative bg-[url('/background/backgroundimg.png')] bg-center bg-cover py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background overlay for readability over the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#848B79]/60 via-[#ACACAC]/40 to-[#848B79]/60 pointer-events-none" />
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes with color palette */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#FBFFE8]/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-20 right-20 w-16 h-16 bg-[#FBFFE8]/15 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#FBFFE8]/8 rounded-full blur-2xl animate-pulse delay-2000" />
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-[#FBFFE8]/12 rounded-full blur-lg animate-pulse delay-500" />
        
        {/* Decorative lines with gradient */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/30 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/25 to-transparent" />
        
        {/* Corner decorative elements with color palette */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#FBFFE8]/15 via-[#FBFFE8]/10 to-transparent rounded-br-3xl" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FBFFE8]/15 via-[#FBFFE8]/10 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#FBFFE8]/15 via-[#FBFFE8]/10 to-transparent rounded-tr-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#FBFFE8]/15 via-[#FBFFE8]/10 to-transparent rounded-tl-3xl" />
      </div>

      {/* Custom larger title */}
      <div className="relative z-10 text-center mb-16 md:mb-20">
        {/* Decorative ornaments */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/60 to-[#FBFFE8]/30" />
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-[#FBFFE8] rounded-full" />
            <div className="w-1 h-1 bg-[#FBFFE8] rounded-full self-center" />
            <div className="w-2 h-2 bg-[#FBFFE8] rounded-full" />
          </div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#FBFFE8]/60 to-[#FBFFE8]/30" />
        </div>
        
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#FBFFE8] mb-6 text-balance drop-shadow-lg relative">
          <span className="relative z-10">Count Down With Us</span>
          {/* Text glow effect */}
          <span className="absolute inset-0 text-[#FBFFE8]/20 blur-2xl -z-10">Count Down With Us</span>
        </h2>
        
        <div className="flex items-center justify-center gap-4 mb-8">
        </div>
        
        <p className="text-lg md:text-xl text-[#FBFFE8] font-sans font-light max-w-2xl mx-auto px-4 leading-relaxed">
          Every moment brings us closer to our forever. Join us as we count down to the most magical day of our lives.
        </p>
        
        {/* Bottom decorative ornaments */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
          <div className="w-1 h-1 bg-[#FBFFE8] rounded-full" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
        </div>
      </div>

      {/* Main countdown container */}
      <div className="relative z-10">
        <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-10 sm:mb-12 md:mb-16 lg:mb-20 flex-wrap px-2 sm:px-4">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Wedding date presentation */}
        <div className="flex justify-center px-2 sm:px-4">
          <div className="max-w-2xl w-full">
            {/* Header */}
            <div className="text-center mb-8">
              <p className="text-xs sm:text-sm md:text-base text-[#FBFFE8] font-semibold uppercase tracking-[0.2em] mb-3 drop-shadow-md">
                Save The Date
              </p>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#FBFFE8]/50" />
                <div className="w-1.5 h-1.5 bg-[#FBFFE8] rounded-full" />
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#FBFFE8]/50" />
              </div>
            </div>

            {/* Date Section */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                {/* Day and Month */}
                <div className="text-center sm:text-right">
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FBFFE8] leading-none drop-shadow-lg">
                    December
                  </p>
                  <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#C0737B] leading-none mt-1 drop-shadow-lg">
                    27
                  </p>
                </div>
                
                {/* Separator */}
                <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-[#FBFFE8]/50 to-transparent" />
                
                {/* Year */}
                <div className="text-center sm:text-left">
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FBFFE8] leading-none drop-shadow-lg">
                    2025
                  </p>
                </div>
                </div>
              </div>

            {/* Centered Time Section */}
            <div className="w-full flex justify-center">
              <p className="text-sm sm:text-base md:text-lg text-[#FBFFE8] font-semibold uppercase tracking-[0.2em] mb-3 drop-shadow-md text-center">
                2:00 PM
              </p>
            </div>


            {/* Bottom decorative element */}
            <div className="flex items-center justify-center mt-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/40 to-transparent" />
              <div className="mx-3 w-1 h-1 bg-[#FBFFE8] rounded-full" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#FBFFE8]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
