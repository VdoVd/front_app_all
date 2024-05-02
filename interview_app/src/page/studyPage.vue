<script setup lang="ts">
import {onMounted} from "vue";
import {studyTime} from "@/common/req";
import {ref} from 'vue'
import type {StudyDataList} from "@/common/data";
import router from "@/router";
let programmeList=ref<StudyDataList[]>([])
let studyTimeList=ref<StudyDataList[]>([])
onMounted(async ()=>{
  const res= await studyTime()
  console.log(`res:${JSON.stringify(res)}`)
  studyTimeList.value=res.data.studyData[0].list
  programmeList.value=res.data.studyData[1].list
  console.log(`studyTimeList:${JSON.stringify(studyTimeList)}`)
  console.log(`programmeList:${JSON.stringify(programmeList)}`)
})
</script>

<template>
<el-row :gutter="20">

  <el-col style="font-weight: bolder;" :span="2" @click="router.back()">
    <
  </el-col>

  <el-col style="font-weight: bolder;" :span="8">
    学习记录
  </el-col>


</el-row>
  <el-row style="height: 20px;"/>
  <el-row>
    <el-col :span="8">
      累计学习时长
    </el-col>
    <el-col :span="2">
      <el-icon><Timer /></el-icon>
    </el-col>
  </el-row>
  <el-row style="height: 10px;"/>

  <el-row>

  </el-row>

  <el-row style="font-weight: bolder;">知识点学习进度</el-row>

  <el-row>
    <el-col :span="12" v-for="(item,index) in studyTimeList" :key="index">
      <el-row style="height: 10px;"></el-row>
      <el-row justify="start" style="color: gray;">{{item.name}}</el-row>
      <el-row>
        <el-col :span="24">
          <el-progress :percentage="item.done" color="green"/>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <el-row style="height: 10px;"/>
  <el-row justify="center">
    <el-col :span="12">
      <el-row align="middle" justify="end" :gutter="10">
        <el-col :span="2">
          <div style="height: 8px;width: 8px;border-radius: 5px;background-color: rgba(  0,128,  0)">
          </div>
        </el-col>
        <el-col :span="12">
          <el-text>已学占比</el-text>

        </el-col>
      </el-row>

    </el-col>
    <el-col :span="12">
      <el-row align="middle" justify="start" :gutter="10">
        <el-col :span="2">
          <div style="height: 8px;width: 8px;border-radius: 5px;background-color: gray;">
          </div>
        </el-col>
        <el-col :span="16">
          <el-text>未学占比</el-text>

        </el-col>
      </el-row>

    </el-col>
  </el-row>
  <el-row style="height: 20px;"/>
  <el-row style="font-weight: bolder;">项目常问学习进度</el-row>
  <el-row>
    <el-col :span="24" v-for="(item,index) in programmeList" :key="index">
      <el-row style="height: 10px;"></el-row>
      <el-row justify="start" style="color: gray;">{{item.name}}</el-row>
      <el-row>
        <el-col :span="24">
          <el-progress :percentage="item.done" color="purple"/>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-col :span="12">
      <el-row align="middle" justify="end" :gutter="10">
        <el-col :span="2">
          <div style="height: 8px;width: 8px;border-radius: 5px;background-color: purple;">
          </div>
        </el-col>
        <el-col :span="12">
          <el-text>已学占比</el-text>

        </el-col>
      </el-row>

    </el-col>
    <el-col :span="12">
      <el-row align="middle" justify="start" :gutter="10">
        <el-col :span="2">
          <div style="height: 8px;width: 8px;border-radius: 5px;background-color: gray;">
          </div>
        </el-col>
        <el-col :span="16">
          <el-text>未学占比</el-text>

        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>

<style scoped>

</style>