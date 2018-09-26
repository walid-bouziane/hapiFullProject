import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _47a3058a = () => import('../pages/createAccount/index.vue' /* webpackChunkName: "pages/createAccount/index" */).then(m => m.default || m)
const _ed966b74 = () => import('../pages/bakaPolizei/index.vue' /* webpackChunkName: "pages/bakaPolizei/index" */).then(m => m.default || m)
const _f4f584b4 = () => import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */).then(m => m.default || m)
const _9da07870 = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _154d47c2 = () => import('../pages/connexion/index.vue' /* webpackChunkName: "pages/connexion/index" */).then(m => m.default || m)
const _175ed5d3 = () => import('../pages/bakaPolizei/saisie/index.vue' /* webpackChunkName: "pages/bakaPolizei/saisie/index" */).then(m => m.default || m)
const _2f3ef04a = () => import('../pages/bakaPolizei/infoCrime/index.vue' /* webpackChunkName: "pages/bakaPolizei/infoCrime/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/createAccount",
			component: _47a3058a,
			name: "createAccount"
		},
		{
			path: "/bakaPolizei",
			component: _ed966b74,
			name: "bakaPolizei"
		},
		{
			path: "/account",
			component: _f4f584b4,
			name: "account"
		},
		{
			path: "/admin",
			component: _9da07870,
			name: "admin"
		},
		{
			path: "/connexion",
			component: _154d47c2,
			name: "connexion"
		},
		{
			path: "/bakaPolizei/saisie",
			component: _175ed5d3,
			name: "bakaPolizei-saisie"
		},
		{
			path: "/bakaPolizei/infoCrime",
			component: _2f3ef04a,
			name: "bakaPolizei-infoCrime"
		}
    ],
    
    
    fallback: false
  })
}
