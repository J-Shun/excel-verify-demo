<script setup>
import { ref } from 'vue'
import * as XLSX from "xlsx";
import { toast } from 'vue3-toastify';

const fileInput = ref(null)
const files = ref([
  // {
  //   name: 'test.xlsx',
  //   size: '1MB',
  // }
])


// a 檔案規則：第一行第一列為 "isTrue"
const verifyRuleA = (worksheet) => {
  const firstCell = worksheet['A1']?.v
  return firstCell === "isTrue"
}

const nameMapping = {
  'a': verifyRuleA,
  'b': 'b',
  'c': 'c',
}

const openFileInput = () => {
  fileInput.value.click()
}

const selectRule = (file) => {
  const { name } = file
  const plainName = name.split('.')[0]
  return nameMapping[plainName]
}

const handleFileChange = (e) => {
  // 驗證是否有檔案
  const file = e.target.files[0]
  if (!file) return

  // 從檔案名稱中決定驗證規則，若無對應規則則提示
  const rule = selectRule(file)
  if (!rule) {
    toast.error('無對應規則，請確認檔名是否符合格式')
    return
  }

  // 驗證檔案格式
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = e.target.result;
    const workbook = XLSX.read(data, { type: "binary" });

    // 處理第一個工作表
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // 驗證規則
    const isValid = rule(worksheet)
    if (isValid) {
      const { name, size } = file
      files.value.push({ name, size })
      toast.success('驗證成功，點擊確認按鈕上傳');
    } else {
      toast.error('檔案格式錯誤');
    }
  };

  reader.readAsArrayBuffer(file);
}


// 拖放
const handleDrop = (e) => {
  if (e.dataTransfer.files.length > 1) {
    toast.error("一次只能上傳單一文件");
    return;
  }
  const file = e.dataTransfer.files[0];


  // 驗證是否為 Excel 檔案
  const validTypes = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel"
  ];
  if (!validTypes.includes(file.type)) {
    toast.error("檔案類型不正確，請上傳 Excel 檔案");
    return;
  }

  // 從檔案名稱中決定驗證規則，若無對應規則則提示
  const rule = selectRule(file)
  if (!rule) {
    toast.error('無對應規則，請確認檔名是否符合格式')
    return
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const arrayBuffer = e.target.result;
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: "array" });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];


    // 驗證規則
    const isValid = rule(worksheet)
    if (isValid) {
      const { name, size } = file
      files.value.push({ name, size })
      toast.success('驗證成功，點擊確認按鈕上傳');
    } else {
      toast.error('檔案格式錯誤');
    }
  };

  reader.readAsArrayBuffer(file);
};
</script>

<template>
  <!-- file type 的 input 在不同瀏覽器下樣式不一致，故透過 button 觸發 -->
  <button type="button" class="text-white text-lg bg-blue-500 py-2 px-4 rounded-lg mb-6"
    @click="openFileInput">上傳文件</button>
  <input type="file" ref="fileInput" accept=".xls,.xlsx" class="hidden" @change="handleFileChange" />
  <div @dragover.prevent @drop.prevent="handleDrop"
    class="w-[600px] h-[350px] mx-auto border-4 border-dotted border-blue-500 rounded-lg flex justify-center items-center text-3xl mb-10">
    將單一文件拖曳到範圍內上傳</div>

  <h2 class="text-2xl mb-6">驗證成功文件</h2>
  <ul class="mb-10">
    <li v-for="file in files">Name: {{ file.name }}, size: {{ file.size }}</li>
  </ul>

  <button class="text-white text-lg bg-blue-500 py-2 px-4 rounded-lg">確認</button>
</template>

<style scoped></style>
