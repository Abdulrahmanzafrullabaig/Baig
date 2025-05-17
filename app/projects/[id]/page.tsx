"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Users } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useSoundEffects } from "@/components/sound-effects"
import Footer from "@/components/footer"
import { useParams } from "next/navigation"

export default function ProjectDetailPage() {
  const { playSound, soundsEnabled } = useSoundEffects()
  const params = useParams()
  const projectId = params.id as string

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

  // Project data - in a real app, this would come from a database or API
  const projects = {
    "signature-verification": {
      title: "Signature Verification System",
      description:
        "An ML-based system using Convolutional Neural Networks (CNNs) and OpenCV for signature authentication. The system compares signatures against a database of known samples to detect forgeries with high accuracy.",
      longDescription: `
        This project implements a robust signature verification system that can authenticate handwritten signatures by comparing them against a database of known samples. The system uses a combination of traditional computer vision techniques from OpenCV and deep learning models built with TensorFlow.
        
        The verification process involves several steps:
        1. Preprocessing: Normalizing the signature image, removing noise, and extracting key features
        2. Feature Extraction: Using CNNs to extract meaningful features from the signature
        3. Comparison: Matching the extracted features against stored templates
        4. Decision: Determining authenticity based on similarity scores
        
        The system achieves over 95% accuracy on standard signature verification datasets and can be deployed in financial institutions, legal document processing, and other scenarios requiring signature authentication.
      `,
      tags: ["Computer Vision", "CNN", "OpenCV", "Authentication", "TensorFlow"],
      image: "/placeholder.svg?height=600&width=1200",
      github: "#",
      demoLink: "#",
      year: "2023",
      team: ["Abdul Rahman Baig", "Collaborator 1"],
      technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Scikit-learn"],
      challenges: [
        "Handling variations in signature styles",
        "Distinguishing between natural variations and forgeries",
        "Optimizing the CNN architecture for both accuracy and speed",
        "Creating a robust dataset for training and testing",
      ],
      outcomes: [
        "95% accuracy on standard signature verification datasets",
        "Real-time verification capability (under 2 seconds per signature)",
        "Robust against common forgery techniques",
        "Deployable as a standalone application or API",
      ],
    },
    "ocr-tool": {
      title: "OCR Tool",
      description:
        "Optical Character Recognition using deep learning models. This tool can extract text from images and documents with high accuracy, supporting multiple languages.",
      longDescription: `
        This OCR (Optical Character Recognition) tool leverages deep learning to extract text from images and documents with high accuracy. Built using PyTorch and Tesseract, the system can recognize text in multiple languages and handle various document formats.
        
        Key features include:
        1. Multi-language support (English, Hindi, Urdu, and more)
        2. Handling of complex layouts including tables and multi-column documents
        3. Pre-processing capabilities to enhance image quality before text extraction
        4. Post-processing to correct common OCR errors using NLP techniques
        
        The tool achieves state-of-the-art accuracy on standard OCR benchmarks and can be used for document digitization, data entry automation, and accessibility applications.
      `,
      tags: ["OCR", "Deep Learning", "NLP", "Image Processing", "PyTorch"],
      image: "/placeholder.svg?height=600&width=1200",
      github: "#",
      demoLink: "#",
      year: "2023",
      team: ["Abdul Rahman Baig"],
      technologies: ["Python", "PyTorch", "Tesseract", "OpenCV", "NLTK"],
      challenges: [
        "Handling poor quality images and scans",
        "Supporting multiple languages with different character sets",
        "Accurately recognizing handwritten text",
        "Preserving document layout during text extraction",
      ],
      outcomes: [
        "98% accuracy on printed text in good quality images",
        "85% accuracy on handwritten text",
        "Support for 10+ languages",
        "Integration with document management systems",
      ],
    },
    "chatbot-ollama": {
      title: "Chatbot using Ollama",
      description:
        "Locally deployed LLM-powered chatbot using Ollama and LangChain. This privacy-focused solution runs entirely on local hardware without sending data to external APIs.",
      longDescription: `
        This project implements a privacy-focused chatbot powered by locally deployed Large Language Models (LLMs) using Ollama and LangChain. The solution runs entirely on local hardware, ensuring that sensitive data never leaves the user's device.
        
        The chatbot features:
        1. Local deployment of various open-source LLMs (Llama, Mistral, etc.)
        2. Context-aware conversations with memory capabilities
        3. Document retrieval and summarization functionality
        4. Custom knowledge base integration
        
        By leveraging Ollama for efficient model deployment and LangChain for orchestration, the chatbot delivers performant AI capabilities without the privacy concerns associated with cloud-based solutions.
      `,
      tags: ["LLM", "Ollama", "LangChain", "NLP", "Privacy"],
      image: "/placeholder.svg?height=600&width=1200",
      github: "#",
      demoLink: "#",
      year: "2024",
      team: ["Abdul Rahman Baig", "Collaborator 2"],
      technologies: ["Python", "Ollama", "LangChain", "FastAPI", "React"],
      challenges: [
        "Optimizing LLM performance on consumer hardware",
        "Implementing effective context management for coherent conversations",
        "Creating a responsive UI despite local processing constraints",
        "Balancing model size with performance requirements",
      ],
      outcomes: [
        "Successful deployment of 7B and 13B parameter models on consumer hardware",
        "Response times under 3 seconds for most queries",
        "Effective document retrieval and summarization capabilities",
        "Complete data privacy with no external API dependencies",
      ],
    },
    "diabetic-retinopathy": {
      title: "Explainable Multi-modal Diabetic Retinopathy Detection",
      description:
        "Integrating computer vision and explainability techniques (e.g., Grad-CAM) to detect diabetic retinopathy from eye scans. This project focuses on making AI decisions interpretable for medical professionals.",
      longDescription: `
        This ongoing research project focuses on developing an explainable AI system for detecting diabetic retinopathy from fundus images. The multi-modal approach combines traditional image analysis with deep learning techniques while emphasizing the interpretability of results for medical professionals.
        
        The system incorporates:
        1. Advanced CNN architectures optimized for medical imaging
        2. Explainability techniques including Grad-CAM, LIME, and SHAP
        3. Multi-modal fusion of image features with patient metadata
        4. Visualization tools designed for clinical settings
        
        By prioritizing explainability alongside accuracy, this project aims to create AI diagnostic tools that can be trusted and effectively utilized by healthcare providers in real clinical settings.
      `,
      tags: ["Medical AI", "Explainable AI", "Computer Vision", "Grad-CAM", "Healthcare"],
      image: "/placeholder.svg?height=600&width=1200",
      github: "#",
      demoLink: "#",
      year: "2024",
      team: ["Abdul Rahman Baig", "Research Supervisor", "Medical Collaborator"],
      technologies: ["Python", "TensorFlow", "Keras", "Grad-CAM", "PyTorch", "scikit-learn"],
      challenges: [
        "Balancing model accuracy with interpretability",
        "Generating explanations that are meaningful to medical professionals",
        "Working with limited labeled medical datasets",
        "Ensuring the system meets clinical standards and requirements",
      ],
      outcomes: [
        "Development of a novel explainability framework for medical imaging",
        "Preliminary accuracy of 92% in detecting diabetic retinopathy",
        "Positive feedback from medical professionals on explanation quality",
        "Ongoing research with potential for clinical trials",
      ],
      current: true,
    },
  }

  const project = projects[projectId as keyof typeof projects]

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white p-8 md:p-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
        <Link
          href="/projects"
          className="inline-flex items-center text-white hover:underline"
          onMouseEnter={handleHover}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 flex flex-col">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-12">
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          onMouseEnter={handleHover}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto flex-grow"
      >
        <div className="mb-8">
          {project.current && (
            <span className="inline-block bg-white text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
              Current Project
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-sm px-3 py-1 bg-zinc-900 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="relative h-64 md:h-96 bg-zinc-900 rounded-lg overflow-hidden mb-8">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-zinc-900 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Calendar size={18} className="mr-2 text-gray-400" />
                <h3 className="text-sm font-medium text-gray-400">YEAR</h3>
              </div>
              <p>{project.year}</p>
            </div>

            <div className="bg-zinc-900 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Users size={18} className="mr-2 text-gray-400" />
                <h3 className="text-sm font-medium text-gray-400">TEAM</h3>
              </div>
              <p>{project.team.join(", ")}</p>
            </div>

            <div className="bg-zinc-900 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Code size={18} className="mr-2 text-gray-400" />
                <h3 className="text-sm font-medium text-gray-400">LINKS</h3>
              </div>
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                    onMouseEnter={handleHover}
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                    onMouseEnter={handleHover}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl font-medium mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.longDescription}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-2xl font-medium mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-zinc-900 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <h2 className="text-2xl font-medium mb-4">Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <h2 className="text-2xl font-medium mb-4">Outcomes</h2>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2"></span>
                    <span className="text-gray-300">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}
