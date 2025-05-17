"use client"

import { motion } from "framer-motion"
import { useSoundEffects } from "./sound-effects"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
  delay?: number
}

export default function ProjectCard({ title, description, tags, image, link, delay = 0 }: ProjectCardProps) {
  const { playSound, soundsLoaded } = useSoundEffects()

  const handleHover = () => {
    if (soundsLoaded) {
      playSound("hover")
    }
  }

  const handleClick = () => {
    if (link && soundsLoaded) {
      playSound("navigate")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + delay * 0.1, duration: 0.5 }}
      className="border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors"
      onMouseEnter={handleHover}
    >
      <div className="relative h-48 bg-zinc-900">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-medium">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-zinc-900 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
