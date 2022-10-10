import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import './element-ui/index.js';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/normalize.css';
import './assets/common.less';
import Sidebar from '@/components/Sidebar';
import ElButton from '@/components/ElButton';

Vue.component('sidebar', Sidebar);
Vue.component('el-button', ElButton); // re-encapsulated ElButton

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');
