import React from 'react'
import { logo, sidebarLinks } from '../../../data'
import { motion } from 'framer-motion'
import { PanelLeft } from 'lucide-react'

const ToggleIcons = ({ path ,openMinSideBar ,setHandleMinSideBar  }) => {
    const containerVarients = {
        hidden: {
            opacity: 0,
            x: 20,
        },
        visible: {
            opacity: 1,
            x: 0,

            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20,
                when: 'beforeChildren',
                staggerChildren: 0.2
            }
        },

    }

    const itemVariants = (index) => ({
        hidden: { x: 20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: index * 0.1,
                duration: 0.2,
            }
        }
    })

    return (
        <div onMouseOver={()=>setHandleMinSideBar(!openMinSideBar)}>

            <div className=''>
                <motion.h2 className='flex  justify-center items-center gap-5 text-xl font-semibold uppercase'>
                    {logo}
                </motion.h2>
                {/* Divider */}
                <div className='  w-20  h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent  mt-4' />
            </div>

            {/* Scrollable Links */}
            <motion.div initial='hidden' animate='visible' variants={containerVarients} className='flex-1 space-y-2 py-3  scrollbar-none scrollbar-thumb-rounded-full overflow-y-auto  scrollbar-thumb-secondary_color scrollbar-track-transparent'>
                <motion.nav className='space-y-3 '>{
                    sidebarLinks.map((item, index) => {
                        const isActive = path === item.href
                        const fill = isActive ? '#fff' : '#0075ff'
                        return (
                            <motion.div  variants={itemVariants(index)} key={item.href} className={` flex items-center justify-center  py-2  rounded-2xl`}>
                                <div className={`   px-2 py-[9px] rounded-xl ${isActive ? 'bg-primary_blue' : 'bg-secondary_color'}`}>{item.icon(fill)}</div>

                            </motion.div>
                        )
                    })
                }
                </motion.nav>
            </motion.div>
          
        </div>
    )
}

export default ToggleIcons