import create from 'zustand'
import { persist } from 'zustand/middleware'

export interface UserState {
	logged: boolean
	username: string
	password: string
	role: string
	token: string
	login: (payload: { username: string; role: string; password: string; token: string }) => void
	logout: () => void
}

const useStore = create<UserState>(
	persist<UserState>(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		(set, get) => ({
			username: '',
			password: '',
			role: '',
			token: '',
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
			}
		}),
		{
			name: 'user'
		}
	)
)

export default useStore
