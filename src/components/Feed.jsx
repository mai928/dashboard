"use client"
import React, { useRef } from 'react'
import dynamic from "next/dynamic"
import DailyInfo from './DailyInfo';
import Welcome from './Welcome';
import StatisticProgress from './StatisticProgress';
import Tracking from './Tracking';
import { motion, useInView } from 'framer-motion'
import ScrollFadeIn from './ScrollFadeIn';

// ✅ Dynamically import AreaCharts with SSR disabled
// ✅ Fix: extract `.default` from the imported module


const DynamicAreaCharts = dynamic(
    () => import('@/components/AreaCharts'),
    {
        ssr: false,
    }
);

const DynamicBarCharts = dynamic(
    () => import('@/components/BarCharts'),
    {
        ssr: false,
    }
);

const DataTable = dynamic(
    () => import('@/components/DataTable'),
    {
        ssr: false,
    }
);

const Order = dynamic(
    () => import('@/components/Order'),
    {
        ssr: false,
    }
);

const wrapper = {
    hidden: {
        opacity: 0,
        x: 40
    },
    visible: {
        opacity: 1,
        x: 0,

        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 20,
            mass: 0.6
        }
    },
}

const containerVarients = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,

        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 15,
            when: 'beforeChildren',
            staggerChildren: 0.2
        }
    },

}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

const inViewVarient = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};


const Feed = ({ fallbackData, chartData, BarChartData }) => {
    const ref = useRef(null)
    const isinView = useInView(ref, { once: true })

    return (
       <motion.div initial='hidden' animate='visible' variants={wrapper} className='px-2 lg:px-5  text-white pt-16 lg:pt-0'>
            <DailyInfo style={'lg:grid-cols-4'} fallbackData={fallbackData} />
            <motion.div
                variants={containerVarients}
                initial='hidden'
                animate='visible'
            >

                <motion.div
                    variants={itemVariants}
                    className='grid grid-cols-12 gap-6 w-full my-5'>
                    <div className='col-span-12 md:col-span-6 lg:col-span-5'><Welcome /></div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-3'><StatisticProgress /></div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'><Tracking /></div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="w-full block lg:flex items-center gap-6 ">
                    <div className='w-full lg:w-[60%]'><DynamicAreaCharts chartData={chartData} />   </div>
                    <div className=' w-full lg:w-[40%] mt-5 lg:mt-0'><DynamicBarCharts BarChartData={BarChartData} /> </div>
                </motion.div>


            </motion.div>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={isinView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className='w-full block lg:flex items-center gap-6  py-4 sm:py-8   '>
                <div className='w-full lg:w-[70%] h-full'><DataTable /></div>
                <div className=' w-full lg:w-[30%] h-full'><Order /></div>
            </motion.div>

        </motion.div>

    )
}
export default Feed
