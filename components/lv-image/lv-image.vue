<!-- 图片组件
 1、必须设置宽、高
 支持懒加载-->
<template>
	<view class="lv-image flex" @click="_onClick">
		<image class="lv-image-def" :src="defSrc" mode="aspectFit" v-if="showDef" />
		<image :class="cls" :src="psrc" :mode="mode" :show-menu-by-longpress="true" :lazy-load="true" :style="{'opacity':showDef?0:1}" @load="picLoad" />
	</view>
</template>

<script>
	export default {
		name: 'LvImage',
		props: {
			// 默认图片地址
			defSrc: {
			    default: require('./default.png')
			},
			// 真实图片地址
			src: {
				type: String,
				default: ''
			},
			mode: {
				type: String,
				default: 'aspectFit'
			}
		},
		data() {
			return {
				cls: 'LvImage_' + new Date().getTime() + parseInt(Math.random() * 100),
				showDef: true,
				psrc: ''
			}
		},
		mounted () {
			// 图片懒加载，进入可视区域后才开始加载
			let observer = uni.createIntersectionObserver(this);
			observer.relativeTo('.page').observe('.' + this.cls, (res) => {
				if (res.intersectionRatio > 0) {
					// 进入可视区域
					this.psrc = this.src;
					observer.disconnect();
				}
			});
		},
		methods: {
			picLoad () {
				this.$nextTick(function(){
					this.showDef = false;
				});
			},
			_onClick() {
				this.$emit('click');
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-image {
		position: relative;
		overflow: hidden;
	}
	image {
		width: 100%;
		height: 100%;
		will-change: transform;
	}
	.lv-image-def {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
</style>