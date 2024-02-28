<template>
  <div class="main-content-wrap sub-assemble">
    <ht-menu v-if="isShowMenu" :menu-data="menuData" />
    <div class="content-right">
      <!--      <router-view />-->
      <LayoutDefault />
    </div>
  </div>
</template>

<script>
import { routes as routeList } from "@/router/index";
import HtMenu from "@/components/HtMenu/index";
import LayoutDefault from "@/layout/default";

export default {
  name: "ViewIndex",
  components: { HtMenu, LayoutDefault },
  data() {
    return {
      menuData: [],
      isShowMenu: true
    };
  },
  mounted() {
    this.getMenuData();
    if (window.__MICRO_APP_ENVIRONMENT__) {
      this.isShowMenu = false;
    }
  },
  methods: {
    /**
     * @description 获取左侧导航菜单数据
     */
    getMenuData() {
      const dispatchTopParentRouteName = "App";
      const dispatchRouteList = routeList.filter(
        (item) => item.name === dispatchTopParentRouteName
      );
      if (dispatchRouteList.length <= 0) {
        return;
      }
      this.menuData = dispatchRouteList[0].children;
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.main-content-wrap {
  display: flex;
  height: 100%;
  width: 100%;

  .content-right {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

</style>
