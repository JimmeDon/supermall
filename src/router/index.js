import Vue from 'vue'
import VueRouter from 'vue-router'

const detail = ()=>import('views/detail/Detail')
const cart = () =>import('views/Cart/Cart')
const home = () =>import('views/home/Home')
const category = () =>import('views/category/Category')
const profile = () =>import('views/profile/Profile')

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [

  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },{
    path:'/cart',
    component:cart
  },{
    path:'/profile',
    component:profile
  },{
    path:'/detail/:id',
    component:detail
  },
]


const router = new VueRouter({
  routes,
  mode:'history'
})


export default router
