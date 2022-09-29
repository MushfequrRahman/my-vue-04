import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import Vue from "vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

createApp(App).use(router).mount("#app");