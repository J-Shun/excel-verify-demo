<script setup>
import Upload from '../components/containers/Upload.vue';
import { ref } from 'vue'


const count = ref(0)
const test = ref('test')

</script>

<template>
  <div class="text-center mt-24">
    <h1 class="text-4xl mb-12">測試用上傳頁</h1>
    <Upload />
  </div>
</template>

<style scoped></style>
