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
		path: 'login',
		element: <WrapperRouteComponent element={<LoginPage />} titleId="title.login" />
	},
	{
		path: '/dashboard',
		element: <WrapperRouteComponent element={<LayoutPage />} titleId="dashboard" />,
		children: [
			{
				path: 'order-list',
				element: <WrapperRouteComponent element={<OrderMangeList />} titleId="title.order.list" auth />
			},
			{
				path: 'order-detail',
				element: <WrapperRouteComponent element={<OrderMangeDetail />} titleId="title.order.detail" auth />
			},
			{
				path: 'supplier-list',
				element: <WrapperRouteComponent element={<SupplierList />} titleId="title.supplier.list" auth />
			},
			{
				path: 'supplier-detail',
				element: <WrapperRouteComponent element={<SupplierDetail />} titleId="title.supplier.detail" auth />
			},
			{
				path: 'supplier-add',
				element: <WrapperRouteComponent element={<SupplierAdd />} titleId="title.supplier.add" auth />
			},
			{
				path: '*',
				element: <WrapperRouteComponent element={<NotFound />} titleId="title.notFount" />
			}
		]
	}
]

const RenderRouter: FC = () => {
	const element = useRoutes(routeList)
	return element
}

export default RenderRouter
