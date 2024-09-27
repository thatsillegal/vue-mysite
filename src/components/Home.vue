<script>
// @是vue中src目录的简称
import pig_dog from "@/assets/b.jpg";
export default {
    // data() 中的 return 函数用于定义组件的响应式数据。
    // 它返回的对象中的属性会被 Vue 处理为响应式，能够自动反映在视图中，
    // 确保用户界面与数据状态保持同步
  data() {
    return {
      imageSrc: pig_dog // 使用 require 来引入图片
    };
  }
};
</script>

<template>
    <!-- :是v-bind的意思 -->
    <v-img :src="imageSrc" alt="Local Image" />
</template>

<style scoped>

</style>
