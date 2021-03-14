import Vue from 'vue'
import Vuerouter from 'vue-router'
const Home = () => import ('views/home/Home')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Shopcar = () => import('views/shopcar/Shopcar')

Vue.use(Vuerouter)


const routes = [
    {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        component: Home
      },
      {
        path:'/category',
        component: Category
      },
      {
        path:'/shopcar',
        component: Shopcar
      },
      {
        path:'/profile',
        component: Profile
      },
    
]

const router = new Vuerouter({
    routes,
    mode: 'history'
})
export default router