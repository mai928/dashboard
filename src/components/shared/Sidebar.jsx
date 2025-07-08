'use client'
import React, { useEffect, useState } from 'react'
import { homeIcon, logo, sidebarLinks } from '../../../data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon, PanelLeft } from 'lucide-react'
import { AnimatePresence, delay, motion } from 'framer-motion'
import ToggleIcons from '../ToggleIcons'

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

  const containerVarients = {
    hidden: {
      opacity: 0,
      x: -40
    },
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    },

  }

  const itemVariants = (index) => ({
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1, // <-- this controls stagger delay
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  });

  return (
    <div className=''>

      <div className='relative'>
        {
          showMenu ?
            (
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
                // 
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  damping: 20,
                  mass: 0.6
                }}
                className={`fixed flex flex-col ${openToggle ? 'w-20' : 'w-56'} h-screen   text-white   pt-8  border-e-[1px] border-e-blue-950 shadow-sm`}>

                <AnimatePresence mode="wait">
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
                    <motion.div
                    className='flex flex-col h-full'
                      key="full"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{
                        type: 'spring',
                        stiffness: 60,
                        damping: 20,
                      }}
                    >
                      {/* Logo */}
                      <div className="px-5">
                        <motion.h2 className="flex ms-5 items-center gap-5 text-xl font-semibold uppercase">
                          {logo} Vision Ui
                        </motion.h2>
                        <div className="m-auto w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-4" />
                      </div>

                      {/* Scrollable Links */}
                      <div className="flex-1 space-y-2 py-3 px-3 scrollbar-none scrollbar-thumb-rounded-full overflow-y-auto scrollbar-thumb-secondary_color scrollbar-track-transparent">
                        <motion.nav
                          initial="hidden"
                          animate="visible"
                          variants={containerVarients}
                          className="space-y-2"
                        >
                          {sidebarLinks.map((item, index) => {
                            const isActive = path === item.href;
                            const fill = isActive ? '#fff' : '#0075ff';
                            return (
                              <motion.div
                                variants={itemVariants(index)}
                                key={item.href}
                                className={`flex items-center gap-3 py-2 px-5 rounded-2xl ${isActive ? 'bg-secondary_color' : ''
                                  }`}
                              >
                                <div
                                  className={`px-2 py-[9px] rounded-xl ${isActive ? 'bg-primary_blue' : 'bg-secondary_color'
                                    }`}
                                >
                                  {item.icon(fill)}
                                </div>
                                <Link
                                  className="text-white text-[14px]"
                                  key={item.href}
                                  href={item.href}
                                >
                                  {item.label}
                                </Link>
                              </motion.div>
                            );
                          })}
                        </motion.nav>
                      </div>

                      {/* Bottom Fixed Section */}
                      <div className="px-5 pb-5 mx-3 bg-opacity-10 rounded-3xl">
                        <div className="m-auto w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
                        <div className="flex justify-end mt-5">
                          <button onClick={() => setOpenToggle(!openToggle)}>
                            <PanelLeft />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>




              </motion.aside>
            )
        }
      </div>
      {/* show menu for responsive screen */}
      <div>
        {
          toggle && (
            <motion.aside
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.4 }}
              className='fixed w-56 h-full bg-secondary_color  text-white border-r px-5 py-8 shadow-sm'>

              <h2 className='flex items-center gap-5 text-xl font-semibold uppercase    '>
                {homeIcon}
                Vision Ui</h2>
              <div>
                <div className=' m-auto w-full  h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent  mt-4' />

              </div>
              <nav className='space-y-2 py-3'>{

                sidebarLinks.map((item) => {
                  const isActive = path === item.href
                  return (
                    <div key={item.href} className={`flex items-center gap-3 hover:bg-secondary_color py-4 px-4 rounded-2xl ${isActive ? 'bg-secondary_color' : ''}`}>
                      <div className=' bg-secondary_color hover:bg-primary_blue px-2 py-[9px] rounded-xl'>{item.icon}</div>
                      <Link
                        className=" text-white "

                        key={item.href} href={item.href}> {item.label}</Link>
                    </div>
                  )
                })
              }
              </nav>
              <p className='bg-black' onClick={() => setToggle(false)}>x</p>
            </motion.aside>
          )
        }
      </div>

    </div>

  )
}

export default Sidebar