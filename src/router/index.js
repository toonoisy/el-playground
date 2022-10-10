import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes,
  // 路由跳转后, 滚动条自动停留到起始位置
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
