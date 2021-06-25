import React from 'react'
import AntdSvg from '/antd.svg'
import '../../index.less'

interface Props {
	collapsed: boolean
}

const Index: React.FC<Props> = ({ collapsed }) => {
	return (
		<div className="logo" style={{ width: collapsed ? 80 : 200 }}>
			<img src={AntdSvg} alt="logo" />
			{collapsed ? null : <span style={{ paddingLeft: '10px', fontSize: '16px' }}>React Vite Admin</span>}
		</div>
	)
}

export default Index
