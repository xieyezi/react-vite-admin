import { IRouteConfig } from '../../typing'
import LoginPage from '@pages/login'
import LogupPage from '@pages/logup'
import { LOGIN, LOGUP } from './path'
import { PURCHASE_ORDER_LIST } from '../order/path'

const routes: IRouteConfig[] = [
	{
		path: LOGIN,
		component: LoginPage,
		breadcrumb: [],
		exact: true,
		pageTitle: '登录',
		useLayout: false,
		auth: true,
		redirect: PURCHASE_ORDER_LIST
	},
	{
		path: LOGUP,
		component: LogupPage,
		breadcrumb: [],
		exact: true,
		pageTitle: '注册',
		useLayout: false
	}
]

export default routes
