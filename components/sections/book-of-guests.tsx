"use client"

import { useState, useEffect } from "react"
import { Loader2, Mail, Calendar, MessageSquare, Heart, Sparkles, Star } from "lucide-react"

type GuestEntry = {
  timestamp: string
  name: string
  email: string
  guests: string
  message: string
}

export function BookOfGuests() {
  const [guests, setGuests] = useState<GuestEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalGuests, setTotalGuests] = useState(0)

  const getInitials = (name: string) => {
    if (!name) return "?"
    const parts = name
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
    return parts.map((p) => p[0]?.toUpperCase()).join("") || "?"
  }

  const fetchGuests = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby6eFA7dts1r_m5YKO0hZ4Rc8ELDxapnrvjBaQVjc0tcNWIplFUSH6DBwdQ5dvbvlnV/exec",
        { cache: "no-store" }
      )

      if (!response.ok) {
        throw new Error("Failed to fetch guest list")
      }

      const data = await response.json()

      if (!data || !data.GoogleSheetData) {
        setGuests([])
        setTotalGuests(0)
        return
      }

      const rows: string[][] = data.GoogleSheetData
      if (!Array.isArray(rows) || rows.length <= 1) {
        setGuests([])
        setTotalGuests(0)
        return
      }

      const header = rows[0]
      const entries = rows.slice(1)

      const guestEntries: GuestEntry[] = entries.map((row) => {
        const rowObj: Record<string, string> = {}
        header.forEach((col, i) => {
          rowObj[col] = row[i] || ""
        })
        return {
          timestamp: rowObj["Timestamp"] || new Date().toISOString(),
          name: rowObj["Full Name"] || "Guest",
          email: rowObj["Email"] || "",
          guests: rowObj["Number Of Guests"] || "1",
          message: rowObj["Message"] || "",
        }
      })

      setGuests(guestEntries)
      setTotalGuests(guestEntries.reduce((sum, entry) => sum + parseInt(entry.guests), 0))
    } catch (error: any) {
      console.error("Failed to load guests:", error)
      setError(error?.message || "Failed to load guest list")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Initial fetch
    fetchGuests()

    // Set up event listener for RSVP updates
    const handleRsvpUpdate = () => {
      // Add a small delay to allow Google Sheets to update
      setTimeout(() => {
        fetchGuests()
      }, 2000)
    }

    window.addEventListener("rsvpUpdated", handleRsvpUpdate)

    return () => {
      window.removeEventListener("rsvpUpdated", handleRsvpUpdate)
    }
  }, [])

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
  }

  return (
    <div 
      id="guests" 
      className="relative py-20 md:py-32 overflow-hidden bg-[url('/background/detailsbg.png')] bg-center bg-cover"
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#848B79]/60 via-[#ACACAC]/40 to-[#848B79]/60 pointer-events-none" />
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#C0737B]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#FBFFE8]/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#C0737B]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#FBFFE8]/12 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0737B]/30 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/25 to-transparent" />
        
        {/* Corner decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-br-3xl" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-tr-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#C0737B]/15 via-[#FBFFE8]/10 to-transparent rounded-tl-3xl" />
      </div>

      {/* Enhanced title section */}
      <div className="relative z-10 text-center mb-8 md:mb-20">
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

        <div className="inline-flex items-center gap-1 md:gap-3 mb-2 md:mb-4">
          <Sparkles className="text-[#FBFFE8]/80 h-3 w-3 md:h-6 md:w-6 animate-pulse" />
          <span className="text-[#FBFFE8]/80 font-lora text-xs md:text-sm uppercase tracking-wider">Guest Registry</span>
          <Sparkles className="text-[#FBFFE8]/80 h-3 w-3 md:h-6 md:w-6 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h2 className="text-5xl sm:text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-[#FBFFE8] mb-3 md:mb-6 text-balance drop-shadow-2xl relative">
          <span className="relative z-10">Book of Guests</span>
          {/* Text glow effect */}
          <span className="absolute inset-0 text-[#C0737B]/20 blur-2xl -z-10">Book of Guests</span>
        </h2>
        
        <p className="text-sm md:text-xl text-[#FBFFE8] font-sans font-light max-w-2xl mx-auto px-4 leading-relaxed">
          See who's celebrating with us on our special day
        </p>

        {/* Bottom decorative ornaments */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
          <div className="w-1 h-1 bg-[#FBFFE8] rounded-full" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
        </div>
      </div>

      {/* Enhanced guests content */}
      <div className="relative z-10">
        {/* Premium stats card */}
        <div className="text-center mb-6 sm:mb-12 px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="relative max-w-3xl mx-auto">
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-[#FBFFE8] via-white to-[#FBFFE8] backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#C0737B]/30 shadow-lg">
              {/* Decorative corner accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-[#D1AB6D] to-[#E0CFB5] rounded-full blur-sm opacity-70" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-bl from-[#D1AB6D] to-[#E0CFB5] rounded-full blur-sm opacity-70" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-tr from-[#D1AB6D] to-[#E0CFB5] rounded-full blur-sm opacity-70" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-tl from-[#D1AB6D] to-[#E0CFB5] rounded-full blur-sm opacity-70" />
              
              {/* Inner decorative border */}
              <div className="absolute inset-2 border border-[#C0737B]/20 rounded-xl" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-1 md:gap-3 mb-2 md:mb-4">
                  <div className="bg-gradient-to-r from-[#C0737B] to-[#C0737B]/80 p-1 md:p-3 rounded-full shadow-lg">
                    <Heart className="text-white h-3 w-3 md:h-6 md:w-6" />
                  </div>
                  <h3 className="text-sm sm:text-2xl md:text-3xl font-playfair font-bold text-[#848B79]">
                    {totalGuests} {totalGuests === 1 ? "Guest" : "Guests"} Celebrating With Us
                  </h3>
                </div>
                <p className="text-xs sm:text-base md:text-lg text-gray-600 font-lora leading-relaxed">
                  Thank you to everyone who has RSVP'd! We can't wait to celebrate with you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced guest list container */}
        <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#FBFFE8] via-white to-[#FBFFE8] backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border-2 border-[#C0737B]/30">
            {/* Decorative corner accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-bl from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-tr from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-tl from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
            
            {/* Inner decorative border */}
            <div className="absolute inset-2 border border-[#C0737B]/20 rounded-xl" />
            {isLoading ? (
              <div className="flex items-center justify-center h-24 sm:h-48">
                <div className="flex flex-col items-center gap-2 md:gap-4">
                  <div className="relative">
                    <Loader2 className="h-6 w-6 md:h-10 md:w-10 animate-spin text-[#848B79]" />
                    <div className="absolute inset-0 h-6 w-6 md:h-10 md:w-10 animate-ping rounded-full bg-[#848B79]/20"></div>
                  </div>
                  <span className="text-[#848B79] font-lora text-xs md:text-lg font-medium">Loading guests...</span>
                </div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-24 sm:h-48 text-red-500">
                <div className="flex flex-col items-center gap-2 md:gap-4">
                  <div className="bg-red-100 p-2 md:p-4 rounded-full">
                    <MessageSquare className="h-5 w-5 md:h-8 md:w-8 text-red-500" />
                  </div>
                  <span className="font-lora text-xs md:text-lg">{error}</span>
                </div>
              </div>
            ) : guests.length === 0 ? (
              <div className="flex items-center justify-center py-10 sm:py-16">
                <div className="relative text-center bg-gradient-to-br from-[#848B79] to-[#848B79]/90 rounded-2xl px-6 sm:px-10 py-8 sm:py-12 shadow-2xl border border-white/20 max-w-xl w-full">
                  {/* Decorative glow */}
                  <div className="absolute -inset-1 rounded-2xl bg-white/10 blur-xl opacity-30 pointer-events-none" />
                  <div className="relative">
                    <div className="relative inline-flex items-center justify-center mb-4 sm:mb-6">
                      <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-60" />
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/25 flex items-center justify-center shadow-lg">
                        <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-[#FBFFE8]" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-playfair font-bold text-[#FBFFE8] mb-2 sm:mb-3">
                      No guests have RSVP'd yet
                    </h3>
                    <p className="text-xs sm:text-base text-[#FBFFE8] font-lora max-w-md mx-auto leading-relaxed">
                      Be the first to RSVP and kick off the celebration!
                    </p>
                    <div className="mt-4 sm:mt-6 flex justify-center">
                      <div className="inline-flex items-center gap-2 bg-white text-[#848B79] rounded-full px-3 sm:px-5 py-1.5 sm:py-2 shadow-md">
                        <Sparkles className="h-4 w-4" />
                        <span className="text-xs sm:text-sm font-lora">Use the RSVP form above</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2 sm:space-y-6 relative z-10">
                {guests.map((guest, index) => (
                  <div
                    key={index}
                    className="relative"
                  >
                    {/* Main card */}
                    <div className={`relative p-2 sm:p-6 rounded-md sm:rounded-xl border-2 ${
                      index % 2 === 0 
                        ? "bg-gradient-to-r from-[#848B79]/5 to-[#FBFFE8] border-[#848B79]/20" 
                        : "bg-gradient-to-r from-[#FBFFE8] to-[#848B79]/5 border-[#848B79]/20"
                    }`}>
                    
                    <div className="flex flex-col gap-2 sm:gap-4">
                      {/* Header section */}
                      <div className="flex items-start gap-2 sm:gap-3">
                        {/* Avatar */}
                        <div className="relative h-8 w-8 sm:h-12 sm:w-12 flex-shrink-0">
                          <div className="h-full w-full rounded-full bg-gradient-to-br from-[#848B79] to-[#ACACAC] text-white flex items-center justify-center font-semibold shadow-lg ring-2 ring-white text-xs sm:text-base">
                            {getInitials(guest.name)}
                          </div>
                        </div>
                        
                        {/* Name and Email */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <h4 className="font-lora text-[#848B79] text-sm sm:text-xl font-semibold leading-tight">
                              {guest.name}
                            </h4>
                            {/* Guest count badge */}
                            <div className="bg-gradient-to-r from-[#C0737B] to-[#C0737B]/90 text-white font-lora px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg inline-flex self-start sm:self-auto">
                              {guest.guests} {parseInt(guest.guests) === 1 ? "Guest" : "Guests"}
                            </div>
                          </div>
                          <div className="flex items-center text-xs sm:text-sm text-[#848B79] mt-0.5 sm:mt-1">
                            <Mail className="h-2 w-2 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-[#C0737B] flex-shrink-0" />
                            <span className="font-lora break-all truncate text-xs sm:text-sm">{guest.email}</span>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-[#C0737B]/20 to-transparent" />

                      {/* Premium message section */}
                      {guest.message && (
                        <div className="relative">
                          <div className="bg-gradient-to-r from-[#848B79]/10 to-[#848B79]/5 rounded-md sm:rounded-xl p-2 sm:p-4 border-l-2 sm:border-l-4 border-[#C0737B]">
                            <div className="flex items-start gap-1 sm:gap-3">
                              <div className="bg-[#C0737B] p-0.5 sm:p-2 rounded-full flex-shrink-0">
                                <MessageSquare className="h-2 w-2 sm:h-4 sm:w-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <p className="text-xs sm:text-base text-[#848B79] font-lora leading-relaxed italic">
                                  "{guest.message}"
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Footer with timestamp */}
                      <div className="flex items-center justify-between pt-1 sm:pt-2 border-t border-[#ACACAC]/40">
                        <div className="text-xs text-[#ACACAC] flex items-center gap-0.5 sm:gap-2">
                          <Calendar className="h-2 w-2 sm:h-3 sm:w-3 text-[#C0737B]" />
                          <span className="font-lora text-xs">RSVP'd on {formatDate(guest.timestamp)}</span>
                        </div>
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <Star className="h-2 w-2 sm:h-3 sm:w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-[#ACACAC] font-lora">Guest #{index + 1}</span>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
