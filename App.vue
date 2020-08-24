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
	/* #ifdef APP-NVUE */
	.page {
		flex: 1;
	}
	/* #endif */
	
	/* #ifndef APP-NVUE */
	page, .page {
		height: 100%;
	}
	/* #endif */
	.page {
		font-size: 30upx;
		background-color: #f7f7f7;
	}
	/* 字体大小 */
	.ft-10 {
		font-size: 20upx;
	}
	.ft-12 {
		font-size: 24upx;
	}
	.ft-14 {
		font-size: 28upx;
	}
	.ft-16 {
		font-size: 28upx;
	}
	.text {
		font-size: 32upx;
	}
	.ft-18 {
		font-size: 36upx;
	}
	.ft-20 {
		font-size: 40upx;
	}
	/* 横向 - 左到右 - 垂直居中 */
	.flex {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-shrink: 0;
		/* #endif */
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
