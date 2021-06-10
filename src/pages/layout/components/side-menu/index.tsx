import { IRouteConfig } from '@src/router/typing'
import { Menu } from 'antd'
import React, { useState, useEffect } from 'react'

interface MenuProps {
	layOutRoutes: IRouteConfig[]
}

const { SubMenu, Item } = Menu

const Index: React.FC<MenuProps> = ({ layOutRoutes }) => {
	console.log(layOutRoutes)
	const [openKeys, setOpenkeys] = useState<string[]>([])
	const [selectedKeys, setSelectedKeys] = useState<string[]>([])

	const onOpenChange = (keys: string[]) => {
		const key = keys.pop()
		setOpenkeys(key ? [key] : [])
	}

	useEffect(() => {
		console.log(layOutRoutes[0].path)
		setSelectedKeys([layOutRoutes[0].path])
		// setOpenkeys(collapsed ? [] : ['/' + pathname.split('/')[1]]);
	}, [layOutRoutes])

	return (
		<div>
			<Menu
				mode="inline"
				theme="light"
				selectedKeys={selectedKeys}
				openKeys={openKeys}
				onOpenChange={onOpenChange as any}
				className="layout-page-sider-menu"
			>
				{layOutRoutes?.map((menu) =>
					menu.breadcrumb ? (
						<SubMenu key={menu.pageTitle} title={menu.pageTitle}>
							{menu.breadcrumb.map((child) => (
								<Item key={child.path} onClick={() => {}}>
									{child.title}
								</Item>
							))}
						</SubMenu>
					) : (
						<Item key={menu.pageTitle} onClick={() => {}}>
							{menu.pageTitle}
						</Item>
					)
				)}
			</Menu>
		</div>
	)
}

export default Index
