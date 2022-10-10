<template>
  <el-menu
    :default-active="curIndex"
    class="sidebar"
    router
  >
    <div class="site-title">
      playground
    </div>
    <el-menu-item
      v-for="{ index } in menu"
      :key="index"
      :index="index"
    >
      <i
        :style="`visibility: ${iconVisibility(index)}`"
        class="el-icon-caret-right"
      />
      <span slot="title">{{ index }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import menu from '@/assets/menu.json';
export default {
  name: 'Sidebar',

  computed: {
    menu () {
      return menu;
    },

    curIndex () {
      return this.$route.path.replace('/', '');
    }
  },

  methods: {
    iconVisibility (index) {
      return this.curIndex === index ? 'visible' : 'hidden';
    }
  }
};
</script>

<style lang="less" scoped>
::v-deep.sidebar {
  height: 100%;
  font-weight: 700;
  .site-title {
    font-size: 20px;
    padding: 20px;
  }
  .el-menu-item {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
