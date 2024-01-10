import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios  from 'axios';
import './index.css';

const app = createApp(App);

app.config.productionTip = false;
app.config.globalProperties.$axios = axios;


app.use(router);

app.mount('#app');
