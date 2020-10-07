import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueLogger from 'vuejs-logger'
import router from './router'
import VueMoment from 'vue-moment'
import moment from 'moment'
Vue.config.productionTip = false

const options = {
  isEnabled: true,
  logLevel: 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: false,
  separator: '|',
  showConsoleColors: true
}

Vue.use(VueLogger, options)
moment.locale('th')
Vue.use(VueMoment,{moment})
new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
