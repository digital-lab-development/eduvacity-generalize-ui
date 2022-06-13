
const routes = [
  {
    path: '/',
    component: () => import('layouts/landing/LandingLayout.vue'),
    children: [
      { path: '', component: () => import('pages/landing/LandingPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
