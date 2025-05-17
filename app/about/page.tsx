"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useSoundEffects } from "@/components/sound-effects"
import Footer from "@/components/footer"
import ResumeButton from "@/components/resume-button"

export default function AboutPage() {
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

  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript (vanilla)"],
    },
    {
      category: "Backend & Databases",
      items: ["Python", "MongoDB", "SQL"],
    },
    {
      category: "Tools & Frameworks",
      items: ["Figma", "Framer", "OpenCV", "TensorFlow", "PyTorch"],
    },
    {
      category: "AI & ML",
      items: ["Computer Vision", "Deep Learning", "NLP", "LangChain", "Ollama"],
    },
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">About Me</h1>
          <ResumeButton className="mt-4 md:mt-0" variant="outline" />
        </div>

        <div className="space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl mb-4 font-medium">Background</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a 3rd-year Computer Science and Engineering student with a strong passion for Artificial Intelligence
              and Machine Learning. My academic journey has equipped me with a solid foundation in computer science
              fundamentals, while my personal projects have allowed me to explore cutting-edge technologies in AI and
              ML.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-2xl mb-6 font-medium">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + groupIndex * 0.1 }}
                  className="bg-zinc-900 p-6 rounded-lg"
                >
                  <h3 className="text-xl mb-4 font-medium">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, index) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        className="flex items-center"
                        onMouseEnter={handleHover}
                      >
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <h2 className="text-2xl mb-4 font-medium">Languages</h2>
            <div className="flex flex-wrap gap-4">
              {["English", "Hindi", "Urdu", "Kannada"].map((language, index) => (
                <motion.div
                  key={language}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-zinc-900 rounded-full"
                  onMouseEnter={handleHover}
                >
                  {language}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}
