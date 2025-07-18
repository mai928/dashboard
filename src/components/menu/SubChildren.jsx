import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const SubChildren = ({ isOpenSub, child }) => {
    return (
        <div> {isOpenSub && <motion.div
            initial={{ opacity: 0, h: 20 }}
            animate={{ opacity: 1, h: 'auto'}}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            {
                child.children.map((sub) => (
                    <Link className='flex items-center gap-3 ms-10 mt-3 text-sm'
                                                        onClick={(e) => e.stopPropagation()}
                     href={sub.href}> <div className='w-1 h-1 bg-primary_blue rounded-full' />{sub.label}</Link>
                ))
            }
        </motion.div>}</div>
    )
}

export default SubChildren