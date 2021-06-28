import React, { FC, useState, useEffect } from 'react'
import { Tabs, Dropdown, Badge, Spin, List, Avatar, Tag } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { Notice, EventStatus } from '../../../../../mock/notice'
import { SoundOutlined } from '@ant-design/icons'
import axios from 'axios'
import '../../index.less'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const { TabPane } = Tabs

const HeaderNoticeComponent: FC = () => {
	const [visible, setVisible] = useState(false)
	const [loading, setLoading] = useState(false)
	const [noticeList, setNoticeList] = useState<Notice[]>([])

	const noticeListFilter = <T extends Notice['type']>(type: T) => {
		return noticeList.filter((notice) => notice.type === type) as Notice<T>[]
	}

	const getNotice = async () => {
		setLoading(true)
		const res = await axios.get('/api/notice')
		setLoading(false)
		setNoticeList(res.data.data)
	}

	useEffect(() => {
		getNotice()
	}, [])

	const tabs = (
		<div>
			<Spin tip="Loading..." indicator={antIcon} spinning={loading}>
				<Tabs defaultActiveKey="1">
					<TabPane tab={`通知(${noticeListFilter('notification').length})`} key="1">
						<List
							dataSource={noticeListFilter('notification')}
							renderItem={(item) => (
								<List.Item>
									<List.Item.Meta
										avatar={<Avatar src={item.avatar} />}
										title={<a href={item.title}>{item.title}</a>}
										description={item.datetime}
									/>
								</List.Item>
							)}
						/>
					</TabPane>

					<TabPane tab={`消息(${noticeListFilter('message').length})`} key="2">
						<List
							dataSource={noticeListFilter('message')}
							renderItem={(item) => (
								<List.Item>
									<List.Item.Meta
										avatar={<Avatar src={item.avatar} />}
										title={<a href={item.title}>{item.title}</a>}
										description={
											<div className="notice-description">
												<div className="notice-description-content">{item.description}</div>
												<div className="notice-description-datetime">{item.datetime}</div>
											</div>
										}
									/>
								</List.Item>
							)}
						/>
					</TabPane>
					<TabPane tab={`待办(${noticeListFilter('event').length})`} key="3">
						<List
							dataSource={noticeListFilter('event')}
							renderItem={(item) => (
								<List.Item>
									<List.Item.Meta
										title={
											<div className="notice-title">
												<div className="notice-title-content">{item.title}</div>
												<Tag color={EventStatus[item.status]}>{item.extra}</Tag>
											</div>
										}
										description={item.description}
									/>
								</List.Item>
							)}
						/>
					</TabPane>
				</Tabs>
			</Spin>
		</div>
	)
	return (
		<Dropdown
			overlay={tabs}
			placement="bottomRight"
			trigger={['click']}
			visible={visible}
			onVisibleChange={(v) => setVisible(v)}
			overlayStyle={{
				width: 336,
				backgroundColor: '#ffffff',
				boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
				padding: 8,
				borderRadius: 4
			}}
		>
			<Badge count={noticeList.length} overflowCount={999}>
				<span className="notice" id="notice-center">
					<SoundOutlined style={{ fontSize: '20px' }} />
				</span>
			</Badge>
		</Dropdown>
	)
}

export default HeaderNoticeComponent
