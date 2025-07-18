"use client"
import * as React from "react"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


// const chartData = [
//   { month: "Jan", desktop: 100, mobile: 500 },
//   { month: "Feb", desktop: 230, mobile: 250 },
//   { month: "Mar", desktop: 300, mobile: 300 },
//   { month: "Apr", desktop: 350, mobile: 220 },
//   { month: "May", desktop: 370, mobile: 500 },
//   { month: "Jun", desktop: 420, mobile: 250 },
//   { month: "Jul", desktop: 550, mobile: 300 },
//   { month: "Aug", desktop: 350, mobile: 230 },
//   { month: "Sep", desktop: 380, mobile: 300 },
//   { month: "Oct", desktop: 290, mobile: 180 },
//   { month: "Nov", desktop: 410, mobile: 350 },
//   { month: "Dec", desktop: 450, mobile: 390 },
// ]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
}


export default function AreaCharts({chartData}) {
  const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const processedData = chartData
		? chartData
            .flatMap(doc => doc.chartData)
            .sort((a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month))
		: [];     
    //  console.log("Data being passed to AreaChart:", processedData);



  return (
    <Card className=" bg-card-gradient rounded-3xl border-0 ">
      <CardHeader className="flex items-center gap-2 pb-14  sm:flex-row">
        <div className=" flex-1 gap-1">
          <CardTitle className={'text-white text-2xl'}>Sales Overview</CardTitle>
          <CardDescription className='font-semibold text-gray-400 py-1'>
            <span className="text-green-600">+5% more</span>  in 2021
          </CardDescription>
        </div>

      </CardHeader>
      <CardContent className='p-0 lg:p-6'>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart data={processedData} >
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="var(--border-lines-area)"
              strokeOpacity={0.5}
              strokeDasharray='3 6'
            />
            <XAxis
              dataKey="month"
              tickMargin={20}
              minTickGap={10}
              tick={{ stroke: 'var(--muted-foreground)', fontSize: 9 }}
              tickLine={false}
              axisLine={false}

            />

            <YAxis
              domain={[100, 600]}
              ticks={[100, 200, 300, 400, 500, 600]}
              tickMargin={30}
              tickCount={7}
              tick={{ stroke: 'var(--muted-foreground)', fontSize: 9 }}
              axisLine={false}
              tickLine={false}

            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  className='bg-black border-0 shadow-md shadow-slate-500'
                  labelFormatter={(value) => value}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="bump"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
              strokeWidth={5}

            />
            <Area
            
              dataKey="desktop"
              type="bump"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              strokeWidth={5}

              stackId="b"
            />
          </AreaChart>

        </ChartContainer>
      </CardContent>
    </Card>
  )
}