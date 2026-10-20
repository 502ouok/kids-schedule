'use client'

import { useState, useEffect } from 'react'
import { Session, INSTRUCTORS, INSTRUCTOR_COLORS } from '@/lib/types'

type Mode = 'view' | 'edit' | 'add'

interface Props {
  session: Session | null
  defaultDate?: string
  mode: Mode
  onSave: (session: Session) => void
  onDelete: (id: string) => void
  onClose: () => void
}

const EMPTY: Omit<Session, 'id'> = {
  date: '',
  facility: '',
  className: '',
  studentCount: undefined,
  sessionNumber: 1,
  startTime: '10:00',
  endTime: '10:40',
  instructor: undefined,
  contactPerson: '',
  contactPhone: '',
  notes: '',
}

export default function SessionModal({ session, defaultDate, mode: initialMode, onSave, onDelete, onClose }: Props) {
  const [mode, setMode] = useState<Mode>(initialMode)
  const [form, setForm] = useState<Omit<Session, 'id'>>(EMPTY)
  const [confirmDelete, setConfirmDelete] = useState(false)

  useEffect(() => {
    if (session) {
      setForm({ ...session })
    } else {
      setForm({ ...EMPTY, date: defaultDate ?? '' })
    }
    setMode(initialMode)
    setConfirmDelete(false)
  }, [session, defaultDate, initialMode])

  const set = (key: keyof Omit<Session, 'id'>, value: string | number | undefined) =>
    setForm(f => ({ ...f, [key]: value }))

  const handleSave = () => {
    if (!form.facility.trim() || !form.date) return
    onSave({
      id: session?.id ?? crypto.randomUUID(),
      ...form,
    })
  }

  const instructorKey = (form.instructor as string | undefined) ?? '미배정'
  const colors = INSTRUCTOR_COLORS[instructorKey]

  const isReadonly = mode === 'view'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`px-5 py-4 ${colors.bg} ${colors.text} flex items-center justify-between`}>
          <div>
            <p className="text-xs opacity-80">
              {mode === 'add' ? '새 일정 추가' : mode === 'edit' ? '일정 수정' : '일정 상세'}
            </p>
            <p className="font-bold text-base mt-0.5">
              {isReadonly ? `${form.facility}` : '소그룹 프로그램'}
            </p>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white text-xl leading-none">×</button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-3 max-h-[70vh] overflow-y-auto">
          <Field label="날짜" required>
            <input
              type="date"
              value={form.date}
              disabled={isReadonly}
              onChange={e => set('date', e.target.value)}
              className="input"
            />
          </Field>

          <Field label="기관명" required>
            <input
              type="text"
              value={form.facility}
              disabled={isReadonly}
              onChange={e => set('facility', e.target.value)}
              placeholder="대전중리초등학교병설유치원"
              className="input"
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="반">
              <input
                type="text"
                value={form.className ?? ''}
                disabled={isReadonly}
                onChange={e => set('className', e.target.value)}
                placeholder="누리반(5세)"
                className="input"
              />
            </Field>
            <Field label="인원">
              <input
                type="number"
                value={form.studentCount ?? ''}
                disabled={isReadonly}
                onChange={e => set('studentCount', e.target.value ? Number(e.target.value) : undefined)}
                placeholder="0"
                className="input"
              />
            </Field>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Field label="회기">
              <select
                value={form.sessionNumber}
                disabled={isReadonly}
                onChange={e => set('sessionNumber', Number(e.target.value) as 1 | 2 | 3)}
                className="input"
              >
                <option value={1}>1회기</option>
                <option value={2}>2회기</option>
                <option value={3}>3회기</option>
              </select>
            </Field>
            <Field label="시작">
              <input
                type="time"
                value={form.startTime}
                disabled={isReadonly}
                onChange={e => set('startTime', e.target.value)}
                className="input"
              />
            </Field>
            <Field label="종료">
              <input
                type="time"
                value={form.endTime}
                disabled={isReadonly}
                onChange={e => set('endTime', e.target.value)}
                className="input"
              />
            </Field>
          </div>

          <Field label="담당 강사">
            <select
              value={form.instructor ?? ''}
              disabled={isReadonly}
              onChange={e => set('instructor', e.target.value || undefined)}
              className="input"
            >
              <option value="">미배정</option>
              {INSTRUCTORS.map(i => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="기관 담당자">
              <input
                type="text"
                value={form.contactPerson ?? ''}
                disabled={isReadonly}
                onChange={e => set('contactPerson', e.target.value)}
                placeholder="홍길동 교사"
                className="input"
              />
            </Field>
            <Field label="전화번호">
              <input
                type="text"
                value={form.contactPhone ?? ''}
                disabled={isReadonly}
                onChange={e => set('contactPhone', e.target.value)}
                placeholder="010-0000-0000"
                className="input"
              />
            </Field>
          </div>

          <Field label="비고">
            <textarea
              value={form.notes ?? ''}
              disabled={isReadonly}
              onChange={e => set('notes', e.target.value)}
              placeholder="참고사항 입력"
              rows={2}
              className="input resize-none"
            />
          </Field>

          {isReadonly && (
            <a
              href="https://dje-maum.kr/parttime/records"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-teal-50 text-teal-700 text-sm font-medium border border-teal-200 hover:bg-teal-100 transition-colors"
            >
              기록 작성 바로가기 →
            </a>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-gray-100 flex gap-2">
          {mode === 'view' && (
            <>
              <button
                onClick={() => setMode('edit')}
                className="flex-1 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                수정
              </button>
              {!confirmDelete ? (
                <button
                  onClick={() => setConfirmDelete(true)}
                  className="px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors"
                >
                  삭제
                </button>
              ) : (
                <button
                  onClick={() => session && onDelete(session.id)}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
                >
                  정말 삭제
                </button>
              )}
            </>
          )}
          {(mode === 'edit' || mode === 'add') && (
            <>
              <button
                onClick={() => mode === 'edit' ? setMode('view') : onClose()}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleSave}
                disabled={!form.facility.trim() || !form.date}
                className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-40 transition-colors"
              >
                저장
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}
