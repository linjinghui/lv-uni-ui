<!-- 输入框 组件 -->
<template>
	<view class="lv-input flex">
		<input class="input" placeholder-class="placeholder" 
			:type="ptype" :value="inputValue" :placeholder="(type==='search' ? '\ue621 ' : '') + placeholder" :disabled="type==='selector'||type==='time'||type==='date'||type==='range'||type==='half'||type==='shortTerm'||type==='region'||disabled" 
			:maxlength="maxlength" :focus="focus" :confirm-type="type==='search' ? 'search' : confirmType"
			@input="handleInput" @focus="handleFocus" @blur="handleBlur" @confirm="handleConfirm" @keyboardheightchange="keyboardheightchange" @click="handleClick" />
		<lv-icons class="icon" type="clear" size="16px" @click="clear" v-if="type!=='selector'&&type!=='time'&&type!=='date'&&type!=='range'&&type!=='half'&&type!=='shortTerm'&&type!=='region'&&inputValue.length>0" />
		<lv-icons class="icon" :type="ptype==='text'?'eye':'eye-slash'" size="20px" @click="togglePwd" v-if="type==='password'" />
		<lv-image class="captcha" :src="captcha" @click="clkCaptcha" v-if="type==='captcha'"></lv-image>
		<lv-button class="sms-code" ref="smsCode" radius="small" type="theme" time="60" @click="clkSmsCode" v-if="type==='smscode'">获取验证码</lv-button>
		<lv-icons class="icon" :class="{'arrowup': selectorVisible}" type="arrowdown" size="16px" @click="showPicker" v-if="type==='selector'||type==='time'||type==='date'||type==='range'||type==='half'||type==='shortTerm'||type==='region'" />
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
		computed: {
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
				this.$emit('click-captcha');
			},
			clkSmsCode () {
				this.$emit('click-smscode');
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
			handleCancel () {},
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
		font-size: inherit;
	}
	.icon {
		margin-left: 10upx;
		color: #999999;
		transition: all .3s;
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
		margin-left: 10upx;
		width: 60px;
		height: 30px;
	}
	.sms-code {
		margin-left: 10upx;
		width: 85px;
		height: 30px;
		font-size: 14px;
	}
	.arrowup {
		transform: rotateZ(180deg);
	}
</style>