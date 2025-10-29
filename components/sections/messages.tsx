"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { MessageCircle, Heart, Sparkles, Send } from "lucide-react"
import { Section } from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import MessageWallDisplay from "./message-wall-display"

interface Message {
  timestamp: string
  name: string
  message: string
}

interface MessageFormProps {
  onSuccess?: () => void
  onMessageSent?: () => void
}

function MessageForm({ onSuccess, onMessageSent }: MessageFormProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [nameValue, setNameValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const message = formData.get("message") as string

    const googleFormData = new FormData()
    googleFormData.append("entry.405401269", name)
    googleFormData.append("entry.893740636", message)

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfaEcj5Cq_b_VIp92g5EyU0NUxTwgJIkI3qhwCDojaTn156jA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: googleFormData,
        }
      )

      toast({
        title: "Message Sent! 💌",
        description: "Your heartfelt wishes have been delivered",
        duration: 3000,
      })

      setIsSubmitted(true)
      setNameValue("")
      setMessageValue("")
      formRef.current?.reset()
      
      // Reset submitted state after animation
      setTimeout(() => setIsSubmitted(false), 1000)
      
      if (onSuccess) onSuccess()
      if (onMessageSent) onMessageSent()
    } catch (error) {
      toast({
        title: "Unable to send message",
        description: "Please try again in a moment",
        variant: "destructive",
        duration: 3000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative w-full max-w-lg mx-auto px-4 sm:px-0">
      {/* Enhanced decorative background elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary/20 rounded-full blur-sm animate-pulse sm:w-12 sm:h-12 sm:-top-6 sm:-left-6"></div>
      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-secondary/10 rounded-full blur-md animate-pulse sm:w-16 sm:h-16 sm:-bottom-6 sm:-right-6"></div>
      <div className="absolute top-1/2 -left-2 w-6 h-6 bg-secondary/15 rounded-full blur-sm animate-pulse sm:w-8 sm:h-8 sm:-left-3"></div>
      
      <Card className={`relative w-full border border-white/30 shadow-2xl bg-white/40 backdrop-blur-md transition-all duration-500 group overflow-hidden ${
        isFocused ? 'shadow-2xl scale-[1.02] border-white/50 bg-white/50' : 'hover:shadow-2xl hover:bg-white/45'
      } ${isSubmitted ? 'animate-bounce' : ''}`}>
        {/* Glass effect gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
        
        {/* Frosted glass effect */}
        <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5"></div>
        
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        {/* Success animation overlay */}
        {isSubmitted && (
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-300/10 flex items-center justify-center z-20 pointer-events-none">
            <div className="flex flex-col items-center gap-2 animate-pulse">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <p className="text-green-600 font-semibold text-lg">Sent!</p>
            </div>
          </div>
        )}
        
        <CardContent className="relative p-6 sm:p-8 lg:p-10">
          {/* Header with icon */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="relative inline-block mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/20 rounded-full blur-lg scale-150"></div>
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-playfair font-bold text-foreground mb-2">
              Share Your Love
            </h3>
            <p className="text-xs sm:text-sm text-foreground/70 font-lora">
              Your message will be treasured forever
            </p>
          </div>

          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="space-y-5 sm:space-y-6"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            {/* Name Field */}
            <div className="space-y-2 sm:space-y-3">
              <label className="block text-sm sm:text-base font-medium text-foreground font-lora flex items-center gap-2">
                <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  focusedField === 'name' ? 'scale-110 bg-secondary/30' : ''
                }`}>
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
                </div>
                Your Name
              </label>
              <div className="relative">
                <Input
                  name="name"
                  required
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your name"
                  className={`w-full border rounded-xl py-3 sm:py-4 px-4 sm:px-5 text-sm sm:text-base font-lora placeholder:text-foreground/50 transition-all duration-300 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg ${
                    focusedField === 'name' 
                      ? 'border-white/50 focus:border-white/70 focus:ring-4 focus:ring-white/30 shadow-lg bg-white/70' 
                      : 'border-white/30 hover:border-white/40'
                  }`}
                />
                {nameValue && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-sm sm:text-base font-medium text-foreground font-lora flex items-center gap-2">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    focusedField === 'message' ? 'scale-110 bg-secondary/30' : ''
                  }`}>
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
                  </div>
                  Your Message
                </label>
                {messageValue && (
                  <span className={`text-xs font-lora transition-colors ${
                    messageValue.length > 500 ? 'text-red-500' : 'text-foreground/50'
                  }`}>
                    {messageValue.length}/500
                  </span>
                )}
              </div>
              <div className="relative">
                <Textarea
                  name="message"
                  required
                  value={messageValue}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      setMessageValue(e.target.value)
                    }
                  }}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Share your love, memories, or well wishes..."
                  className={`w-full border rounded-xl min-h-[100px] sm:min-h-[120px] text-sm sm:text-base font-lora placeholder:text-foreground/50 transition-all duration-300 resize-none bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg py-3 sm:py-4 px-4 sm:px-5 ${
                    focusedField === 'message' 
                      ? 'border-white/50 focus:border-white/70 focus:ring-4 focus:ring-white/30 shadow-lg bg-white/70' 
                      : 'border-white/30 hover:border-white/40'
                  }`}
                />
                {messageValue && (
                  <div className="absolute right-3 top-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting || !nameValue.trim() || !messageValue.trim()}
              className="w-full bg-gradient-to-r from-secondary/90 via-secondary to-secondary/90 hover:from-secondary hover:via-secondary/90 hover:to-secondary text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-sm sm:text-base font-lora font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group border border-white/20"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2 relative z-10">
                  <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2 relative z-10">
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export function Messages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const fetchMessages = useCallback(() => {
    setLoading(true)
    fetch(
      "https://script.google.com/macros/s/AKfycbyvRT6Ms0_qpfUnqbY2l1MvsI2ijCeJkVFR-sVE22OJiJmwnS8fOoUduUTJYz1ctTgE/exec"
    )
      .then((res) => res.json())
      .then((data) => {
        const rows: string[][] = data.GoogleSheetData
        const [header, ...entries] = rows
        const idxName = header.findIndex((h: string) => h.toLowerCase().includes("name"))
        const idxMsg = header.findIndex((h: string) => h.toLowerCase().includes("message"))
        const idxTime = header.findIndex((h: string) => h.toLowerCase().includes("timestamp"))
        const parsed = entries
          .map((row: string[]) => ({
            timestamp: row[idxTime],
            name: row[idxName],
            message: row[idxMsg],
          }))
          .reverse()
        setMessages(parsed)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Failed to fetch messages:", error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchMessages()
  }, [fetchMessages])

  return (
    <Section id="messages" bgColor="sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
         <div className="text-center mb-8 sm:mb-12 lg:mb-16">
           <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 text-balance drop-shadow-lg">
             Love Messages
           </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative inline-block mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-full blur-xl scale-150 animate-pulse"></div>
              {/* <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
              </div> */}
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-white mb-3 sm:mb-4">
              Share Your Heartfelt Wishes
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 font-lora leading-relaxed max-w-2xl mx-auto px-4">
              Your messages of love and joy will be treasured forever. 
              Share your memories, well wishes, and congratulations for the happy couple.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20">
          <MessageForm onMessageSent={fetchMessages} />
        </div>

        {/* Messages Display Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="relative inline-block mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/15 to-secondary/5 rounded-full blur-lg scale-150"></div>
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary/15 to-secondary/5 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-white mb-2 sm:mb-3">
              Messages from Loved Ones
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-white/70 font-lora max-w-2xl mx-auto px-4">
              Read the beautiful messages shared by family and friends
            </p>
          </div>
          
          <MessageWallDisplay messages={messages} loading={loading} />
        </div>

      </div>
    </Section>
  )
}
