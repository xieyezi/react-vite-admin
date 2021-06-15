import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import App from './App'

ReactDOM.render(
	// <React.StrictMode>
	<App />,
	// </React.StrictMode>,
	document.getElementById('root')
)

// 这里要将严格模式注释掉的原因是，Antd的Button组件会报警告
// 请看isses:https://github.com/ant-design/ant-design/issues/22493
