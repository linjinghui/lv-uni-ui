import Vue from 'vue'
import App from './App'
import lvloading from './components/lv-loading/lv-loading.js'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
