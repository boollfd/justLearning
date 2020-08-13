import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from "@/views/Cart";
import Category from "@/views/Category";
import Profile from "@/views/Profile";
import goodsView from "@/views/goodsView";


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:"/home"
  },{
    path:"/home",
      component: Home
    },{
      path:"/cart",
      component: Cart
    },
    {
      path:"/category",
      component: Category
    },{
      path:"/profile",
      component: Profile
    },{
      path:"/goodsView",
      component: goodsView
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
