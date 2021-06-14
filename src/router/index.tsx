import React, { lazy, FC } from 'react'
import { PartialRouteObject } from 'react-router'
import WrapperRouteComponent from './config'
import { useRoutes } from 'react-router-dom'
import LoginPage from '@pages/login'
import LayoutPage from '@pages/layout'

const NotFound = lazy(() => import('@pages/not-found'))
const OrderMangeList = lazy(() => import('@pages/order-manage/list'))
const OrderMangeDetail = lazy(() => import('@pages/order-manage/detail'))
const SupplierList = lazy(() => import('@pages/supplier-manage/list'))
const SupplierDetail = lazy(() => import('@pages/supplier-manage/detail'))
const SupplierAdd = lazy(() => import('@pages/supplier-manage/add'))

const routeList: PartialRouteObject[] = [
	{
		path: '/login',
		element: <WrapperRouteComponent element={<LoginPage />} titleId="登录" />
	},
	{
		path: '/',
		element: <WrapperRouteComponent element={<LayoutPage />} titleId="工作台" auth />,
		children: [
			{
				path: 'order-list',
				element: <WrapperRouteComponent element={<OrderMangeList />} titleId="订单列表" auth />
			},
			{
				path: 'order-detail',
				element: <WrapperRouteComponent element={<OrderMangeDetail />} titleId="订单详情" auth />
			},
			{
				path: 'supplier-list',
				element: <WrapperRouteComponent element={<SupplierList />} titleId="供应商列表" auth />
			},
			{
				path: 'supplier-detail',
				element: <WrapperRouteComponent element={<SupplierDetail />} titleId="供应商详情" auth />
			},
			{
				path: 'supplier-add',
				element: <WrapperRouteComponent element={<SupplierAdd />} titleId="新增供应商" auth />
			},
			{
				path: '*',
				element: <WrapperRouteComponent element={<NotFound />} titleId="404" />
			}
		]
	}
]

const RenderRouter: FC = () => {
	const element = useRoutes(routeList)
	return element
}

export default RenderRouter
