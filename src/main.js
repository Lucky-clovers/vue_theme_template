import "./public-path";
import Vue from "vue";
import App from "@/App.vue";

import "@/utils/elementUi";

import "@/utils/rem";

import "normalize.css";
import "@/assets/css/public.scss";
import "@/assets/css/reset.scss";
import "@/assets/css/style.scss";
import "@/assets/css/index.scss";
import "@/assets/iconfont/iconfont.css";
import "@/themes/element-variables.scss";

import "@/directive";
import "@/filter";

import router from "@/router";
import store from "@/store";

// import "/mock"; // mock 后端 API

Vue.config.productionTip = false;

// 微前端环境读取全局变量
if (window.__MICRO_APP_ENVIRONMENT__) {
  const globalData = window.microApp.getGlobalData(); // 返回全局数据
  if (globalData) {
    Vue.prototype.$globalData = globalData;
    if (globalData.disabled) {
      window.disabled = globalData.disabled;
    }
  }
}

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_PROJECT_NAME}-${to.meta.title}`;
  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
