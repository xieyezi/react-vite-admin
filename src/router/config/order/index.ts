import { IRouteConfig } from '../../typing'
import OrderManage from '@pages/order'
import { PURCHASE_ORDER_LIST, PURCHASE_ORDER_DETAIL, SALES_ORDER_LIST, SALES_ORDER_DETAIL } from './path'

const routes: IRouteConfig[] = [
	{
		path: PURCHASE_ORDER_LIST,
		component: OrderManage.PurchaseOrderList,
		breadcrumb: [
			{ title: '订单管理', path: PURCHASE_ORDER_LIST },
			{ title: '采购订单', path: '' }
		],
		exact: true,
		pageTitle: '采购订单',
		useLayout: true
	},
	{
		path: PURCHASE_ORDER_DETAIL,
		component: OrderManage.PurchaseOrderDetail,
		breadcrumb: [
			{ title: '订单管理', path: PURCHASE_ORDER_LIST },
			{ title: '采购订单', path: PURCHASE_ORDER_LIST },
			{ title: '订单详情', path: '' }
		],
		exact: true,
		pageTitle: '采购订单-订单详情',
		useLayout: true
	},
	{
		path: SALES_ORDER_LIST,
		component: OrderManage.SalesOrderList,
		breadcrumb: [
			{ title: '订单管理', path: PURCHASE_ORDER_LIST },
			{ title: '销售订单', path: SALES_ORDER_LIST }
		],
		exact: true,
		pageTitle: '销售订单',
		useLayout: true
	},
	{
		path: SALES_ORDER_DETAIL,
		component: OrderManage.SalesOrderDetail,
		breadcrumb: [
			{ title: '订单管理', path: PURCHASE_ORDER_LIST },
			{ title: '销售订单', path: SALES_ORDER_LIST },
			{ title: '订单详情', path: SALES_ORDER_DETAIL }
		],
		exact: true,
		pageTitle: '销售订单-订单详情',
		useLayout: true
	}
]

export default routes
