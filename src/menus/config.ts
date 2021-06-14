import { FileTextOutlined, InboxOutlined } from '@ant-design/icons'

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
				path: '/order-list'
			},
			{
				key: '1-2',
				title: '二级菜单',
				children: [
					{
						key: '1-1-1',
						title: '三级菜单',
						path: '/order-detail'
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
				path: '/supplier-list'
			},
			{
				key: '2-2',
				title: '供应商二级',
				children: [
					{
						key: '2-2-1',
						title: '订单详情',
						path: '/supplier-detail'
					},
					{
						key: '2-2-2',
						title: '新增供应商',
						path: '/supplier-add'
					}
				]
			}
		]
	}
]

export default MENU_CONFIG
