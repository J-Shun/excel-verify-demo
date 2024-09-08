<script setup>
import { ref } from 'vue'
const fileInput = ref(null)

const nameMapping = {
  'a': 'a',
  'b': 'b',
  'c': 'c',
}

const openFileInput = () => {
  fileInput.value.click()
}

const handleFileChange = (e) => {
  // 驗證是否有檔案
  const file = e.target.files[0]
  if (!file) return

  // 從檔案名稱中決定驗證規則，若無對應規則則提示
  const { name } = file
  const plainName = name.split('.')[0]
  const rule = nameMapping[plainName]
  if (!rule) {
    alert('無對應規則，請確認檔名是否符合格式')
    return
  }
  alert(`使用規則 ${rule} 做驗證`)
}
</script>

<template>
  <!-- file type 的 input 在不同瀏覽器下樣式不一致，故透過 button 觸發 -->
  <button type="button" class="text-white text-lg bg-blue-500 py-2 px-4 rounded-lg mb-10"
    @click="openFileInput">點擊按鈕上傳</button>
  <input type="file" ref="fileInput" accept=".xls,.xlsx" class="hidden" @change="handleFileChange" />
  <div
    class="w-[600px] h-[350px] mx-auto border-4 border-dotted border-blue-500 rounded-lg flex justify-center items-center text-3xl">
    將單一文件拖曳到範圍內上傳</div>
</template>

<style scoped></style>
