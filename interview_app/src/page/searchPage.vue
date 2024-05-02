<script setup lang="ts">
import router from "@/router";
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
import {useSearchStore} from "@/stores/searchArr";
import SearchListView from "@/views/search/searchListView.vue";
import {watch} from "vue";
const input = ref('')
const isDeleteInput=ref(false)
const cancelWidth=ref(0)
let isLoadingSearch=ref(true)
const sort=ref('')
let jumpBack=()=>{
  router.back()
}

const useSearch=useSearchStore()
watch(input,()=>{
  sort.value=input.value
  isLoadingSearch.value=true
  setTimeout(()=>{
    isLoadingSearch.value=false
  },1000)
})
let addArr=()=>{
  if(isDeleteInput.value===true) {
    sort.value=''
    input.value=''
  }else {
    useSearch.add(input.value)
    sort.value=input.value
    console.log(`arr:${useSearch.searchArr}`)
    input.value=''
  }

  isDeleteInput.value=false
}

let clearArr=()=>{
  useSearch.clear()
}

let searchWidth=ref(24)
</script>

<template>
<div class="search-wrap">
  <el-row>
    <el-col :span="2" @click="jumpBack" style="font-weight: bolder;font-size: 17px;"><</el-col>
    <el-col :span="20" style="font-weight: bolder;font-size: 18px;text-align: center">刷个面试题</el-col>
  </el-row>
  <el-row style="height: 20px;"/>
  <el-row justify="center">
    <el-col :span="searchWidth">
      <el-input
          class="input"
          v-model="input"
          style="width: 90%;border-radius: 15px;"
          placeholder="请输入关键词"
          :prefix-icon="Search"
          @focus="cancelWidth=4;searchWidth=20;"
          @change="()=>{
            console.log(`load:${isLoadingSearch}`)
            cancelWidth=4
            addArr()
          }"
      />
    </el-col>
    <el-col :span="cancelWidth" @click="()=>{

    }">
      <el-text @click="()=>{
        useSearch.pop()
        console.log(`pop:${useSearch.searchArr}`)
        searchWidth=24
        cancelWidth=0
      }">
        取消
      </el-text>
    </el-col>
  </el-row>
  <el-row style="height: 7px;"/>
  <el-row justify="space-between" align="middle">
    <el-col :span="7" :offset="1" style="font-weight: bolder;font-size: 20px;" >搜索记录</el-col>
    <el-col :span="3" style="height: 20px;">
    <el-icon @click="clearArr">
      <Delete/>
    </el-icon>
    </el-col>
  </el-row>
  <div class="record">
    <p class="item" v-for="(item,index) in useSearch.searchArr">
      {{item}}
    </p>
  </div>
  <el-row style="height: 7px;"/>
  <searchListView v-if="isLoadingSearch===false" :sort="sort"/>
</div>
</template>

<style  lang="less">
.input{
  background-color: rgba(0,0,0,0.3);
}
.record{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 7px;
  .item{
    padding: 5px;
    display: block;
    font-size: 13px;
    border-radius: 8px;
    background-color: rgba(0,0,0,0.2);
  }
}
</style>