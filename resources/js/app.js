import { createApp } from 'vue'
import App from './Components/App.vue'

import createRouter from './router'
import installPlugins from './plugins'
import { createPinia } from 'pinia'
import '../css/app.css'

import axiosInterceptor from './Plugins/axios'

axiosInterceptor()


const app = createApp(App)
const pinia = createPinia()
const router = createRouter(app)

installPlugins(app)

app.use(router)
    .use(pinia)
    .mount('#app')

