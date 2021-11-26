import { createApp } from 'vue'
import App from './Components/App.vue'

import createRouter from './router'
import installPlugins from './plugins'
import store from './store'

import axiosInterceptor from './Plugins/axios'

axiosInterceptor()

store.dispatch('auth/getUser').then(() => {
    const app = createApp(App)
    const router = createRouter(app)

    installPlugins(app)

    app.use(router)
        .use(store)
        .mount('#app')
})
