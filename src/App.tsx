import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { IntlProvider } from 'react-intl'
import { localeConfig } from './locales'
import { ConfigProvider } from 'antd'
import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'
import RenderRouter from './router'
import useStore from './stores/user'

export type Locale = 'zh_CN' | 'en_US'

const queryClient = new QueryClient()

function App() {
	const locale = useStore((state) => state.locale)

	const getAntdLocale = () => {
		if (locale === 'en_US') {
			return enUS
		} else if (locale === 'zh_CN') {
			return zhCN
		}
	}

	return (
		<QueryClientProvider client={queryClient}>
			<ConfigProvider locale={getAntdLocale()} componentSize="middle">
				<IntlProvider locale={locale.split('_')[0]} messages={localeConfig[locale]}>
					<BrowserRouter>
						<RenderRouter />
					</BrowserRouter>
				</IntlProvider>
			</ConfigProvider>
		</QueryClientProvider>
	)
}

export default App
