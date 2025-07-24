// components/Calendar.tsx
'use client'
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const calendarDays = Array.from({ length: 35 }, (_, i) => i + 1)

const events = [
  { day: 1, label: "All day confere", color: "bg-green-500" },
  { day: 3, label: "Meeting with M", color: "bg-blue-600" },
  { day: 4, label: "Cyber Week", color: "bg-orange-400" },
  { day: 5, label: "Winter Hackat", color: "bg-red-600" },
  { day: 10, label: "Digital event", color: "bg-orange-400" },
  { day: 12, label: "Marketing ever", color: "bg-purple-600" },
  { day: 25, label: "Black Friday", color: "bg-blue-600" },
  { day: 21, label: "Dinner with Far", color: "bg-red-600" },
]

export default function CalendarChart() {
  return (
    <Card className="p-6 bg-gradient-to-br from-[#1a1a40] to-[#141432] rounded-3xl text-white shadow-xl ">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Calendar</h2>
        <p className="text-sm text-muted-foreground">Monday, 2021</p>
      </div>

      <div className="grid grid-cols-7 text-center text-muted-foreground mb-2">
        {days.map((d) => (
          <div key={d} className="text-sm font-medium">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((day) => {
          const event = events.find((e) => e.day === day)
          return (
            <div key={day} className="relative h-24 border border-gray-800 rounded-lg p-1">
              <div className="text-xs text-right">{day}</div>
              {event && (
                <div
                  className={cn(
                    "absolute bottom-1 left-1 right-1 text-[10px] px-1 py-0.5 rounded text-white truncate",
                    event.color
                  )}
                >
                  {event.label}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Card>
  )
}
