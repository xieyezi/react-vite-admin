import React, { useState, Suspense } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import SuspendFallbackLoading from './components/fallback-loading'
import Header from './components/header'
import SideMenu from '@src/menus'
import Tags from './components/tags'
import './index.less'
import useStore from '@src/stores/user'

const { Sider, Content } = Layout

const Index: React.FC = () => {
	const [collapsed, setsCollapsed] = useState(false)
	const locale = useStore((state) => state.locale)
	const toggle = () => {
		setsCollapsed((collapsed) => !collapsed)
	}
	return (
		<Layout className="layout-page">
			<Header collapsed={collapsed} toggle={toggle} />
			<Layout>
				<Sider
					className="layout-page-sider"
					trigger={null}
					collapsible
					collapsed={collapsed}
					width={locale === 'en_US' ? 264 : 200}
					breakpoint="md"
				>
					<SideMenu />
				</Sider>
				<Content className="layout-page-content">
					<Tags />
					<Suspense fallback={<SuspendFallbackLoading message="正在加载中" />}>
						<Outlet />
					</Suspense>
				</Content>
			</Layout>
		</Layout>
	)
}

export default Index
