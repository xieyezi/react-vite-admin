import { FileTextOutlined, InboxOutlined } from '@ant-design/icons'

export interface MenuItem {
	key: string
	title: { zh_CN: string; en_US: string }
	icon?: React.ReactNode
	path?: string
	children?: MenuItem[]
	component?: React.ComponentType<any>
}

const MENU_CONFIG: MenuItem[] = [
	{
		key: '1',
		icon: FileTextOutlined,
		title: {
			zh_CN: '订单管理',
			en_US: 'order management'
		},
		children: [
			{
				key: '1-1',
				title: {
					zh_CN: '订单列表',
					en_US: 'order list'
				},
				path: '/order-list'
			},
			{
				key: '1-2',
				title: {
					zh_CN: '二级菜单',
					en_US: 'second level menu'
				},
				children: [
					{
						key: '1-1-1',
						title: {
							zh_CN: '三级菜单',
							en_US: 'three level menu'
						},
						path: '/order-detail'
					}
				]
			}
		]
	},
	{
		key: '2',
		icon: InboxOutlined,
		title: {
			zh_CN: '供应商管理',
			en_US: 'supplier management'
		},
		children: [
			{
				key: '2-1',
				title: {
					zh_CN: '供应商列表',
					en_US: 'supplier list'
				},
				path: '/supplier-list'
			},
			{
				key: '2-2',
				title: {
					zh_CN: '供应商二级',
					en_US: 'supplier second level menu'
				},
				children: [
					{
						key: '2-2-1',
						title: {
							zh_CN: '供应商详情',
							en_US: 'supplier detail'
						},
						path: '/supplier-detail'
					},
					{
						key: '2-2-2',
						title: {
							zh_CN: '新增供应商',
							en_US: 'add supplier'
						},
						path: '/supplier-add'
					}
				]
			}
		]
	}
]

export default MENU_CONFIG
