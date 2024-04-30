<script setup lang="ts">
import BottomView from "@/views/BottomView.vue";
</script>

<template>
<div class="IndexPage">
  <router-view></router-view>
  <BottomView></BottomView>

</div>
</template>

<style scoped>
.IndexPage{
  height: 100%;
}
</style>