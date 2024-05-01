<script setup lang="ts">
import {useClockInStore} from "@/stores/clockInData";
import {ref} from "vue";

const clockStore=useClockInStore()
let img=ref(clockStore.clockIn.avatar)
</script>

<template>
<el-row>
  <el-col :span="2" style="font-weight: bolder;"><</el-col>
  <el-col :span="20" style="font-weight: bolder;">完善个人信息</el-col>
</el-row>
  <el-row style="height: 20px;"/>
  <el-row justify="space-between">
    <el-col :span="3">头像</el-col>
    <el-col :span="3">
      <el-image :src="img" style="width: 30px;height: 30px;border-radius: 15px;"></el-image>
    </el-col>
  </el-row>
  <el-row style="height: 20px;"/>

</template>

<style scoped lang="less">

</style>