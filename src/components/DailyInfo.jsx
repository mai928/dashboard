'use client'
import React from 'react'
import { infoCurrentDayIcons } from '../../data'



const DailyInfo = ({fallbackData ,style}) => {

    return (
        <div className={`grid ${style} md:grid-cols-2 grid-cols-1 gap-5`}>
            {
                fallbackData.map((item, index) => (
                    <div className=' py-4 px-5  rounded-2xl flex items-center justify-between bg-third_color ' key={index}>
                        <div> <p className='text-gray-400 capitalize text-sm font-semibold'>{item.title}</p>
                            <p className='text-white text-2xl font-bold'> {item.caseName}<span className={`${parseFloat(item.rate) > 0 ? 'text-green-600 ' : 'text-red-600'} ms-1 text-[15px] font-bold`}>{item.rate}</span></p>
                        </div>
                        <div className='bg-primary_blue p-3 rounded-xl'>{infoCurrentDayIcons[index]?.icon}</div>

                    </div>
                ))
            }
        </div>
    )
}

export default DailyInfo


