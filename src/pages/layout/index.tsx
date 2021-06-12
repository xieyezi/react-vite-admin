import React, { useState, Suspense } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import SuspendFallbackLoading from './components/fallback-loading'
import Header from './components/header'
import SideMenu from '@src/menus'
import Tags from './components/tags'
import styles from './style.module.less'

const { Sider, Content } = Layout

const Index: React.FC = () => {
	const [collapsed, setsCollapsed] = useState(false)
	const toggle = () => {
		setsCollapsed((collapsed) => !collapsed)
	}
	return (
		<Layout className={styles.layoutPage}>
			<Header collapsed={collapsed} toggle={toggle} />
			<Layout>
				<Sider className={styles.layoutPageSider} trigger={null} collapsible collapsed={collapsed} breakpoint="md">
					<SideMenu />
				</Sider>
				<Content className="layout-page-content">
					<Tags />
					<Suspense
						fallback={
							<SuspendFallbackLoading
								message="Alert message title"
								description="Further details about the context of this alert."
							/>
						}
					>
						<Outlet />
					</Suspense>
				</Content>
			</Layout>
		</Layout>
	)
}

export default Index
