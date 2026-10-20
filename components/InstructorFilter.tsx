'use client'

import { INSTRUCTORS, INSTRUCTOR_COLORS } from '@/lib/types'
import {
  AvatarOhKyeongmi,
  AvatarNohHyeongju,
  AvatarJiWonhyeok,
  AvatarUnassigned,
} from './InstructorAvatars'

interface Props {
  visible: Set<string>
  onToggle: (name: string) => void
}

const AVATARS: Record<string, React.ComponentType<{ size?: number }>> = {
  '노형주': AvatarNohHyeongju,
  '오경미': AvatarOhKyeongmi,
  '지원혁': AvatarJiWonhyeok,
  '미배정': AvatarUnassigned,
}

const ALL_KEYS = [...INSTRUCTORS, '미배정'] as const

export default function InstructorFilter({ visible, onToggle }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
      {ALL_KEYS.map(name => {
        const colors = INSTRUCTOR_COLORS[name]
        const isOn = visible.has(name)
        const Avatar = AVATARS[name]
        return (
          <button
            key={name}
            onClick={() => onToggle(name)}
            title={`${name} ${isOn ? '숨기기' : '보기'}`}
            className={`flex items-center gap-2 pl-1 pr-3 py-1 rounded-full text-sm font-semibold border-2 transition-all ${
              isOn
                ? `${colors.bg} ${colors.text} ${colors.border} shadow-sm`
                : 'bg-gray-50 text-gray-400 border-gray-200 opacity-50'
            }`}
          >
            <span className={`rounded-full overflow-hidden transition-all ${isOn ? 'opacity-100' : 'opacity-50'}`}>
              <Avatar size={28} />
            </span>
            {name}
          </button>
        )
      })}
    </div>
  )
}
