<script setup lang="ts">
import router from "@/router";
import axios from "axios";
const props=defineProps(['id'])
console.log(`id jump:${typeof props.id}`)
import {ref} from "vue";
import {watch} from "vue";
import {useUserStore} from "@/stores/userStore";
import type {loginResponseData, questionDetailData} from "@/common/data";
import {getAssetsFile} from "@/common/utils";
import {useIdsStore} from "@/stores/homeListIds";
import {ElMessageBox} from "element-plus";
const useStore=useUserStore()
let jump = () => {
  console.log('jump')
  router.back()
}
let isLoading=ref(true)
let difficultyText=ref('')
let obj=ref<questionDetailData>({} as questionDetailData)
let like=ref(false)
let love=ref(false)
let html=''
let optType=ref(1)
const collectAndLikeId=props.id
const req=async (id:number)=>{
  const res=await axios.get(`https://api-harmony-teach.itheima.net/hm/question/${id}`,{
    headers:{
      Authorization: `Bearer ${(useStore.userLogin as loginResponseData).token}`
    }
  })
  obj.value=res.data.data
  // console.log(`content:${JSON.stringify(obj.value.answer)}`)
  difficultyText.value=((obj.value.difficulty<2&&obj.value.difficulty>=0)?'简单':(obj.value.difficulty<5&&obj.value.difficulty>=2?'一般':'困难'))
  html=obj.value.answer
  like.value=obj.value.likeFlag===1?true:false
  love.value=obj.value.collectFlag===1?true:false
  isLoading.value=false

}

req(props.id)

let loveFunc=async ()=>{
  love.value=!love.value
  console.info('click'+love.value)
}

let likeFunc=()=>{
  like.value=!like.value
}
let isFeedback=ref(false)

let collectAndLikeReq=async ()=>{

  const res=await axios({
    url:'https://api-harmony-teach.itheima.net/hm/question/opt',
    method:'post',
    headers:{
      'Authorization': `Bearer ${(useStore.userLogin as loginResponseData).token}`,
      'Content-Type':'application/json'
    },
    data:{
      id:collectAndLikeId,
      optType:optType.value,
    }
  })
  let result=res.data

  console.log(`collectAndLike:`+`${JSON.stringify(result)}`)
  console.log(`type:${props.id},optType:${optType.value}`)
  isFeedback.value=false
  if(res.data.success===true){
    return true
  }else {
    return false
  }

}

let currentId=ref(0)

const ids=useIdsStore()
currentId.value=ids.ids.indexOf(props.id)

let changePage=()=>{
  isLoading.value=true
  req(ids.ids[currentId.value])
}
watch(currentId,()=>{
  changePage()
})

let prev=()=>{
  if(currentId.value===0){
    ElMessageBox.prompt('已经是第一题了', '提示')
  }else {
    currentId.value=currentId.value-1
  }
}
 let next=()=> {
   if (currentId.value === 9) {
     ElMessageBox.prompt('已经是最后一题了', '提示')
   } else {
     currentId.value = currentId.value + 1

   }
 }


let handleScroll=()=>{

}

window.addEventListener('message',(event)=>{
  if(event.data==='scrollToBottom'){
    console.log('已经滑动到底部了')
  }
},true)

</script>

<template>

<div class="ques-wrap"  v-if="isLoading===false" :style="{backgroundColor: isFeedback?'rgba(0,0,0,0.4)':'white'}">
  <el-header >
    <el-row align="middle" >
      <el-col :span="2" style="font-weight: bolder;font-size: 17px;" @click="jump"><</el-col>
      <el-col :span="20" style="text-align: center;">题目详情</el-col>
    </el-row>
    <el-row >
      <el-col :span="24" style="font-weight: bolder;">
      {{obj.stem}}
      </el-col>
    </el-row>
    <el-row justify="space-between">
      <el-col :span="20">
        <el-row >
          <el-col :span="4">
            <el-text :type="difficultyText==='简单'?'success':difficultyText==='一般'?'warning':'danger'" style="padding: 5px;background-color: rgba(0,0,0,0.1);border-radius: 8px;" size="small">
              {{difficultyText}}
            </el-text>
          </el-col>
          <el-col :span="20">
            <el-text type="primary" style="padding: 5px;background-color: rgba(0,0,0,0.1);border-radius: 8px;" v-for="(item,index) in obj.stage" size="small">
              {{item}}
            </el-text>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-text style="font-weight: bolder;font-size: 20px;" @click="isFeedback=!isFeedback">
          '''
        </el-text>
      </el-col>
    </el-row>
  </el-header>
  <el-main  >

    <el-row justify="start">
    <el-text style="font-weight: bolder;font-size: 15px;" size="small">
      答案:
    </el-text>
    </el-row>
    <el-row justify="start">
      <el-col :span="24">
        <div v-html="html" style="width: 100%;"></div>
      </el-col>
    </el-row>


    <el-row v-if="isFeedback===false"   >
      <el-col :span="2" >
        <el-image :src="getAssetsFile('ic_mine_collect.png')" style="width: 20px;"/>
      </el-col>
      <el-col :span="20">
        <el-text type="primary" size="small">
          有问题?点我反馈
        </el-text>
      </el-col>
    </el-row>

    <el-row style="height: 30px;"></el-row>

    <el-row :justify="'end'" v-if="isFeedback===false">

      <el-col :span="4">
        <el-image :src="getAssetsFile('love2.svg')" :style="{width: '30px',height: '30px','border-radius': '15px',padding: '5px',backgroundColor: love===true?'red':'white'}" @click="loveFunc"/>
      </el-col>
      <el-col :span="4">
        <el-image :src="getAssetsFile('like.svg')" :style="{width: '30px',height: '30px','border-radius': '15px',padding: '5px',backgroundColor: like===true?'yellow':'white'}" @click="likeFunc"/>
      </el-col>
    </el-row>
    <el-row style="height: 15px;"></el-row>


    <el-row :justify="'space-between'">

      <el-col :span="8">
        <el-image :src="getAssetsFile('prev_black.png')" fit="fill" @click="prev"></el-image>
      </el-col>

      <el-col :span="8">
        <el-image :src="getAssetsFile('next_black.png')" fit="fill" @click="next"></el-image>
      </el-col>

    </el-row>


  </el-main>
  <div class="feedback" style="background-color: white;border-radius: 15px;padding: 20px; width: 100px;font-size: 15px;" v-if="isFeedback">
    <el-row justify="center" class="text" @click="async ()=>{
      optType=1
      const res =await collectAndLikeReq() as boolean
      if(res===true){
        love=!love
        console.log(`like:${like}`)
      }
    }">收藏</el-row>
    <el-row justify="center" class="text"@click="async ()=>{
      optType=2
      const res= await collectAndLikeReq() as boolean
      if(res===true){
        like=!like
      }
    }"
    >点赞</el-row>
    <el-row justify="center" class="text">点我反馈</el-row>
    <el-row justify="center" class="text">试题分享</el-row>
  </div>
</div>
  <el-empty description="加载中..." v-else-if="isLoading===true" />
</template>

<style scoped lang="less">
.ques-wrap{
  position: relative;
  .feedback{
    position: absolute;
    left: 55%;
    top: 9%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    .text{
      font-weight: bolder;
    }
  }
}
</style>