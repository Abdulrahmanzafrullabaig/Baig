"use client"

import { useEffect, useRef, useState } from "react"

type SoundType = "hover" | "click" | "success" | "navigate"

export function useSoundEffects() {
  const [soundsEnabled, setSoundsEnabled] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Initialize AudioContext on client side only
    if (typeof window !== "undefined") {
      try {
        // Create AudioContext only once
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
        setSoundsEnabled(true)
      } catch (error) {
        console.error("Web Audio API is not supported in this browser:", error)
      }
    }

    // Cleanup
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(console.error)
      }
    }
  }, [])

  const playSound = (type: SoundType) => {
    if (!soundsEnabled || !audioContextRef.current) return

    try {
      const context = audioContextRef.current
      const oscillator = context.createOscillator()
      const gainNode = context.createGain()

      // Connect the nodes
      oscillator.connect(gainNode)
      gainNode.connect(context.destination)

      // Configure sound based on type
      switch (type) {
        case "hover":
          oscillator.type = "sine"
          oscillator.frequency.setValueAtTime(1200, context.currentTime)
          gainNode.gain.setValueAtTime(0.05, context.currentTime)
          oscillator.start()
          oscillator.stop(context.currentTime + 0.1)
          gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1)
          break

        case "click":
          oscillator.type = "square"
          oscillator.frequency.setValueAtTime(800, context.currentTime)
          gainNode.gain.setValueAtTime(0.1, context.currentTime)
          oscillator.start()
          oscillator.stop(context.currentTime + 0.15)
          gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.15)
          break

        case "success":
          // First tone
          const osc1 = context.createOscillator()
          const gain1 = context.createGain()
          osc1.connect(gain1)
          gain1.connect(context.destination)
          osc1.type = "sine"
          osc1.frequency.setValueAtTime(600, context.currentTime)
          gain1.gain.setValueAtTime(0.1, context.currentTime)
          osc1.start(context.currentTime)
          osc1.stop(context.currentTime + 0.1)
          gain1.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1)

          // Second tone (higher)
          const osc2 = context.createOscillator()
          const gain2 = context.createGain()
          osc2.connect(gain2)
          gain2.connect(context.destination)
          osc2.type = "sine"
          osc2.frequency.setValueAtTime(900, context.currentTime + 0.1)
          gain2.gain.setValueAtTime(0.1, context.currentTime + 0.1)
          osc2.start(context.currentTime + 0.1)
          osc2.stop(context.currentTime + 0.2)
          gain2.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.2)
          break

        case "navigate":
          oscillator.type = "sine"
          oscillator.frequency.setValueAtTime(500, context.currentTime)
          gainNode.gain.setValueAtTime(0.1, context.currentTime)
          oscillator.start()
          oscillator.frequency.exponentialRampToValueAtTime(700, context.currentTime + 0.2)
          oscillator.stop(context.currentTime + 0.2)
          gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.2)
          break
      }
    } catch (error) {
      console.error(`Error playing ${type} sound:`, error)
    }
  }

  return { playSound, soundsEnabled }
}
