import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/TailWind.css";
import registerGlobalComponets from "@/utils/import.js";
import { createPinia } from 'pinia'
const pinia = createPinia()
let app;
app = createApp(App);
registerGlobalComponets(app);
app.use(pinia)
app.use(router);
app.mount("#app");
