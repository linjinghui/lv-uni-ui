<!-- Tag 组件 -->
<template>
	<view class="lv-tag" 
		:class="['radius-' + radius, theme, {'active': touchStart, 'disabled': disabled}]"
		@touchstart="mousedown"
		@touchend="mouseup"
		@click="_onClick">
		<text class="lv-tag-text" :class="theme">{{text}}</text>
	</view>
</template>

<script>
	export default {
		name: 'LvTag',
		props: {
			// 按钮主题类型 default | primary | error | warning | success | theme: 主题色
			type: {
				type: String,
				default: 'default'
			},
			size: {
				type: String,
				default: ''
			},
			// 是否镂空
			plain: {
				type: Boolean,
				default: false
			},
			// 导角 small | half
			radius: {
				default: ''
			},
			// 加载中
			loading: {
				type: Boolean,
				default: false
			},
			// 图标
			icon: {
				type: String,
				default: ''
			},
			// 禁用
			disabled: {
				type: Boolean,
				default: false
			},
			// 文本
			text: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				touchStart: false
			}
		},
		computed: {
			theme () {
				let arr = [];
				this.type && arr.push(this.type);
				this.plain && arr.push('plain');
				return arr.join('-');
			}
		},
		methods: {
			mousedown () {
				if (!this.disabled && !this.startTime) {
					this.touchStart = true
				}
			},
			mouseup () {
				if (!this.disabled && !this.startTime) {
					this.touchStart = false
				}
			},
			_onClick() {
				!this.disabled && !this.startTime && this.$emit('click')
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-tag {
		padding-left: 5px;
		padding-right: 5px;
		padding-top: 2px;
		padding-bottom: 2px;
		border-width: 1px;
		border-style: solid;
		border-color: $lv-border-color;
		background-color: #FFFFFF;
		/* #ifndef APP-NVUE */
		transition: all .3s;
		/* #endif */
	}
	.lv-tag-text {
		font-size: 24upx;
	}
	// 导角设置
	.radius-small {
		border-radius: 6px;
	}
	.radius-half {
		border-radius: 50px;
	}
	// 主题设置
	.primary {
		color: #FFFFFF;
		background-color: $lv-color-primary;
		border-color: transparent;
	}
	.error {
		color: #FFFFFF;
		background-color: $lv-color-error;
		border-color: transparent;
	}
	.warning {
		color: #FFFFFF;
		background-color: $lv-color-warning;
		border-color: transparent;
	}
	.success {
		color: #FFFFFF;
		background-color: $lv-color-success;
		border-color: transparent;
	}
	.theme {
		color: #FFFFFF;
		background-color: $lv-theme-color;
		border-color: transparent;
	}
	
	.primary-plain {
		color: $lv-color-primary;
		background-color: $lv-color-primary-plain;
		border-color: $lv-color-primary;
	}
	.error-plain {
		color: $lv-color-error;
		background-color: $lv-color-error-plain;
		border-color: $lv-color-error;
	}
	.warning-plain {
		color: $lv-color-warning;
		background-color: $lv-color-warning-plain;
		border-color: $lv-color-warning;
	}
	.success-plain {
		color: $lv-color-success;
		background-color: $lv-color-success-plain;
		border-color: $lv-color-success;
	}
	.theme-plain {
		color: $lv-theme-color;
		background-color: $lv-theme-color-plain;
		border-color: $lv-theme-color;
	}
	
	// 点击激活
	.active {
		opacity: 0.7;
	}
	// 禁用
	.disabled {
		opacity: 0.7;
	}
	
	.lv-icons {
		width: 30px;
		height: 30px;
	}
</style>