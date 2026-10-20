'use client'

import { Session, INSTRUCTOR_COLORS } from '@/lib/types'

interface Props {
  session: Session
  onClick: (session: Session) => void
}

function shortenFacility(name: string): string {
  return name
    .replace('초등학교병설유치원', '초병설')
    .replace('병설유치원', '병설')
    .replace('어린이집', '어린이집')
    .replace('유치원', '유치원')
}

export default function EventChip({ session, onClick }: Props) {
  const key = session.instructor ?? '미배정'
  const colors = INSTRUCTOR_COLORS[key]

  return (
    <button
      onClick={e => { e.stopPropagation(); onClick(session) }}
      title={`${session.facility} ${session.sessionNumber}회기 ${session.startTime}~${session.endTime} (${key})`}
      className={`w-full text-left px-1.5 py-0.5 rounded text-xs font-medium truncate leading-tight mb-0.5 ${colors.bg} ${colors.text} hover:opacity-80 transition-opacity`}
    >
      {session.sessionNumber}회 {shortenFacility(session.facility)}
    </button>
  )
}
