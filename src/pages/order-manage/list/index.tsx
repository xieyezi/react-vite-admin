import { Footer } from 'antd/lib/layout/layout'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import FirstChart from './chart/first'
import SecondChart from './chart/second'
import ThirdChart from './chart/third'
import './index.less'

const Index: React.FC = () => {
	const [loading, setLoading] = useState(false)
	const [fistChartLeftData, setfistChartLeftData] = useState([])
	const [fistChartRightData, setfistChartRightData] = useState([])

	const getChartData = async () => {
		setLoading(true)
		const res = await axios.get('/api/dashboard')
		setLoading(false)
		setfistChartLeftData(res.data.data.firstChartLeftData)
	}

	useEffect(() => {
		getChartData()
	}, [])

	return (
		<div className="container">
			<FirstChart fistChartLeftData={fistChartLeftData} />
			<SecondChart />
			<ThirdChart />
			<Footer style={{ textAlign: 'center' }}>React Vite Admin ©2021 Created by xieyezi</Footer>
		</div>
	)
}

export default Index
