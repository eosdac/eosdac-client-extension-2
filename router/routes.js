const routesExtension = [
  {
    path: '/',
    component: () => import('layouts/dacLayout.vue'),
    children: [
      {
        path: 'credits',
        component: () => import('../pages/credits.vue')
      },
      {
        path: 'verify/:token',
        component: () => import('../pages/verify-token')
      }
    ]
  }
]

export default routesExtension
