import React from 'react'
import { infoCurrentDay } from '../../data'

const DailyInfo = () => {

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                infoCurrentDay.map((item) => (
                    <div className=' py-4 px-5  rounded-2xl flex items-center justify-between bg-third_color ' key={item.id}>
                        <div> <p className='text-gray-400 capitalize text-sm font-semibold'>{item.title}</p>
                            <p className='text-white text-2xl font-bold'> {item.caseName}<span className={`${parseFloat(item.rate)>0 ?'text-green-600 ':'text-red-600'} ms-1 text-[15px] font-bold`}>{item.rate}</span></p>
                        </div>
                        <div className='bg-primary_blue p-3 rounded-xl'>{item.icon}</div>

                    </div>
                ))
            }
        </div>
    )
}

export default DailyInfo