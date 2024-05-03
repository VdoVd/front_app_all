import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
const Login=()=>import(`@/page/LoginPage.vue`)
const Index= () => import(`@/page/IndexPage.vue`)

const Home=()=>import(`@/components/HomeComponent.vue`)

const Mine=()=>import(`@/components/MineComponent.vue`)

const Err=()=>import(`@/page/errorPage.vue`)

const Question=()=>import(`@/page/questionDetailPage.vue`)

const Search=()=>import(`@/page/searchPage.vue`)

const Clock=()=>import(`@/page/clockInPage.vue`)

const Profile=()=>import(`@/page/profilePage.vue`)

const Study=()=>import(`@/page/studyPage.vue`)

const Word = ()=>import(`@/page/wordPage.vue`)

// @ts-ignore
const router = createRouter({

  history: createWebHashHistory(),

  routes: [
    {
      path: '/login',
      name: '',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Index,
      children:[
        {path:'home',component:Home},
        {path:'mine',component:Mine}
      ]
    },
    {
      path:'/err',
      name:'error',
      component:Err
    },
    {
      path:'/quesD/:id',
      component:Question,
      props:true
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/clock',
      component:Clock
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/study',
      component:Study
    },
    {
      path:'/word',
      component:Word
    }
  ]
})

export default router
