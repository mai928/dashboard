"use client"

import { KeyIcon, TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { billingIcon, keyIcon, notificationIcon, settingsIcon, tableIcon, translation } from "../../data"
import { Progress } from "./ui/progress"
import { useEffect, useState } from "react"

export const description = "A bar chart"

// const chartData = [
//     { month: "January", desktop: 186 },
//     { month: "February", desktop: 305 },
//     { month: "March", desktop: 237 },
//     { month: "April", desktop: 473 },
//     { month: "May", desktop: 209 },
//     { month: "June", desktop: 314 },
//     { month: "july", desktop: 209 },
//     { month: "Aug", desktop: 314 },

// ]

const statsProperty = [
    {
        // label: "Users",
        // value: "32,984",
        // progress: 75,
        icon: tableIcon,
        color: "bg-blue-500",
    },
    {
        // label: "Clicks",
        // value: "2.42M",
        // progress: 40,
        icon: translation,
        color: "bg-yellow-500",
    },
    {
        // label: "Sales",
        // value: "2,400$",
        // progress: 55,
        icon: billingIcon,
        color: "bg-green-500",
    },
    {
        // label: "Items",
        // value: "320",
        // progress: 60,
        icon: keyIcon, 
        color: "bg-purple-500",
    },
]


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-3)",
    },
}

export default function BarCharts({BarChartData}) {





    const [progress, setProgress] = useState(13)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])


    return (
        <Card className={'bg-card-gradient border-0  rounded-3xl '}>

            <CardContent className='p-0 lg:p-3' >
                <ChartContainer config={chartConfig}>

                    <div className="bg-primary_Color  rounded-3xl py-5">
                        <ResponsiveContainer width="100%" >
                            <BarChart accessibilityLayer data={BarChartData[0].chartData}
                                barCategoryGap={'10%'}
                                barGap={4}>
                                <CartesianGrid
                                    vertical={false}
                                    stroke={'false'} />
                                <YAxis
                                    domain={[0, 500]}
                                    ticks={[0, 100, 200, 300, 400, 500]}
                                    tickMargin={15}
                                    tick={{ stroke: 'var(--muted-foreground)', fontSize: 10, fontWeight: '100' }}
                                    interval={0}
                                    tickLine={false}
                                    axisLine={false}
                                />

                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" barSize={5} radius={2} />

                            </BarChart>
                        </ResponsiveContainer>
                    </div>



                </ChartContainer>
            </CardContent>


            <CardFooter className="flex-col lg:items-start gap-2 text-sm">
                <div className="pt-4  pb-6">
                    <div className="flex items-center text-white gap-2 text-2xl font-medium">
                        Active User <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="text-green-600 font-bold ">
                        (+23) <span className="font-semibold text-gray-400">than the last week</span>
                    </div>
                </div>

                <div className="block lg:flex justify-between items-center w-full">
                    {BarChartData[0].statsData.map((item, index) => (

                        <div key={item.label} className="text-center mb-10 lg:mb-2">
                            <div className="flex gap-3 items-center justify-center">
                                <div className={`p-2 rounded-xl bg-slate-200`}>{statsProperty[index]?.icon('#0075ff')}</div>
                                <p className="text-muted-foreground text-slate-400 font-bold">{item.label}</p>
                            </div>
                            <div className="text-white text-xl font-bold mt-3">{item.value}</div>
                            <div className="w-full mt-1"> <Progress
                                value={item.progress}
                                indicatorStyle={{ height: '7px', borderRadius: '30px', position: 'absolute', top: '-2px' }}
                                className="w-[70%]  lg:w-[100%] h-[3px] mx-auto  bg-[rgba(75,85,99,0.4)]"
                                indicatorClassName={'bg-primary_blue'}
                            />
                            </div>

                        </div>
                    ))}
                </div>



            </CardFooter>
        </Card>
    )
}

