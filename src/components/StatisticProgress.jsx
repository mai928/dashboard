'use client'
import { SmileyIcon } from '../../data'
import CircularProgress from './CircularProgress'

const StatisticProgress = () => {
    const showtext =false
    const width ='200px'
    const height ='200px'
    const roundedColor ='#0075ff'
    // #2c3a6c
    const circleColor='#2c3a6c'
    const percentage=80
    return (
        <div className="">
            <div
              
                className=" px-6 py-7 bg-card-gradient rounded-2xl "
            >
                <h3 className="text-white font-bold text-lg mt-3 mb-2">Satisfaction Rate</h3>
                <p className="text-[15px] font-semibold text-gray-400 mb-6">From all projects</p>
                <div className='relative'>
                    <CircularProgress  width={width} height={height} roundedColor={roundedColor} circleColor={circleColor} percentage={percentage} showtext={showtext}/>
                    <div className='absolute bottom-[-8px] start-4 bg-primary_Color rounded-3xl text-center py-2 px-6'>
                        <div className='flex items-start justify-center gap-6'>
                             <p className='text-sm text-gray-400 font-semibold'>0%</p>
                            <p className='text-4xl  text-white font-semibold'>95%</p>
                            <p className='text-sm text-gray-400 font-semibold'>100%</p>
                        </div>
                        <p className='text-[14px] pt-1 text-gray-400 '>Based on likes</p>
                    </div>

                    <div className='absolute top-14 start-[40%]  bg-primary_blue p-[10px] rounded-full'>
                        {SmileyIcon('#fff')}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StatisticProgress
