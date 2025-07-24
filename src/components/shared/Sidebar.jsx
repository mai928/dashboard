'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { MenuIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import ToggleIcons from '../speratedSideBar/ToggleIcons'
import SidebarFullWidth from '../speratedSideBar/SidebarFullWidth'
import ResponsiveScreen from '../speratedSideBar/ResponsiveScreen'

const Sidebar = ({ setHandleMinSideBar  ,openMinSideBar}) => {
  const path = usePathname()
  const [showMenu, setShowMenu] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [openToggle, setOpenToggle] = useState(false)
  const [isScrolled, setScrolled] = useState(false)


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }


    const handleSideBar = () => {
      if (window.innerWidth < 1024) {
        setShowMenu(true)
      } else {
        setShowMenu(false)
        setToggle(false)

      }
    }
    handleScroll
    handleSideBar()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleSideBar)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleSideBar)
    }



  }, [])







  // useEffect(() => {
  //   sendDataToParent(openToggle)
  // }, [openToggle])



  return (
    <div className='' >
      {
        showMenu ?
          (
            <div className='fixed w-full z-50'> 
             <div className={` flex items-center justify-between mx-5 my-5 ${isScrolled ? 'bg-transparent backdrop-blur-[42px] border border-white rounded-xl py-2 px-2 ' : ''} `}>
              <button
                onClick={() => setToggle(!toggle)}
                className=" p-2 text-white bg-gray-800  cursor-pointer hover:bg-gray-700 rounded-md"
              >
                <MenuIcon size={24} strokeWidth={2} className="text-white" />
              </button>
              <p className='text-white'>{path}Dashboard</p>
            </div>
            </div>



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
              className={`fixed flex flex-col ${openMinSideBar ? 'w-24' : 'w-72'} h-screen   text-white `}>

              <AnimatePresence mode="wait">
                {/* show small width of sidebar */}
                {openMinSideBar ? (
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
                    className="flex flex-col h-full border-[1px] border-gray-800 rounded-3xl mx-2 my-5 py-5"
                  >
                    <ToggleIcons
                      path={path}
                        openMinSideBar={openMinSideBar}
                        setHandleMinSideBar={setHandleMinSideBar}
                    />
                  </motion.div>
                ) : (
                  // show full width of sidebar
                  <SidebarFullWidth path={path}  />
                )}
              </AnimatePresence>
            </motion.aside>
          )
      }
      {/* show menu for responsive screen */}
      <ResponsiveScreen path={path} setToggle={setToggle} toggle={toggle} />
    </div>

  )
}

export default Sidebar