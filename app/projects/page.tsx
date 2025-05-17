"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useSoundEffects } from "@/components/sound-effects"
import Footer from "@/components/footer"

export default function ProjectsPage() {
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

  const projects = [
    {
      id: "signature-verification",
      title: "Signature Verification System",
      description:
        "ML-based system using CNNs/OpenCV for signature authentication. The system compares signatures against a database of known samples to detect forgeries.",
      tags: ["Computer Vision", "CNN", "OpenCV", "Authentication"],
      image: "https://private-user-images.githubusercontent.com/157035204/397962234-16c68c8a-9a4f-4a2f-a8fd-49a530bff438.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc0OTMwNjIsIm5iZiI6MTc0NzQ5Mjc2MiwicGF0aCI6Ii8xNTcwMzUyMDQvMzk3OTYyMjM0LTE2YzY4YzhhLTlhNGYtNGEyZi1hOGZkLTQ5YTUzMGJmZjQzOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxN1QxNDM5MjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZTc4ODhkOGM2NzkyNjcwZmE3MDlhNTZhY2FkY2YyMmE2YmQwM2NlMjU4NWZmZjFiZGFiNmFmMDE4YzM3MWZmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7btyroKDzaICbfdas2DI3F3hX9rRnJMptDv2v_J5B3g?height=400&width=600",
      github: "https://github.com/Abdulrahmanzafrullabaig/Mini-project",
    },
    {
      id: "ocr-tool",
      title: "OCR Tool",
      description:
        "Optical Character Recognition using deep learning models. This tool can extract text from images and documents with high accuracy, supporting multiple languages.",
      tags: ["OCR", "Deep Learning", "NLP", "Image Processing"],
      image: "https://private-user-images.githubusercontent.com/157035204/412545183-749ed545-b756-44e0-840d-3890332faa2a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc0OTMxNzIsIm5iZiI6MTc0NzQ5Mjg3MiwicGF0aCI6Ii8xNTcwMzUyMDQvNDEyNTQ1MTgzLTc0OWVkNTQ1LWI3NTYtNDRlMC04NDBkLTM4OTAzMzJmYWEyYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxN1QxNDQxMTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00OThkZDZlMTE0MDQ1OTkxY2YxYzMwMDcxOGNkOWNmYjJmZmE5MjQzNTVlZDMzMmM0MTQ1MzM5ZGNiMmQ3MDczJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.nAVpIAw7Z-vy27OPiIuUnvds5tgN6CaJM5nf33AmHJQ?height=400&width=600",
      github: "https://github.com/Abdulrahmanzafrullabaig/OCR",
    },
    {
      id: "chatbot-ollama",
      title: "Chatbot using Ollama",
      description:
        "Locally deployed LLM-powered chatbot using Ollama and LangChain. This privacy-focused solution runs entirely on local hardware without sending data to external APIs.",
      tags: ["LLM", "Ollama", "LangChain", "NLP"],
      image: "/https://private-user-images.githubusercontent.com/157035204/416102701-5bb15cc1-ee74-4a87-83bb-c60aa77745fb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc0OTI5MDgsIm5iZiI6MTc0NzQ5MjYwOCwicGF0aCI6Ii8xNTcwMzUyMDQvNDE2MTAyNzAxLTViYjE1Y2MxLWVlNzQtNGE4Ny04M2JiLWM2MGFhNzc3NDVmYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxN1QxNDM2NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iYjgwMmY1ZGNkYjkzODkwMTlhNzQxZmZkZjYzM2YwODFjZTJhODZjNDY0MzdiMWFkNWM2Y2MxZmFiMzVmOTNhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.5yPe_gQmT32EeQgZeo-j_Hs_WuvLVT4OZ9yXKUOCyA4 height=400&width=600",
      github: "https://github.com/Abdulrahmanzafrullabaig/chatbot-using-Ollama",
    },
    {
      id: "diabetic-retinopathy",
      title: "Explainable Multi-modal Diabetic Retinopathy Detection",
      description:
        "Integrating computer vision and explainability techniques (e.g., Grad-CAM) to detect diabetic retinopathy from eye scans. This project focuses on making AI decisions interpretable for medical professionals.",
      tags: ["Medical AI", "Explainable AI", "Computer Vision", "Grad-CAM"],
      image: "https://www.researchgate.net/publication/349727883/figure/fig2/AS:997111998971904@1614741434179/Sample-images-from-the-Kaggle-EyePACS-dataset-top-row-and-the-Messidor-2-dataset_Q320.jpg?height=400&width=600",
      github: "https://github.com/Abdulrahmanzafrullabaig/major-project",
      current: true,
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
        className="max-w-6xl mx-auto flex-grow"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors ${
                project.current ? "border-white" : ""
              }`}
              onMouseEnter={handleHover}
            >
              <div className="relative h-48 bg-zinc-900">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {project.current && (
                  <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                    Current Project
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="View project details"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 bg-zinc-900 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="mt-6 inline-block text-sm text-white hover:underline"
                  onMouseEnter={handleHover}
                >
                  View Project Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}
