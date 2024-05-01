<script setup lang="ts">
import {ref} from "vue";
import {getAssetsFile} from "@/common/utils";
import {useClockInStore} from "@/stores/clockInData";
const clockInStore=useClockInStore()
let obj=clockInStore.clockIn
let isLoadImg=ref(true)
let impPath=ref('logo.svg')
impPath.value=obj.avatar
console.info(`img:${obj.avatar}`)
isLoadImg.value=false
</script>

<template>

<el-row justify="center" style="width: 100%;">

  <el-col :span="24" style="width: 100%;">
    <p size="large" style="font-weight: bolder;width:100%;text-align: center;">
      个人中心
    </p>
  </el-col>

</el-row>

<el-row justify="space-between">

  <el-col :span="10">

    <el-row justify="start" :gutter="40" align="top" style="height: 60px;">

      <el-col :span="5" :offset="2">

        <el-image :src="impPath" :fit='fill' style="width: 40px;height: 40px;border-radius: 20px;" v-if="isLoadImg===false"/>

      </el-col>

      <el-col :span="16">

        <el-row style="font-weight: bolder;font-size: 20px; ">
          {{obj.nickName}}
        </el-row>

        <el-row style="color: gray;font-size: 12px;">
          编辑个人信息
        </el-row>

      </el-col>

    </el-row>

  </el-col>

  <el-col :span="6">

  </el-col>

</el-row>

</template>

<style scoped>

</style>