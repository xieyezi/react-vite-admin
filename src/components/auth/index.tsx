import React from 'react'
import { useHistory } from 'react-router-dom'

interface IProps {
	redirect?: string
}

const Auth: React.FC<React.PropsWithChildren<IProps>> = ({ redirect, children }) => {
	const history = useHistory()
	// TODO: 取出token 判断
	const token = ''
	if (token) {
		history.push(redirect)
		return null
	}
	return <>{children}</>
}

export default Auth
