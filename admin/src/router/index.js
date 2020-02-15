import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'main',
		component: Main,
		children: [{
			path: '/categories/create',
			name:"Category",
			component: CategoryEdit
		},{
			path: '/categories/list',
			name:"CategoryList",
			component: CategoryList
		}],
	},

]

const router = new VueRouter({
	routes
})

export default router
