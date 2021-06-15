import React, { FC } from 'react'
import { LogoutOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout, Dropdown, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useLocale } from '@src/locales'
import axios from 'axios'
import AntdSvg from '/antd.svg'
import genji from '@assets/image/husky.png'
import useStore from '@src/stores/user'
import '../../index.less'

const { Header } = Layout

interface HeaderProps {
	collapsed: boolean
	toggle: () => void
}

const Index: FC<HeaderProps> = ({ collapsed, toggle }) => {
	const navigate = useNavigate()
	const logged = useStore((state) => state.logged)
	const logout = useStore((state) => state.logout)
	const { formatMessage } = useLocale()

	const toLogin = () => {
		navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })
	}

	const menuChange = async ({ key }: { key: string }) => {
		switch (key) {
			case '1':
				navigate('/order-list', { replace: true })
				break
			case '2': {
				const res = await axios.post('/api/logout')
				if (res.status == 200) {
					logout()
				}
				break
			}
			default:
				break
		}
	}

	const menu = (
		<Menu onClick={menuChange}>
			<Menu.Item key="1">
				<span>
					<UserOutlined />
					<span>{formatMessage({ id: 'layout.heaer.usersetting' })}</span>
				</span>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="2">
				<span>
					<LogoutOutlined />
					<span>{formatMessage({ id: 'layout.heaer.logout' })}</span>
				</span>
			</Menu.Item>
		</Menu>
	)
	return (
		<Header className="layout-page-header">
			<div className="logo" style={{ width: collapsed ? 80 : 200 }}>
				<img src={AntdSvg} alt="logo" />
				{collapsed ? null : <span style={{ paddingLeft: '10px', fontSize: '16px' }}>React Vite Admin</span>}
			</div>
			<div className="layout-page-header-main">
				<div onClick={toggle}>
					<span id="sidebar-trigger">{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
				</div>
				<div className="actions">
					{logged ? (
						<Dropdown overlay={menu} trigger={['click']}>
							<span className="user-action">
								<img src={genji} className="user-avator" alt="avator" />
							</span>
						</Dropdown>
					) : (
						<span style={{ cursor: 'pointer' }} onClick={toLogin}>
							{formatMessage({ id: 'login.submit' })}
						</span>
					)}
				</div>
			</div>
		</Header>
	)
}

export default Index
