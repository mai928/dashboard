'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const pathname = usePathname()

  // 🟣 Match pages like /sign-in and /sign-up even if they have query strings
  const isAuthPage = pathname.includes('/sign-in') || pathname.includes('/sign-up')

  const [parentToggle, setHandleToggle] = useState(false)
  const handleToggle = (data) => setHandleToggle(data)

  if (isAuthPage) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </div>
    )
  }

  return (
    <div className="lg:flex">
      <Sidebar sendDataToParent={handleToggle} />
      <div className={`${parentToggle ? 'md:ml-24' : 'md:ml-72'} w-full`}>
        <Navbar parentToggle={parentToggle} />
        <main className="flex-1 pt-0 lg:pt-32">{children}</main>
      </div>
    </div>
  )
}

export default Layout
