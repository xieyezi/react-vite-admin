import React, { FC } from 'react'
import axios from 'axios'
import { Button, Form, Input } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import useStore from '@src/stores/user'
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
				<h2>登录</h2>
				<Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
					<Input placeholder="用户名" />
				</Form.Item>
				<Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
					<Input type="password" placeholder="密码" />
				</Form.Item>
				<Form.Item name="role" rules={[{ required: true, message: '请输入角色！' }]}>
					<Input type="role" placeholder="密码" />
				</Form.Item>
				<Form.Item>
					<Button htmlType="submit" type="primary" className="login-page-form_button">
						登录
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default LoginForm
