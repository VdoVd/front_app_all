<script setup lang="ts">
import axios from "axios";
import {useUserStore} from "@/stores/userStore";
import {ref} from "vue";
import HomeItemView from "@/views/home/homeItemView.vue";
import type {loginResponseData, subListData} from "@/common/data";
import router from "@/router";
import {useIdsStore} from "@/stores/homeListIds";
const list=ref<subListData[]>([])

const isLoadingSub=ref(true)
const props=defineProps(['id'])
let id=props.id
const idsStore=useIdsStore()
const user=useUserStore()
let page=ref(1)
//列表数据别看错了！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
const req=()=>{

  axios.get(`https://api-harmony-teach.itheima.net/hm/question/list?questionBankType=10&type=${id}&page=${page.value}`,{

    headers:{

      Authorization:`Bearer ${(user.userLogin as loginResponseData).token}`

    }

  }).then(res=>{

    list.value=res.data.data.rows as subListData[]

    isLoadingSub.value=false

    // console.log(JSON.stringify(list.value))
    idsStore.ids=list.value.map(item=>parseInt(item.id))

    console.log(`ids:${JSON.stringify(idsStore.ids)}`)

  })

}

req()

let i=0

let loadMore=()=>{
  console.log('loadMore')
  page.value++
  if(i>6){
    isLoadingSub.value=true
    req()
    i=0
  }
}

let timeId = 0

function exec() {
  console.log(`${timeId}`)
    clearTimeout(timeId)
    timeId = window.setTimeout(() => {
      loadMore()
    }, 2000)
}


window.addEventListener('scroll',()=>{
  const allHeight=document.body.scrollHeight
  const scrollTop=document.body.scrollTop
  const clientHeight=document.body.clientHeight
  console.log(`all height:${allHeight}`)
  console.log(`scrollTop:${scrollTop}`)
  console.log(`clientHeight:${clientHeight}`)
  if(allHeight-scrollTop===clientHeight){
    console.log('到底了')
    exec();
  }
},true)
</script>
//tab下面的内容
<template>
  <el-empty v-if="isLoadingSub===true" description="加载中..."/>
  <div class="home-list-view" v-if="isLoadingSub===false" ref="containerRef" style="height:550px;" >
    <homeItemView v-for="(itemForIt) in list" :item="itemForIt" />
  </div>
</template>

<style scoped>
.home-list-view{
  overflow: scroll;
}
</style>