<template>
	<view class="page">
		<!-- <scroll-view scroll-with-animation :scroll-top="scrollTop" scroll-y="true" style="height: 90%;" @scroll="handleScroll" ></scroll-view> -->
		<view class="section">
			<text>表格</text>
			<view>
				<lv-table :data="tableData">
					<lv-table-col label="姓名" prop="name"></lv-table-col>
					<lv-table-col label="班级" prop="className"></lv-table-col>
					<lv-table-col label="年龄" prop="age"></lv-table-col>
				</lv-table>
			</view>
		</view>
		
		<view class="section">
			<text>进度条</text>
			<view>
				<progress percent="20" show-info stroke-width="3" font-size="14" :stroke-width="10" :border-radius="20" activeColor="#ADE0E4" backgroundColor="yellow" />
			</view>
		</view>
		
		<view class="section">
			<text>滑块</text>
			<view>
				<slider show-value :step="5" block-color="red" block-size="16" activeColor="#ADE0E4" backgroundColor="yellow" value="60" @change="sliderChange" step="5" />
			</view>
		</view>
		
		<view class="section">
			<text>分割线</text>
			<view>
				<lv-divider type="dashed" lin-color="green" background="blue" style="color: #FFFFFF;width: 200px;">Hello world</lv-divider>
			</view>
		</view>
		
		<view class="section">
			<text>倒计时</text>
			<view style="padding-left: 10px;">
				<lv-countdown show-colon :second="86400" border-color="purple" color="red" splitor-color="blue" />
			</view>
		</view>
		
		<view class="section">
			<text>进步条</text>
			<view style="padding-left: 10px;">
				<lv-number-box :min="0.1" :max="0.5" :step="0.1" :value="0.1" />
			</view>
		</view>
		
		<view class="section">
			<text>列表</text>
			<view>
				<lv-list padding="10px">
					<lv-list-cell label="发票类型" value="电子普通发票-个人-商品明细电子普通发票-个人-商品明细" arrow></lv-list-cell>
					<lv-list-cell>
						<text slot="left" style="color: #05B4C4;">实付金额</text>
						<lv-money slot="right" val="10.3" color="red" size="20px"></lv-money>
					</lv-list-cell>
					<lv-list-cell :left-icon="{icon:'shop',size:'40px',color:'red'}" arrow >
						<lv-row slot="left" align="start">
							<lv-col style="color: #05B4C4;">包裹1:顺丰快递</lv-col>
							<lv-col style="color: #999999;font-size: 12px;">物流单号：11407545000453701</lv-col>
						</lv-row>
					</lv-list-cell>
					<lv-list-cell :left-icon="{icon:'shop',size:'40px',color:'red'}" >
						<lv-row slot="left" align="start">
							<lv-col style="color: #05B4C4;">包裹1:顺丰快递</lv-col>
							<lv-col style="color: #999999;font-size: 12px;">物流单号：11407545000453701</lv-col>
						</lv-row>
						<lv-button slot="right" radius="half" type="primary" plain style="flex: 0.5;height: 24px;">修改</lv-button>
					</lv-list-cell>
				</lv-list>
			</view>
		</view>
		
		<view class="section">
			<text>金额</text>
			<view>
				<lv-money val="10.3" color="red" size="20px" unit-size="12px" through></lv-money>
			</view>
		</view>
		
		<view class="section">
			<text>列</text>
			<view>
				<lv-row style="height: 100px;border: solid 1px;">
					<lv-row direction="row" style="width: 100%;flex-grow: 2;background-color: #007AFF;">1</lv-row>
					<lv-row direction="row" style="width: 100%;flex-grow: 3;background-color: #ADE0E4">2</lv-row>
					<lv-row direction="row" style="width: 100%;flex-grow: 6;background-color: #DD524D">3</lv-row>
				</lv-row>
			</view>
		</view>
		
		<view class="section">
			<text>九宫格</text>
			<view>
				<lv-row direction="row" justify="between">
					<lv-col square basis="33.33%" style="background-color: #ADE0E4;">
						<lv-row justify="center" style="height: 100%;">a</lv-row>
					</lv-col>
					<lv-col square basis="33.33%" style="background-color: #007AFF">
						<lv-row justify="center" style="height: 100%;">b</lv-row>
					</lv-col>
					<lv-col square basis="33.33%" style="background-color: #DBF1E1">
						<lv-row justify="center" style="height: 100%;">c</lv-row>
					</lv-col>
				</lv-row>
				<lv-row direction="row" justify="between">
					<lv-col square basis="33.33%" style="background-color: #007AFF;">1</lv-col>
					<lv-col square basis="33.33%" style="background-color: #DBF1E1;">2</lv-col>
					<lv-col square basis="33.33%" style="background-color: #ADE0E4;">3</lv-col>
				</lv-row>
				<lv-row direction="row" justify="between">
					<lv-col square basis="33.33%" style="background-color: #ADE0E4;">1</lv-col>
					<lv-col square basis="33.33%" style="background-color: #007AFF">2</lv-col>
					<lv-col square basis="33.33%" style="background-color: #DBF1E1">3</lv-col>
				</lv-row>
			</view>
		</view>
		
		<view class="section">
			<text>全局loading</text>
			<view>
				<lv-button type="primary" @click="loading">loading</lv-button>
			</view>
		</view>
		
		<view class="section">
			<text>布局</text>
			<view>
				<lv-row direction="row" align="center" justify="between">
					<lv-col square basis="20%" style="background-color: #999999;">头像</lv-col>
					<lv-col basis="auto" style="background-color: #888888;">
						<lv-row align="start" style="background-color: #777777;">姓名</lv-row>
						<lv-row style="background-color: #666666;">部门</lv-row>
					</lv-col>
				</lv-row>
			</view>
			<view>
				<lv-row direction="row" align="end" justify="between">
					<lv-col basis="50%" style="height:30px;border: solid 1px;">1</lv-col>
					<lv-col basis="30%" style="height:50px;border: solid 1px;">2</lv-col>
					<lv-col basis="auto" style="height:80px;border: solid 1px;">3</lv-col>
				</lv-row>
			</view>
		</view>
		
		<view class="section">
			<text>输入框</text>
			<view style="padding-left: 20upx;padding-right: 20upx;">
				<lv-input v-model="name" placeholder="请输入名称"></lv-input>
				<lv-input v-model="password" type="password" placeholder="请输入密码"></lv-input>
				<lv-input v-model="search" type="search" placeholder="请输入搜索内容">
					<lv-icons slot="right" type="search" size="20px" />
				</lv-input>
				<lv-input v-model="name" type="captcha" :captcha="captchaUrl" placeholder="请输入图片验证码" @click-captcha="refreshCaptcha"></lv-input>
				<lv-input ref="rsmscode" v-model="search" type="smscode" placeholder="请输入短信验证码" @click-smscode="clickSmscode"></lv-input>
				<lv-input type="selector" placeholder="请选择性别" :selector="selector1" @change="handleSelectSex"></lv-input>
				<lv-input type="time" placeholder="请选择时间" :selector="selectorTime" @change="handleSelectSex"></lv-input>
				<lv-input type="date" placeholder="请选择日期" :selector="selectorDate" @change="handleSelectSex"></lv-input>
				<lv-input type="range" placeholder="请选择起止时间" :selector="selectorRange" @change="handleSelectSex"></lv-input>
				<lv-input type="half" placeholder="请选择上午下午" :selector="selectorHalf" @change="handleSelectSex"></lv-input>
				<lv-input type="shortTerm" placeholder="请选择时间" :selector="selectorShortTerm" @change="handleSelectSex"></lv-input>
				<lv-input type="region" placeholder="请选择地区" :selector="selectorRegion" @change="handleSelectSex"></lv-input>
				
			</view>
		</view>
		
		<view class="section">
			<text>表单</text>
			<view style="padding-left: 20upx;padding-right: 20upx;">
				<lv-form-item label="账号">
					<lv-input v-model="info.account" placeholder="请输入账号"></lv-input>
				</lv-form-item>
				<lv-form-item label="密码">
					<lv-input v-model="info.pwd" type="password" placeholder="请输入密码"></lv-input>
				</lv-form-item>
				<lv-form-item label="图片验证码">
					<lv-input v-model="info.captcha" placeholder="请输入图片验证码"></lv-input>
					<lv-image style="width:60px;height:30px;" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"></lv-image>
				</lv-form-item>
				<lv-form-item label="验证码">
					<lv-input v-model="info.smsCode" placeholder="请输入短信验证码"></lv-input>
					<lv-button style="width: 85px;height: 30px;font-size: 14px;" ref="smsCode" radius="small" type="theme" time="60" @click="clkSmsCode">获取验证码</lv-button>
				</lv-form-item>
				<lv-form-item label="喜好">
					<lv-checkbox v-model="info.like" type="primary" :val="1" plain>读书</lv-checkbox>
					<lv-checkbox v-model="info.like" type="error" :val="2">写字</lv-checkbox>
					<lv-checkbox v-model="info.like" type="warning" :val="3">电影</lv-checkbox>
					<lv-checkbox v-model="info.like" type="success" shape="circle" :val="4">旅行</lv-checkbox>
				</lv-form-item>
				<lv-form-item label="性别">
					<lv-checkbox v-model="info.sex" type="primary" :val="1" shape="circle">男</lv-checkbox>
					<lv-checkbox v-model="info.sex" type="error" :val="2" shape="circle">女</lv-checkbox>
				</lv-form-item>
				<lv-form-item label="开关">
					<lv-switch :value.sync="info.swich" type="theme" :on-val="1" :off-val="2"></lv-switch>
				</lv-form-item>
				<lv-form-item>
					<lv-button style="margin: 20upx 0;width: 100%;" radius="small" type="theme" @click="clkSubmit">提交</lv-button>
				</lv-form-item>
			</view>
		</view>
		
		<view class="section">
			<text>开关</text>
			<view>
				<lv-switch :value.sync="swich" type="theme" :on-val="1" :off-val="2" left-text="开启" :before="beforeCheck">关闭</lv-switch>
			</view>
		</view>
		
		<view class="section">
			<text>单选框</text>
			<view>
				<lv-checkbox v-model="sex" type="primary" shape="circle" :val="1" plain>男</lv-checkbox>
				<lv-checkbox v-model="sex" type="error" shape="circle" :val="2">女</lv-checkbox>
				<lv-checkbox v-model="sex" type="warning" shape="circle" :val="3">青年</lv-checkbox>
				<lv-checkbox v-model="sex" type="success" shape="circle" :val="4">中年</lv-checkbox>
				<lv-checkbox v-model="sex" type="theme" :val="5">保密-主题</lv-checkbox>
				<lv-checkbox v-model="sex" type="theme" shape="circle" :val="6" :before="beforeCheck">确认选中</lv-checkbox>
				<lv-checkbox v-model="sex" type="theme" shape="circle" :val="7" disabled>禁用</lv-checkbox>
			</view>
		</view>
		<view class="section">
			<text>复选框</text>
			<view>
				<lv-checkbox v-model="like" type="primary" :val="1" plain>读书</lv-checkbox>
				<lv-checkbox v-model="like" type="error" :val="2">写字</lv-checkbox>
				<lv-checkbox v-model="like" type="warning" :val="3">电影</lv-checkbox>
				<lv-checkbox v-model="like" type="success" shape="circle" :val="4">旅行</lv-checkbox>
				<lv-checkbox v-model="like" type="theme" :val="5">朗诵-主题</lv-checkbox>
				<lv-checkbox v-model="like" type="theme" :val="6" :before="beforeCheck">确认选中</lv-checkbox>
				<lv-checkbox v-model="like" type="theme" :val="7" disabled>禁用</lv-checkbox>
			</view>
		</view>
		
		<view class="section">
			<text>tag标记</text>
			<view class="flex">
				<lv-tag radius="" @click="tip('点击了tag-default')">默认</lv-tag>
				<lv-tag radius="small" type="primary" @click="tip('点击了tag-primary')">主要</lv-tag>
				<lv-tag radius="half" type="error" @click="tip('点击了tag-error')">错误</lv-tag>
				<lv-tag radius="" type="warning" @click="tip('点击了tag-warning')">警告</lv-tag>
				<lv-tag radius="small" type="success" @click="tip('点击了tag-success')">成功</lv-tag>
				<lv-tag radius="" type="theme" @click="tip('点击了tag-theme')">主题</lv-tag>
				<lv-tag radius="half" type="primary" plain @click="tip('点击了tag-primary plain')">主要</lv-tag>
				<lv-tag radius="" type="error" plain @click="tip('点击了tag-error plain')">错误</lv-tag>
				<lv-tag radius="small" type="warning" plain @click="tip('点击了tag-warning plain')">警告</lv-tag>
				<lv-tag radius="half" type="success" plain @click="tip('点击了tag-success plain')">成功</lv-tag>
				<lv-tag radius="small" type="theme" plain @click="tip('点击了tag-theme plain')">主题</lv-tag>
				<lv-tag radius="" type="tag-xl" @click="tip('点击了自定义tag')">自定义</lv-tag>
			</view>
		</view>
		
		<view class="section">
			<text>图片</text>
			<view class="flex">
				<lv-image style="width:300px;height:200px;border-radius: 10px;" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"></lv-image>
			</view>
		</view>
		
		<view class="section">
			<text>字体图标</text>
			<view class="flex">
				<lv-icons :type="key" :color="icon.color" :size="icon.size" v-for="(val,key) in icon.list" :key="key"></lv-icons>
			</view>
		</view>
		
		<view class="section">
			<text>图片图标</text>
			<view class="flex">
				<lv-icons type="aq" size="30px"></lv-icons>
				<lv-icons type="fp" size="40px"></lv-icons>
				<lv-icons type="wz" size="50px"></lv-icons>
			</view>
		</view>
		
		<view class="section">
			<text>按钮</text>
			<view>
				<lv-button radius="" @click="tip('点击了按钮-default')">default</lv-button>
				<lv-button radius="small" type="primary" @click="tip('点击了按钮-primary')">primary</lv-button>
				<lv-button radius="half" type="error" @click="tip('点击了按钮-error')">error</lv-button>
				<lv-button radius="" type="warning" @click="tip('点击了按钮-warning')">warning</lv-button>
				<lv-button radius="small" type="success" @click="tip('点击了按钮-success')">success</lv-button>
				<lv-button radius="small" type="theme" @click="tip('点击了按钮-theme')">主题色</lv-button>
				<lv-button radius="half" type="primary" plain @click="tip('点击了按钮-primary plain')">primary</lv-button>
				<lv-button radius="" type="error" plain @click="tip('点击了按钮-error plain')">error</lv-button>
				<lv-button radius="small" type="warning" plain @click="tip('点击了按钮-warning plain')">warning</lv-button>
				<lv-button loading radius="half" type="success" plain @click="tip('点击了按钮-加载')">加载</lv-button>
				<lv-button radius="half" type="theme" plain @click="tip('点击了按钮-theme')">主题色</lv-button>
				<lv-button icon="aq" type="success" @click="tip('点击了按钮-带图标')">带图标</lv-button>
				<lv-button radius="small" type="error" disabled @click="tip('点击了按钮-禁用')">禁用</lv-button>
				<lv-button radius="small" type="btn-xl" @click="tip('点击了自定义按钮')">自定义按钮</lv-button>
				<lv-button radius="small" type="btn-xl" plain @click="tip('点击了自定义按钮')">自定义按钮</lv-button>
				<lv-button ref="scode" radius="half" type="success" time="60" @click="clkScode">倒计时</lv-button>
			</view>
		</view>
		
		
		
		<!-- page 滚动置顶
		<lv-scroll-top :real-scroll-top="realScrollTop" />-->
		<!-- scroll-view 组件置顶  -->
		<lv-scroll-top :real-scroll-top="realScrollTop" @scroll-top="handleScrollTop" />
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon: {
					color: 'red',
					size: '20px',
					list: {
						"pulldown": "\ue588",
						"refreshempty": "\ue461",
						"back": "\ue471",
						"forward": "\ue470",
						"more": "\ue507",
						"more-filled": "\ue537",
						"scan": "\ue612",
						"qq": "\ue264",
						"weibo": "\ue260",
						"weixin": "\ue261",
						"pengyouquan": "\ue262",
						"loop": "\ue565",
						"refresh": "\ue407",
						"refresh-filled": "\ue437",
						"arrowthindown": "\ue585",
						"arrowthinleft": "\ue586",
						"arrowthinright": "\ue587",
						"arrowthinup": "\ue584",
						"undo-filled": "\ue7d6",
						"undo": "\ue406",
						"redo": "\ue405",
						"redo-filled": "\ue7d9",
						"bars": "\ue563",
						"chatboxes": "\ue203",
						"camera": "\ue301",
						"chatboxes-filled": "\ue233",
						"camera-filled": "\ue7ef",
						"cart-filled": "\ue7f4",
						"cart": "\ue7f5",
						"checkbox-filled": "\ue442",
						"checkbox": "\ue7fa",
						"arrowleft": "\ue582",
						"arrowdown": "\ue581",
						"arrowright": "\ue583",
						"smallcircle-filled": "\ue801",
						"arrowup": "\ue580",
						"circle": "\ue411",
						"eye-filled": "\ue568",
						"eye-slash-filled": "\ue822",
						"eye-slash": "\ue823",
						"eye": "\ue824",
						"flag-filled": "\ue825",
						"flag": "\ue508",
						"gear-filled": "\ue532",
						"reload": "\ue462",
						"gear": "\ue502",
						"hand-thumbsdown-filled": "\ue83b",
						"hand-thumbsdown": "\ue83c",
						"hand-thumbsup-filled": "\ue83d",
						"heart-filled": "\ue83e",
						"hand-thumbsup": "\ue83f",
						"heart": "\ue840",
						"home": "\ue500",
						"info": "\ue504",
						"home-filled": "\ue530",
						"info-filled": "\ue534",
						"circle-filled": "\ue441",
						"chat-filled": "\ue847",
						"chat": "\ue263",
						"mail-open-filled": "\ue84d",
						"email-filled": "\ue231",
						"mail-open": "\ue84e",
						"email": "\ue201",
						"checkmarkempty": "\ue472",
						"list": "\ue562",
						"locked-filled": "\ue856",
						"locked": "\ue506",
						"map-filled": "\ue85c",
						"map-pin": "\ue85e",
						"map-pin-ellipse": "\ue864",
						"map": "\ue364",
						"minus-filled": "\ue440",
						"mic-filled": "\ue332",
						"minus": "\ue410",
						"micoff": "\ue360",
						"mic": "\ue302",
						"clear": "\ue434",
						"smallcircle": "\ue868",
						"close": "\ue404",
						"closeempty": "\ue460",
						"paperclip": "\ue567",
						"paperplane": "\ue503",
						"paperplane-filled": "\ue86e",
						"person-filled": "\ue131",
						"contact-filled": "\ue130",
						"person": "\ue101",
						"contact": "\ue100",
						"images-filled": "\ue87a",
						"phone": "\ue200",
						"images": "\ue87b",
						"image": "\ue363",
						"image-filled": "\ue877",
						"location-filled": "\ue333",
						"location": "\ue303",
						"plus-filled": "\ue439",
						"plus": "\ue409",
						"plusempty": "\ue468",
						"help-filled": "\ue535",
						"help": "\ue505",
						"navigate-filled": "\ue884",
						"navigate": "\ue501",
						"mic-slash-filled": "\ue892",
						"search": "\ue466",
						"settings": "\ue560",
						"sound": "\ue590",
						"sound-filled": "\ue8a1",
						"spinner-cycle": "\ue465",
						"download-filled": "\ue8a4",
						"personadd-filled": "\ue132",
						"videocam-filled": "\ue8af",
						"personadd": "\ue102",
						"upload": "\ue402",
						"upload-filled": "\ue8b1",
						"starhalf": "\ue463",
						"star-filled": "\ue438",
						"star": "\ue408",
						"trash": "\ue401",
						"phone-filled": "\ue230",
						"compose": "\ue400",
						"videocam": "\ue300",
						"trash-filled": "\ue8dc",
						"download": "\ue403",
						"chatbubble-filled": "\ue232",
						"chatbubble": "\ue202",
						"cloud-download": "\ue8e4",
						"cloud-upload-filled": "\ue8e5",
						"cloud-upload": "\ue8e6",
						"cloud-download-filled": "\ue8e9",
						"headphones":"\ue8bf",
						"shop":"\ue609"
					}
				},
				name: '1',
				password: '',
				search: '',
				sex: 2,
				like: [],
				swich: 2,
				info: {
					account: '',
					pwd: '',
					captcha: '',
					smsCode: '',
					sex: 2,
					like: [],
					swich: 2
				},
				captchaUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1393683866,2987071052&fm=26&gp=0.jpg',
				user: {
					sex: '1'
				},
				selector1: {
					value: '2',
					// 标识默认值字段名，用于映射value
					'default-type': 'id',
					// 数据源字段替换
					'default-props': {
						label: 'name',
						value: 'id'
					},
					// 选择列表
					options: [
						{
							name: "男",
							id: "1",
						},
						{
							name: "女",
							id: "2",
						}
					]
				},
				// 时间选择器
				selectorTime: {
					value: "20:00:00",
					// 是否默认显示当前时间，如果是，传的默认值将失效
					'current': false,
					// time-picker是否显示秒
					second: true
				},
				// 日期选择器
				selectorDate: {
					// 默认值 与颗粒度对应的日期格式
					value: "2020-07-28 20:00:00",
					// 开始年份 默认1970
					startYear: 2000,
					// 结束年份 默认当前年份
					endYear: 2030,
					// 是否默认显示当前时间，如果是，传的默认值将失效
					'current': false,
					// 是否禁用当前之后的日期
					'disabled-after': false,
					// 默认day 	颗粒度: year、day、month、hour、minute、second
					fields: 'second'
				},
				// 日期区间选择器
				selectorRange: {
					// 默认值 与颗粒度对应的日期格式
					value: ['2018-12-12','2020-04-02'],
					// 开始年份 默认1970
					startYear: 2000,
					// 结束年份 默认当前年份
					endYear: 2030,
					// 是否默认显示当前时间，如果是，传的默认值将失效
					'current': false
				},
				// 上午下午选择器
				selectorHalf: {
					// 开始年份 默认1970
					startYear: '2017',
					// 结束年份 默认当前年份
					endYear: '2030',
					value: '2018-02-11 上午',
					// 是否禁用当前之后的日期
					'disabled-after': true,
					// 是否默认显示当前时间，如果是，传的默认值将失效
					'current': false
				},
				selectorShortTerm: {
					value: '2020-04-08 13:18:00',
					// 是否默认显示当前时间，如果是，传的默认值将失效
					current: false,
					// 从今天往后推多少天 默认值:30
					expand: 20
				},
				selectorRegion: {
					// 可传中文，也可传对应的value ["浙江省","杭州市","滨江区"] ["100","10010","1001010"]
					value: ["浙江省","杭州市","滨江区"],
					// 标识传的默认值是label还是value,默认为label
					'default-type': 'label',	
					// 是否需要隐藏区县，默认为false
					'hide-area': false	
				},
				scrollTop: 0,
				realScrollTop: 0,
				tableData: [
					{ name: '张三', className: '三年一班', age: 11 },
					{ name: '李四', className: '三年二班', age: 12 },
					{ name: '王五', className: '三年一班', age: 10 }
				]
			}
		},
		onLoad() {
			// setTimeout(() => {
			// 	console.log('=========');
			// 	this.$refs.scrollView.scrollTo(0, 'y');
			// }, 5000)
		},
		watch: {
			name (val) {
				console.log('=watch= name=', val)
			},
			scrollTop (val) {
				console.log('=watch= scrollTop=', val)
			}
		},
		methods: {
			tip (text) {
				uni.showToast({ icon: 'none', position: 'bottom', title: text });
			},
			clkScode () {
				this.$refs.scode.startTiming();
			},
			clkCaptcha () {
				this.$refs.captcha.startTiming();
			},
			clkSmsCode () {
				this.$refs.smsCode.startTiming();
			},
			// 弹窗确认选中
			beforeCheck (done) {
				uni.showModal({
				    title: '提示',
				    content: '确认选中?',
				    success: res => {
				        if (res.confirm) {
				            // 运行done回调，执行后续选中或取消选中功能
							done();
				        }
				    }
				});
			},
			clkSubmit () {
				console.log('=submit=', this.info);
			},
			refreshCaptcha () {
				if (this.captchaUrl === 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1393683866,2987071052&fm=26&gp=0.jpg') {
					this.captchaUrl = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1320441599,4127074888&fm=26&gp=0.jpg';
				} else {
					this.captchaUrl = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1393683866,2987071052&fm=26&gp=0.jpg';
				}
			},
			clickSmscode () {
				this.$refs.rsmscode.startTiming();
			},
			handleSelectSex (data) {
				console.log('handleSelectSex=', data);
			},
			loading () {
				this.$showLoading();
				setTimeout(() => {
					this.$hideLoading();
				}, 3000);
			},
			handleScroll: function(e) {
				this.realScrollTop = e.detail.scrollTop;
			},
			handleScrollTop () {
				this.scrollTop = 1;
				this.$nextTick(function(){
					this.scrollTop = 0;
				});
			},
			sliderChange (e) {
				console.log('=sliderChange=', e);
			}
		},
		onPageScroll (e) {
			this.realScrollTop = e.scrollTop;
		}
	}
</script>

<style scoped lang="scss">
	.page {
		height: 100%;
	}
	.section {
		margin-bottom: 20upx;
		background-color: #FFFFFF;
	}
</style>
