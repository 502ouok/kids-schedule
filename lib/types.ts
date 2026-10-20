export type Instructor = '노형주' | '오경미' | '지원혁'

export interface Session {
  id: string
  date: string // "YYYY-MM-DD"
  facility: string
  className?: string
  studentCount?: number
  sessionNumber: 1 | 2 | 3
  startTime: string // "10:00"
  endTime: string // "10:40"
  instructor?: Instructor
  contactPerson?: string
  contactPhone?: string
  notes?: string
}

export const INSTRUCTORS: Instructor[] = ['노형주', '오경미', '지원혁']

export const INSTRUCTOR_COLORS: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  '노형주': { bg: 'bg-blue-500', text: 'text-white', border: 'border-blue-600', dot: 'bg-blue-500' },
  '오경미': { bg: 'bg-emerald-500', text: 'text-white', border: 'border-emerald-600', dot: 'bg-emerald-500' },
  '지원혁': { bg: 'bg-violet-500', text: 'text-white', border: 'border-violet-600', dot: 'bg-violet-500' },
  '미배정': { bg: 'bg-gray-300', text: 'text-gray-700', border: 'border-gray-400', dot: 'bg-gray-400' },
}
