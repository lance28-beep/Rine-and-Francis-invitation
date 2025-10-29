"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import Link from "next/link"
import { Heart, Sparkles } from "lucide-react"
import StaggeredMenu from "./StaggeredMenu"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#countdown", label: "Countdown" },
  { href: "#gallery", label: "Gallery" },
  { href: "#messages", label: "Messages" },
  { href: "#details", label: "Details" },
  { href: "#entourage", label: "Entourage" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#registry", label: "Registry" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      if (rafIdRef.current != null) return
      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = null
        setIsScrolled(window.scrollY > 50)
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current)
      window.removeEventListener("scroll", onScroll as EventListener)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const sectionIds = navLinks.map(l => l.href.substring(1))
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio))
        if (visible.length > 0) {
          const topMost = visible[0]
          if (topMost.target && topMost.target.id) {
            const newActive = `#${topMost.target.id}`
            setActiveSection(prev => (prev === newActive ? prev : newActive))
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
      }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const menuItems = useMemo(() => navLinks.map((l) => ({ label: l.label, ariaLabel: `Go to ${l.label}`, link: l.href })), [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-700 ease-out bg-[#ACACAC]`}>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative">
        <div className="flex justify-between items-center h-14 sm:h-20">
          <Link href="#home" className="flex-shrink-0 group relative z-10">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 sm:gap-2.5 relative">
                {/* Decorative dots with enhanced animation */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#C0737B] to-[#848B79] group-hover:shadow-[0_0_8px_rgba(192,115,123,0.6)]" />
                </div>
                
                <div className="relative">
                  <Heart
                    size={18}
                    className="sm:size-6 group-hover:fill-[#FBFFE8] group-hover:text-[#FBFFE8] group-active:scale-110 transition-all duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] text-[#FBFFE8] group-hover:drop-shadow-[0_2px_12px_rgba(192,115,123,0.8)]"
                  />
                  {/* Enhanced sparkle effect */}
                  <Sparkles 
                    size={9} 
                    className="absolute -top-1 -right-1 text-[#C0737B] opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 drop-shadow-md group-hover:drop-shadow-[0_0_6px_rgba(192,115,123,0.8)]" 
                  />
                </div>
                
                <div className="text-base sm:text-2xl md:text-3xl font-serif font-bold group-hover:text-[#FBFFE8] group-active:text-[#FBFFE8] transition-all duration-500 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] text-[#FBFFE8] group-hover:drop-shadow-[0_2px_15px_rgba(192,115,123,0.5)]">
                  Rine & Francis
                </div>
                
                {/* Decorative dots with enhanced animation */}
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#C0737B] to-[#848B79] group-hover:shadow-[0_0_8px_rgba(192,115,123,0.6)]" />
                </div>
              </div>
              <div className="text-[9px] sm:text-xs font-sans tracking-[0.15em] ml-6 sm:ml-8 group-hover:text-[#FBFFE8] group-hover:tracking-[0.2em] group-active:tracking-[0.2em] transition-all duration-500 font-light text-[#FBFFE8]/90 drop-shadow-md group-hover:drop-shadow-[0_2px_8px_rgba(192,115,123,0.4)]">
                December 27, 2025
              </div>
            </div>
            
            {/* Enhanced decorative underline with glow */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C0737B] via-[#FBFFE8] to-[#848B79] group-hover:w-full transition-all duration-700 rounded-full group-hover:shadow-[0_0_8px_rgba(192,115,123,0.6)]" />
            
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C0737B]/0 via-[#C0737B]/5 to-[#C0737B]/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
          </Link>

          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium rounded-lg transition-all duration-500 relative group drop-shadow-md ${
                    isActive 
                      ? 'text-[#FBFFE8] bg-gradient-to-br from-[#848B79]/30 via-[#848B79]/20 to-[#848B79]/10 backdrop-blur-md shadow-[0_4px_15px_rgba(132,139,121,0.3)] border border-[#848B79]/40' 
                      : 'hover:text-[#FBFFE8] hover:bg-gradient-to-br hover:from-[#C0737B]/20 hover:via-[#C0737B]/15 hover:to-[#C0737B]/10 hover:backdrop-blur-md hover:border hover:border-[#C0737B]/30 hover:shadow-lg text-[#FBFFE8] hover:scale-105 active:scale-95'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C0737B] via-[#FBFFE8] to-[#848B79] transition-all duration-500 rounded-full ${
                    isActive ? 'w-full shadow-[0_0_8px_rgba(192,115,123,0.6)]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_6px_rgba(192,115,123,0.4)]'
                  }`} />
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#C0737B] animate-pulse shadow-[0_0_6px_rgba(192,115,123,0.8)]" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="md:hidden">
            <StaggeredMenu
              position="left"
              items={menuItems}
              socialItems={[]}
              displaySocials={false}
              displayItemNumbering={true}
              menuButtonColor="#FBFFE8"
              openMenuButtonColor="#FBFFE8"
              changeMenuColorOnOpen={true}
              colors={["#C0737B", "#ACACAC", "#FBFFE8", "#848B79"]}
              accentColor="#FBFFE8"
              isFixed={true}
              onMenuOpen={() => {}}
              onMenuClose={() => {}}
            />
          </div>
        </div>

      </div>
    </nav>
  )
}
