import React, { FC } from 'react'
import { Menu, Dropdown } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

const Index: FC = () => {
	return (
		<Dropdown
			overlay={
				<Menu>
					<Menu.Item key="0" onClick={() => {}}>
						关闭当前标签页
					</Menu.Item>
					<Menu.Item key="1" onClick={() => {}}>
						关闭其他标签页
					</Menu.Item>
					<Menu.Item key="2" onClick={() => {}}>
						关闭所有标签页
					</Menu.Item>
					<Menu.Divider />
				</Menu>
			}
		>
			<span id="pageTabs-actions">
				<SettingOutlined className="tagsView-extra" />
			</span>
		</Dropdown>
	)
}

export default Index
