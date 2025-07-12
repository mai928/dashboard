import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { downIcon, logo, sidebarLinks, upIcon } from '../../../data';
import Link from 'next/link';
import { PanelLeft, Star, StarIcon, StarOffIcon } from 'lucide-react';

const SidebarFullWidth = ({ path, openToggle, setOpenToggle }) => {
  const [openSubMenu, setOpenSubMenu] = useState({})

  const toggleSubMenu = (label) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [label]: !prev[label]
    }))
  }

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
        delay: index * 0.1,
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  });

  return (
    <motion.div
      className='flex flex-col h-full   mx-3 my-5 overflow-y-scroll rounded-3xl bg-primary_Color '
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
      <div className="p-5">
        <motion.h2 className="flex  items-center gap-5 text-xl font-semibold uppercase">
          {logo} Vision Ui
        </motion.h2>
        <div className="m-auto w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-4" />
      </div>

      {/* Scrollable Links */}
      <div className="flex-1   ">
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={containerVarients}
          className="space-y-2"
        >
          {sidebarLinks.map((item, index) => {
            const isActive = path === item.href;
            const fill = isActive ? '#fff' : '#0075ff';
            const isOpen = openSubMenu[item.label] || false

            if (item.children && item.children.length > 0) {
              return (
                <motion.div
                  onClick={() => toggleSubMenu(item.label)}
                  variants={itemVariants(index)}
                  key={item.href}
                  className={`
                    `}
                >
                  <div className={`flex items-center gap-3 py-2 mx-3 px-2 rounded-2xl cursor-pointer ${isActive ? 'bg-secondary_color' : ''}`}>
                    <div
                      className={`px-2 py-[8px] rounded-xl ${isActive ? 'bg-primary_blue' : 'bg-secondary_color'
                        }`}
                    >
                      {item.icon(fill)}
                    </div>
                    <div className='flex  items-center justify-between w-full pe-1'>
                      <p
                        className="text-white text-[14px] block "
                        key={item.href}
                      // href={item.href}
                      >
                        {item.label}
                      </p>
                      {
                        isOpen ? (<div>{upIcon('#ffff')}</div>) : (<div className=''> {downIcon('#ffff')}</div>)
                      }

                    </div>
                  </div>


                  {
                    isOpen && (
                      <div className='flex flex-col ms-16'>

                        {item?.children?.map((child) => (
                          <Link className='' href={child.href}>{child.label}</Link>
                        ))}

                      </div>
                    )
                  }

                </motion.div>
              );
            }

          })}
        </motion.nav>
      </div>



      {/* Bottom Fixed Section */}
      <div className="m-4">
        {/* <div className="m-auto w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <div className="flex justify-end mt-5">
          <button onClick={() => setOpenToggle(!openToggle)}>
            <PanelLeft />
          </button>
        </div> */}
        <div className="bg-[url('/img-sidebar.webp')] bg-cover bg-center/to-50% w-full bg-no-repeat rounded-2xl py-5 px-3 ">
             <Star className='bg-white  w-8 h-8 p-[2px] fill-primary_blue rounded-lg' />
          <p className='mt-5'>Need help?</p>
          <p className='text-[12px] '>Please check our docs</p>
          <button className='bg-secondary_color bg-opacity-90 px-8 py-1 mt-3 flex m-auto rounded-lg '>Documentation</button>
        </div>
      </div>
    </motion.div>
  )
}

export default SidebarFullWidth