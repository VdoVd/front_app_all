<script setup lang="ts">
import type {subListData} from "@/common/data";
import router from "@/router";

const props=defineProps(['item'])
// console.log(`item:${JSON.stringify(props.item)}`)
// console.log('------------------------------------')
// console.log('------------------------------------')
let item=props.item as subListData
// console.log(`subItem:${JSON.stringify(item)}`)
// console.log(`stem:${item.stem}`)
let text=(item.difficulty>=0&&item.difficulty<2)?'简单':((item.difficulty>=2&&item.difficulty<4)?'一般':'困难')
let difficultyColor=text==='简单'?'success':(text===''?'warning':'danger')
let readFlag=item.readFlag===1?'已看过':'未读'
let jump=()=>{
  console.log('跳转')
  router.push({path:`/quesD/${item.id}`})
}
</script>

<template>
<el-row style="margin-bottom: 10px;"                  @click="jump" >
  <el-col :span="4" >
    <el-text :type="difficultyColor" size="small" style="background-color: rgba(0,0,0,0.1);margin-bottom:10px;padding: 5px;border-radius: 7px;">{{text}}</el-text>
  </el-col>
  <el-col :span="18">
    <el-text size="large" style="font-weight: bold;margin-bottom: 10px;">{{item.stem}}</el-text>
  </el-col>
</el-row>
<el-row style="margin-bottom: 15px;color: rgba(0,0,0,0.4);" :gutter="1" >
  <el-col :span="3" type="info">点赞{{item.likeCount}}</el-col>
  <el-col :span="1" type="info">|</el-col>
  <el-col :span="4" type="info">浏览{{item.views}}</el-col>
  <el-col :span="1" type="info">|</el-col>
  <el-col :span="5" type="info">{{readFlag}}</el-col>
</el-row>
</template>

<style scoped>

</style>