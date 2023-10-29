import type { UserInfo } from 'firebase/auth'

export type User = {
  loggedIn: boolean
  user: UserInfo | null
}
