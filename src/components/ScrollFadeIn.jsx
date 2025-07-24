'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollFadeIn() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate when in view
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="  bg-blue-500 min-h-screen text-black rounded-md "
    >
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
      <h2 className="text-white text-center pt-24 text-2xl">I Animate When Visible</h2>
    </motion.div>
  )
}
