const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
// 开发环境
const SERVER_HOST_DEV = ''

// 生产环境
const SERVER_HOST_PROD = ''

const SERVER_API_URL = isProd ? SERVER_HOST_PROD : SERVER_HOST_DEV

const authKey = 'Authorization'

const config = {
	isDev,
	isProd,
	SERVER_API_URL,
	authKey
}
export default config
