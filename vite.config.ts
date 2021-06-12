import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { viteMockServe } from 'vite-plugin-mock'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@src': resolve(__dirname, './src'),
			'@assets': resolve(__dirname, './src/assets'),
			'@components': resolve(__dirname, './src/components'),
			'@pages': resolve(__dirname, './src/pages'),
			'@uitl': resolve(__dirname, './src/uitl')
		}
	},
	plugins: [
		reactRefresh(),
		// mock
		viteMockServe({
			mockPath: 'mock',
			localEnabled: true
		}),
		// antd 按需引入
		styleImport({
			libs: [
				{
					libraryName: 'antd',
					resolveStyle: (name) => `antd/lib/${name}/style/index.less`
				}
			]
		})
	],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		},
		modules: {
			// 样式小驼峰转化
			//css: goods-list => tsx: goodsList
			localsConvention: 'camelCase'
		}
	}
})
