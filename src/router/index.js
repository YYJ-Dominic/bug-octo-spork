import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Login = () => import("views/login/Login")
const Home = () => import("views/home/Home")

const routes = [
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/',
    redirect:'/login'
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to, from, next) => {

  const token = sessionStorage.getItem("token")
  if (to.path !== "/login"){
    if (token){
      next()
    }else{
      next("/login")
    }
  }
  next()
})



export default router
