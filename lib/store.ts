'use client'

import { Session } from './types'
import { SEED_SESSIONS } from './seed'

const KEY = 'hmm_sessions'

export function getSessions(): Session[] {
  if (typeof window === 'undefined') return []
  const raw = localStorage.getItem(KEY)
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(SEED_SESSIONS))
    return [...SEED_SESSIONS]
  }
  try {
    return JSON.parse(raw) as Session[]
  } catch {
    return [...SEED_SESSIONS]
  }
}

export function saveSessions(sessions: Session[]): void {
  localStorage.setItem(KEY, JSON.stringify(sessions))
}

export function addSession(session: Session): Session[] {
  const all = getSessions()
  all.push(session)
  saveSessions(all)
  return all
}

export function updateSession(updated: Session): Session[] {
  const all = getSessions().map(s => s.id === updated.id ? updated : s)
  saveSessions(all)
  return all
}

export function removeSession(id: string): Session[] {
  const all = getSessions().filter(s => s.id !== id)
  saveSessions(all)
  return all
}
