import React, { FC, useCallback, useEffect } from 'react'
import { Tabs } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import TagsViewAction from './tagAction'
import useStore from '@src/stores/headerTag'
import useUserStore from '@src/stores/user'
import menuList, { MenuItem } from '@src/menus/config'

const { TabPane } = Tabs

const Index: FC = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const locale = useUserStore((state) => state.locale)
	const [tags, activeTagId, addTag, removeTag, setActiveTag] = useStore((state) => [
		state.tags,
		state.activeTagId,
		state.addTag,
		state.removeTag,
		state.setActiveTag
	])

	// Tabs change
	const onChange = (key: string) => {
		const tag = tags.find((tag) => tag.id === key)
		if (tag) {
			setCurrentTag(tag.id)
			navigate(tag.path)
		}
	}
	const setCurrentTag = useCallback(
		(id?: string) => {
			const tag = tags.find((item) => {
				if (id) {
					return item.id === id
				} else {
					return item.path === location.pathname
				}
			})
			if (tag) setActiveTag(tag.id)
		},
		[location.pathname, tags]
	)

	// onRemove tag
	const onClose = (targetKey: string) => {
		removeTag(targetKey)
	}

	const findMenuByPath = (menus: MenuItem[], pathName: string): MenuItem | undefined => {
		for (const item of menus) {
			if (item.path) {
				if (item.path == pathName) return item
			}
			if (item.children) {
				const res = findMenuByPath(item.children, pathName)
				if (res) return res
			}
		}
	}

	// 页面刷新时加入 pathname 的tab
	useEffect(() => {
		if (menuList.length) {
			const { pathname } = location
			const menu = findMenuByPath(menuList, pathname)
			if (menu) {
				addTag({
					path: menu.path as string,
					label: menu.title,
					id: menu.key,
					closable: true
				})
			}
		}
	}, [location.pathname])

	// pathname 和 tab 绑定
	useEffect(() => {
		if (tags && activeTagId) {
			const targetTab = tags.filter((e) => e.id === activeTagId)
			navigate(targetTab[0].path)
		}
	}, [tags, activeTagId])

	return (
		<div id="pageTabs" style={{ background: '#fff', padding: '6px 4px' }}>
			<Tabs
				tabBarStyle={{ margin: 0 }}
				onChange={onChange}
				activeKey={activeTagId}
				type="editable-card"
				hideAdd
				onEdit={(targetKey, action) => action === 'remove' && onClose(targetKey as string)}
				tabBarExtraContent={<TagsViewAction />}
			>
				{tags.map((tag) => (
					<TabPane tab={tag.label[locale]} key={tag.id} closable={tag.closable} />
				))}
			</Tabs>
		</div>
	)
}

export default Index
