import React from 'react'
import { motion } from 'framer-motion'
import { homeIcon, sidebarLinks } from '../../../data'
import Link from 'next/link'
const ResponsiveScreen = ({path ,setToggle ,toggle}) => {
  return (
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
      </div>  )
}

export default ResponsiveScreen