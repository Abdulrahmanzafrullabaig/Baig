"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Modal from "@/components/modal"
import { useRouter } from "next/navigation"
import { useSoundEffects } from "@/components/sound-effects"
import { Code, BookOpen, Send, User, Github, Linkedin, Twitter } from "lucide-react"
import Footer from "@/components/footer"
import ResumeButton from "@/components/resume-button"

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const { playSound, soundsEnabled } = useSoundEffects()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleNameClick = () => {
    if (soundsEnabled) playSound("click")
    setIsModalOpen(true)
  }

  const handleNavigation = (path: string) => {
    if (soundsEnabled) playSound("navigate")
    router.push(path)
  }

  const handleHover = (item: string) => {
    if (hoveredItem !== item && soundsEnabled) {
      playSound("hover")
      setHoveredItem(item)
    }
  }

  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={24} />, href: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <main
      className="bg-black text-white min-h-screen flex flex-col justify-between px-10 md:px-16 py-16 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(40, 40, 40, 0.8) 0%, rgba(0, 0, 0, 1) 50%)`,
      }}
    >
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="flex flex-col items-center justify-center text-center my-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.div
            className="text-6xl md:text-8xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => {
              setIsHovered(true)
              handleHover("name")
            }}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleNameClick}
          >
            BAIG
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-400 max-w-2xl text-lg md:text-xl mb-8"
        >
          3rd-year Computer Science and Engineering student with a passion for Artificial Intelligence and Machine
          Learning
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <ResumeButton />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16 max-w-6xl mx-auto w-full"
      >
        {[
          { name: "About", path: "/about", icon: <User className="mr-2" /> },
          { name: "Projects", path: "/projects", icon: <Code className="mr-2" /> },
          { name: "Academic", path: "/academic", icon: <BookOpen className="mr-2" /> },
          { name: "Contact", path: "/contact", icon: <Send className="mr-2" /> },
        ].map((item, index) => (
          <motion.button
            key={item.name}
            className="flex items-center justify-center text-xl p-6 bg-zinc-900 rounded-lg text-gray-300 hover:text-white hover:bg-zinc-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => handleHover(item.name)}
            onClick={() => handleNavigation(item.path)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            {item.icon}
            {item.name}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="flex flex-col items-center space-y-6 mt-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex space-x-6"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              onMouseEnter={() => handleHover(link.label)}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

      {isHovered && (
        <motion.div
          className="absolute bottom-10 left-10 text-sm opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          Click to explore
        </motion.div>
      )}

      <Footer />
    </main>
  )
}
