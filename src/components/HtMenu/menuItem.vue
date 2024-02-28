<template>
  <div class="ht-menu-item">
    <template v-for="item in menuData">
      <el-submenu
        v-if="item.meta.showMenu && item.children"
        :key="item.path"
        :index="item.path"
      >
        <template slot="title">
          <div>
            <i
              v-if="item.meta.icon && item.meta.icon.length > 0"
              class="d-iconfont"
              :class="item.meta.icon"
            ></i>
            <span>{{ item.meta.title }}</span>
          </div>
        </template>
        <ht-menu-item :menu-data="item.children" />
      </el-submenu>
      <el-menu-item
        v-else-if="item.meta.showMenu "
        :key="item.path"
        :index="item.path"
      >
        <i
          v-if="item.meta.icon && item.meta.icon.length > 0"
          class="iconfont"
          :class="item.meta.icon"
        ></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "HtMenuItem",
  props: {
    menuData: {
      type: Array,
      require: true,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.ht-menu--container .ht-menu-item .el-submenu__title > div i {
  margin-right: 19px !important;
}
</style>
