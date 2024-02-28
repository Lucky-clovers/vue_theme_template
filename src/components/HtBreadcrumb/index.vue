<template>
  <div class="ht-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item,index) in breadcrumbData" :key="index"
        :to="{ path: item.path,query:item.query }"
      >{{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "HtBreadcrumb",
  props: {
    breadcrumbData: {
      type: Array,
      require: false,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.ht-breadcrumb {
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
}
</style>
