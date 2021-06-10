import { IRouteConfig } from '../../typing'
import OrderManage from '@pages/order'
import { PURCHASE_ORDER_LIST, PURCHASE_ORDER_DETAIL, SALES_ORDER_LIST, SALES_ORDER_DETAIL } from './path'

const routes: IRouteConfig[] = [
	{
		pageTitle: '采购订单',
		path: PURCHASE_ORDER_LIST,
		component: OrderManage.PurchaseOrderList,
		exact: true,
		useLayout: true,
		breadcrumb: [
			{ title: '订单列表', path: PURCHASE_ORDER_LIST },
			{ title: '订单详情', path: PURCHASE_ORDER_DETAIL }
		]
	},
	{
		pageTitle: '销售订单',
		path: SALES_ORDER_LIST,
		component: OrderManage.SalesOrderList,
		exact: true,
		useLayout: true,
		breadcrumb: [
			{ title: '订单列表', path: SALES_ORDER_LIST },
			{ title: '订单详情', path: SALES_ORDER_DETAIL }
		]
	}
]

export default routes
