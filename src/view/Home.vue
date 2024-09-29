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

<v-container class="fluid fill-height bg-grey-lighten-4">
  <div position="relative" class="w-100">
    <div positoin="absolute" class="h-100 w-100">
      <v-img :src="imageSrc" cover height="100vh"></v-img>
    </div>
  </div>
</v-container>


</template>

<style scoped>

</style>
