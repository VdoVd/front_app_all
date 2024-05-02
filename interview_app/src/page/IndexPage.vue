<script setup lang="ts">
import BottomView from "@/views/BottomView.vue";
</script>

<template>
<div class="IndexPage">
  <router-view class="up"></router-view>
  <BottomView class="bottom"></BottomView>

</div>
</template>

<style scoped>
.IndexPage{
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bottom{

  }
  .up{
    flex: 1;
  }
  padding-bottom: 20px;
}
</style>