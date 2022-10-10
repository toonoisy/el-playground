<template>
  <div id="app">
    <sidebar
      v-once
      class="sidebar"
    />
    <router-view class="router-view" />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="less" scoped>
#app {
  display: flex;
  height: 100%;
  font-family: system-ui;
  .sidebar {
    width: 25%;
    height: calc(100% - 40px);
    margin: 20px 0;
  }
  .router-view {
    width: 100%;
    height: calc(100% - 40px);
    box-sizing: content-box;
    margin: 20px;
    padding: 0 20px;
    background-color: #fff;
  }
}
</style>
