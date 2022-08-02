import Vue from 'vue'
import Truss from 'firetruss'
import config from '../firebase.config'
import App from '@/App.vue'

import 'windi.css'
import router from '@/router'

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: j => j(App),
})

Truss.enableLogging(true)
Truss.connectWorker(window.trussWorker, config.firebaseConfig)

const truss = new Truss(config.firebaseUrl)
truss.throttleRemoteDataUpdates(50)
Vue.use(Truss.ComponentPlugin, { truss })
