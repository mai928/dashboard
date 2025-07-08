'use client'
import { useId } from "react"

export default function CircularProgress({ width, height, roundedColor, circleColor, percentage, showtext }) {
  const gradientId = useId()
  const radius = 92.5
  const strokeWidth = 15
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="100 100 200 200"
      width={width}
      height={height}

      className="m-auto -rotate-90 overflow-visible"
    >
      <defs>
        {/* url(#grd_rur84i32s5ae) */}
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
          gradientTransform="rotate(90, .5, .5)"
        >
          <stop offset="0" stopColor={circleColor} />
          <stop offset="100" stopColor={roundedColor} />
        </linearGradient>
      </defs>

      {/* Background Circle */}
      <circle
        cx="200"
        cy="200"
        r="92.5"
        stroke={'transparent'}
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* Foreground Animated Circle */}
      <circle
        cx="200"
        cy="200"
        r="92.5"
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        // 'url(#progress-gradient)'
        stroke={`url(#${gradientId})`}
        style={{
          transition: 'stroke-dashoffset 400ms',
        }}
      />

      {
        showtext && (

          <text
            x="200"
            y="200"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#fff"
            fontSize="28"
            fontWeight="bold"
            transform="rotate(90, 200, 200)" // rotate back to normal inside the rotated svg
          >
            <tspan x="200" dy="-2em" fontSize="14" className="fill-gray-400" fill="#ddd">safety</tspan>
            <tspan x="200" dy="1em" className="text-4xl">{percentage}</tspan>
            <tspan x="200" dy="2.5em" fontSize="14"  className="fill-gray-400" fill="#ddd">Total Score</tspan>

          </text>
        )

      }

    </svg>
  )
}
