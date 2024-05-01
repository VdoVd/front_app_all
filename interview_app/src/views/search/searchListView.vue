<script setup lang="ts">
import axios from "axios";
import {useUserStore} from "@/stores/userStore";
import {ref} from "vue";
import HomeItemView from "@/views/home/homeItemView.vue";
import type {loginResponseData, subListData} from "@/common/data";
import router from "@/router";
import {useIdsStore} from "@/stores/homeListIds";
const list=ref<subListData[]>([])
const sort=ref('')
const props=defineProps(['sort'])
import {watch} from "vue";
watch(props.sort,() => {
  console.log('sort',props.sort)
  sort.value=props.sort
  isLoadingSub.value=true
  req()
})
if(props.sort===undefined){
  sort.value='vue'
}else {
  sort.value=props.sort
}

const isLoadingSub=ref(true)
const idsStore=useIdsStore()
const user=useUserStore()
let page=ref(1)
//列表数据别看错了！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
const req=()=>{

  axios.get(`https://api-harmony-teach.itheima.net/hm/question/list?questionBankType=10&sort=${sort.value}`,{

    headers:{

      Authorization:`Bearer ${(user.userLogin as loginResponseData).token}`

    }

  }).then(res=>{

    list.value=res.data.data.rows as subListData[]

    isLoadingSub.value=false

    // console.log(JSON.stringify(list.value))
    idsStore.ids=list.value.map(item=>parseInt(item.id))

    console.log(`list  ids:${JSON.stringify(idsStore.ids)}`)

  })

}

req()

let loadMore=()=>{
  console.log('loadMore')
  page.value++
  isLoadingSub.value=true
  req()
}
let timeId = 0;

function exec() {
  console.log(`${timeId}`)
  clearTimeout(timeId)
  timeId = setTimeout(() => {
    loadMore()
  }, 2000)
}

window.onscroll=()=>{
  console.log('scroll')
  exec();
}

</script>
//tab下面的内容
<template>
  <el-empty v-if="isLoadingSub===true" description="加载中..."/>
  <div class="home-list-view" v-if="isLoadingSub===false" ref="containerRef"  >
    <homeItemView v-for="(itemForIt) in list" :item="itemForIt" />
  </div>
</template>

<style scoped>
.home-list-view{
  overflow: scroll;
}
</style>