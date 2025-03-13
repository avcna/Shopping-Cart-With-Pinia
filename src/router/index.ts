import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: () => import('../views/ShoppingCart.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/DetailProduct.vue'),
    },
  ],
})

export default router
