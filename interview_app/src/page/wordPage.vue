<script setup lang="ts">

import {onMounted, ref, watch} from "vue";

import json from '../assets/word.json'
import type {allWord, wordClassification} from "@/common/data";

let keys=ref<string[]>([])

let words=ref<wordClassification[][]>([])

onMounted(()=>{

  keys.value=Object.keys(json)

  let values=Object.values(JSON.parse(JSON.stringify(json)))

  values.forEach(item=>{
    words.value.push(item)
  })

  console.log(`keys:${JSON.stringify(keys)}`)

  console.log(`words:${words.value[5].length}`)

  wordLength.value=words.value[wordsIndex.value].length

  playReq(selectWord.value)

})

let wordLength=ref(0)



let keyIndex=ref(0)

let wordsIndex=ref(0)

import {reactive} from 'vue'
import {playReq} from "@/common/req";

const dialogTableVisible = ref(false)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]

let selectWord=ref('ok')
let isPlay=ref(false)
let playIt=(word:string)=>{
  isPlay.value=true
}

watch(wordsIndex,()=>{
  wordLength.value=words.value[wordsIndex.value].length
})
</script>

<template>
<el-row align="middle">
  <el-col :span="3" style="font-weight: bolder;"><</el-col>
  <el-col :span="10" style="font-weight: bolder;">常用单词</el-col>
</el-row>
<el-row style="height: 10px;"/>
<el-row justify="space-between">
  <el-col :span="12">
    <el-row style="font-size: 17px;font-weight: bolder;">开发常用词汇</el-row>
    <el-row style="color: gray;font-size: 13px;">共{{wordLength}}个单词</el-row>
  </el-col>
  <el-col :span="8">
    <el-row>
      <el-col :span="24">
        <el-text>
          <el-text style="font-size: 13px;color: gray;">{{keys[keyIndex]}}</el-text>
        </el-text>
        <el-icon @click="dialogTableVisible=true"><ArrowDownBold/></el-icon>
      </el-col>
    </el-row>
  </el-col>
</el-row>
  <el-row style="height: 15px;"/>

  <el-row justify="space-between">

    <el-col :span="12" style="color: green;font-weight: bolder;">{{keys[keyIndex]}}</el-col>

    <el-col :span="6" style="color: gray;">共{{wordLength}}个单词</el-col>

  </el-row>

  <el-row style="height: 10px;"/>

  <el-row v-for="(item,index) in words[wordsIndex]" justify="space-between" align="middle">

    <el-col :span="2">
      <el-icon @click="playIt(item.en)"><Headset /></el-icon>
    </el-col>

    <el-col :span="22" style="font-size: 17px;font-weight: bolder;">
      {{item.en}}
    </el-col>
    <el-col :span="24" style="height: 5px;"></el-col>
    <el-col :span="12">
      {{item.zh}}
    </el-col>

    <el-col :span="6" style="color: gray;font-size: 12px;">
      详细代码 >
    </el-col>

    <el-col :span="24" style="height: 15px;"/>

  </el-row>

<el-dialog v-model="dialogTableVisible" title="Shipping address" width="400">

  <el-row justify="start" :gutter="10">

    <el-col :span="6" v-for="(item,index) in keys" :key="index" @click="keyIndex=index;wordsIndex=index;dialogTableVisible=false;">
      {{item}}
    </el-col>

  </el-row>

</el-dialog>

<el-dialog v-model="isPlay" title="Shipping address" width="400">

  <el-row justify="start" :gutter="10">

    <audio id="myAudio" controls="controls">

      <source src="./dictvoice.mp3" type="audio/mp3">
    </audio>


  </el-row>

</el-dialog>
</template>

<style scoped>

</style>