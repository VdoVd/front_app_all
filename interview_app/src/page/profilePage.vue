<script setup lang="ts">
import {useClockInStore} from "@/stores/clockInData";
import {ref} from "vue";
import {getUserData, updateAvatarAndNickName, upLoadFile} from "@/common/req";
import router from "@/router";
import type {updateUserData} from "@/common/data";

const clockStore=useClockInStore()
let img=ref(clockStore.clockIn.avatar)
const input = ref('')
function handleChangeUpload(file) {
  let formData = new FormData()
  formData.append('file', file.raw)
  console.log('before file:')
  for (const [key, value] of formData){
    console.log('key:'+JSON.stringify(key), 'value:'+JSON.stringify(value))
  }

  upLoadFile(formData)

  refreshUserData()
}

let handleNickname=async ()=>{

  let name=nickName.value

  const res=await updateAvatarAndNickName(clockStore.clockIn.avatar,name)

  nickName.value=''

  console.log(`update nickName:${JSON.stringify(res)}`)

  refreshUserData()
}
let refreshUserData=async ()=>{

  const res:updateUserData =await getUserData()
  console.log(`update ok:${JSON.stringify(res)}`)

  clockStore.clockIn.nickName=res.nickName
  clockStore.clockIn.avatar=res.avatar

}
let nickName=ref('')
</script>

<template>
<el-row>
  <el-col :span="2" style="font-weight: bolder;" @click="router.back()"><</el-col>
  <el-col :span="20" style="font-weight: bolder;">完善个人信息</el-col>
</el-row>
  <el-row style="height: 20px;"/>
  <el-row justify="space-between">
    <el-col :span="3">头像</el-col>
    <el-col :span="7" >
      <el-image :src="img" style="width: 30px;height: 30px;border-radius: 15px;" ></el-image>
    </el-col>
  </el-row>
  <el-row style="height: 20px;"/>
  <el-row justify="space-between">
    <el-col :span="3" >昵称</el-col>
    <el-col :span="7" :offset="-2">
      {{clockStore.clockIn.nickName}}
    </el-col>
  </el-row>
  <el-row style="height: 20px"/>
  <el-upload ref="upload" :auto-upload="false" accept="" :show-file-list='false' :on-change="handleChangeUpload"
             action="#" class="upload-demo" multiple>
    <el-button type="primary">upLoadImage</el-button>
  </el-upload>
  <el-row style="height: 20px;"/>
  <el-input v-model="nickName" placeholder="请输入昵称" style="width: 200px;" @change="handleNickname"/>
</template>

<style scoped lang="less">

</style>