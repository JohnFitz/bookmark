import Vue from 'vue'
import Vuetify from 'vuetify'
import VueFire from 'vuefire'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

require('dotenv').config()

Vue.use(Vuetify)
Vue.use(VueFire)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
