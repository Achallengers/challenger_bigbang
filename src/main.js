import './assets/reset.css';
import './assets/utilities.css';
import icons from "./components/icons/fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    createApp
} from 'vue'
import {
    createPinia
} from 'pinia'

import App from './App.vue'
import router from './router'

library.add({
    ...icons
});

const app = createApp(App).component("font-awesome", FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')