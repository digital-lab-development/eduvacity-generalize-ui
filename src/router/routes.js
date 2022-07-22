
const routes = [
  {
    path: '/',
    component: () => import('layouts/landing/LandingLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/landing/LandingPage.vue') 
      },
      { 
        path: '/about-us', 
        name: 'about-us',
        component: () => import('pages/landing/AboutPage.vue') 
      },
      { 
        path: '/our-pricing', 
        name: 'pricing',
        component: () => import('pages/landing/PricingPage.vue') 
      },
      { 
        path: '/partnership', 
        name: 'partnership',
        component: () => import('pages/landing/PartnershipPage.vue') 
      },
      { 
        path: '/product-school', 
        name: 'product-school',
        component: () => import('pages/landing/ProductPage.vue') 
      },
      { 
        path: '/programming-school', 
        name: 'programming-school',
        component: () => import('pages/landing/ProgrammingPage.vue') 
      },
      { 
        path: '/sign-up', 
        name: 'sign-up',
        component: () => import('pages/auth/SignupPage.vue') 
      },
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
