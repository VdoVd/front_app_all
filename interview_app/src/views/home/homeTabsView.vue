<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import type { TabListData} from "@/common/data";
import axios from "axios";
const activeName = ref('')
import HomeListView from "@/views/home/homeListView.vue";
import {useIdsStore} from "@/stores/homeListIds";
let tabIndex=ref(0)
let isLoading=ref(true)
const handleClick = (tab: TabsPaneContext, event: Event) => {
  let index=tab.index===undefined?"0":tab.index
  tabIndex.value=parseInt(index)
  activeName.value=tabList.value[parseInt(index)]===undefined?"JavaScript" :tabList.value[parseInt(index)].name
}

/*
* 获取tabs数据
* */
let tabList=ref<TabListData[]>([])


async function getData(){

  let req=await axios({
    url:'https://api-harmony-teach.itheima.net/hm/question/type',
  })

  tabList.value=req.data.data


  isLoading.value=false

  activeName.value=tabList.value[0].name


}

getData()

</script>

<template>
  <el-empty v-if="isLoading===true" description="加载中..." />
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" v-if="isLoading===false">
    <el-tab-pane v-if="isLoading===false" :label="item.name" :name="item.name" v-for="(item,index) in tabList" :key="index">
      <homeListView :id="item.id" v-if="isLoading===false&&tabIndex===index"></homeListView>
    </el-tab-pane>
  </el-tabs>
</template>
<style scoped lang="less">
el-tab-pane{
  padding: 32px;
  color: black;
  font-size: 32px;
  font-weight: 600;
}
</style>