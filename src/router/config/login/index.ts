import { IRouteConfig } from '../../typing'
import LoginPage from '@pages/login'
import { LOGIN } from './path'
import { ORDER_LIST } from '../order-manage/path'

const routes: IRouteConfig[] = [
	{
		path: LOGIN,
		component: LoginPage,
		breadcrumb: [],
		exact: true,
		pageTitle: '首页',
		useLayout: false,
		auth: true,
		redirect: ORDER_LIST
	}
]

export default routes
