import { RouteRecordRaw } from 'vue-router';
import Example1 from '../views/example1.vue';

const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/example1',
  },
  {
    path: '/example1',
    component: Example1,
    meta: {
      title: '例子1',
    },
  },
  {
    path: '/example2',
    component: ()=>import('../views/example2.vue'),
    meta: {
      title: '例子2',
    },
  },
  {
    path: '/example3',
    component: ()=>import('../views/example3.vue'),
    meta: {
      title: '例子3',
    },
  },
];
//合并路由表
const routes: RouteRecordRaw[] = [...mainRoutes];
export default routes;