import Vue from 'vue'
import router from './router/router.js'
import store from './store/store.js'
import FastClick from 'fastclick'

import axios from 'axios'
import App from './app.vue'

//注册插件
Vue.prototype.$http = axios

if('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

let app = new Vue({
	el: '#app',
	router,
	store,
	data: {},
	template: '<App />',
	components: {
		App
	}
})