<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getAssetsFile} from "@/common/utils";
import {useClockInStore} from "@/stores/clockInData";
import router from "@/router";
import {getIsClockIn} from "@/common/req";
import type {ClockInData} from "@/common/data";
const clockInStore=useClockInStore()
let obj=clockInStore.clockIn
let isLoadImg=ref(true)
let impPath=ref('logo.svg')
impPath.value=obj.avatar
console.info(`img:${obj.avatar}`)
isLoadImg.value=false
let clockInDataClass=ref<ClockInData>({} as ClockInData)

let jumpToClock=()=>{
  router.push({path:'/clock'})
}
onMounted(async ()=>{
  const res=await getIsClockIn()
  clockInDataClass.value=res
  const useClockIn=useClockInStore()
  useClockIn.set(clockInDataClass.value)
})

let middleList=[
  {path:getAssetsFile('icon_my_history.png'),title:'历史记录'},
  {path:getAssetsFile('icon_my_favo.png'),title:'我的收藏'},
  {path:getAssetsFile('icon_my_zan.png'),title:'我的点赞'},
  {path:getAssetsFile('icon_my_time.png'),title:'累计学时'},
]

let bottomList=[
  {path:getAssetsFile('ic_mine_notes.png'),title:'前端常用词'},
  {path:getAssetsFile('ic_mine_ai.png'),title:'面通'},
  {path:getAssetsFile('ic_mine_invite.png'),title:'推荐分享'},
  {path:getAssetsFile('ic_mine_file.png'),title:'意见反馈'},
  {path:getAssetsFile('ic_mine_info.png'),title:'关于我们'},
  {path:getAssetsFile('ic_mine_setting.png'),title:'设置'},
]

</script>

<template>
<div class="mine-wrap" style="background-color: rgba(0,0,0,0.1);padding: 0;margin: 0;">
<el-row justify="center" style="width: 100%;">

  <el-col :span="24" style="width: 100%;">
    <p size="large" style="font-weight: bolder;width:100%;text-align: center;">
      个人中心
    </p>
  </el-col>

</el-row >

<el-row justify="space-between" align="middle" >

  <el-col :span="10">

    <el-row justify="start" :gutter="40" align="top" style="height: 60px;">

      <el-col :span="5" :offset="2">

        <el-image :src="impPath"  style="width: 40px;height: 40px;border-radius: 20px;" v-if="isLoadImg===false"/>

      </el-col>

      <el-col :span="16">

        <el-row style="font-weight: bolder;font-size: 20px;">
          {{obj.nickName}}
        </el-row>

        <el-row style="color: gray;font-size: 12px;" @click="router.push({path:'/profile'})">
          编辑个人信息
        </el-row>

      </el-col>

    </el-row>

  </el-col>

  <el-col :span="6">
    <div class="img-wrap" style="{position: relative }" @click="jumpToClock">
      <el-image :src="getAssetsFile('ic_common_unclock.png')" fit="fill" style=""/>
      <el-text style="  position: absolute;top: 35%;left: 90%;transform: translate(-50%,-50%); font-size: 16px;font-weight:bold;" v-if="clockInDataClass.clockinNumbers===0" >打卡</el-text>
      <el-text style="position: absolute;top: 35%;left: 90%;transform: translate(-50%,-50%); font-size: 10px;font-weight:normal;" v-else @click="jumpToClock">连续打卡{{clockInDataClass.clockinTotal}}天</el-text>
    </div>
  </el-col>

</el-row>

<el-row justify="space-around" align="middle" style="background-color: white;">

  <el-col :span="4" v-for="(item,index) in middleList" :key="index">

    <el-row>
      <el-image :src="item.path" style="width: 50px;height: 50px;"/>
    </el-row>
    <el-row style="height: 5px;"/>
    <el-row>
      <el-text>{{item.title}}</el-text>
    </el-row>
  </el-col>

</el-row>

<el-row style="height: 40px;"/>

  <el-row justify="start" :gutter="40" v-for="(item,index) in bottomList" style="width: 90%;">

  <el-col :span="2" :offset="1">

    <el-image :src="item.path" style="height: 20px;width: 20px"/>

  </el-col>

  <el-col :span="12">

    {{item.title}}

  </el-col>

  <el-row style="height: 50px;"/>

</el-row>

</div>
</template>

<style scoped>

</style>