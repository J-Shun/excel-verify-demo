import { createApp } from 'vue'
import './index.css'
import 'vue3-toastify/dist/index.css';
import App from './App.vue'
import Vue3Toasity, { toast } from 'vue3-toastify';

createApp(App).use(
  Vue3Toasity,
  {
    autoClose: 3000,
    position: 'top-center',
  },
).mount('#app')
