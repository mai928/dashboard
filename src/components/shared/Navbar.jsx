'use client'

import { usePathname } from "next/navigation"
import { homeIcon, notificationIcon, profileIcon, searchIcon, settingsIcon } from "../../../data"
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";


export default function Navbar({ parentToggle }) {
  const path = usePathname()

  const [isScrolled, setScrolled] = useState(false)



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (


    <motion.div
      initial={false}
      animate={isScrolled ? { opacity: 1 } : { opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`lg:fixed inset-0 lg:z-40 left-0 ${parentToggle ? 'md:left-24' : 'md:left-72'}  mx-[21px] h-28 transition-colors duration-300 text-white
  
  `}
    >
      <div
        className={`lg:flex items-center justify-between  my-4 py-3 lg:px-5 rounded-2xl transition-all duration-300 ${isScrolled
          ? 'lg:bg-transparent lg:backdrop-blur-[42px] lg:border lg:border-white'
          : ''
          }`}
      >
        <div>
          <div className="lg:flex items-center gap-3">
            <p className="  flex   justify-end lg:justify-normal  gap-2 text-lg lg:text-base text-white">{homeIcon('#fff')} {path === '/' && '/ Dashboard'}</p>
          </div>
          <h1 className=" hidden lg:block text-lg font-semibold">Dashboard</h1>
        </div>

        <div className="hidden lg:flex items-center  gap-4 ">
          <div className="relative my-3 lg:my-0">
            <div className="absolute top-4 start-3 ">{searchIcon('rgb(113, 128, 150)')}</div>
            <input placeholder="Type here..."
              className="bg-secondary_color placeholder:text-[13px] placeholder:font-semibold  placeholder:text-primary_white placeholder:text-opacity-45 border-primary_white border-opacity-30 border-[1px] rounded-2xl ps-10  py-2" />

          </div>

          <div className="flex items-center gap-4"> <div>{profileIcon('#fff')}</div>
            <div className="text-sm font-semibold">


              <SignedOut>
                <div className=" text-white">
                  <SignInButton />
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>


            </div>
            <div>{settingsIcon('#fff')}</div>
            <div>{notificationIcon('#fff')}</div>
          </div>



        </div>
      </div>

    </motion.div>
  )
}
