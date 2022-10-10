export default [
  {
    path: '/selectable-table',
    component: () => import(/* webpackChunkName: "selectable-table" */
      '@/views/selectable-table'),
  },
  {
    path: '/',
    redirect: '/selectable-table',
  },
  {
    path: '/prevent-multi-clicks',
    component: () => import(/* webpackChunkName: "prevent-multi-clicks" */ 
      '@/views/prevent-multi-clicks'),
  },
  {
    path: '/filterable-column',
    component: () => import(/* webpackChunkName: "filterable-column" */ 
      '@/views/filterable-column'),
  },
];
