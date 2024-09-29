<script>
// @是vue中src目录的简称
import pig_dog from "@/assets/b.jpg";
import HelloWorld from '@/components/HelloWorld.vue';
export default {
    // data() 中的 return 函数用于定义组件的响应式数据。
    // 它返回的对象中的属性会被 Vue 处理为响应式，能够自动反映在视图中，
    // 确保用户界面与数据状态保持同步
  components:{
    HelloWorld,//注册子组件,需要通过 import 将 ChildComponent.vue 导入进来，并在 components 选项中注册它
  },
  data() {
    return {
      imageSrc: pig_dog // 使用 require 来引入图片
    };
  }
};
</script>

<template>
<!-- <div width="100vw">
<v-sheet
    class="d-flex align-start flex-column mb-6 bg-surface-variant"
    height="200" width="100vw"
  >
    <v-sheet class="ma-2 pa-2 mb-auto">Flex item</v-sheet>
    <v-sheet class="ma-2 pa-2">Flex item</v-sheet>
    <v-sheet class="ma-2 pa-2">Flex item</v-sheet>
</v-sheet>
</div>
<div class="w-100 bg-grey-lighten-4">nihao</div> -->

<v-container class="h-100 bg-grey-lighten-4" width="100vw">


      <v-img
        class="bg-white"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        height="100%"
        cover
      ></v-img>


  <!-- <v-img :src="imageSrc" cover class="h-100"></v-img> -->
</v-container>


</template>

<style scoped>

</style>
