import React, { FC, useCallback, useEffect } from 'react'
import { Tabs } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
import TagsViewAction from './tagAction'

const { TabPane } = Tabs

const Index: FC = () => {
	const { tags, activeTagId } = useAppState((state) => state.tagsView)

	const history = useHistory()
	const location = useLocation()

	// onClick tag
	const onChange = (key: string) => {
		const tag = tags.find((tag) => tag.id === key)
		if (tag) {
			setCurrentTag(tag.id)
			history.push(tag.path)
		}
	}

	// onRemove tag
	const onClose = (targetKey: string) => {
		// dispatch(removeTag(targetKey))
	}

	const setCurrentTag = () => {}

	useEffect(() => {
		if (menuList.length) {
			const menu = menuList.find((m) => m.path === location.pathname)
			if (menu) {
				// Initializes dashboard page.
				const dashboard = menuList[0]
				dispatch(
					addTag({
						path: dashboard.path,
						label: dashboard.label,
						id: dashboard.key,
						closable: false
					})
				)
				// Initializes the tag generated for the current page
				// Duplicate tag will be ignored in redux.
				dispatch(
					addTag({
						path: menu.path,
						label: menu.label,
						id: menu.key,
						closable: true
					})
				)
			}
		}
	}, [dispatch, location.pathname, menuList])

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
					<TabPane tab={tag} key={tag.id} closable={tag.closable} />
				))}
			</Tabs>
		</div>
	)
}

export default Index
