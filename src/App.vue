<template>
  <div id="app">
    <el-container direction="vertical" style="height:100%">
      <header-bar v-if="isShowHeaderBar" />
      <div class="pooled-container">
        <router-view />
      </div>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from "@/components/header";

export default {
  name: "App",
  components: { HeaderBar },
  data() {
    return {
      isShowHeaderBar: true,
    };
  },
  mounted() {
    if (window.__MICRO_APP_ENVIRONMENT__) {
      this.isShowHeaderBar = false;
    }
    // 是否是微前端环境
    if (window.__MICRO_APP_ENVIRONMENT__) {
      this.isShowHeaderBar = false;
      // 主动获取基座下发的数据
      // console.log('child-nuxtjs getData:', window.microApp.getData());

      // 监听基座下发的数据变化
      window.microApp.addDataListener((data) => {
        // 当基座下发path时进行跳转
        if (data.path && data.path !== this.$router.currentRoute.path) {
          this.$nextTick(() => {
            this.$router.push(data.path);
          });
        }
      });

      // 向基座发送数据
      // setTimeout(() => {
      // 	window.microApp.dispatch({ myname: 'child-nuxtjs' });
      // }, 3000)

      // 监听卸载事件
      // window.addEventListener('unmount', () => {
      //   console.log('微应用child-nuxtjs卸载了');
      // })
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.pooled-container {
  height: 100%;
  overflow: hidden;
}
</style>
