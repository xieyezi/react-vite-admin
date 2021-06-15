import React, { FC } from 'react'
import axios from 'axios'
import { Button, Form, Input } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import useStore from '@src/stores/user'
import { useLocale } from '@src/locales'
import './index.less'

const initialValues = {
	username: 'admin',
	password: 'admin',
	role: 'admin'
}

type LoginParams = typeof initialValues

const LoginForm: FC = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { formatMessage } = useLocale()
	const login = useStore((state) => state.login)

	const onFinished = async (form: LoginParams) => {
		const { username, password, role } = form
		const res = await axios.post('/api/login', {
			username,
			password,
			role
		})
		if (res.data.data) {
			const { token } = res.data.data
			login({ username, password, role, token })
			const from = decodeURIComponent(location.search)
			const fromPath = from.substring(6)
			navigate(from ? fromPath : '/order-list', { replace: true })
		}
	}

	return (
		<div className="login-page">
			<Form onFinish={onFinished} className="login-page-form" initialValues={initialValues}>
				<h2>{formatMessage({ id: 'login.submit' })}</h2>
				<Form.Item
					name="username"
					rules={[{ required: true, message: formatMessage({ id: 'login.username.message' }) }]}
				>
					<Input placeholder={formatMessage({ id: 'login.username' })} />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: formatMessage({ id: 'login.password.message' }) }]}
				>
					<Input type="password" placeholder={formatMessage({ id: 'login.password' })} />
				</Form.Item>
				<Form.Item name="role" rules={[{ required: true, message: formatMessage({ id: 'login.role' }) }]}>
					<Input type="role" placeholder={formatMessage({ id: 'login.role.message' })} />
				</Form.Item>
				<Form.Item>
					<Button htmlType="submit" type="primary" className="login-page-form_button">
						{formatMessage({ id: 'login.submit' })}
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default LoginForm
