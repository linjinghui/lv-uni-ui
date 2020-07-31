<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* #ifndef APP-NVUE */
	page {
		height: 100%;
		font-size: 30upx;
		background-color: #f7f7f7;
	}
	/* #endif */
	/* 横向 - 左到右 - 垂直居中 */
	.flex {
		display: flex;
		flex-shrink: 0;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
	}
	/* 自定义按钮 */
	.btn-xl {
		color: #FFFFFF;
		background-color: #303133!important;
		border-color: transparent!important;
	}
	.btn-xl-plain {
		color: #303133!important;
		background-color: #909399!important;
		border-color: #303133!important;
	}
	/* 自定义tag */
	.tag-xl {
		color: #FFFFFF;
		background-color: #303133!important;
		border-color: transparent!important;
	}
	.tag-xl-plain {
		color: #303133!important;
		background-color: #909399!important;
		border-color: #303133!important;
	}
</style>
