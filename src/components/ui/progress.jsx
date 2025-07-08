"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"


const Progress = React.forwardRef(({ className, value, indicatorClassName,indicatorStyle, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative w-full  rounded-full bg-muted", // remove height here
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "absolute top-0 left-0 transition-all", // ✅ free from height of parent
        indicatorClassName || "bg-primary"
      )}
      style={{
        width: `${value || 0}%`,
        height: "4px", // ✅ this sets the indicator bar height
       ...indicatorStyle, // ✅ allow custom styles (like height)

      }}
    />
  </ProgressPrimitive.Root>
))

Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }




