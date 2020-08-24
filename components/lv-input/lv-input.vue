<!-- 输入框 组件 -->
<template>
	<view class="lv-input flex">
		<input class="input text" placeholder-class="placeholder" 
			:type="ptype" :value="inputValue" :placeholder="((type==='search' && platform !== 'nvue') ? '\ue621 ' : '') + placeholder" :disabled="type==='selector'||type==='time'||type==='date'||type==='range'||type==='half'||type==='shortTerm'||type==='region'||disabled" 
			:maxlength="maxlength" :focus="focus" :confirm-type="type==='search' ? 'search' : confirmType"
			@input="handleInput" @focus="handleFocus" @blur="handleBlur" @confirm="handleConfirm" @keyboardheightchange="keyboardheightchange" @click="handleClick" />
		<lv-icons class="icon" type="clear" size="16px" @click="clear" v-if="type!=='selector'&&type!=='time'&&type!=='date'&&type!=='range'&&type!=='half'&&type!=='shortTerm'&&type!=='region'&&inputValue&&inputValue.length>0" />
		<lv-icons class="icon" :type="ptype==='text'?'eye':'eye-slash'" size="20px" @click="togglePwd" v-if="type==='password'" />
		<lv-image class="captcha" :src="captcha" @click="clkCaptcha" v-if="type==='captcha'"></lv-image>
		<lv-button class="sms-code" ref="smsCode" radius="small" type="theme" time="60" text="验证码" @click="clkSmsCode" v-if="type==='smscode'"></lv-button>
		<lv-icons class="icon" :class="selectorVisible ? 'arrowup' : ''" type="arrowdown" size="16px" @click="showPicker" v-if="type==='selector'||type==='time'||type==='date'||type==='range'||type==='half'||type==='shortTerm'||type==='region'" />
		<slot name="right"></slot>
		
		<lv-picker ref="selector" :visible.sync="selectorVisible" v-bind="cselector" 
			@confirm="handlePickerConfirm($event,type)" @cancel="handleCancel"></lv-picker>
		
	</view>
</template>

<script>
	export default {
		name: 'LvInput',
		props: {
			value: {
				default: ''
			},
			// password | search | captcha：图形验证码 | smscode ：短信验证码 | selector ：选择器
			type: {
				default: 'text'
			},
			placeholder: {
				default: ''
			},
			// 禁用
			disabled: {
				type: Boolean,
				default: false
			},
			maxlength: {
				default: 100
			},
			focus: {
				type: Boolean,
				default: false
			},
			// send:“发送”,search:“搜索”,next:“下一个”,go:“前往” ,done:“完成”
			confirmType: {
				default: ''
			},
			// 图形验证码地址
			captcha: {
				default: ''
			},
			// 选择器配置参数
			selector: {
				type: Object,
				default: function () {
					return {};
				}
			}
		},
		data() {
			return {
				inputValue: this.value,
				ptype: this.type,
				selectorVisible: false
			}
		},
		watch: {
			selectorVisible (data) {
				console.log('==wathch selectorVisible==', data)
			}
		},
		computed: {
			platform () {
				let platform = 'h5';
				// #ifdef APP-PLUS
				platform = uni.getSystemInfoSync().platform;
				// #endif
				// #ifdef MP-WEIXIN
				platform = 'weixin';
				// #endif
				// #ifdef APP-NVUE
				platform = 'nvue';
				// #endif
				return platform;
			},
			cselector () {
				let def = {
					mode: this.type
				}
				return Object.assign({}, def, this.selector);
			}
		},
		watch: {
			value (val) {
				this.inputValue = val;
			}
		},
		methods: {
			handleInput (data) {
				let val = data.detail.value || data.target.value;
				this.inputValue = val;
				this.$emit('input', val);
			},
			clear () {
				this.inputValue = '';
				this.$emit('input', '');
			},
			togglePwd () {
				this.ptype = this.ptype === 'password' ? 'text' : 'password';
			},
			handleFocus () {
				this.$emit('focus');
			},
			handleBlur () {
				this.$emit('blur');
			},
			handleConfirm () {
				this.$emit('confirm');
			},
			keyboardheightchange () {
				this.$emit('keyboardheightchange');
			},
			clkSearch () {
				this.$emit('search', this.inputValue);
			},
			clkCaptcha () {
				this.$emit('captcha');
			},
			clkSmsCode () {
				this.$emit('send');
			},
			// 开始计时
			startTiming () {
				this.$refs.smsCode.startTiming();
			},
			showPicker () {
				this.selectorVisible = true;
			},
			handlePickerConfirm (data, type) {
				this.inputValue = data.result;
				this.$emit('change', data);
			},
			handleCancel () {
				console.log('=handleCancel=');
				this.selectorVisible = false;
			},
			handleClick () {
				if (this.type === 'selector' || this.type === 'time' || this.type === 'date' || this.type === 'range' || this.type === 'half' || this.type === 'shortTerm' || this.type === 'region') {
					this.showPicker();
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	/* #ifndef APP-NVUE */
	// 搜索按钮
	@font-face {
		font-family: uniicons;
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAK0AAsAAAAABmgAAAJoAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApwgQYBNgIkAwgLBgAEIAWEbQcxG60FyJ6aPCmSFubDAH3vwgNCJsTDf/ul981MCEBGEVhgFR0VF2EqW9WVbldVVZieeiT9l+YyQxYm7wdI6lEXcgVOb+SInGCPeq7tq024gUNO7toCk+YJJVx+8f36xL3TP+q8C2Q+oFzmmDwmYBRwgHthFFkxNoxd4BKeE2g3rV/N6eZ+EZoV1rpAPFmGAs25qKKwQqvQXHO0iJomrelVegvgdfj7+Aqj0UzSlFktl48bOix/yNkl+bQ69eATYgR0ugkZm0Ahbmuz5+oEY9dpz9abB/tqDD7kqsq3i71aBPvrrPpOMAml9yRz5bdan0CJ89PANmaWG1N/54n4rtYsKydJMU1LD1WTn2NVq5XtSbIM6+1tb0Zfqu7t11Nska+GitNt+ex2tNbW0aqWG+91NWxu1PPkegM56+/niODq3cONrvn/zR2LTr1fd6bCFdVpkV+gdbe+4PfIeg4VXWHZUlFltf5ketTahHbtqAAH+/2NNQ7dSzG0Grojf4upFFmrRbIwN9GkwxaatTpAuw1bpzsMYHWitGHdFUDo9YikWx1Zrx+yMH/RZNg/mvVGHdrdR9+VHZbDal1jUiTpqJ6gpQW+cByyNWrMk3HgKpxVhJwycWwlcGRwuFjYIp94jh3xoTEqpUDBgYeb4DVy3QBDDmzS5KApZTg7NCTqPjSoBR60OsGIQiI6pDqBLJqAT/iTpdbS9/OI4YBLwS1tNeEywmLW7GjEoOEe5JbW79V2L+/EDhlGSZKABBbwoE2wiLhcARTWL7IRjTTIHJEOzRqyx4m+2sH19d4HlLAuLFMKe27W8kwKa+YoAAA=') format('woff2');
	}
	/* #endif */
	
	.lv-input {
		flex: 1;
		// padding-left: 10upx;
		// padding-right: 10upx;
	}
	.input {
		flex: 1;
		// padding-left: 10upx;
		// padding-right: 10upx;
		height: 40px;
		/* #ifndef APP-NVUE */
		font-size: inherit;
		/* #endif */
	}
	.icon {
		margin-left: 20upx;
		color: #999999;
		/* #ifndef APP-NVUE */
		transition: all .3s;
		/* #endif */
		transform: rotateZ(0deg)
	}
	.icon:active {
		color: #333333;
	}
	.placeholder {
		font-family: uniicons;
		text-decoration: none;
		color: #CBCBCB;
	}
	.captcha {
		margin-left: 20upx;
		width: 60px;
		height: 30px;
	}
	.sms-code {
		margin-left: 20upx;
		width: 85px;
		height: 30px;
	}
	.arrowup {
		transform: rotateZ(180deg);
	}
</style>