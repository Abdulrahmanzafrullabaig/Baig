"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Mail, MapPin, Globe, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useSoundEffects } from "@/components/sound-effects"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function ContactPage() {
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

  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/Abdulrahmanzafrullabaig", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/abdul-rahman-zafrulla-baig-876509362/", label: "LinkedIn" },
    { icon: <Twitter size={24} />, href: "https://x.com/arzb26112004", label: "Twitter" },
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
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl mb-6 font-medium">Contact Information</h2>
            <p className="text-gray-300 mb-8">
              I'm interested in AI/ML research opportunities, collaborative projects, and discussions about computer
              vision and explainable AI. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <Mail className="mr-4 text-gray-400 mt-1" size={20} />
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">EMAIL</h3>
                  <p className="text-white">arzb26112004@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start"
              >
                <MapPin className="mr-4 text-gray-400 mt-1" size={20} />
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">LOCATION</h3>
                  <p className="text-white">India</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start"
              >
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8"
            >
              <h3 className="text-sm text-gray-400 mb-4">CONNECT WITH ME</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2 }}
                    onMouseEnter={handleHover}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}
