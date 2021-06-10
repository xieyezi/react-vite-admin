export interface Ibreadcrumb {
	title: string
	path: string
}

export interface IRouteConfig {
	path: string
	exact?: boolean
	component: React.ComponentType<any>
	pageTitle?: string
	breadcrumb: Ibreadcrumb[] // 面包屑导航
	redirect?: string // 暂不使用
	useLayout?: boolean // 是否使用布局
	strict?: boolean
	sensitive?: boolean
	auth?: boolean
}
