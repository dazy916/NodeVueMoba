<template>
	<div>
		<h1>分类列表</h1>
		<el-table :data="items">
			<el-table-column prop="_id" label="ID" width="240"></el-table-column>
			<el-table-column prop="parents.name" label="上级分类"></el-table-column>
			<el-table-column prop="name" label="分类名称"></el-table-column>
			<el-table-column fixed="right" label="操作" width="180">
				<template slot-scope="scope">
					<el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
					<el-button type="text" size="small" @click="$router.push(`/categories/create/${scope.row._id}`)">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: []
		};
	},
	methods: {
		async fetch() {
			const res = await this.$http.get('rest/categories');
			this.items = res.data;
		},
		async remove(row) {
			this.$confirm(`是否确定要删除分类?`, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(async () => {
				await this.$http.delete(`rest/categories/${row._id}`);
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
			this.fetch();
			});
		}
	},
	created() {
		this.fetch();
	}
};
</script>

<style></style>
