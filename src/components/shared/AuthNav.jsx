import Link from 'next/link'
import React, { useState } from 'react'
import { circleUser, keyIcon, profileIcon, rotate } from '../../../data'
import { Menu } from 'lucide-react'

const AuthNav = () => {
    const [showToggle, setShowToggle] = useState(false)
    return (
        <nav className=' fixed z-50  top-0 start-[15%]   bg-transparent backdrop-blur-[42px] border-[1px] border-gray-400 shadow-lg w-[70%]  py-3 lg:py-5  lg:px-10 my-5 lg:my-10 rounded-2xl  '>
            <div className='flex items-center justify-around gap-3'>

                <p style={{
                    backgroundImage: "linear-gradient(97.89deg, #ffffff 70.67%, rgba(117, 122, 140, 0) 108.55%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }} className='  font-bold text-center  drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] text-white text-sm lg:text-lg'>
                    VISION UI Free </p>
                <div className=' hidden lg:flex gap-5 lg:gap-10 items-center'>
                    <div className='flex text-white gap-1 text-sm lg:text-lg'>{rotate('#ffff')}<Link href={'/AdminDashboard'}>Dashboard</Link></div>
                    <div className='flex text-white gap-1 text-sm lg:text-lg'>{profileIcon('#ffff')}<Link href={'/AdminDashboard/pages/profile'}>Profile</Link></div>
                    <div className='flex text-white gap-1 text-sm lg:text-lg'>{circleUser('#ffff')}<Link href={'/AdminDashboard/sign-up'}>Sign Up</Link></div>
                    <div className='flex text-white gap-1 text-sm lg:text-lg'> {keyIcon('#fff')}<Link href={'/AdminDashboard/sign-in'}>Sign In</Link></div>

                </div>
                <button className='lg:hidden relative z-50' onClick={() => setShowToggle(!showToggle)} >
                    <Menu color='white' />
                </button>
                <div className=' lg:hidden absolute top-14 w-full  '>
                    {
                        showToggle && (
                            <div className='bg-primary_Color rounded-xl'>
                                <div className=' px-5 py-2 flex items-center text-white lg:gap-1 gap-3 text-sm lg:text-lg  border-b-[1px] border-gray-500 hover:bg-blue-950'>{rotate('#ffff')}<Link href={'/AdminDashboard'} onClick={() => setShowToggle(false)}>Dashboard</Link></div>
                                <div className='px-5 py-2 flex items-center text-white lg:gap-1 gap-3 text-sm lg:text-lg  border-b-[1px] border-gray-500 hover:bg-blue-950'>{profileIcon('#ffff')}<Link href={'/AdminDashboard/pages/profile'} onClick={() => setShowToggle(false)}>Profile</Link></div>
                                <div className=' px-5 py-2 flex items-center text-white lg:gap-1 gap-3 text-sm lg:text-lg  border-b-[1px] border-gray-500 hover:bg-blue-950'>{circleUser('#ffff')}<Link href={'/AdminDashboard/sign-up'} onClick={() => setShowToggle(false)}>Sign Up</Link></div>
                                <div className=' px-5 py-2 flex items-center text-white lg:gap-1 gap-3 text-sm lg:text-lg hover:bg-blue-950 '> {keyIcon('#fff')}<Link href={'/AdminDashboard/sign-in'} onClick={() => setShowToggle(false)}>Sign In</Link></div>

                            </div>
                        )
                    }
                </div>

            </div>


        </nav>
    )
}

export default AuthNav