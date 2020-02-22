import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemsEdit from '../views/ItemsEdit.vue'
import ItemsList from '../views/ItemsList.vue'
import HeroesEdit from '../views/HeroesEdit.vue'
import HeroesList from '../views/HeroesList.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'
import AdsEdit from '../views/AdsEdit.vue'
import AdsList from '../views/AdsList.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				isPublic: true
			}
		},
		{
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
				},
				// 物品

				{
					path: '/items/create',
					component: ItemsEdit
				}, {
					path: '/items/list',
					component: ItemsList
				}, {
					path: '/items/create/:id',
					props: true,
					component: ItemsEdit
				},

				// 英雄
				{
					path: '/heroes/create',
					component: HeroesEdit
				}, {
					path: '/heroes/list',
					component: HeroesList
				}, {
					path: '/heroes/create/:id',
					props: true,
					component: HeroesEdit
				},
				// 文章

				{
					path: '/articles/create',
					component: ArticleEdit
				}, {
					path: '/articles/list',
					component: ArticleList
				}, {
					path: '/articles/create/:id',
					props: true,
					component: ArticleEdit
				},
				// 广告位
				{
					path: '/ads/create',
					component: AdsEdit
				}, {
					path: '/ads/list',
					component: AdsList
				}, {
					path: '/ads/create/:id',
					props: true,
					component: AdsEdit
				},
				// 管理员
				{
					path: '/admin_users/create',
					component: AdminUserEdit
				}, {
					path: '/admin_users/list',
					component: AdminUserList
				}, {
					path: '/admin_users/create/:id',
					props: true,
					component: AdminUserEdit
				},
			]
		},
	]

})

router.beforeEach((to, from, next) => {
	if(!to.meta.isPublic && !localStorage.token){
		return next('/login')
	}
	next()
})

export default router
