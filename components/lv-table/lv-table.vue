<!-- Table 组件: 不支持自定义内容 -->
<template>
	<view class="lv-table">
		<table class="table">
			<thead class="thead">
				<tr>
					<td :style="{'border-color': borderColor}" v-for="item in theadTds" :key="item">{{item}}</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="tr in data" :key="tr.id">
					<template v-for="tditem in tbodyTdKeys">
						<td :style="{'border-color': borderColor}" :key="tditem.id">{{tr[tditem.key]}}</td>
					</template>
				</tr>
			</tbody>
		</table>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'LvTable',
		props: {
			// 表格数据
			data: {
				type: Array,
				default: function () {
					return [];
				}
			},
			// 边框颜色
			borderColor: {
				default: '#eeeeee'
			}
		},
		data() {
			return {
				theadTds: [],
				tbodyTdKeys: []
			}
		},
		computed: {},
		created () {
			this.tableId = 'lvTable_' + new Date().getTime() + parseInt(Math.random() * 100);
		},
		methods: {
			// 去重添加表头
			setTheadData (data) {
				this.theadTds.push(data);
				let theadTds = JSON.parse(JSON.stringify(this.theadTds));
				theadTds.push(data);
				this.theadTds = [...new Set(theadTds)];
			},
			setTbodyData (key, node) {
				this.tbodyTdKeys.push({
					key, node
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-table {}
	.table {
		width: 100%;
		text-align: center;
		border-collapse: collapse;
		border: solid 1px;
	}
	
	.thead {
		font-weight: bold;
		background-color: #f5f5f5;
	}
	
	td {
		height: 60upx;
		border-style: solid;
		border-width: 1px;
	}
</style>