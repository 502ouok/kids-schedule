'use client'

import { Session } from '@/lib/types'
import EventChip from './EventChip'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

interface Props {
  year: number
  month: number // 0-indexed
  sessions: Session[]
  visibleInstructors: Set<string>
  onSessionClick: (session: Session) => void
  onDayClick: (dateStr: string) => void
}

function toDateStr(year: number, month: number, day: number): string {
  const mm = String(month + 1).padStart(2, '0')
  const dd = String(day).padStart(2, '0')
  return `${year}-${mm}-${dd}`
}

export default function Calendar({ year, month, sessions, visibleInstructors, onSessionClick, onDayClick }: Props) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const today = new Date()
  const todayStr = toDateStr(today.getFullYear(), today.getMonth(), today.getDate())

  const sessionMap = new Map<string, Session[]>()
  sessions.forEach(s => {
    const key = s.instructor ?? '미배정'
    if (!visibleInstructors.has(key)) return
    const list = sessionMap.get(s.date) ?? []
    list.push(s)
    sessionMap.set(s.date, list)
  })

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="grid grid-cols-7 mb-1">
        {WEEKDAYS.map((d, i) => (
          <div
            key={d}
            className={`text-center text-xs font-semibold py-2 ${i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-gray-500'}`}
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 border-l border-t border-gray-200">
        {cells.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} className="border-r border-b border-gray-200 min-h-24 bg-gray-50" />
          }
          const dateStr = toDateStr(year, month, day)
          const daySessions = sessionMap.get(dateStr) ?? []
          const isToday = dateStr === todayStr
          const dow = (firstDay + day - 1) % 7
          const isSun = dow === 0
          const isSat = dow === 6

          return (
            <div
              key={dateStr}
              onClick={() => onDayClick(dateStr)}
              className="border-r border-b border-gray-200 min-h-24 p-1 cursor-pointer hover:bg-blue-50 transition-colors"
            >
              <div className="flex justify-end mb-1">
                <span
                  className={`text-xs font-medium w-6 h-6 flex items-center justify-center rounded-full ${
                    isToday
                      ? 'bg-blue-600 text-white'
                      : isSun
                      ? 'text-red-500'
                      : isSat
                      ? 'text-blue-500'
                      : 'text-gray-700'
                  }`}
                >
                  {day}
                </span>
              </div>
              <div>
                {daySessions.map(s => (
                  <EventChip key={s.id} session={s} onClick={onSessionClick} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
