import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from "@/stores/userStore";
import type {loginResponseData} from "@/common/data";

// @ts-ignore

// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: '',
      component: import("../page/LoginPage.vue")
    },
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../page/IndexPage.vue'),
      children:[
        {path:'home',component:import('../components/HomeComponent.vue')},
        {path:'mine',component:import('../components/MineComponent.vue')}
      ]
    },
    {
      path:'/err',
      name:'error',
      component:()=>import('../page/errorPage.vue')
    },
    {
      path:'/quesD/:id',
      component:()=>import('../page/questionDetailPage.vue'),
      props:true
    }
  ]
})

// router.beforeEach((to,from,next)=>{
//   const store = useUserStore()
//
//   if(to.path==='/login')
//     next()
//
//   if((store.userLogin as loginResponseData).token===undefined){
//     return next('/login')
//   }else {
//     next()
//   }
// })

export default router
