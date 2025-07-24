import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { downIcon, logo, sidebarLinks, upIcon } from '../../../data'
import Link from 'next/link'
import SubChildren from '../menu/SubChildren'
const ResponsiveScreen = ({ path, setToggle, toggle }) => {
  const [openSubChildren, setOpenSubChildren] = useState({})
  const [openSubMenu, setOpenSubMenu] = useState({})
  const sideref = useRef(null)




useEffect(() => {
  const handleClickOutside = (event) => {
                                       // event became true 
    if (toggle && sideref.current && !sideref.current.contains(event.target)) {
      // console.log(sideref.current.contains(event.target)) // return false
      setToggle(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [toggle]);

      console.log(sideref.current) // return false





  const isChildActive = (item, currentPath) => {
    if (item.href === '/') {
      return currentPath === '/'
    }


    if (item.href && currentPath.startsWith(item.href)) {
      return true
    }


    if (item.children) {
      return item.children.some((child) => isChildActive(child, currentPath))
    }
    return false


  }


  const toggleSubMenu = (label) => {
    setOpenSubMenu((prev) => {
      const isCurrentOpen = prev[label]
      return isCurrentOpen ? {} : { [label]: true }
    })
  }


  const toggleSubChild = (label) => {
    setOpenSubChildren((prev) => (
      {
        ...prev,
        [label]: !prev[label]
      }))
  }
  return (
    <div ref={sideref} className=''>
      {
        toggle && (
          <motion.aside
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.4 }}
            className='fixed inset-0 w-56 h-full  bg-primary_Color shadow-lg text-white border-r px-5 py-8  z-50 overflow-y-scroll'>

            <h2 className='flex items-center justify-center gap-3 text-xl font-semibold uppercase '>
              {logo}
              Vision Ui</h2>
            <div>
              <div className=' m-auto w-full  h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent  mt-4' />
            </div>



            {/*  */}
            {sidebarLinks.map((item, index) => {
              const isActive = path === item.href
              const isOpen = openSubMenu[item.label] || false
              if (item.children && item.children.length > 0) {
                const ischildRouteActive = isChildActive(item.children, path)
                const isParentActive = isOpen || ischildRouteActive
                const fill = isParentActive ? '#fff' : '#0075ff';
                // const fill = isActive ? '#fff' : '#0075ff';

                return (
                  <motion.div
                    onClick={() => toggleSubMenu(item.label)}
                    // variants={itemVariants(index)}
                    key={item.href}
                    className={`
                    `}
                  >
                    <div className={`flex items-center gap-3 py-2 mt-3 px-1 rounded-2xl cursor-pointer hover:bg-secondary_color  ${isParentActive ? 'bg-secondary_color' : ''}`}>
                      <div
                        className={`px-2 py-[8px] rounded-xl ${isParentActive ? 'bg-primary_blue' : 'bg-secondary_color'
                          }`}
                      >
                        {item.icon(fill)}
                      </div>
                      <div className='flex  items-center justify-between w-full pe-1'>
                        <p
                          className="text-white text-[14px] block "
                          key={item.href}
                        >
                          {item.label}
                        </p>
                        {
                          isOpen ? (<div>{upIcon('#ffff')}</div>) : (<div className=''> {downIcon('#ffff')}</div>)
                        }

                      </div>
                    </div>

                    {/* show submenu */}
                    <AnimatePresence> {
                      isOpen && (
                        <motion.div
                          key={'submenu'}
                          initial={{ opacity: 0, height: 10 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }} className='flex flex-col ms-8'>


                          {item?.children?.map((child) => {
                            const isOpenSub = openSubChildren[child.label] || false
                            return (
                              <div key={child.href}>
                                {
                                  child.children && child.children.length > 0 ? (<button className='flex items-center gap-6 my-2 font-semibold text-[15px]' onClick={(e) => {
                                    e.stopPropagation()
                                    toggleSubChild(child.label)
                                  }}
                                  ><div className='bg-primary_blue w-2 h-2 rounded-full' /> {child.label}</button>) : (
                                    <Link
                                      onClick={(e) => e.stopPropagation()}
                                      href={child.href} className='flex items-center gap-6 my-2 font-semibold text-[15px]'
                                    ><div className='bg-primary_blue w-2 h-2 rounded-full' /> {child.label}</Link>)

                                }

                                {/* SHOW sub children */}
                                <SubChildren child={child} isOpenSub={isOpenSub} />
                              </div>

                            )


                          })}

                        </motion.div>
                      )
                    }
                    </AnimatePresence>

                  </motion.div>
                );
              }

            })}


            {/*  */}
            {/* <button className='bg-black' onClick={() => setToggle(false)}>x</button> */}
          </motion.aside>
        )
      }
    </div>)
}

export default ResponsiveScreen