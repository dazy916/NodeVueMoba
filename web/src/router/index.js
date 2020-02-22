import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'main',
		component: Main,
		children: [{
			path: '/',
			name: '',
			component: Main
		}, {
			path: '/',
			name: '',
			component:Main
		}, {
			path: '/',
			name: '',
			component:Main
		}]
	}
]

const router = new VueRouter({
	routes
})

export default router
