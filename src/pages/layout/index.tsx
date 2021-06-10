import React, { useState } from 'react'
import { IRouteConfig } from '../../router/typing'
import { Layout } from 'antd'
import Header from './components/header'
import SideMenu from './components/side-menu'
import Tags from './components/tags'
import styles from './style.module.less'
import { Route, Switch } from 'react-router-dom'
import { omitRouteRenderProperties } from '@src/router/utils'

const { Sider, Content } = Layout

interface IProps {
	routes: IRouteConfig[]
}

const Index: React.FC<IProps> = ({ routes }) => {
	const [collapsed, setsCollapsed] = useState(false)
	const toggle = () => {
		setsCollapsed((collapsed) => !collapsed)
	}
	return (
		<Layout className={styles.layoutPage}>
			<Header collapsed={collapsed} toggle={toggle} />
			<Layout>
				<Sider className="layout-page-sider" trigger={null} collapsible collapsed={collapsed} breakpoint="md">
					<SideMenu layOutRoutes={routes} />
				</Sider>
				<Content className="layout-page-content">
					<Tags />
					<Switch>
						{routes.map((route) => (
							<Route
								{...omitRouteRenderProperties(route)}
								key={route.path}
								component={route.component}
								path={route.path}
							/>
						))}
					</Switch>
				</Content>
			</Layout>
		</Layout>
	)
}

export default Index
