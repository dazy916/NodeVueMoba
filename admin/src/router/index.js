import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemsEdit from '../views/ItemsEdit.vue'
import ItemsList from '../views/ItemsList.vue'
import HeroesEdit from '../views/HeroesEdit.vue'
import HeroesList from '../views/HeroesList.vue'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Main',
	component: Main,
	children: [{
		path: '/categories/create',
		component: CategoryEdit
	}, {
		path: '/categories/list',
		component: CategoryList
	}, {
		path: '/categories/create/:id',
		props: true,
		component: CategoryEdit
	}, {
		path: '/items/create',
		component: ItemsEdit
	}, {
		path: '/items/list',
		component: ItemsList
	}, {
		path: '/items/create/:id',
		props: true,
		component: ItemsEdit
	}, {
		path: '/heroes/create',
		component: HeroesEdit
	}, {
		path: '/heroes/list',
		component: HeroesList
	}, {
		path: '/heroes/create/:id',
		props: true,
		component: HeroesEdit
	}]
}, ]

const router = new VueRouter({
	routes
})

export default router
