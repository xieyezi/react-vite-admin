import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { viteMockServe } from 'vite-plugin-mock'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'

// https://vitejs.dev/config/

export default defineConfig({
	base: './',
	resolve: {
		alias: {
			'@src': resolve(__dirname, './src'),
			'@assets': resolve(__dirname, './src/assets'),
			'@components': resolve(__dirname, './src/components'),
			'@pages': resolve(__dirname, './src/pages'),
			'@uitl': resolve(__dirname, './src/uitl'),
			'@locale': resolve(__dirname, './src/locale')
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
					resolveStyle: (name) => `antd/es/${name}/style`
				}
			]
		})
	],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				modifyVars: {
					'primary-color': '#683bc9'
				}
			}
		},
		modules: {}
	},
	build: {
		target: 'es2015',
		minify: 'terser',
		cssCodeSplit: true,
		polyfillDynamicImport: true,
		rollupOptions: {
			plugins: []
		}
	}
})
