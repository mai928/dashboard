'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { rightIcon } from '../../data';
import { useUser } from '@clerk/nextjs';


const Welcome = () => {
    const { user } = useUser()
    return (
        <div className='bg-welcome py-10 px-5 rounded-2xl'>
            <p className='text-slate-400 my-2'>Welcome back ,</p>
            <p className='text-4xl font-bold mb-5 capitalize'>{user?.firstName} {user?.lastName}</p>

            <p className='w-[40%] my-5 text-slate-400'>Glad to see you again! Ask me anything.</p>
            <button className='flex items-center gap-3 pt-16'>Tap to record <motion.span initial={{ x: 0 }} whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 300 }} >{rightIcon('#fff')}</motion.span></button>
        </div>
    )
}

export default Welcome