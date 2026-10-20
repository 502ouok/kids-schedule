import { Suspense } from 'react'
import CalendarApp from '@/components/CalendarApp'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <CalendarApp />
    </Suspense>
  )
}
