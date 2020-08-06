<!-- 组件：金钱 -->
<template>
	<view class="lv-money" :style="{'color':color}">
		<text :style="{'color':color,'font-size':unitSize||size}">￥</text>
		<text :style="{'color':color,'font-size':size}">{{val}}</text>
		<view class="lv-money-through" v-if="through"></view>
	</view>
</template>

<script>
	export default {
		name: 'LvMoney',
		props:{
			val: {
			    default: 0
			},
			// 单位尺寸
			unitSize: {
				default: ''
			},
			// 文本大小
			size: {
			    default: ''
			},
			// 删除线
			through: {
				type: Boolean,
			    default: false
			},
			// 颜色
			color: {
			    default: ''
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-money {
		position: relative;
		display: inline-flex;
		align-items: center;
		padding-left: 3px;
		padding-right: 3px;
	}
	.lv-money-through {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		width: 100%;
		height: 1px;
		border-top: solid 1px;
	}
</style>
