
const routes = [
  {
    path: '/home',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/chat',
    component: () => import('layouts/MyLayoutChat.vue'),
    children: [
      { path: '', component: () => import('pages/Chat.vue') }
    ]
  },
  {
    path: '/edithome',
    component: () => import('layouts/MyLayoutAway.vue'),
    children: [
      { path: '', component: () => import('pages/EditHome.vue') }
    ]
  },
  { path: '',
    component: () => import('pages/Login.vue')
  },
  { path: '/name',
    component: () => import('pages/Name.vue')
  },
  { path: '/homecreate',
    component: () => import('pages/HomeCreate.vue')
  },
  { path: '/homejoin',
    component: () => import('pages/HomeJoin.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
