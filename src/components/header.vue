<template>
  <div class="header-bar">
    <div class="header-bar-logo">
      <img src="@/assets/logo.png" alt="">
      <h3>{{ name }}</h3>
    </div>
    <div class="float-right p-t-10">
      <el-select v-model="theme" placeholder="请选择" @change="handleTheme">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataMonitorHeaderBar",
  data() {
    return {
      name: process.env.VUE_APP_PROJECT_NAME,
      options: [{
        value: "default",
        label: "默认"
      }, {
        value: "dark",
        label: "暗色"
      }],
      theme: "default"
    };
  },
  watch: {},
  mounted() {
    const theme = "default";
    document.documentElement.setAttribute("data-theme", theme);
  },
  methods: {
    logout() {
      // console.log("退出");
    },
    handleTheme(value) {
      document.documentElement.setAttribute("data-theme", value);
      // if (value === "default") {
      //   import("@/themes/theme-light.scss").then(() => {
      //   });
      // } else if (value === "dark") {
      //   import("@/themes/theme-dark.scss").then(() => {
      //   });
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-bar {
  display: flex;
  justify-content: space-between;
  height: 60px;
  box-sizing: border-box;
  padding: 0 24px;
  flex-shrink: 0;

  .header-bar-logo {
    display: flex;
    align-items: center;

    img {
      width: 45px;
      height: 45px;
      margin-right: 24px;
    }

    h3 {
      font-size: 32px;
      font-weight: bold;
      line-height: 24px;
    }
  }
}
</style>
