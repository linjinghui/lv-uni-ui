<!-- countdown 倒计时 -->
<template>
	<view class="lv-countdown">
		<text v-if="showDay" :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="lv-countdown__number">{{ d }}</text>
		<text v-if="showDay" :style="{ color: splitorColor }" class="lv-countdown__splitor">天</text>
		<text :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="lv-countdown__number">{{ h }}</text>
		<text :style="{ color: splitorColor }" class="lv-countdown__splitor">{{ showColon ? ':' : '时' }}</text>
		<text :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="lv-countdown__number">{{ i }}</text>
		<text :style="{ color: splitorColor }" class="lv-countdown__splitor">{{ showColon ? ':' : '分' }}</text>
		<text :style="{ borderColor: borderColor, color: color, backgroundColor: backgroundColor }" class="lv-countdown__number">{{ s }}</text>
		<text v-if="!showColon" :style="{ color: splitorColor }" class="lv-countdown__splitor">秒</text>
	</view>
</template>
<script>
	export default {
		name: 'lvCountdown',
		props: {
			showDay: {
				type: Boolean,
				default: true
			},
			// 是否显示英文冒号
			showColon: {
				type: Boolean,
				default: false
			},
			backgroundColor: {
				type: String,
				default: '#FFFFFF'
			},
			borderColor: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#000000'
			},
			splitorColor: {
				type: String,
				default: '#000000'
			},
			day: {
				type: Number,
				default: 0
			},
			hour: {
				type: Number,
				default: 0
			},
			minute: {
				type: Number,
				default: 0
			},
			second: {
				type: Number,
				default: 0
			},
			width: {
				type: String,
				default: '52rpx'
			}
		},
		data() {
			return {
				timer: null,
				syncFlag: false,
				d: '00',
				h: '00',
				i: '00',
				s: '00',
				leftTime: 0,
				seconds: 0
			}
		},
		watch: {
			day(val) {
				this.changeFlag()
			},
			hour(val) {
				this.changeFlag()
			},
			minute(val) {
				this.changeFlag()
			},
			second(val) {
				this.changeFlag()
			}
		},
		created: function(e) {
			this.startData();
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		methods: {
			toSeconds(day, hours, minutes, seconds) {
				return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds
			},
			timeUp() {
				clearInterval(this.timer)
				this.$emit('timeup')
			},
			countDown() {
				let seconds = this.seconds
				let [day, hour, minute, second] = [0, 0, 0, 0]
				if (seconds > 0) {
					day = Math.floor(seconds / (60 * 60 * 24))
					hour = Math.floor(seconds / (60 * 60)) - (day * 24)
					minute = Math.floor(seconds / 60) - (day * 24 * 60) - (hour * 60)
					second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
				} else {
					this.timeUp()
				}
				if (day < 10) {
					day = '0' + day
				}
				if (hour < 10) {
					hour = '0' + hour
				}
				if (minute < 10) {
					minute = '0' + minute
				}
				if (second < 10) {
					second = '0' + second
				}
				this.d = day
				this.h = hour
				this.i = minute
				this.s = second
			},
			startData() {
				this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second)
				if (this.seconds <= 0) {
					return
				}
				this.countDown()
				this.timer = setInterval(() => {
					this.seconds--
					if (this.seconds < 0) {
						this.timeUp()
						return
					}
					this.countDown()
				}, 1000)
			},
			changeFlag() {
				if (!this.syncFlag) {
					this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second)
					this.startData();
					this.syncFlag = true;
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	.lv-countdown {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
	}
	.lv-countdown__number {
		padding-left: 2px;
		padding-right: 2px;
		border-style: solid;
		border-width: 1px;
		border-color: transparent;
	}
</style>