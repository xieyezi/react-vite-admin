import axios from 'axios'
import React, { useState, useEffect } from 'react'
import FirstChart from './chart/first'
import SecondChart from './chart/second'
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
		<div>
			<FirstChart fistChartLeftData={fistChartLeftData} />
			<SecondChart />
		</div>
	)
}

export default Index
