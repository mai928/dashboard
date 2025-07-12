'use client'
import React, { useEffect, useState } from 'react'
import { downIcon, homeIcon, logo, sidebarLinks } from '../../../data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon, PanelLeft } from 'lucide-react'
import { AnimatePresence, delay, motion } from 'framer-motion'
import ToggleIcons from '../speratedSideBar/ToggleIcons'
import SidebarFullWidth from '../speratedSideBar/SidebarFullWidth'
import ResponsiveScreen from '../speratedSideBar/ResponsiveScreen'

const Sidebar = ({ sendDataToParent }) => {
  const path = usePathname()
  const [showMenu, setShowMenu] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [openToggle, setOpenToggle] = useState(false)

  useEffect(() => {
    const handleSideBar = () => {
      if (window.innerWidth < 1024) {
        setShowMenu(true)
      } else {
        setShowMenu(false)
        setToggle(false)

      }
    }
    handleSideBar()
    window.addEventListener('resize', handleSideBar)
    return () => window.removeEventListener('resize', handleSideBar)

  }, [])

  sendDataToParent(openToggle)



  return (
    <div>
      <div className='relative'>
        {
          showMenu ?
            (
              // show menu icon in responsive screen
              <button
                onClick={() => setToggle(!toggle)}
                className="absolute  top-5 start-4 p-2 text-white bg-gray-800  cursor-pointer hover:bg-gray-700 rounded-md"
              >
                <MenuIcon size={24} strokeWidth={2} className="text-white" />
              </button>
            ) :

            (
              <motion.aside
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  damping: 20,
                  mass: 0.6
                }}
                className={`fixed flex flex-col ${openToggle ? 'w-20' : 'w-72'} h-screen   text-white `}>

                <AnimatePresence mode="wait">
                  {/* show small width of sidebar */}
                  {openToggle ? (
                    <motion.div
                      key="toggle"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 18,
                        mass: 0.4,
                      }}
                      className="flex flex-col h-full"
                    >
                      <ToggleIcons
                        path={path}
                        openToggle={openToggle}
                        setOpenToggle={setOpenToggle}
                      />
                    </motion.div>
                  ) : (
                    // show full width of sidebar
                    <SidebarFullWidth path={path} setOpenToggle={setOpenToggle} openToggle={openToggle} />
                  )}
                </AnimatePresence>
              </motion.aside>
            )
        }
      </div>
      {/* show menu for responsive screen */}
      <ResponsiveScreen path={path} setToggle={setOpenToggle} toggle={toggle} />
    </div>

  )
}

export default Sidebar