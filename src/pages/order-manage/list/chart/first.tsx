import { DualAxes, Liquid } from '@ant-design/charts'
import { Col, Radio, Row } from 'antd'
import React from 'react'
import { firstChartLeftDataType } from '@mock/dashboard'
import '../index.less'

interface Props {
	fistChartLeftData: firstChartLeftDataType
}

const Index: React.FC<Props> = ({ fistChartLeftData }) => {
	const leftConfig = {
		data: [fistChartLeftData, fistChartLeftData],
		xField: 'time',
		yField: ['income', 'completeTime'],
		meta: {
			income: {
				alias: '销售金额',
				formatter: function formatter(v: number) {
					return `${Number((v / 100).toFixed(2))} 万`
				}
			},
			completeTime: {
				alias: '完成时间',
				formatter: function formatter(v: number) {
					return `${Number((v / 60).toFixed(1))} 秒`
				}
			}
		},
		geometryOptions: [
			{
				geometry: 'column',
				color: '#7685d6'
			},
			{
				geometry: 'line',
				color: '#3bbd94',
				smooth: true
			}
		],
		xAxis: {
			label: {
				autoRotate: true,
				autoHide: false,
				autoEllipsis: false
			},
			tickCount: fistChartLeftData.length / 2
		},
		yAxis: {
			income: {
				label: {
					formatter: function formatter(v: string) {
						return ''.concat(v, '')
					}
				}
			},
			completeTime: {
				label: {
					formatter: function formatter(v: string) {
						return ''.concat(v)
					}
				}
			}
		},
		legend: {
			itemName: {
				formatter: function formatter(text: string, item: any) {
					return item.value === 'income' ? '销售金额(元)' : '完成时间(秒)'
				}
			}
		},
		annotations: {
			income: [
				{
					type: 'line',
					top: true,
					start: ['2020-08-26', 'min'],
					end: ['2020-08-26', 'max'],
					text: {
						content: '发布时间点',
						position: 'end',
						autoRotate: false,
						style: { textAlign: 'start' }
					}
				}
			],
			completeTime: [
				{
					type: 'line',
					top: true
				}
			]
		}
	}
	const rightConfig = {
		percent: 0.5654,
		radius: 0.8,
		color: function color() {
			return '#7685d6'
		}
	}
	return (
		<div className="first">
			<Row gutter={16}>
				<Col span={18}>
					<div className="left">
						<div className="header">
							<h3>销售额</h3>
							<Radio.Group defaultValue="day">
								<Radio.Button value="day">按日</Radio.Button>
								<Radio.Button value="week">按周</Radio.Button>
								<Radio.Button value="month">按月</Radio.Button>
							</Radio.Group>
						</div>
						<DualAxes {...leftConfig} style={{ height: '300px', marginTop: '10px' }} />
					</div>
				</Col>
				<Col span={6}>
					<div className="right">
						<Liquid {...rightConfig} style={{ height: '320px' }} />
						<h3>季度目标已完成</h3>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Index
