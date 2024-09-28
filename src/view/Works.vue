<script setup>
import WorksCard from '@/components/WorksCard.vue';
defineProps({
  components:{
    WorksCard
  }
})
</script>

<template>
  <v-contaier class="d-flex flex-wrap">
    <WorksCard></WorksCard>
    <WorksCard></WorksCard>
    <WorksCard></WorksCard>
  </v-contaier>
</template>

<style scoped>

</style>
