import React, { FC } from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { Result, Button } from 'antd'
import { RouteProps, useLocation } from 'react-router'
import useStore from '@src/stores/user'

const PrivateRoute: FC<RouteProps> = (props) => {
	const navigate = useNavigate()
	const location = useLocation()
	const logged = useStore((state) => state.logged)

	return logged ? (
		<Route {...props} />
	) : (
		<Result
			status="403"
			title="403"
			subTitle="对不起，您没有权限访问此页"
			extra={
				<Button
					type="primary"
					onClick={() => navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })}
				>
					去登录
				</Button>
			}
		/>
	)
}

export default PrivateRoute
