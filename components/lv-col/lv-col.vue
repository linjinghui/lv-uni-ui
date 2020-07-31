<!-- COLUMN 组件 -->
<template>
	<view class="lv-col" 
		:style="[{
			'flex': basis === 'auto' ? 1 : '',
			'flex-basis': basis === 'auto' ? '' : basis,
			'padding-bottom': square && basis !== 'auto' ? basis : ''
		}]">
		<view class="wrap-square" v-if="square">
			<slot></slot>
		</view>
		<slot v-else></slot>
	</view>
</template>

<script>
	export default {
		name: 'LvCol',
		props: {
			// 宽度占比
			basis: {
				default: ''
			},
			// 是否正方形
			square: {
				type: Boolean,
				default: false
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
	.lv-col {
		position: relative;
	}
	.wrap-square {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>