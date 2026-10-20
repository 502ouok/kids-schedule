'use client'

import { useState, useEffect } from 'react'
import { Session } from '@/lib/types'
import { getSessions, addSession, updateSession, removeSession } from '@/lib/store'
import Calendar from './Calendar'
import InstructorFilter from './InstructorFilter'
import SessionModal from './SessionModal'
import { AvatarOhKyeongmi, AvatarNohHyeongju, AvatarJiWonhyeok } from './InstructorAvatars'

const ALL_VISIBLE = new Set(['노형주', '오경미', '지원혁', '미배정'])

type ModalState =
  | { open: false }
  | { open: true; mode: 'view' | 'edit'; session: Session; defaultDate?: never }
  | { open: true; mode: 'add'; session?: never; defaultDate: string }

const MONTH_NAMES = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']

function todayStr() {
  const t = new Date()
  const mm = String(t.getMonth() + 1).padStart(2, '0')
  const dd = String(t.getDate()).padStart(2, '0')
  return `${t.getFullYear()}-${mm}-${dd}`
}

export default function CalendarApp() {
  const [year, setYear] = useState(0)
  const [month, setMonth] = useState(0)
  const [sessions, setSessions] = useState<Session[]>([])
  const [visible, setVisible] = useState(new Set(ALL_VISIBLE))
  const [modal, setModal] = useState<ModalState>({ open: false })

  useEffect(() => {
    const now = new Date()
    setYear(now.getFullYear())
    setMonth(now.getMonth())
    setSessions(getSessions())
  }, [])

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11) }
    else setMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0) }
    else setMonth(m => m + 1)
  }

  const toggleInstructor = (name: string) => {
    setVisible(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  const handleSessionClick = (s: Session) => setModal({ open: true, mode: 'view', session: s })
  const handleDayClick = (dateStr: string) => setModal({ open: true, mode: 'add', defaultDate: dateStr })

  const handleSave = (s: Session) => {
    if (sessions.find(x => x.id === s.id)) {
      setSessions(updateSession(s))
    } else {
      setSessions(addSession(s))
    }
    setModal({ open: false })
  }

  const handleDelete = (id: string) => {
    setSessions(removeSession(id))
    setModal({ open: false })
  }

  if (year === 0) return null

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          {/* instructor avatars in header */}
          <div className="flex -space-x-2">
            <span className="rounded-full ring-2 ring-white"><AvatarNohHyeongju size={36} /></span>
            <span className="rounded-full ring-2 ring-white"><AvatarOhKyeongmi size={36} /></span>
            <span className="rounded-full ring-2 ring-white"><AvatarJiWonhyeok size={36} /></span>
          </div>
          <div>
            <p className="text-xs text-gray-400 leading-none">한마음밭 대전교육청</p>
            <h1 className="text-base font-bold text-gray-800 mt-0.5">영유아 마음돌봄 일정</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button
              onClick={prevMonth}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-xl font-light"
            >
              ‹
            </button>
            <span className="text-sm font-semibold text-gray-700 w-24 text-center">
              {year}년 {MONTH_NAMES[month]}
            </span>
            <button
              onClick={nextMonth}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-xl font-light"
            >
              ›
            </button>
          </div>
          <button
            onClick={() => setModal({ open: true, mode: 'add', defaultDate: todayStr() })}
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            + 일정 추가
          </button>
        </div>
      </header>

      {/* Instructor filter */}
      <InstructorFilter visible={visible} onToggle={toggleInstructor} />

      {/* Calendar */}
      <Calendar
        year={year}
        month={month}
        sessions={sessions}
        visibleInstructors={visible}
        onSessionClick={handleSessionClick}
        onDayClick={handleDayClick}
      />

      {/* Modal */}
      {modal.open && (
        <SessionModal
          session={modal.mode !== 'add' ? modal.session : null}
          defaultDate={modal.mode === 'add' ? modal.defaultDate : undefined}
          mode={modal.mode}
          onSave={handleSave}
          onDelete={handleDelete}
          onClose={() => setModal({ open: false })}
        />
      )}
    </div>
  )
}
