import Vue from 'vue'
import App from './App.vue'
import Contenu from './components/Contenu.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const bus = new Vue();

Vue.component('contenu', Contenu);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
