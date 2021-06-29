import React from 'react'
import { Button, Col, Row } from 'antd'
import '../index.less'
import { Pie } from '@ant-design/charts'

const data = [
	{
		type: '食品类',
		value: 27
	},
	{
		type: '娱乐类',
		value: 25
	},
	{
		type: '家电类',
		value: 18
	},
	{
		type: '服装类',
		value: 10
	},
	{
		type: '其他',
		value: 5
	}
]
const config = {
	appendPadding: 10,
	data: data,
	angleField: 'value',
	colorField: 'type',
	color: ['#4a27a3', '#683bc9', '#8a60d6', '#ac8ae3', '#d0b9f0'],
	radius: 1,
	innerRadius: 0.6,
	startAngle: Math.PI,
	endAngle: Math.PI * 2,
	interactions: [{ type: 'element-selected' }],
	legend: {
		layout: 'horizontal',
		position: 'bottom'
	},
	label: {
		type: 'inner',
		offset: '-8%',
		content: '{name}',
		style: { fontSize: 18 }
	},
	statistic: {
		content: false
	},
	pieStyle: { lineWidth: 0 }
}

const Index: React.FC = () => {
	return (
		<div className="third">
			<Row gutter={16}>
				<Col span={14}>
					<div className="left">
						<h3>各类商品销售情况</h3>
						<Pie {...config} style={{ height: '240px', marginTop: '10px' }} />
					</div>
				</Col>
				<Col span={10}>
					<div className="right">
						<h3>
							<span style={{ fontSize: '24px', color: '#52c41a' }}>99+</span>新商家入驻
						</h3>
						<Button type="primary" shape="round" size="large">
							现在去审核
						</Button>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Index
