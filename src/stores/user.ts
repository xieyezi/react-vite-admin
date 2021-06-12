import create from 'zustand'

export interface UserState {
	logged: boolean
	username: string
	password: string
	role: string
	token: string
	login: (payload: { username: string; role: string; password: string; token: string }) => void
	logout: () => void
}

const useStore = create<UserState>((set, _) => ({
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
}))

export default useStore
