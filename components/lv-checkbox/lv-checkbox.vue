<!-- 复选框|单选框 组件 -->
<template>
	<view class="lv-checkbox flex" 
		:class="[{'active': touchStart, 'disabled': disabled}]"
		@touchstart="mousedown"
		@touchend="mouseup"
		@click="_onClick">
		<view class="checkbox flex" :class="[shape, selected && theme]" :style="{width: size, height: size}">
			<lv-icons class="tick" :size="size" type="checkmarkempty" v-if="selected"></lv-icons>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'LvCheckbox',
		props: {
			// 按钮主题类型 default | primary | error | warning | success | theme: 主题色
			type: {
				type: String,
				default: 'default'
			},
			// 是否镂空
			plain: {
				type: Boolean,
				default: false
			},
			// 禁用
			disabled: {
				type: Boolean,
				default: false
			},
			// 形状 square：方形 circle：圆形
			shape: {
				type: String,
				default: 'square'
			},
			// 勾选中的值
			val: {
				required: true
			},
			// 已选中的值, 如果是数组则表示多选，其他单选
			value: {
				default: ''
			},
			// 复选框大小
			size: {
				default: '38upx'
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
			// 是否选中
			selected () {
				let result = false;
				if (typeof this.value === 'object') {
					// 数组
					result = this.value.indexOf(this.val) > -1;
				} else {
					result = this.value === this.val;
				}
				return result;
			}
		},
		mounted() {},
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
					// this.handleClick();
					this.$emit('click');
				}
			},
			handleClick () {
				if (typeof this.value === 'object') {
					// 数组
					let copyArr = JSON.parse(JSON.stringify(this.value));
					let index = this.value.indexOf(this.val);
					if (index === -1) {
						// 添加
						copyArr.push(this.val);
						this.$emit('input', copyArr);
					} else {
						// 删除
						copyArr.splice(index, 1);
						this.$emit('input', copyArr);
					}
				} else {
					this.$emit('input', this.val);
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.lv-checkbox {
		margin-top: 20upx;
		margin-right: 20upx;
		margin-bottom: 20upx;
	}
	.checkbox {
		justify-content: center;
		margin-right: 4px;
		border-style: solid;
		border-width: 1px;
		border-color: $lv-border-color;
		border-radius: 2px;
		transition: all .3s;
	}
	.circle {
		border-radius: 50px;
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