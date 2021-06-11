import { IRouteConfig } from '../../typing'
import OrderManage from '@pages/order-manage'
import { ORDER_DETAIL, ORDER_LIST } from './path'

const routes: IRouteConfig[] = [
	{
		path: ORDER_DETAIL,
		component: OrderManage.OrderDetail,
		breadcrumb: [
			{ title: '订单管理', path: ORDER_LIST },
			{ title: '订单详情', path: '' }
		],
		exact: true,
		pageTitle: '订单详情',
		useLayout: true
	},
	{
		path: ORDER_LIST,
		component: OrderManage.OrderList,
		breadcrumb: [
			{ title: '订单管理', path: ORDER_LIST },
			{ title: '订单列表', path: '' }
		],
		exact: true,
		pageTitle: '订单列表',
		useLayout: true
	}
]

export default routes
