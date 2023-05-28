import '@vuepic/vue-datepicker/dist/main.css'
import 'vue-awesome-paginate/dist/style.css'

import './assets/styles/main.scss'

import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueAwesomePaginate from 'vue-awesome-paginate'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(VueAwesomePaginate)
app.mount('#app')
