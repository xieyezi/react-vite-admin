import React, { FC } from 'react'
import { Menu, Dropdown } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import useStore from '@src/stores/headerTag'
import { LocaleFormatter } from '@src/locales'

const Index: FC = () => {
	const [activeTagId, removeTag, removeOtherTag, removeAllTag] = useStore((state) => [
		state.activeTagId,
		state.removeTag,
		state.removeOtherTag,
		state.removeAllTag
	])

	return (
		<Dropdown
			overlay={
				<Menu>
					<Menu.Item key="0" onClick={() => removeTag(activeTagId)}>
						<LocaleFormatter id="layout.tagAction.closeCurrent" />
					</Menu.Item>
					<Menu.Item key="1" onClick={() => removeOtherTag()}>
						<LocaleFormatter id="layout.tagAction.closeOther" />
					</Menu.Item>
					<Menu.Item key="2" onClick={() => removeAllTag()}>
						<LocaleFormatter id="layout.tagAction.closeAll" />
					</Menu.Item>
					<Menu.Divider />
				</Menu>
			}
		>
			<span id="pageTabs-actions">
				<SettingOutlined className="tags-extra" />
			</span>
		</Dropdown>
	)
}

export default Index
