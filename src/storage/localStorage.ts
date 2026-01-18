export type Contact = {
  id: string
  name: string
  email: string
  company: string
  status: 'active' | 'inactive'
}

const KEY = 'lorem_contacts'

export function loadContacts(): Contact[] | null {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Contact[]) : null
  } catch {
    return null
  }
}

export function saveContacts(contacts: Contact[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(contacts))
  } catch {}
}
