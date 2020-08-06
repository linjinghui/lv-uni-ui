<!-- ROW 组件 -->
<template>
	<view class="lv-row" 
		:style="[{
			'flex-direction': direction === 'row' && direction,
			'flex-flow': direction === 'column' && direction,
			'align-items': align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : 'center', 
			'justify-content': justify === 'start' ? 'flex-start' : justify === 'end' ? 'flex-end' : justify === 'around' ? 'space-around' : justify === 'between' ? 'space-between' : 'center' 
		}]">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'LvRow',
		props: {
			// 方向 row column 
			direction: {
				default: 'column'
			},
			// 垂直排序 center | start | end
			align: {
				default: 'center'
			},
			// 水平排序 center | start | end | around | between
			justify: {
				default: 'start'
			}
		},
		data() {
			return {}
		},
		computed: {},
		methods: {}
	}
</script>

<style scoped lang="scss">
	.lv-row {
		position: relative;
		display: flex;
		flex-shrink: 0;
		// flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
</style>