<template>
  <div class="ht-menu--container ">
    <div class="shrink">
      <i :class="[isCollapse === false ? 'el-icon-s-fold' : 'el-icon-s-unfold']" @click="isCollapse = !isCollapse"></i>
    </div>
    <el-menu
      :default-active="defaultActive"
      :collapse="isCollapse"
      class="ht-menu el-menu-vertical-demo"
      :class="{'shrink-item':isCollapse}"
      text-color="#000"
      @select="handleSelect"
    >
      <ht-menu-item :menu-data="menuData" />
    </el-menu>
  </div>
</template>

<script type="text/javascript">
import HtMenuItem from "./menuItem.vue";

export default {
  name: "HtMenu",
  components: { HtMenuItem },
  props: {
    menuData: {
      type: Array,
      require: false,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    defaultActive() {
      const { $route } = this;
      if ($route.meta?.activeMenu !== undefined) {
        return $route.meta?.activeMenu;
      } else {
        return "";
      }
    }
  },
  methods: {
    handleSelect(index, indexPath) {
      const lastPath = indexPath[indexPath.length - 1];
      if (lastPath[0] === "/") {
        this.$router.push(indexPath[indexPath.length - 1]);
        return;
      }
      const pushPath = indexPath.join("/");
      this.$router.push(pushPath);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.ht-menu--container {
  height: 100%;

  .shrink {
    height: 48px;
    //background: #042A5F;
    line-height: 48px;
    text-align: right;

    i.is-collapse {
      display: inline-block;
      -moz-transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
    }

    i {
      font-size: 30px;
      //color: #1EA7FF;
      margin-left: 16px;
    }
  }

  .ht-menu {
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .el-menu-vertical-demo.el-menu--collapse {
    width: 72px;

    .el-submenu__title span {
      height: 0;
      width: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }

    .el-submenu__title .el-submenu__icon-arrow {
      display: none;
    }
  }

  .el-menu {
    width: 256px;
    height: calc(100% - 48px);
    border-right: none;
    span {
      font-size: 16px;
    }
  }

  .el-submenu + .el-submenu {
    margin-top: 2px;
  }

  i {
    margin-right: 19px;
    font-size: 26px;
  }

  .is-opened > .el-submenu__title > .menu-children-isopen {
    transform: rotateZ(180deg);
  }

  .shrink-item .ht-menu-item .el-menu-item {
    width: 100%;
  }
}

</style>
