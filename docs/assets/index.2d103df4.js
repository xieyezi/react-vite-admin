var e = Object.defineProperty,
	t = Object.getOwnPropertySymbols,
	a = Object.prototype.hasOwnProperty,
	l = Object.prototype.propertyIsEnumerable,
	n = (t, a, l) => (a in t ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (t[a] = l)),
	r = (e, r) => {
		for (var s in r || (r = {})) a.call(r, s) && n(e, s, r[s])
		if (t) for (var s of t(r)) l.call(r, s) && n(e, s, r[s])
		return e
	},
	s = (e, t, a) =>
		new Promise((l, n) => {
			var r = (e) => {
					try {
						o(a.next(e))
					} catch (t) {
						n(t)
					}
				},
				s = (e) => {
					try {
						o(a.throw(e))
					} catch (t) {
						n(t)
					}
				},
				o = (e) => (e.done ? l(e.value) : Promise.resolve(e.value).then(r, s))
			o((a = a.apply(e, t)).next())
		})
import {
	c as o,
	p as c,
	A as i,
	H as m,
	R as d,
	D as p,
	a as u,
	B as g,
	F as E,
	I as h,
	b as f,
	S as y,
	d as v,
	M as b,
	e as k,
	f as I,
	L as _,
	g as x,
	U as T,
	h as w,
	i as O,
	j as C,
	r as R,
	u as L,
	k as j,
	T as S,
	l as P,
	m as A,
	Q as N,
	n as U,
	w as D,
	o as V
} from './vendor.a4314d15.js'
!(function (e = '.', t = '__import__') {
	try {
		self[t] = new Function('u', 'return import(u)')
	} catch (a) {
		const l = new URL(e, location),
			n = (e) => {
				URL.revokeObjectURL(e.src), e.remove()
			}
		;(self[t] = (e) =>
			new Promise((a, r) => {
				const s = new URL(e, l)
				if (self[t].moduleMap[s]) return a(self[t].moduleMap[s])
				const o = new Blob([`import * as m from '${s}';`, `${t}.moduleMap['${s}']=m;`], { type: 'text/javascript' }),
					c = Object.assign(document.createElement('script'), {
						type: 'module',
						src: URL.createObjectURL(o),
						onerror() {
							r(new Error(`Failed to import: ${e}`)), n(c)
						},
						onload() {
							a(self[t].moduleMap[s]), n(c)
						}
					})
				document.head.appendChild(c)
			})),
			(self[t].moduleMap = {})
	}
})('assets/')
let z
const M = {},
	$ = function (e, t) {
		if (!t) return e()
		if (void 0 === z) {
			const e = document.createElement('link').relList
			z = e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload'
		}
		return Promise.all(
			t.map((e) => {
				if (e in M) return
				M[e] = !0
				const t = e.endsWith('.css'),
					a = t ? '[rel="stylesheet"]' : ''
				if (document.querySelector(`link[href="${e}"]${a}`)) return
				const l = document.createElement('link')
				return (
					(l.rel = t ? 'stylesheet' : z),
					t || ((l.as = 'script'), (l.crossOrigin = '')),
					(l.href = e),
					document.head.appendChild(l),
					t
						? new Promise((e, t) => {
								l.addEventListener('load', e), l.addEventListener('error', t)
						  })
						: void 0
				)
			})
		).then(() => e())
	},
	B = o(
		c(
			(e, t) => ({
				username: '',
				password: '',
				role: '',
				token: '',
				logged: !1,
				login: ({ username: t, password: a, role: l, token: n }) => {
					localStorage.setItem('username', t),
						localStorage.setItem('password', a),
						localStorage.setItem('role', l),
						localStorage.setItem('token', n),
						e({ username: t, password: a, role: l, token: n, logged: !0 })
				},
				logout: () =>
					s(this, null, function* () {
						localStorage.clear(), e({ username: '', password: '', role: '', token: '', logged: !1 })
					})
			}),
			{ name: 'user' }
		)
	),
	F = (e) => {
		const t = i(),
			a = m()
		return B((e) => e.logged)
			? d.createElement(p, r({}, e))
			: d.createElement(u, {
					status: '403',
					title: '403',
					subTitle: '对不起，您没有权限访问此页',
					extra: d.createElement(
						g,
						{
							type: 'primary',
							onClick: () => t('/login' + ('?from=' + encodeURIComponent(a.pathname)), { replace: !0 })
						},
						'去登录'
					)
			  })
	},
	q = (e) => {
		var n = e,
			{ titleId: s, auth: o } = n,
			c = ((e, n) => {
				var r = {}
				for (var s in e) a.call(e, s) && n.indexOf(s) < 0 && (r[s] = e[s])
				if (null != e && t) for (var s of t(e)) n.indexOf(s) < 0 && l.call(e, s) && (r[s] = e[s])
				return r
			})(n, ['titleId', 'auth'])
		const i = o ? F : p
		return s && (document.title = s), d.createElement(i, r({}, c))
	}
const K = { username: 'admin', password: 'admin', role: 'admin' },
	H = () => {
		const e = i(),
			t = m(),
			a = B((e) => e.login)
		return d.createElement(
			'div',
			{ className: 'login-page' },
			d.createElement(
				E,
				{
					onFinish: (l) =>
						s(this, null, function* () {
							const { username: n, password: r, role: s } = l,
								o = yield f.post('/api/login', { username: n, password: r, role: s })
							if (o.data.data) {
								const { token: l } = o.data.data
								a({ username: n, password: r, role: s, token: l })
								const c = decodeURIComponent(t.search),
									i = c.substring(6)
								e(c ? i : '/dashboard')
							}
						}),
					className: 'login-page-form',
					initialValues: K
				},
				d.createElement('h2', null, '登录'),
				d.createElement(
					E.Item,
					{ name: 'username', rules: [{ required: !0, message: '请输入用户名！' }] },
					d.createElement(h, { placeholder: '用户名' })
				),
				d.createElement(
					E.Item,
					{ name: 'password', rules: [{ required: !0, message: '请输入密码！' }] },
					d.createElement(h, { type: 'password', placeholder: '密码' })
				),
				d.createElement(
					E.Item,
					{ name: 'role', rules: [{ required: !0, message: '请输入角色！' }] },
					d.createElement(h, { type: 'role', placeholder: '密码' })
				),
				d.createElement(
					E.Item,
					null,
					d.createElement(g, { htmlType: 'submit', type: 'primary', className: 'login-page-form_button' }, '登录')
				)
			)
		)
	},
	Q = ({ message: e, description: t }) =>
		d.createElement(y, { tip: '加载中...' }, d.createElement(v, { message: e, description: t, type: 'info' }))
const { Header: W } = _,
	G = ({ collapsed: e, toggle: t }) => {
		const a = i(),
			l = B((e) => e.logged),
			n = B((e) => e.logout),
			r = d.createElement(
				x,
				{
					onClick: (e) =>
						s(this, [e], function* ({ key: e }) {
							switch (e) {
								case '1':
									a('/dashboard/order-list', { replace: !0 })
									break
								case '2':
									200 == (yield f.post('/api/logout')).status &&
										(n(), a('/login' + ('?from=' + encodeURIComponent(location.pathname)), { replace: !0 }))
									break
							}
						})
				},
				d.createElement(
					x.Item,
					{ key: '1' },
					d.createElement('span', null, d.createElement(T, null), d.createElement('span', null, '个人设置'))
				),
				d.createElement(x.Divider, null),
				d.createElement(
					x.Item,
					{ key: '2' },
					d.createElement('span', null, d.createElement(w, null), d.createElement('span', null, '退出登录'))
				)
			)
		return d.createElement(
			W,
			{ className: 'layout-page-header' },
			d.createElement(
				'div',
				{ className: 'logo', style: { width: e ? 80 : 200 } },
				d.createElement('img', { src: './antd.svg', alt: 'logo' }),
				e ? null : d.createElement('span', { style: { paddingLeft: '10px', fontSize: '16px' } }, 'React Vite Admin')
			),
			d.createElement(
				'div',
				{ className: 'layout-page-header-main' },
				d.createElement(
					'div',
					{ onClick: t },
					d.createElement('span', { id: 'sidebar-trigger' }, e ? d.createElement(b, null) : d.createElement(k, null))
				),
				d.createElement(
					'div',
					{ className: 'actions' },
					l
						? d.createElement(
								I,
								{ overlay: r, trigger: ['click'] },
								d.createElement(
									'span',
									{ className: 'user-action' },
									d.createElement('img', {
										src: './assets/husky.59ff80ef.png',
										className: 'user-avator',
										alt: 'avator'
									})
								)
						  )
						: d.createElement(
								'span',
								{
									style: { cursor: 'pointer' },
									onClick: () => {
										a('/login' + ('?from=' + encodeURIComponent(location.pathname)), { replace: !0 })
									}
								},
								'登录'
						  )
				)
			)
		)
	},
	J = [
		{
			key: '1',
			title: '订单管理',
			icon: O,
			children: [
				{ key: '1-1', title: '订单列表', path: '/dashboard/order-list' },
				{
					key: '1-2',
					title: '二级菜单',
					children: [{ key: '1-1-1', title: '三级菜单', path: '/dashboard/order-detail' }]
				}
			]
		},
		{
			key: '2',
			title: '供应商管理',
			icon: C,
			children: [
				{ key: '2-1', title: '供应商列表', path: '/dashboard/supplier-list' },
				{
					key: '2-2',
					title: '供应商二级',
					children: [
						{ key: '2-2-1', title: '订单详情', path: '/dashboard/supplier-detail' },
						{ key: '2-2-2', title: '新增供应商', path: '/dashboard/supplier-add' }
					]
				}
			]
		}
	],
	X = o((e, t) => ({
		tags: [],
		activeTagId: '',
		setActiveTag: (t) => e({ activeTagId: t }),
		addTag: (a) => {
			const { tags: l, setActiveTag: n } = t()
			0 === l.filter((e) => e.id === a.id).length ? (e({ tags: [...l, a] }), n(a.id)) : n(a.id)
		},
		removeTag: (a) => {
			const { tags: l, activeTagId: n } = t(),
				r = l.filter((e) => e.id !== a)
			if (r.length > 0)
				if (n === a) {
					const t = l.findIndex((e) => e.id == n)
					e({ activeTagId: l[t - 1].id, tags: r })
				} else e({ tags: r })
		},
		removeOtherTag: () => {
			const { tags: a, activeTagId: l } = t(),
				n = a.find((e) => e.id === l),
				r = (null == n ? void 0 : n.id) === a[0].id
			e({ tags: r ? [a[0]] : [a[0], n] })
		},
		removeAllTag: () => e((e) => ({ tags: [e.tags[0]], activeTagId: e.tags[0].id }))
	})),
	{ SubMenu: Y } = x
function Z(e, t, a) {
	for (const l of e) {
		if (l.path === t) return [...a, l.key]
		if (l.children && l.children.length > 0) {
			const e = Z(l.children, t, [...a, l.key])
			if (0 === e.length) continue
			return e
		}
	}
	return []
}
const ee = () => {
		const e = i(),
			{ pathname: t } = m(),
			[a, l] = R.exports.useState([]),
			[n, r] = R.exports.useState([]),
			s = X((e) => e.addTag)
		return (
			R.exports.useEffect(() => {
				if (J[0].children) {
					const { key: e, path: t, title: a } = J[0].children[0]
					s({ path: t, label: a, id: e, closable: !1 })
				}
			}, []),
			R.exports.useEffect(() => {
				const e = Z(J, location.pathname, [])
				e && (r([e.pop()]), l(L(a, e)))
			}, [t]),
			d.createElement(
				x,
				{
					mode: 'inline',
					theme: 'light',
					openKeys: a,
					selectedKeys: n,
					onOpenChange: function (e) {
						l(e)
					}
				},
				(function a(l) {
					return 0 === l.length
						? null
						: l.map((l) => {
								return l.children
									? d.createElement(
											Y,
											{
												key: l.key,
												title: d.createElement(
													d.Fragment,
													null,
													((n = l.icon), n ? n.render() : null),
													d.createElement('span', null, l.title)
												)
											},
											a(l.children)
									  )
									: d.createElement(
											x.Item,
											{
												key: l.key,
												title: l.title,
												onClick: () =>
													(function (a) {
														if (a.path === t) return
														const { key: l, path: n, title: r } = a
														s({ path: n, label: r, id: l, closable: !0 }), e(a.path)
													})(l)
											},
											l.title
									  )
								var n
						  })
				})(J)
			)
		)
	},
	te = () => {
		const [e, t, a, l] = X((e) => [e.activeTagId, e.removeTag, e.removeOtherTag, e.removeAllTag])
		return d.createElement(
			I,
			{
				overlay: d.createElement(
					x,
					null,
					d.createElement(x.Item, { key: '0', onClick: () => t(e) }, '关闭当前标签页'),
					d.createElement(x.Item, { key: '1', onClick: () => a() }, '关闭其他标签页'),
					d.createElement(x.Item, { key: '2', onClick: () => l() }, '关闭所有标签页'),
					d.createElement(x.Divider, null)
				)
			},
			d.createElement('span', { id: 'pageTabs-actions' }, d.createElement(j, { className: 'tags-extra' }))
		)
	},
	{ TabPane: ae } = S,
	le = () => {
		const e = i(),
			t = m(),
			[a, l, n, r, s] = X((e) => [e.tags, e.activeTagId, e.addTag, e.removeTag, e.setActiveTag]),
			o = R.exports.useCallback(
				(e) => {
					const l = a.find((a) => (e ? a.id === e : a.path === t.pathname))
					l && s(l.id)
				},
				[t.pathname, a]
			),
			c = (e, t) => {
				for (const a of e) {
					if (a.path && a.path == t) return a
					if (a.children) {
						const e = c(a.children, t)
						if (e) return e
					}
				}
			}
		return (
			R.exports.useEffect(() => {
				if (J.length) {
					const { pathname: e } = t,
						a = c(J, e)
					a && n({ path: a.path, label: a.title, id: a.key, closable: !0 })
				}
			}, [t.pathname]),
			R.exports.useEffect(() => {
				if (a && l) {
					const t = a.filter((e) => e.id === l)
					e(t[0].path)
				}
			}, [a, l]),
			d.createElement(
				'div',
				{ id: 'pageTabs', style: { background: '#fff', padding: '6px 4px' } },
				d.createElement(
					S,
					{
						tabBarStyle: { margin: 0 },
						onChange: (t) => {
							const l = a.find((e) => e.id === t)
							l && (o(l.id), e(l.path))
						},
						activeKey: l,
						type: 'editable-card',
						hideAdd: !0,
						onEdit: (e, t) =>
							'remove' === t &&
							((e) => {
								r(e)
							})(e),
						tabBarExtraContent: d.createElement(te, null)
					},
					a.map((e) => d.createElement(ae, { tab: e.label, key: e.id, closable: e.closable }))
				)
			)
		)
	},
	{ Sider: ne, Content: re } = _,
	se = () => {
		const [e, t] = R.exports.useState(!1)
		return d.createElement(
			_,
			{ className: 'layout-page' },
			d.createElement(G, {
				collapsed: e,
				toggle: () => {
					t((e) => !e)
				}
			}),
			d.createElement(
				_,
				null,
				d.createElement(
					ne,
					{ className: 'layout-page-sider', trigger: null, collapsible: !0, collapsed: e, breakpoint: 'md' },
					d.createElement(ee, null)
				),
				d.createElement(
					re,
					{ className: 'layout-page-content' },
					d.createElement(le, null),
					d.createElement(
						R.exports.Suspense,
						{ fallback: d.createElement(Q, { message: '正在加载中' }) },
						d.createElement(P, null)
					)
				)
			)
		)
	},
	oe = R.exports.lazy(() =>
		$(
			() => __import__('./index.c9c7de00.js'),
			['./assets/index.c9c7de00.js', './assets/vendor.a4314d15.js', './assets/vendor.b8514118.css']
		)
	),
	ce = R.exports.lazy(() =>
		$(
			() => __import__('./index.0fb06169.js'),
			['./assets/index.0fb06169.js', './assets/vendor.a4314d15.js', './assets/vendor.b8514118.css']
		)
	),
	ie = R.exports.lazy(() =>
		$(
			() => __import__('./index.4c19af59.js'),
			['./assets/index.4c19af59.js', './assets/vendor.a4314d15.js', './assets/vendor.b8514118.css']
		)
	),
	me = R.exports.lazy(() =>
		$(
			() => __import__('./index.d32c2b5d.js'),
			['./assets/index.d32c2b5d.js', './assets/vendor.a4314d15.js', './assets/vendor.b8514118.css']
		)
	),
	de = R.exports.lazy(() =>
		$(
			() => __import__('./index.76afd632.js'),
			['./assets/index.76afd632.js', './assets/vendor.a4314d15.js', './assets/vendor.b8514118.css']
		)
	),
	pe = R.exports.lazy(() =>
		$(
			() => __import__('./index.958eafaf.js'),
			['./assets/index.958eafaf.js', './assets/vendor.a4314d15.js', './assets/vendor.b8514118.css']
		)
	),
	ue = [
		{ path: 'login', element: d.createElement(q, { element: d.createElement(H, null), titleId: '登录' }) },
		{
			path: '/dashboard',
			element: d.createElement(q, { element: d.createElement(se, null), titleId: '工作台' }),
			children: [
				{
					path: 'order-list',
					element: d.createElement(q, { element: d.createElement(ce, null), titleId: '订单列表', auth: !0 })
				},
				{
					path: 'order-detail',
					element: d.createElement(q, { element: d.createElement(ie, null), titleId: '订单详情', auth: !0 })
				},
				{
					path: 'supplier-list',
					element: d.createElement(q, { element: d.createElement(me, null), titleId: '供应商列表', auth: !0 })
				},
				{
					path: 'supplier-detail',
					element: d.createElement(q, { element: d.createElement(de, null), titleId: '供应商详情', auth: !0 })
				},
				{
					path: 'supplier-add',
					element: d.createElement(q, { element: d.createElement(pe, null), titleId: '新增供应商', auth: !0 })
				},
				{ path: '*', element: d.createElement(q, { element: d.createElement(oe, null), titleId: '404' }) }
			]
		}
	],
	ge = () => A(ue),
	Ee = new N()
function he() {
	return d.createElement(U, { client: Ee }, d.createElement(D, null, d.createElement(ge, null)))
}
V.render(d.createElement(he, null), document.getElementById('root'))
