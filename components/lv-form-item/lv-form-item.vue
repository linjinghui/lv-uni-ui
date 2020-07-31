<!-- 表单项 组件 -->
<template>
	<view class="lv-form-item" :class="{'flex lv-form-item-flex':labelPosition==='left'}">
		<view class="label" :style="{'width':labelWidth,'text-align':labelAlign}" v-if="label">{{label}}</view>
		<view class="main flex" :class="{'main-flex':labelPosition==='left'}">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'LvFormItem',
		props: {
			// 标签
			label: {
				type: String,
				default: ''
			},
			// 标签位置 left | top
			labelPosition: {
				default: 'top'
			},
			// 标签宽度
			labelWidth: {
				default: '80px'
			},
			// 标签方向
			labelAlign: {
				default: 'left'
			}
		},
		data() {
			return {
				
			}
		},
		computed: {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.lv-form-item {
		margin-top: 20upx;
		border-bottom: solid 1px $lv-border-color;
	}
	.lv-form-item-flex {
		margin-top: 0upx;
		// justify-content: space-between;
	}
	.flex-column {
		flex-direction: column;
	}
	.label {
		padding-right: 10upx;
	}
	.main {
		flex: 1;
	}
	.main-flex {
		justify-content: flex-end;
	}
</style>