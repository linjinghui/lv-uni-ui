<!-- NumberBox 数字输入框 -->
<template>
	<view class="lv-numbox flex" :style="{ height: height }">
		<text class="lv-numbox-icon lv-numbox-minus flex" 
			:style="{ width: height }"
			:class="[ 'lv-numbox-' + type + (disabledMinus ? '-disabled' : ''), { 'lv-numbox-icon-hover': activeMinus }]"
			@touchstart="mousedown('minus')" @touchend="mouseup('minus')" @click="handleMinus">-</text>
		<input class="lv-numbox-input" type="number" :disabled="disabled" v-model="inputValue" 
			:class="['lv-numbox-' + type + (disabled ? '-disabled' : ''), { 'lv-numbox-icon-disabled': disabled }]"
			:style="{ width: 'calc(' + height + ' * 1.2)' }" />
		<text class="lv-numbox-icon lv-numbox-plus flex" 
			:style="{ width: height }"
			:class="['lv-numbox-' + type + (disabledPlus ? '-disabled' : ''), { 'lv-numbox-icon-hover': activePlus }]"
			@touchstart="mousedown('plus')" @touchend="mouseup('plus')" @click="handlePlus">+</text>
	</view>
</template>
<script>
	export default {
		name: "lvNumberbox",
		props: {
			// 按钮主题类型 default | primary | error | warning | success | theme: 主题色
			type: {
				type: String,
				default: 'primary'
			},
			value: {
				type: [Number, String],
				default: 1
			},
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 10
			},
			step: {
				type: Number,
				default: 1
			},
			disabled: {
				type: Boolean,
				default: false
			},
			// 高度
			height: {
				default: '30px'
			}
		},
		data() {
			return {
				inputValue: 0,
				activeMinus: false,
				activePlus: false,
				disabledMinus: this.disabled,
				disabledPlus: this.disabled
			};
		},
		watch: {
			value(val) {
				this.inputValue = +val;
			},
			inputValue(newVal, oldVal) {
				if (this.inputValue > this.min) {
					this.disabledMinus = false;
				} else {
					this.disabledMinus = true;
				}
				if (this.inputValue < this.max) {
					this.disabledPlus = false;
				} else {
					this.disabledPlus = true;
				}
				if (this.inputValue < this.min) {
					this.inputValue = this.min;
				} else if (this.inputValue > this.max) {
					this.inputValue = this.max;
				} else if (+newVal !== +oldVal) {
					this.$emit("change", newVal);
				}
			}
		},
		created() {
			this.inputValue = +this.value;
		},
		methods: {
			mousedown (type) {
				if (this.disabled) {
					return;
				}
				if (type === 'minus') {
					this.activeMinus = true;
				} else {
					this.activePlus = true;
				}
			},
			mouseup (type) {
				if (this.disabled) {
					return;
				}
				if (type === 'minus') {
					this.activeMinus = false;
				} else {
					this.activePlus = false;
				}
			},
			handleMinus () {
				if (!this.disabledMinus) {
					this.inputValue = parseFloat((this.inputValue - this.step).toFixed(10));
				}
			},
			handlePlus () {
				if (!this.disabledPlus) {
					this.inputValue = parseFloat((this.inputValue + this.step).toFixed(10));
				}
			}
		}
	};
</script>
<style lang="scss" scoped>
	.flex {
		display: inline-flex;
		flex-shrink: 0;
		justify-content: center;
		align-content: center;
	}
	.lv-numbox {
		position: relative;
		align-items: center;
		font-size: 14px;
	}
	.lv-numbox-icon {
		width: 50px;
		height: 100%;
		font-size: 20px;
		transition: all .3s;
		border: solid 1px $lv-border-color;
		overflow: hidden;
	}
	.lv-numbox-input {
		height: 100%;
		text-align: center;
		font-size: inherit;
		border: solid 1px $lv-border-color;
		// border-style: solid;
		// border-width: 1px;
		// border-color: $lv-border-color;
		border-left: solid 1px $lv-border-color!important;
		border-right: solid 1px $lv-border-color!important;
	}
	.lv-numbox-minus {
		border-right: 0;
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
	}
	.lv-numbox-plus {
		border-left: 0;
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
	}
	.lv-numbox-icon-hover {
		background-color: #F1F1F1;
	}
	
	// 主题设置
	.lv-numbox-primary {
		color: #FFFFFF;
		background-color: $lv-color-primary;
		border-color: transparent;
	}
	.lv-numbox-error {
		color: #FFFFFF;
		background-color: $lv-color-error;
		border-color: transparent;
	}
	.lv-numbox-warning {
		color: #FFFFFF;
		background-color: $lv-color-warning;
		border-color: transparent;
	}
	.lv-numbox-success {
		color: #FFFFFF;
		background-color: $lv-color-success;
		border-color: transparent;
	}
	.lv-numbox-theme {
		color: #FFFFFF;
		background-color: $lv-theme-color;
		border-color: transparent;
	}
	
	.lv-numbox-default-disabled {
		color: #c0c0c0;
	}
	.lv-numbox-primary-disabled {
		color: #FFFFFF;
		background-color: $lv-color-primary-plain;
		border-color: transparent;
	}
	.lv-numbox-error-disabled {
		color: #FFFFFF;
		background-color: $lv-color-error-plain;
		border-color: transparent;
	}
	.lv-numbox-warning-disabled {
		color: #FFFFFF;
		background-color: $lv-color-warning-plain;
		border-color: transparent;
	}
	.lv-numbox-success-disabled {
		color: #FFFFFF;
		background-color: $lv-color-success-plain;
		border-color: transparent;
	}
	.lv-numbox-theme-disabled {
		color: #FFFFFF;
		background-color: $lv-theme-color-plain;
		border-color: transparent;
	}
</style>