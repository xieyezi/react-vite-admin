import { IRouteConfig } from '../../typing'
import SupplierManage from '@pages/supplier-manage'
import { SUPPLIER_ADD, SUPPLIER_LIST, SUPPLIER_DETAIL } from './path'

const routes: IRouteConfig[] = [
	{
		path: SUPPLIER_ADD,
		component: SupplierManage.SupplierAdd,
		breadcrumb: [
			{ title: '供应商管理', path: SUPPLIER_LIST },
			{ title: '添加供应商', path: '' }
		],
		exact: true,
		pageTitle: '新增供应商',
		useLayout: true
	},
	{
		path: SUPPLIER_LIST,
		component: SupplierManage.SupplierList,
		breadcrumb: [
			{ title: '供应商管理', path: SUPPLIER_LIST },
			{ title: '供应商列表', path: '' }
		],
		exact: true,
		pageTitle: '供应商列表',
		useLayout: true
	},
	{
		path: SUPPLIER_DETAIL,
		component: SupplierManage.SupplierDetail,
		breadcrumb: [
			{ title: '供应商管理', path: SUPPLIER_LIST },
			{ title: '供应商详情', path: '' }
		],
		exact: true,
		pageTitle: '供应商详情',
		useLayout: true
	}
]

export default routes
