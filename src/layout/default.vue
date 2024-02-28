<template>
  <div class="pooled-content">
    <ht-breadcrumb :breadcrumb-data="breadcrumbData" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import HtBreadcrumb from "@/components/HtBreadcrumb";

export default {
  name: "LayoutDefault",
  components: { HtBreadcrumb },
  data() {
    return {
      breadcrumbData: []
    };
  },
  watch: {
    "$route": function() {
      this.$nextTick(() => {
        this.getBreadcrumbData();
      });
    }
  },
  mounted() {
    this.getBreadcrumbData();
  },
  methods: {
    /**
     * @description 获取左侧导航菜单数据
     */
    getBreadcrumbData() {
      this.breadcrumbData = this.$route.matched.slice(1);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.pooled-content {
  padding: 20px;
  height: calc(100% - 40px);
  overflow-y: auto;

  .container {
    & > div {
      background-color: #fff;
      padding: 20px;
      min-height: calc(100% - 40px);
    }
  }
}
</style>
