import { FileTextOutlined, InboxOutlined } from '@ant-design/icons'
import { ORDER_DETAIL, ORDER_LIST } from '@src/router/config/order-manage/path'
import { SUPPLIER_DETAIL, SUPPLIER_LIST } from '@src/router/config/supplier-manage/path'

export interface MenuItem {
	key: string
	title: string
	icon?: React.ReactNode
	path?: string
	children?: MenuItem[]
	component?: React.ComponentType<any>
}

const MENU_CONFIG: MenuItem[] = [
	{
		key: '1',
		title: '订单管理',
		icon: FileTextOutlined,
		children: [
			{
				key: '1-1',
				title: '订单列表',
				path: ORDER_LIST
			},
			{
				key: '1-1-1',
				title: '二级菜单',
				children: [
					{
						key: '1-1-1-1',
						title: '三级菜单',
						path: ORDER_DETAIL
					}
				]
			}
		]
	},
	{
		key: '2',
		title: '供应商管理',
		icon: InboxOutlined,
		children: [
			{
				key: '2-1',
				title: '供应商列表',
				path: SUPPLIER_LIST
			},
			{
				key: '2-2',
				title: '供应商订单详情',
				path: SUPPLIER_DETAIL
			}
		]
	}
]

export default MENU_CONFIG
