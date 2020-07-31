<!-- 按钮组件
 1、倒计时功能-->
<template>
	<view class="lv-button flex" 
		:class="['radius-' + radius, theme, {'active': touchStart, 'disabled': disabled}]"
		@touchstart="mousedown"
		@touchend="mouseup"
		@click="_onClick">
		<!-- 加载图标 -->
		<template v-if="startTime">{{ptime + 's'}}</template>
		<template v-else>
			<lv-icons class="lv-icons" move type="spinner-cycle" size="20px" v-if="loading"></lv-icons>
			<lv-icons class="lv-icons" :type="icon" size="" v-if="icon"></lv-icons>
			<slot></slot>
		</template>
	</view>
</template>

<script>
	
	export default {
		name: 'LvButton',
		props: {
			// 按钮主题类型 default | primary | error | warning | success | theme:主题色
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
			// 倒计时，秒
			time: {
				default: '',
				validator: value => {
					// return ['success', 'warning', 'danger'].indexOf(value) !== -1
					return !value || !isNaN(value);
				}
			}
		},
		data() {
			return {
				touchStart: false,
				// 开始计时
				startTime: false,
				ptime: this.time
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
			// 开始计时
			startTiming () {
				this.startTime = true
				let timer = setInterval(() => {
					this.ptime -= 1;
					if (this.ptime <= 0) {
						clearInterval(timer);
						this.startTime = false;
						this.ptime = this.time;
					}
				}, 1000);
			},
			_onClick() {
				!this.disabled && !this.startTime && this.$emit('click')
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-button {
		height: 40px;
		justify-content: center;
		border-width: 1px;
		border-style: solid;
		border-color: $lv-border-color;
		background-color: #FFFFFF;
		transition: all .3s;
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