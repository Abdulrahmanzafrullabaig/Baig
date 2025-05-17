"use client"

import { motion } from "framer-motion"
import { ArrowLeft, GraduationCap, Award, BookOpen, Code } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useSoundEffects } from "@/components/sound-effects"
import Footer from "@/components/footer"

export default function AcademicPage() {
  const { playSound, soundsEnabled } = useSoundEffects()

  useEffect(() => {
    if (soundsEnabled) {
      playSound("navigate")
    }
  }, [playSound, soundsEnabled])

  const handleHover = () => {
    if (soundsEnabled) {
      playSound("hover")
    }
  }

  const timeline = [
    {
      year: "2022 - Present",
      title: "Bachelor of Engineering in Computer Science",
      description: "Focusing on AI, Machine Learning, and Computer Vision",
      icon: <GraduationCap size={24} />,
    },
    {
      year: "2025",
      title: "AI/ML Workshop Participant",
      description: "Completed intensive training in deep learning and computer vision",
      icon: <Code size={24} />,
    }
  ]

  const courses = [
    "Data Structures and Algorithms",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Database Management Systems",
    "Web Development",
    "Operating Systems",
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 flex flex-col">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          onMouseEnter={handleHover}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to home
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto flex-grow"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Academic Journey</h1>

        <div className="space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl mb-8 font-medium">Timeline</h2>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex"
                  onMouseEnter={handleHover}
                >
                  <div className="mr-6 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{item.year}</div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <h2 className="text-2xl mb-6 font-medium">Relevant Coursework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="p-4 bg-zinc-900 rounded-lg"
                  onMouseEnter={handleHover}
                >
                  {course}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-zinc-900 p-6 rounded-lg"
          >
            <h2 className="text-2xl mb-4 font-medium">Research Interests</h2>
            <p className="text-gray-300 leading-relaxed">
              My academic research is focused on the intersection of computer vision, explainable AI, and healthcare
              applications. I'm particularly interested in developing AI systems that provide accurate predictions and offer interpretable explanations for medical professionals. My current research
              project on explainable diabetic retinopathy detection exemplifies this interest.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}
