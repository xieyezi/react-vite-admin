import { Locale } from '@src/App'
import create from 'zustand'
import { persist } from 'zustand/middleware'

export interface UserState {
	logged: boolean
	username: string
	password: string
	role: string
	token: string
	locale: Locale
	login: (payload: { username: string; role: string; password: string; token: string }) => void
	logout: () => void
	setLocale: (key: Locale) => void
}

const useStore = create<UserState>(
	persist<UserState>(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		(set, get) => ({
			username: '',
			password: '',
			role: '',
			token: '',
			locale: 'en_US',
			logged: false,
			login: ({ username, password, role, token }) => {
				localStorage.setItem('username', username)
				localStorage.setItem('password', password)
				localStorage.setItem('role', role)
				localStorage.setItem('token', token)
				set({
					username,
					password,
					role,
					token,
					logged: true
				})
			},
			logout: async () => {
				localStorage.clear()
				set({
					username: '',
					password: '',
					role: '',
					token: '',
					logged: false
				})
			},
			setLocale: (key) => set({ locale: key })
		}),
		{
			name: 'user'
		}
	)
)

export default useStore
