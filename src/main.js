import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//按需引入elementui
import './plugins/elementUi';
//引入封装的axios
import api from './api/apiList'

Vue.config.productionTip = false;

Vue.prototype.$api = api;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
