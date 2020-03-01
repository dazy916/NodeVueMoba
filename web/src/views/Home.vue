<template>
	<div>
		<swiper :options="swiperOption">
			<swiper-slide><img class="w-100" src="../assets/image/e38db707a96d8458101c78ecf644e467.jpeg" alt="" /></swiper-slide>
			<swiper-slide><img class="w-100" src="../assets/image/dc04ab70c5c037d4455908042c60f9dc.jpeg" alt="" /></swiper-slide>
			<swiper-slide><img class="w-100" src="../assets/image/a6118a640500e61dd1f02373026dffd0.jpeg" alt="" /></swiper-slide>
			<div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
		</swiper>
		<!-- swiper end -->
		<div class="nav-icons bg-white mt-3  text-center pt-3 text-dark-1">
			<div class="d-flex flex-wrap">
				<div class="nav-item mb-3" v-for="n in iconItem" :key="n">
					<i class="sprite" :class="`sprite-${n.icon}`"></i>
					<div class="py-2">{{ n.name }}</div>
				</div>
			</div>
			<div class="bg-light py-2 fx-sm d-flex ai-center jc-center">
				<i class="sprite sprite-arrow mr-1"></i>
				<span>收起</span>
			</div>
		</div>
		<!-- end nav icons -->
		<m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
			<template #items="{category}">
				<router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex" v-for="(news, i) in category.newsList" :key="i">
					<span class="text-info">[{{ news.categoryName }}]</span>
					<span class="px-2">|</span>
					<span class="flex-1 text-dark-1 text-ellipsis pr-2">{{ news.title }}</span>
					<span class="text-grey-1 fs-sm">{{ news.createdAt | date }}</span>
				</router-link>
			</template>
		</m-list-card>

		<!-- 英雄列表 -->
		<m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
			<template #items="{category}">
				<div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
					<router-link tag="div" :to="`/heroes/${hero._id}`"  class="p-2 text-center" style="width: 20%;" v-for="(hero, i) in category.heroList" :key="i">
						<img :src="hero.avatar" alt="" class="w-100" />
						<div>{{ hero.name }}</div>
					</router-link>
				</div>
			</template>
		</m-list-card>

		<m-card icon="video" title="精彩视频"></m-card>
		<m-card icon="book" title="图文攻略"></m-card>
	</div>
</template>

<script>
import dayjs from 'dayjs';

export default {
	filters: {
		date(val) {
			return dayjs(val).format('MM/DD');
		}
	},
	data() {
		return {
			swiperOption: {
				autoplay: 2000, // 可设置数值来指定播放速度
				autoplayDisableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
				speed: 400, // 切换图片速度
				loop: true, // 循环播放
				pagination: {
					el: '.swiper-pagination'
				}
			},
			iconItem: [
				{
					name: '爆料站',
					icon: 'news'
				},
				{
					name: '故事站',
					icon: 'history'
				},
				{
					name: '周边商场',
					icon: 'mall'
				},
				{
					name: '体验报',
					icon: 'learn'
				},
				{
					name: '新人专区',
					icon: 'newpeople'
				},
				{
					name: '荣耀·传承',
					icon: 'glory'
				}
			],
			newsCats: [],
			heroCats: []
		};
	},
	methods: {
		async fetchNewsCats() {
			const res = await this.$http.get('/news/list');
			this.newsCats = res.data;
		},
		async fetchHeroCats() {
			const res = await this.$http.get('/heroes/list');
			this.heroCats = res.data;
		}
	},
	created() {
		this.fetchNewsCats();
		this.fetchHeroCats();
	}
};
</script>
<style lang="scss">
@import '../assets/scss/variables';
.pagination-home {
	.swiper-pagination-bullet {
		opacity: 1;
		border-radius: 0.1538rem;
		background: map-get($colors, 'white');
		&.swiper-pagination-bullet-active {
			background: map-get($colors, 'info');
		}
	}
}

.nav-icons {
	border-top: 0.076923rem solid $border-color;
	border-bottom: 0.076923rem solid $border-color;
	.nav-item {
		width: 25%;
		border-right: 0.076923rem solid $border-color;
		&:nth-child(4n) {
			border-right: 0;
		}
	}
}
</style>
