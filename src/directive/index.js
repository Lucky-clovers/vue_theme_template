/**
 * 注册全局指令
 */
import Vue from "vue";

// import Ellipsis from 'vue-directive-ellipsis';
// import 'vue-directive-ellipsis/dist/ellipsis.umd.css';

// 注册第三方指令
// Vue.directive('ellipsis', Ellipsis);

const bindClass = {
  _name: "scroll",
  bind: function(el, binding) {
    // 获取element-ui定义好的scroll盒子
    const SELECTWRAP_DOM = el.querySelector(
      ".el-select-dropdown .el-select-dropdown__wrap"
    );
    SELECTWRAP_DOM.addEventListener("scroll", function() {
      const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight;
      if (CONDITION) {
        binding.value();
      }
    });
  },
  inserted: function() {},
  update: function() {},
  componentUpdated: function() {},
  unbind: function() {}
};

const diretives = {
  bindClass
};

// 注册自己实现的指令
Object.keys(diretives).forEach((d) => {
  const dOpt = diretives[d];
  if (Object.prototype.toString.call(dOpt) === "[object Function]") {
    Vue.directive(dOpt.name, dOpt);
  }
  if (Object.prototype.toString.call(diretives[d]) === "[object Object]") {
    Vue.directive(dOpt._name, dOpt);
  }
});
