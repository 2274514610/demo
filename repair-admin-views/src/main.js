import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'normalize.css'   //引入初始化样式  h1~h6 以及 ul li的边距都没有清除
import './globalCss/init.scss'   //引入自己的初始化样式

import ElementUI from 'element-ui'  //引入element—ui
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// import $axios from './utils'   //引入自己封装好的axios组件
// Vue.use($axios);  //然后使用

//使用按需引入的方法
// import {Button,Select} from 'element-ui'
// Vue.component(Button.name,Button);
// Vue.component(Select.name,Select);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
