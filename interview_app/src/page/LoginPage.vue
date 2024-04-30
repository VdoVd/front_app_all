<script setup lang="ts">
import {ElButton, ElMessageBox} from "element-plus";
import axios from "axios";
import {ref} from "vue";
// import type {loginResponseData} from "@/common/data";
import {tokenStore, useUserStore} from "@/stores/userStore";
import {useCounterStore} from "@/stores/counter";
import router from "@/router";
// import {storeToRefs} from "pinia";
// import pinia from "@/stores/piniaInstance";
const username = ref('hmheima')
const password = ref('Hmheima%123')
const checked1 = ref(false)

function routerFunc() {
  setTimeout(() => {
    window.location.href = '/home'
  }, 7000)
}

let login=()=>{
  function loginFun() {
    axios.post('https://api-harmony-teach.itheima.net/hm/login', {
      username: username.value,
      password: password.value
    }).then(res => {
      const userLoginData = res.data.data
      const userStore = useUserStore()
      userStore.storeLogin(userLoginData)
    })

    ElMessageBox.alert('登录成功', '提示', {confirmButtonText: '确定', type: 'success'})
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });

  }

  if(username.value===''){
    ElMessageBox.alert('用户名不能为空', '提示', { confirmButtonText: '确定', type: 'warning' })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  }else if(password.value===''){
    ElMessageBox.alert('密码不能为空', '提示', { confirmButtonText: '确定', type: 'warning' })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
     });
    }else if(checked1.value===false){
    ElMessageBox.alert('请阅读并同意用户协议和隐私政策', '提示', { confirmButtonText: '确定', type: 'warning' })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  }else if(username.value!==''&&password.value!==''&&checked1.value===true){
    router.push({path:'/home'})
    loginFun()
  }

}
</script>

<template>


  <el-col  style="display: flex;flex-direction: column;gap: 20px;">
     <el-row justify="center">

     </el-row>
      <el-row justify="center" style="margin-top: 130px">
        <img src="@/assets/startIcon.png" style="width: 100px">
      </el-row>
      <el-row justify="center">
        <el-text class="max-w-300 " size="large">面试宝典</el-text>
      </el-row>
      <el-row justify="center">
        <el-text class="mx--1 small Info" type="info" size="small">搞定企业面试真题，就用面试宝典</el-text>
      </el-row>

    <el-row justify="center">
      <el-input v-model="username" style="width: 240px;border-width: 0px ;" placeholder="username" />
    </el-row>
    <el-row justify="center">
      <el-input v-model="password" style="width: 240px; border-width: 0px ;" placeholder="password" type="password"/>
    </el-row>
    <el-row justify="center">
      <el-checkbox v-model="checked1" label="已阅读并同意 《用户协议》 和 隐私政策" style="width: 240px" size="large" />
    </el-row>
    <el-row justify="center">
      <el-button type="primary" size="large" style="width: 240px" @click="login">登录</el-button>
    </el-row>
    <el-button @click="routerFunc">switch</el-button>
  </el-col>

</template>

<style scoped lang="less">

</style>