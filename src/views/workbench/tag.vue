<template>
  <div class="tag demo-layout">

    <div class="tag-group m-tb-15">
      <span class="tag-group__title">默认</span>
      <el-tag v-for="item in items" :key="item.label" :type="item.type">
        {{ item.label }}
      </el-tag>
    </div>
    <div class="tag-group m-tb-15">
      <span class="tag-group__title">Dark</span>
      <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
        {{ item.label }}
      </el-tag>
    </div>
    <div class="tag-group">
      <span class="tag-group__title">Plain</span>
      <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="plain">
        {{ item.label }}
      </el-tag>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ETag",
  data() {
    return {
      items: [
        { type: "", label: "标签一" },
        { type: "success", label: "标签二" },
        { type: "info", label: "标签三" },
        { type: "danger", label: "标签四" },
        { type: "warning", label: "标签五" }
      ]
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tag {

}
</style>
