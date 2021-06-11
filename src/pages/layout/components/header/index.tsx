import React, { FC, useState } from 'react'
import { LogoutOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout, Dropdown, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import AntdSvg from '/antd.svg'
import genji from '@assets/image/husky.png'
import styles from '../../style.module.less'

const { Header } = Layout

interface HeaderProps {
	collapsed: boolean
	toggle: () => void
}

const Index: FC<HeaderProps> = ({ collapsed, toggle }) => {
	const history = useHistory()
	const [isLogin, setIsLogin] = useState(true)
	const toLogin = () => {
		history.replace('/')
	}

	const menuChange = ({ key }: { key: string }) => {
		switch (key) {
			case '1':
				history.replace('/dashboard')
				break
			case '2':
				setIsLogin(false)
				break
			default:
				break
		}
	}

	const menu = (
		<Menu onClick={menuChange}>
			<Menu.Item key="1">
				<span>
					<UserOutlined />
					<span>个人设置</span>
				</span>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="2">
				<span>
					<LogoutOutlined />
					<span>退出登录</span>
				</span>
			</Menu.Item>
		</Menu>
	)
	return (
		<Header className={styles.layoutPageHeader}>
			<div className={styles.logo} style={{ width: collapsed ? 80 : 200 }}>
				<img src={AntdSvg} alt="" />
			</div>
			<div className={styles.layoutPageHeaderMain}>
				<div onClick={toggle}>
					<span id="sidebar-trigger">{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
				</div>
				<div className={styles.headerActions}>
					{isLogin ? (
						<Dropdown overlay={menu} trigger={['click']}>
							<span className={styles.userActions}>
								<img src={genji} className={styles.userAvator} alt="avator" />
							</span>
						</Dropdown>
					) : (
						<span style={{ cursor: 'pointer' }} onClick={toLogin}>
							登录
						</span>
					)}
				</div>
			</div>
		</Header>
	)
}

export default Index
