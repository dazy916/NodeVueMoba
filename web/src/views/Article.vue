<template>
	<div class="page-article" v-if="model">
		<div class="d-flex py-3 px-2 border-bottom">
			<router-link :to="`/`" tag="div" class="iconfont icon-fanhui text-blue"></router-link>
			<strong class="flex-1 text-blue">{{ model.title }}</strong>
			<div class="text-gray fx-sx">2020-02-29</div>
		</div>
		<div v-html="model.body" class="px-3 articlebody fx-lg"></div>
		<div class="px-3 border-top py-2 fx-lg">
			<div class="d-flex ai-center">
				<i class="iconfont icon-cc-menu-circle"></i>
				<strong class="text-blue ml-1">咨询相关</strong>
			</div>
			<div class="py-2 mt-2">
				<router-link :to="`/articles/${item._id}`" tag="div" v-for="item in model.related" :key="item._id" class="mb-2 text-ellipsis">
					{{item.title}}
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		id: { required: true }
	},
	data() {
		return {
			model: null
		};
	},
	watch:{
		id:'fetch'
	},
	methods: {
		async fetch() {
			const res = await this.$http.get(`articles/${this.id}`);
			this.model = res.data
		}
	},
	created() {
		this.fetch();
	}
};
</script>
<style lang="scss">
	.icon-fanhui{
		font-size: 1.5rem;
	}
	.articlebody{
		img{
			max-width: 100%;
		}
		iframe{
			max-width: 100%;
		}
	}
</style>
