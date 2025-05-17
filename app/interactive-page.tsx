"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function InteractivePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const sections = [
    { id: "about", title: "About", content: "Minimal design enthusiast and developer." },
    { id: "work", title: "Work", content: "Creating digital experiences with clean aesthetics." },
    { id: "contact", title: "Contact", content: "Get in touch for collaborations." },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-12">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to home
        </Link>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-light mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        ros Nych
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="border border-zinc-800 p-6 rounded-lg cursor-pointer hover:border-zinc-600 transition-colors"
            onClick={() => setActiveSection(section.id === activeSection ? null : section.id)}
          >
            <h2 className="text-xl mb-2">{section.title}</h2>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeSection === section.id ? "auto" : 0,
                opacity: activeSection === section.id ? 1 : 0,
              }}
              className="overflow-hidden"
            >
              <p className="text-gray-400 mt-4">{section.content}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
