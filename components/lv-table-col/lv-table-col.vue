<!-- Table-col 组件 -->
<script>
	export default {
		name: 'LvTableCol',
		props: {
			// 表头列名称
			label: {
				default: ''
			},
			// 表格对应的key
			prop: {
				default: ''
			}
		},
		data() {
			return {
				node: ''
			}
		},
		computed: {
			owner () {
				let parent = this.$parent;
				while (parent && !parent.tableId) {
				  parent = parent.$parent;
				}
				return parent;
			}
		},
		render(h) {
			// console.log('1rend', this.$slots.default);
			// console.log('2rend', h('view', this.$slots.default));
			if (this.$slots.default) {
				this.node = h('view', this.$slots.default);
			}
			return false;
		},
		mounted() {
			// console.log('LvTableCol mounted', this.owner.theadTds);
			this.setTableHeader();
			this.setTableTd();
		},
		methods: {
			setTableHeader () {
				this.owner.setTheadData(this.label);
			},
			setTableTd (node) {
				this.owner.setTbodyData(this.prop, this.node);
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-table-col {}
</style>