import { createApp } from "vue";
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/styles/index.scss"
import router from '@/router/index'
import "@/router/permission"
import "virtual:svg-icons-register"


const app = createApp(App);
app.use(ElementPlus)
app.use(router)
app.mount("#app");
