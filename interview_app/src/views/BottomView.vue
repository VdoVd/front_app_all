<script setup lang="ts">

import {getAssetsFile} from "@/common/utils";

let content=[
  {name:'首页',imgPath: getAssetsFile('ic_tabbar_home_select.png')},
  {name: '面经',imgPath:getAssetsFile('@/assets/ic_tabbar_project.png')},
  {name: '收藏',imgPath: getAssetsFile('@/assets/ic_tabbar_interview.png')},
  {name: '我的',imgPath: getAssetsFile('@/assets/ic_tabbar_mine.png')}
]

</script>

<template>
<el-row justify="center">
  <el-col :span="6" v-for="(item,index) in content" :key="index" style="background-color: gray" justify-center="justify-center">
    <img :src="item.imgPath" alt="">
    <div class="text" style="text-align: center">{{item.name}}</div>
  </el-col>

</el-row>
</template>

<style scoped>

</style>