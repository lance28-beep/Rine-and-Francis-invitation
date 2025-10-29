"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What are the theme and motif?",
    answer:
      "Theme: Classic. Motif: Old Rose, Sage, Cream, and Gray. [COLOR_PALETTE]",
  },
  {
    question: "What is the dress code?",
    answer:
      "Semi-Formal Attire. Ladies: Long or cocktail dress. Gentlemen: Long sleeve, polo, pants or suit. Please avoid jeans and casual attire.",
  },
  {
    question: "When and where is the ceremony?",
    answer:
      "The ceremony will be held on December 27, 2025 at UCCP Mabinay Central Church, Mabinay, Negros Oriental.",
  },
  {
    question: "Where is the reception?",
    answer:
      "The reception will follow the ceremony at Cong Pavillion, Mabinay, Negros Oriental.",
  },
  {
    question: "When is the RSVP deadline?",
    answer:
      "Kindly RSVP at your earliest convenience. Your response will help us finalize our guest list. Thank you!. [RSVP_LINK]Click here to RSVP[/RSVP_LINK]",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes! Ample parking is available at both venues. We recommend arriving 15-20 minutes early to secure a spot.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Yes, we’d love to see more — but please include any additional guests in your RSVP so we can prepare.",
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer:
      "Please mention any dietary restrictions, allergies, or special meal requirements in the message field when you submit your RSVP.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We have a professional photographer, but you're welcome to take photos! We'll have a dedicated time for group photos after the ceremony.",
  },
  {
    question: "What should I do if I need to cancel my RSVP?",
    answer:
      "Please contact the couple directly as soon as possible if your plans change. They will update or remove you from the RSVP list manually.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="faq" 
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

        <h2 className="text-5xl sm:text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-[#FBFFE8] mb-3 md:mb-6 text-balance drop-shadow-2xl relative">
          <span className="relative z-10">Frequently Asked Questions</span>
          {/* Text glow effect */}
          <span className="absolute inset-0 text-[#C0737B]/20 blur-2xl -z-10">Frequently Asked Questions</span>
        </h2>
        
        <p className="text-sm md:text-xl text-[#FBFFE8] font-sans font-light max-w-2xl mx-auto px-4 leading-relaxed">
          Everything you need to know
        </p>

        {/* Bottom decorative ornaments */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
          <div className="w-1 h-1 bg-[#FBFFE8] rounded-full" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent via-[#FBFFE8]/40 to-[#FBFFE8]/20" />
        </div>
      </div>

      {/* FAQ content */}
      <div className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#FBFFE8] via-white to-[#FBFFE8] backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border-2 border-[#C0737B]/30">
            {/* Decorative corner accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-bl from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-tr from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-tl from-[#C0737B] to-[#FBFFE8] rounded-full blur-sm opacity-70" />
            
            {/* Inner decorative border */}
            <div className="absolute inset-2 border border-[#C0737B]/20 rounded-xl" />

            <div className="space-y-3 sm:space-y-4 relative z-10">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                const contentId = `faq-item-${index}`
                return (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl border-2 border-[#848B79]/20 bg-[#FBFFE8]/80 backdrop-blur shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#848B79]/40"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#C0737B]/50 focus-visible:ring-offset-2 rounded-t-lg sm:rounded-t-xl transition-colors hover:bg-[#FBFFE8]/60"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className="font-semibold text-[#848B79] pr-4 text-sm sm:text-base font-lora leading-relaxed">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#C0737B] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} sm:w-6 sm:h-6`}
                        aria-hidden
                      />
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      className={`grid transition-all duration-300 ease-out rounded-b-lg sm:rounded-b-xl ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-[#848B79]/5 to-[#848B79]/10 border-t-2 border-[#C0737B]/20">
                          {item.answer.includes("[COLOR_PALETTE]") ? (
                            <div className="space-y-3">
                              <p className="text-[#848B79] leading-relaxed text-sm sm:text-base font-lora">
                                Theme: Classic. Motif: Old Rose, Sage, Cream, and Gray.
                              </p>
                              <div>
                                <p className="text-[#848B79] font-semibold text-xs sm:text-sm mb-2">Color Palette:</p>
                                <div className="flex gap-2 flex-wrap items-center">
                                  <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-lg border border-[#C0737B]/20">
                                    <div 
                                      className="w-8 h-8 rounded-full shadow-md border-2 border-white ring-2 ring-[#C0737B]/20" 
                                      style={{ backgroundColor: '#C0737B' }}
                                      title="Old Rose"
                                    />
                                    <span className="text-xs text-[#848B79] font-medium">Old Rose</span>
                                  </div>
                                  <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-lg border border-[#C0737B]/20">
                                    <div 
                                      className="w-8 h-8 rounded-full shadow-md border-2 border-white ring-2 ring-[#C0737B]/20" 
                                      style={{ backgroundColor: '#ACACAC' }}
                                      title="Gray"
                                    />
                                    <span className="text-xs text-[#848B79] font-medium">Gray</span>
                                  </div>
                                  <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-lg border border-[#C0737B]/20">
                                    <div 
                                      className="w-8 h-8 rounded-full shadow-md border-2 border-white ring-2 ring-[#C0737B]/20" 
                                      style={{ backgroundColor: '#FBFFE8' }}
                                      title="Cream"
                                    />
                                    <span className="text-xs text-[#848B79] font-medium">Cream</span>
                                  </div>
                                  <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-lg border border-[#C0737B]/20">
                                    <div 
                                      className="w-8 h-8 rounded-full shadow-md border-2 border-white ring-2 ring-[#C0737B]/20" 
                                      style={{ backgroundColor: '#848B79' }}
                                      title="Sage"
                                    />
                                    <span className="text-xs text-[#848B79] font-medium">Sage</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <p className="text-[#848B79] leading-relaxed text-sm sm:text-base font-lora whitespace-pre-line">
                              {item.answer.includes("[RSVP_LINK]") ? (
                                <>
                                  {item.answer.split("[RSVP_LINK]")[0]}
                                  <a 
                                    href="#rsvp" 
                                    className="text-[#C0737B] underline font-semibold hover:text-[#C0737B]/80 transition-colors"
                                    onClick={(e) => {
                                      e.preventDefault()
                                      document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                  >
                                    {item.answer.match(/\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/)?.[1]}
                                  </a>
                                  {item.answer.split("[/RSVP_LINK]")[1]}
                                </>
                              ) : (
                                item.answer
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
