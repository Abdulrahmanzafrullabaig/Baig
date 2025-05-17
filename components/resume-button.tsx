"use client"

import { motion } from "framer-motion"
import { FileDown } from "lucide-react"
import { useSoundEffects } from "./sound-effects"

interface ResumeButtonProps {
  className?: string
  variant?: "primary" | "outline"
}

export default function ResumeButton({ className = "", variant = "primary" }: ResumeButtonProps) {
  const { playSound, soundsEnabled } = useSoundEffects()

  const handleHover = () => {
    if (soundsEnabled) {
      playSound("hover")
    }
  }

  const handleClick = () => {
    if (soundsEnabled) {
      playSound("click")
    }
  }

  return (
    <motion.a
      href="/resume.pdf"
      download="Abdul_Rahman_Baig_Resume.pdf"
      className={`inline-flex items-center justify-center rounded-md ${
        variant === "primary"
          ? "bg-white text-black hover:bg-gray-200"
          : "bg-transparent text-white border border-white hover:bg-white/10"
      } px-4 py-2 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={handleHover}
      onClick={handleClick}
    >
      <FileDown size={18} className="mr-2" />
      Download Resume
    </motion.a>
  )
}
