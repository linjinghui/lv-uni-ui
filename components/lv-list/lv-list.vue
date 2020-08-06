<!-- 组件：列表外框  :style="{ 'padding-left': padding, 'padding-right': padding }"-->
<template>
	<view class="lv-list">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'LvList',
		props: {
			// 是否边框
			border: {
				type: Boolean,
			    default: false
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-list {
		position: relative;
		border-top: solid 1px $lv-border-color;
		border-bottom: solid 1px $lv-border-color;
	}
</style>
