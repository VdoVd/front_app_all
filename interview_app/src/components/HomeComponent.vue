<script setup lang="ts">
import {ref} from "vue";
import {getAssetsFile} from "@/common/utils";
import HomeTabsView from "@/views/home/homeTabsView.vue";
let input = ref('')

import {onMounted} from "vue";
import {getIsClockIn} from "@/common/req";
import type {ClockInData} from "@/common/data";
import router from "@/router";
import {useClockInStore} from "@/stores/clockInData";
let clockInDataClass=ref<ClockInData>({} as ClockInData)

onMounted(async ()=>{
  const res=await getIsClockIn()
  clockInDataClass.value=res
  const useClockIn=useClockInStore()
  useClockIn.set(clockInDataClass.value)
})

let jumpTo=()=>{
  router.push({path:'/search'})
}

let jumpToClock=()=>{
  router.push({path:'/clock'})
}

</script>

<template>



<el-row justify="space-between">
  <el-col :span="16">
    <el-input placeholder="请输入内容" v-model="input" clearable style="border-radius: 13px;" @click="jumpTo" />
  </el-col>
  <el-col :span="6" >
    <div class="img-wrap" style="{position: relative }" @click="jumpToClock">
      <el-image :src="getAssetsFile('ic_common_unclock.png')" fit="fill" style=""/>
      <el-text style="  position: absolute;top: 35%;left: 90%;transform: translate(-50%,-50%); font-size: 16px;font-weight:bold;" v-if="clockInDataClass.clockinNumbers===0" >打卡</el-text>
      <el-text style="position: absolute;top: 35%;left: 90%;transform: translate(-50%,-50%); font-size: 10px;font-weight:normal;" v-else @click="jumpToClock">连续打卡{{clockInDataClass.clockinTotal}}天</el-text>
    </div>
  </el-col>
</el-row>

<div class="block text-center" >
  <el-carousel height="150px" >
    <el-carousel-item v-for="item in 4" :key="item">
      <el-image :src="getAssetsFile('banner_qa.png')"  style="width: 100%; height: 100%"/>
    </el-carousel-item>
  </el-carousel>
</div>

<homeTabsView/>

</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: white;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color:white;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}

</style>