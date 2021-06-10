import { IRouteConfig } from './typing'

export function splitTypeOfRoute(routes: IRouteConfig[]): Array<IRouteConfig[]> {
	const basicRoutes: IRouteConfig[] = []
	const layoutRoutes: IRouteConfig[] = []
	for (const route of routes) {
		if (route.useLayout) {
			layoutRoutes.push(route)
		} else {
			basicRoutes.push(route)
		}
	}
	return [basicRoutes, layoutRoutes]
}

export function omitRouteRenderProperties(routeConfig: any) {
	const omitList = ['component', 'pageTitle', 'breadcrumb', 'redirect', 'useLayout']
	const copyRoute = { ...routeConfig }
	for (const omitProp of omitList) {
		delete copyRoute[omitProp]
	}
	return copyRoute
}
