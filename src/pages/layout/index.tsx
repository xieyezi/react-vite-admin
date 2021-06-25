import React, { useState, Suspense } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import SuspendFallbackLoading from './components/fallback-loading'
import Header from './components/header'
import SideMenu from '@src/menus'
import Tags from './components/tags'
import Logo from './components/logo'
import useStore from '@src/stores/user'
import './index.less'

const { Sider, Content } = Layout

const Index: React.FC = () => {
	const [collapsed, setsCollapsed] = useState(false)
	const locale = useStore((state) => state.locale)
	const toggle = () => {
		setsCollapsed((collapsed) => !collapsed)
	}
	return (
		<Layout className="layout-page">
			<Layout>
				<Sider
					className="layout-page-sider"
					trigger={null}
					collapsible
					collapsed={collapsed}
					width={locale === 'en_US' ? 264 : 200}
					breakpoint="md"
				>
					<Logo collapsed={collapsed} />
					<SideMenu />
				</Sider>
				<Layout>
					<Header collapsed={collapsed} toggle={toggle} />
					<Content className="layout-page-content">
						<Tags />
						<Suspense fallback={<SuspendFallbackLoading message="loading..." />}>
							<Outlet />
						</Suspense>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default Index
