<!-- 图片组件
 1、必须设置宽
 非NUE支持懒加载-->
<template>
	<view :id="cls" class="lv-image flex" :style="{ 'background-color': showDef ? background : '' }" @click="handleClick">
		<image :class="cls" :src="defSrc" :style="{ 'width': wrapWidth + 'px' }" :mode="mode" v-if="showDef" />
		<image :src="psrc" :style="{ 'width': wrapWidth + 'px', 'height': showDef ? '0px' : '' }" :mode="mode" @load="picLoad" />
	</view>
</template>

<script>
	export default {
		name: 'LvImage',
		props: {
			// 默认图片地址
			defSrc: {
			    default: '/static/components/lv-image/default.png'
			},
			// 真实图片地址
			src: {
				type: String,
				default: ''
			},
			// 背景颜色
			background: {
				type: String,
				default: '#efefef'
			},
			mode: {
				type: String,
				default: 'aspectFit'
			}
		},
		watch: {
			src (val) {
				this.psrc = val;
			}
		},
		data() {
			return {
				cls: 'LvImage_' + new Date().getTime() + parseInt(Math.random() * 100),
				// 容器宽度
				wrapWidth: 0,
				// 是否显示默认图片
				showDef: true,
				psrc: ''
			}
		},
		mounted () {
			// 获取容器宽度
			const query = uni.createSelectorQuery().in(this);
			setTimeout(() => {
				query.select('#' + this.cls).boundingClientRect(data => {
					this.wrapWidth = data.width;
				}).exec();
			}, 0);
			
			// 图片懒加载，进入可视区域后才开始加载
			// #ifdef APP-NVUE
			this.psrc = this.src;
			// #endif
			
			// #ifndef APP-NVUE
			let observer = uni.createIntersectionObserver(this);
			observer.relativeTo('.page').observe('.' + this.cls, res => {
				if (res.intersectionRatio > 0) {
					// 进入可视区域
					this.psrc = this.src;
					observer.disconnect();
				}
			});
			// #endif
		},
		methods: {
			picLoad () {
				this.$nextTick(function(){
					this.showDef = false;
				});
			},
			handleClick() {
				this.$emit('click');
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-image {
		position: relative;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.def-image {
		
	}
	.real-image {
		
	}
	.wrap-real-image {
		flex: 1;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>