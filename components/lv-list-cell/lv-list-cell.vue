<!-- 组件：列表子项 -->
<template>
	<view class="lv-list-cell align-center"
		:style="{
			'padding-left': padding,
			'padding-right': padding
		}"
		:class="{ 
			'lv-list-cell-hover': touchStart
		}"
		@touchstart="mousedown" @touchend="mouseup">
		<view class="lv-list-cell-left align-center">
			<text class="lv-list-cell-required" v-if="required">*</text>
			<text class="lv-list-cell-label" v-if="label">{{label}}</text>
			<lv-icons class="lv-list-cell-left-icon" :type="leftIcon.icon" :size="leftIcon.size" :color="leftIcon.color" v-if="leftIcon.icon"></lv-icons>
			<slot name="left"></slot>
		</view>
		<view class="lv-list-cell-right align-center">
			<view class="lv-list-cell-value" v-if="value">{{value}}</view>
			<slot name="right"></slot>
			<lv-icons class="lv-list-cell-right-icon" :type="rightIcon.icon" :size="rightIcon.size" :color="rightIcon.color" v-if="rightIcon.icon"></lv-icons>
			<lv-icons class="lv-list-cell-arrow" type="arrowright" color="#999999" size="18px" v-if="arrow"></lv-icons>
		</view>
		<view class="lv-list-cell-line" :style="{ left: padding, width: 'calc(100% - ' + padding + ' * 2)' }" v-if="border"></view>
	</view>
</template>

<script>
	export default {
		name: 'LvListCell',
		props: {
			// 是否边框
			border: {
				type: Boolean,
			    default: true
			},
			// label文本，颜色会写死为#999999
			label: {
			    default: ''
			},
			// 右侧值文本
			value: {
			    default: ''
			},
			// 左右边距
			padding: {
				default: '20upx'
			},
			// 是否必填
			required: {
				type: Boolean,
			    default: false
			},
			// 是否显示箭头
			arrow: {
				type: Boolean,
			    default: false
			},
			// 左侧图标
			leftIcon: {
				type: Object,
				default: function () {
					return {
						icon: '',
						size: '',
						color: ''
					};
				}
			}, 
			// 右侧图标
			rightIcon: {
				type: Object,
				default: function () {
					return {
						icon: '',
						size: '',
						color: ''
					};
				}
			}
		},
		data() {
			return {
				touchStart: false
			}
		},
		methods: {
			mousedown () {
				this.touchStart = true
			},
			mouseup () {
				this.touchStart = false
			}
		}
	}
</script>

<style scoped lang="scss">
	.align-center {
		display: flex;
		flex-shrink: 0;
		align-items: center;
	}
	.lv-list-cell {
		position: relative;
		justify-content: space-between;
		padding: 20upx;
		background-color: #FFFFFF;
	}
	.lv-list-cell-line {
		position: absolute;
		bottom: 0;
		height: 1px;
		border-bottom: solid 1px $lv-border-color;
	}
	.lv-list-cell-hover {
		background-color: #F1F1F1;
	}
	.lv-list-cell-border {
		border-bottom: solid 1px $lv-border-color;
	}
	.lv-list-cell:last-of-type .lv-list-cell-line {
		border-bottom: solid 1px transparent;
	}
	
	.lv-list-cell-left {
		// flex: 1;
	}
	.lv-list-cell-right {
		flex: 1;
		padding-left: 20upx;
		justify-content: flex-end;
	}
	
	.lv-list-cell-required {
		margin-top: 5px;
		color: $lv-color-error;
		font-size: 18px;
	}
	.lv-list-cell-label {
		width: 80px;
		color: #999999;
	}
	
	.lv-list-cell-left-icon {
		margin-right: 20upx;
	}
	.lv-list-cell-right-icon {
		margin-left: 20upx;
	}
	.lv-list-cell-arrow {
		margin-left: 14upx;
	}
</style>
