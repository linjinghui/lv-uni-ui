<!-- 分割线 组件 -->
<template>
	<view class="lv-divider" :style="{ 'background-color': background }">
		<view class="lv-divider-main" :style="{ 'background-color': background }">
			<slot></slot>
		</view>
		<view class="lv-divider-line" :style="{ 'border-style': type, 'border-color': linColor }"></view>
	</view>
</template>

<script>
	export default {
		name: 'LvDivider',
		props: {
			// 分割线类型 solid | dashed | dotted 
			type: {
				default: 'solid'
			},
			// 分割线颜色
			linColor: {
				default: '#dcdcdc'
			},
			// 背景色
			background: {
				default: '#ffffff'
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-divider {
		position: relative;
		border: solid 1px;
		display: flex;
		flex-shrink: 0;
		justify-content: center;
		align-items: center;
	}
	.lv-divider-line {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		height: 1px;
		border-width: 0;
		border-top-width: 1px;
		z-index: 1;
	}
	.lv-divider-main {
		position: relative;
		padding-left: 30upx;
		padding-right: 30upx;
		z-index: 2;
	}
</style>