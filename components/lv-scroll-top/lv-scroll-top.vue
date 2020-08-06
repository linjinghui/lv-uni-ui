<!-- 滚动到顶部 组件 -->
<template>
	<view class="lv-scroll-top" @click="handleClick" v-if="realScrollTop > 800">
		<lv-icons :type="icon" :size="size" :color="color" />
	</view>
</template>

<script>
	export default {
		name: 'LvScrollTop',
		props: {
			// 滚动条位置
			value: {
				default: 0
			},
			// 滚动条实时位置
			realScrollTop: {
				default: 0
			},
			// 置顶图标
			icon: {
				default: 'arrowthinup'
			},
			size: {
				default: '20px'
			},
			color: {
				default: '#999999'
			}
		},
		methods: {
			handleClick () {
				// page置顶
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 150
				});
				this.$emit('scroll-top');
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-scroll-top {
		position: fixed;
		bottom: 20px;
		right: 10px;
		width: 80upx;
		height: 80upx;
		border-radius: 80upx;
		background-color: #e1e1e1;
		z-index: 2;
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		/* #ifdef H5 */
		// bottom: 50px;
		// z-index: 999;
		/* #endif */
	}
</style>