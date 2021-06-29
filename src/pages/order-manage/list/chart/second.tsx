import React from 'react'
import { Table, Tag, Col, Row, Progress } from 'antd'
import '../index.less'

const columns = [
	{
		title: '名称',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: '地址',
		dataIndex: 'address',
		key: 'address'
	},
	{
		title: '金额',
		dataIndex: 'income',
		key: 'income'
	},
	{
		title: '完成情况',
		key: 'tags',
		dataIndex: 'tags',
		render: (tags: number[]) => (
			<>
				{tags.map((tag) => {
					let color
					if (tag >= 100) color = 'green'
					if (tag >= 60 && tag < 100) color = 'volcano'
					if (tag <= 60) color = 'red'
					return (
						<Tag color={color} key={tag}>
							{`${tag}%`}
						</Tag>
					)
				})}
			</>
		)
	}
]

const data = [
	{
		key: '1',
		name: '工专路 1 号店',
		address: '重庆市渝北区大竹林康美街道',
		income: 207902,
		tags: [82]
	},
	{
		key: '2',
		name: '工专路 2 号店',
		address: '四川省成都市武侯区花旗街道',
		income: 269911,
		tags: [120]
	},
	{
		key: '3',
		name: '工专路 3 号店',
		address: '湖北省荆州市武侯区花旗街道',
		income: 229911,
		tags: [100]
	},
	{
		key: '4',
		name: '工专路 4 号店',
		address: '上海市浦东新区大竹林康美街道',
		income: 110021,
		tags: [43]
	},
	{
		key: '5',
		name: '工专路 5 号店',
		address: '北京市朝阳区大竹林康美街道',
		income: 170021,
		tags: [61]
	}
]

const Index: React.FC = () => {
	return (
		<div className="second">
			<Row gutter={16}>
				<Col span={12}>
					<div className="left">
						<h3>本月销售额</h3>
						<Table columns={columns} dataSource={data} pagination={false} />
					</div>
				</Col>
				<Col span={12}>
					<div className="right">
						<h3>销售目标达标情况</h3>
						<div>
							<div className="content">
								<span style={{ width: '8%' }}>本日</span>
								<Progress percent={92.1} status="active" strokeWidth={12} strokeColor="#3bbd94" />
							</div>
							<div className="content">
								<span style={{ width: '8%' }}>本周</span>
								<Progress percent={70.2} status="active" strokeWidth={12} strokeColor="#7339d5" />
							</div>
							<div className="content">
								<span style={{ width: '8%' }}>本月</span>
								<Progress percent={86.3} status="active" strokeWidth={12} strokeColor="#fc75a7" />
							</div>
							<div className="content">
								<span style={{ width: '8%' }}>本年</span>
								<Progress percent={64.5} status="active" strokeWidth={12} strokeColor="#fc7537" />
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Index
