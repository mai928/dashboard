'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
  const pathname = usePathname()

  // 🟣 Match pages like /sign-in and /sign-up even if they have query strings
  const isAuthPage = pathname.includes('/sign-in') || pathname.includes('/sign-up')

  const [openMinSideBar, setHandleMinSideBar] = useState(false)
  if (isAuthPage) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </div>
    )
  }

  return (
    <div className="lg:flex">
      <Sidebar setHandleMinSideBar={setHandleMinSideBar} openMinSideBar={openMinSideBar} />
      <motion.div

        layout
        transition={{
          type: 'spring',
          stiffness: 70,
          damping: 20,
        }}

        className={`w-full transition-all duration-300 ${openMinSideBar ? 'md:ml-24' : 'md:ml-72'
          }`}
      >        <Navbar openMinSideBar={openMinSideBar} setHandleMinSideBar={setHandleMinSideBar} />
        <main className="flex-1 pt-0 lg:pt-32">{children}</main>
      </motion.div>
    </div>
  )
}

export default Layout
