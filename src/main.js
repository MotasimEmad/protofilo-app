import Vue from 'vue'
import App from './App.vue'
import './tailwind.css'
import Toaster from 'v-toaster'

Vue.config.productionTip = false
import 'v-toaster/dist/v-toaster.css'
Vue.use(Toaster)

new Vue({
  render: h => h(App),
}).$mount('#app')



