import React, { useState } from 'react'
import { IRouteConfig } from '../../router/typing'
import { Layout } from 'antd'
import Header from './components/header'
import styles from './style.module.less'

const { Sider, Content } = Layout

interface IProps {
	routes: IRouteConfig[]
}

const Index: React.FC<IProps> = () => {
	const [collapsed, setsCollapsed] = useState(false)
	const toggle = () => {
		setsCollapsed((collapsed) => !collapsed)
	}
	return (
		<Layout className={styles.layoutPage}>
			<Header collapsed={collapsed} toggle={toggle} />
			<Layout>
				<Sider className="layout-page-sider" trigger={null} collapsible collapsed={collapsed} breakpoint="md">
					{/* <MenuComponent menuList={menuList} /> */}
				</Sider>
				<Content className="layout-page-content">sadsd</Content>
			</Layout>
		</Layout>
	)
}

export default Index
