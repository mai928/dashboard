import React, { useId } from 'react'
import { settingDots } from '../../data'
import CircularProgress from './CircularProgress'

const Tracking = () => {
    const showtext = true

    const width = '200px'
    const height = '200px'
    const roundedColor = '#05CD99'
    const circleColor = 'rgba(5, 205, 153, 0)'
    const percentage = 70

    return (
        <div className='bg-card-gradient lg:px-5 py-10 rounded-2xl'>
            <div className='flex justify-between items-center px-3 lg:px-0'>
                <h3 className='font-semibold text-xl '>Referral Tracking</h3>
                <div className='bg-secondary_color px-3 py-2 rounded-xl'>{settingDots('#0075ff')}</div>
            </div>


            <div className=' block lg:flex items-center justify-between'>

                <div className='order-1 lg:order-2'>
                    <CircularProgress width={width} height={height} roundedColor={roundedColor} circleColor={circleColor} percentage={percentage} showtext={showtext} />

                </div>

                <div className='order-2 lg:order-1'>
                    <div className='bg-primary_Color mt-5 ps-5 pe-8 py-4 rounded-2xl text-center lg:text-start'>
                        <p className='text-gray-500'>Invited</p>
                        <p className='font-bold text-lg'>145</p>
                        <p className='font-bold text-xl'>people</p>
                    </div>

                    <div className='bg-primary_Color mt-5 ps-5 pe-8 py-5 rounded-2xl  text-center lg:text-start'>
                        <p className='text-gray-500 font-semibold'>Bouns</p>
                        <p className='font-bold text-lg'>1,465</p>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Tracking