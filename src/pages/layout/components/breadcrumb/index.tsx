import React, { useEffect } from 'react'
import { Breadcrumb } from 'antd'
import menuList, { MenuItem } from '@src/menus/config'
import { useLocation } from 'react-router-dom'
import useUserStore from '@src/stores/user'
import '../../index.less'

interface BreadcrumbItem {
	key: string
	path?: string
	title: string
}

const { Item } = Breadcrumb
let breadcrumbList: BreadcrumbItem[] = []
let end = false

const Index: React.FC = () => {
	const { pathname } = useLocation()
	const locale = useUserStore((state) => state.locale)

	// 根据pathname找出面包屑路径
	const getBreadcrumbByPathName = (menuList: MenuItem[], pathname: string, breadcrumbs: BreadcrumbItem[] = []) => {
		for (const menu of menuList) {
			const list: BreadcrumbItem[] = []
			if (!end) {
				list.push({
					key: menu.key,
					path: menu.path,
					title: menu.title[locale]
				})
				if (menu.path == pathname) {
					breadcrumbList = breadcrumbs.concat(list)
					end = true
					break
				} else if (menu.children) {
					getBreadcrumbByPathName(menu.children, pathname, breadcrumbs.concat(list))
				}
			}
		}
	}

	useEffect(() => {
		end = false
		if (pathname === '/') getBreadcrumbByPathName(menuList, '/order-list')
		else getBreadcrumbByPathName(menuList, pathname)
	}, [pathname])

	return (
		<Breadcrumb>
			{breadcrumbList.map((e) => {
				return <Item key={e.key}>{e.title}</Item>
			})}
		</Breadcrumb>
	)
}

export default Index
