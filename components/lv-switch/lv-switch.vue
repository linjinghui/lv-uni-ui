<!-- 开关 组件 -->
<template>
	<view class="lv-switch flex" 
		:class="[{'active': touchStart, 'disabled': disabled}]"
		@touchstart="mousedown"
		@touchend="mouseup"
		@click="_onClick">
		<text class="left-text" v-if="leftText">{{leftText}}</text>
		<!--  :style="{width: 'calc(' + size + ' * 2)', height: size}" -->
		<view class="switch flex" :class="[selected && theme]" :style="{ 'width': multiplySize(2), 'height': size }">
			<view class="switch-bar" :style="{width: size, height: size, left: selected ? size : 0}"></view>
		</view>
		<!-- <view class="switch flex" :style="{width: '100px', height: size}"></view> -->
		<text class="text">{{text}}</text>
	</view>
</template>

<script>
	export default {
		name: 'LvSwitch',
		props: {
			// 按钮主题类型 default | primary | error | warning | success | theme: 主题色
			type: {
				type: String,
				default: 'default'
			},
			// 禁用
			disabled: {
				type: Boolean,
				default: false
			},
			// 左侧文本
			leftText: {
				default: ''
			},
			// 已选中的值
			value: {
				default: ''
			},
			// 选中的值
			onVal: {
				required: true
			},
			// 取消选中的值
			offVal: {
				required: true
			},
			// 复选框大小
			size: {
				default: '38upx'
			},
			// 文本
			text: {
				default: ''
			},
			// 操作前执行，运行done回调，执行后续选中或取消选中功能
			before: {
				type: Function,
				default: function (done) {
					done();
				}
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
			},
			// 是否开启
			selected () {
				return this.value === this.onVal;
			}
		},
		mounted() {
			
		},
		methods: {
			mousedown () {
				if (!this.disabled && !this.startTime) {
					this.touchStart = true;
				}
			},
			mouseup () {
				if (!this.disabled && !this.startTime) {
					this.touchStart = false;
				}
			},
			_onClick () {
				if (!this.disabled) {
					this.before(this.handleClick);
					this.$emit('click');
				}
			},
			handleClick () {
				this.$emit('update:value', this.value === this.onVal ? this.offVal : this.onVal);
				this.$emit('input', this.value === this.onVal ? this.offVal : this.onVal);
			},
			// 计算：size乘以倍数
			multiplySize (data) {
				let num = this.size.match(/\d+/g);
				num = (num || []).join('.');
				let unit = this.size.replace(num, '');
				return (num * data) + unit;
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-switch {
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
	.left-text {
		margin-right: 4px;
		font-size: 14px;
	}
	.text {
		font-size: 14px;
	}
	.switch {
		position: relative;
		margin-right: 4px;
		width: 100px;
		border-style: solid;
		border-width: 1px;
		border-color: $lv-border-color;
		border-radius: 50px;
		background-color: #CCCCCC;
		/* #ifndef APP-NVUE */
		transition: all .2s;
		/* #endif */
	}
	.switch-bar {
		position: absolute;
		top: 0;
		left: 0;
		/* #ifdef APP-NVUE */
		top: -1px;
		left: 0;
		/* #endif */
		border-radius: 50px;
		background-color: #FFFFFF;
		transition: left .2s;
	}
	// 点击激活
	.active {
		opacity: 0.7;
	}
	// 禁用
	.disabled {
		opacity: 0.7;
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
</style>