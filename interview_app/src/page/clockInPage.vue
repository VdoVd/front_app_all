<script setup lang="ts">
import {useClockInStore} from "@/stores/clockInData";
import {ref} from "vue";
const clockIn = useClockInStore()
const clockInData=clockIn.clockIn
let d=new Date()
let date=ref(d.getDate())
console.log(`date:${JSON.stringify(date)}`)
let month=d.getMonth()
let year=d.getFullYear()
import {onMounted} from "vue";
import {getClockInDate} from "@/common/req";
import type {ClockInDateList} from "@/common/data";
import router from "@/router";
let clock_date=ref({} as ClockInDateList)
let dayList=ref<string[]>([])
onMounted(async ()=>{

  const res=await getClockInDate()

  clock_date.value=res

  console.log(`clock_date:${JSON.stringify(clock_date.value)}`)

  dayList.value=clock_date.value.clockins.map(item=>{
    return item.createdAt.split('-')[2]
  })
})


</script>

<template>
  <el-row>
    <el-col :span="2" style="font-size: 20px;font-weight: bolder;" @click="router.back()"><</el-col>
    <el-col :span="20" style="font-size: 20px;font-weight: bolder; text-align: center;">每日打卡</el-col>
  </el-row>
  <el-row style="height: 10px;"/>
  <el-row justify="start" :gutter="5" align="middle">
    <el-col :span="8"  >
      <el-text style="font-weight: bolder;font-size: 18px;">今日已打卡</el-text>
    </el-col>
    <el-col :span="2">
        <el-icon><Calendar /></el-icon>
    </el-col>
  </el-row>
  <el-row :gutter="20">

    <el-col :span="6">
        <el-row justify="start" align="bottom" :gutter="20">
          <el-col :span="12" style="font-size: 25px;font-weight: bolder;">{{clockInData.clockinTotal}}</el-col>
          <el-col :span="4" style="font-size: 13px;color: gray;">天</el-col>
        </el-row>
        <el-row justify="center">
          <el-col :span="24" style="font-size: 13px;color: gray;">累计打卡</el-col>
        </el-row>
    </el-col>

    <el-col :span="6">
      <el-row justify="start" align="bottom" :gutter="20">
        <el-col :span="12" style="font-size: 25px;font-weight: bolder;">{{clockInData.clockinNumbers}}</el-col>
        <el-col :span="4" style="font-size: 13px;color: gray;">天</el-col>
      </el-row>
      <el-row justify="center">
        <el-col :span="24" style="font-size: 13px;color: gray;">连续打卡</el-col>
      </el-row>
    </el-col>

  </el-row>
  <el-row justify="center">
      <el-calendar>
        <template #date-cell="{ data }">
          <p :class="data.isSelected||dayList.indexOf(data.day.split('-')[2])!=-1 ? 'is-selected' : ''" @click="console.log(`${dayList.indexOf(data.day.split('-')[2])}`)">
            {{ data.day.split('-')[2]}}
          </p>
          <p :class="data.isSelected||dayList.indexOf(data.day.split('-')[2])!=-1 ? 'is-selected-font' : 'no-selected-font'">
            {{ data.isSelected||dayList.indexOf(data.day.split('-')[2])!=-1 ? '已打卡' : '' }}
          </p>
        </template>
        <template #header="{date}">
          <el-row justify="center" style="width: 100%;" >
            <el-col :span="24" style="text-align: center;color: gray;width: 100%;">
              {{year}}年{{month}}月
            </el-col>
          </el-row>
        </template>
      </el-calendar>
  </el-row>
</template>

<style scoped>
.is-selected {
  background-color: rgba(255,197, 49);
  color: white;
  border-radius: 30px;
  height: 30px;
  text-align: center;
}
.is-selected-font{
  font-size: 10px;
  text-align: center;
  color: rgba(255,197, 49);
}
.no-selected-font{
  font-size: 10px;
  text-align: center;
  color: rgba(255,197, 49);
}
</style>