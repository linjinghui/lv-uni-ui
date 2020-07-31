/**
 *  全局加载动画
 */ 
import Vue from 'vue'

(function () {
	// #ifdef APP-PLUS
	// 私有属性
	function _mask () {
		return new plus.nativeObj.View("maskLayer", {
			top: '0px',
			left: '0px',
			height: '100%',
			width: '100%',
			backgroundColor: 'rgba(0, 0, 0, 0.1)'
		});
	};
	
	function _load () {
		let nativeLoad = new plus.nativeObj.View("dialogLayer", {
			top: (this.screenHeight - this.dialogHeight) / 2 + 'px',
			left: (this.screenWidth - this.dialogWidth) / 2 + 'px',
			height: this.dialogHeight + 'px',
			width: this.dialogWidth + 'px'
		});
		nativeLoad.drawRect({
			color: 'rgba(0, 0, 0, 0.6)',
			radius: '5px',
		}, {
			top: '0px',
			left: '0px',
			width: '100%',
			height: '100%',
		});
		nativeLoad.draw([
			{
				tag: 'img',
				id: 'img',
				src: '/static/img/lv-loading/loading.gif',
				position: {
					top: '0px',
					left: '0px',
					width: '100%',
					height: '100%',
				}
			}
		]);
		return nativeLoad;
	};
	
	class Cloading {
		
		constructor() {
			
			this.screenWidth = plus.screen.resolutionWidth;
			
			this.screenHeight = plus.screen.resolutionHeight;
			
			this.dialogWidth = 50;
			
			this.dialogHeight = 50;
			
			this.mask = _mask();
			
			this.load = _load.apply(this);
			
		}
			
		// 显示遮罩层
		showMask () {
			this.mask.show();
		}
		// 隐藏遮罩层
		hideMask () {
			this.mask.hide();
		}
		
		// 显示加载动画层
		showLoad () {
			this.load.show();
		}
		// 隐藏加载动画层
		hideLoad () {
			this.load.hide();
		}
		
	}

	Cloading.getInstance = (function () {
		let instance
		return function () {
			if (!instance) {
				instance = new Cloading();
			}
			return instance;
		}
	})();

	Vue.prototype.$showLoading = function () {
		const cloading = Cloading.getInstance();
		cloading.showMask();
		cloading.showLoad();
	}
	Vue.prototype.$hideLoading = function () {
		const cloading = Cloading.getInstance();
		cloading.hideMask()
		cloading.hideLoad()
	}
	// #endif
	
	// #ifndef APP-PLUS
	Vue.prototype.$showLoading = function () {
		uni.showLoading();
	}
	Vue.prototype.$hideLoading = function () {
		uni.hideLoading();
	}
	// #endif

})();