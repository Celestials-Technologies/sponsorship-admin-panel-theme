import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
import "./assets/fonts.css";
const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
