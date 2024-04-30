<script setup lang="ts">

import {getAssetsFile} from "@/common/utils";
import {ref} from "vue";
let indexRef=ref(0)
let homePath=ref(['ic_tabbar_home.png','ic_tabbar_home_select.png'])
let interviewPath=ref(['ic_tabbar_project.png','ic_tabbar_project_select.png'])
let collectPath=ref(['ic_tabbar_interview.png','ic_tabbar_interview_select.png'])
let minePath=ref(['ic_tabbar_mine.png','ic_tabbar_mine_select.png'])
let getArray=(index:number)=>{
  if(index===0) {
    return [getAssetsFile(homePath.value[1]), getAssetsFile(interviewPath.value[0]),getAssetsFile(collectPath.value[0]),getAssetsFile(minePath.value[0])]
  }else if(index===1){
    return [getAssetsFile(homePath.value[0]), getAssetsFile(interviewPath.value[1]),getAssetsFile(collectPath.value[0]),getAssetsFile(minePath.value[0])]
  }else if(index===2){
    return [getAssetsFile(homePath.value[0]), getAssetsFile(interviewPath.value[0]),getAssetsFile(collectPath.value[1]),getAssetsFile(minePath.value[0])]
  }else{
    return [getAssetsFile(homePath.value[0]), getAssetsFile(interviewPath.value[0]),getAssetsFile(collectPath.value[0]),getAssetsFile(minePath.value[1])]
  }

}

let content=ref([
  {name:'首页',imgPath: getArray(indexRef.value)[0]},
  {name: '面经',imgPath:getArray(indexRef.value)[1]},
  {name: '收藏',imgPath: getArray(indexRef.value)[2]},
  {name: '我的',imgPath: getArray(indexRef.value)[3]}
])

function changeIndex(index:number){
  indexRef.value=index
  content.value=[
      {name:'首页',imgPath: getArray(index)[0]},
      {name: '面经',imgPath:getArray(index)[1]},
      {name: '收藏',imgPath: getArray(index)[2]},
      {name: '我的',imgPath: getArray(index)[3]}
  ]
}
</script>

<template>
<el-row justify="center" :gutter="10">
  <el-col :span="6" v-for="(item,index) in content" :key="index"  justify-center="justify-center" @click="changeIndex(index)">
    <el-row justify="center" @click="console.log(`${JSON.stringify(content)}`)">
      <el-image :src="item.imgPath" alt="" :style="{width:'30px'}" fit="contain"/>
    </el-row>
    <el-row justify="center">
      <div class="text" style="text-align: center">{{item.name}}</div>
    </el-row>
  </el-col>
</el-row>
</template>

<style scoped>

</style>