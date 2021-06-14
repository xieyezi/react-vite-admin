import { A as e, R as t, a, B as r } from './vendor.a4314d15.js'
export default () => {
	const s = e()
	return t.createElement(a, {
		status: '404',
		title: '404',
		subTitle: '对不起，您访问的页面不存在。',
		extra: t.createElement(r, { type: 'primary', onClick: () => s('/') }, '返回首页')
	})
}
