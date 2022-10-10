<template>
  <div class="demo">
    parent component:
    <el-input v-model="modelVal" />
    <div>
      v-model: <child v-model="modelVal" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parent',
  components: {
    child: () => import('./child.vue')
  },
  data () {
    return {
      modelVal: 'component v-model is a syntactic sugar of component event'
    };
  }
};
</script>

<style lang="less" scoped>
::v-deep.demo {
  .el-input {
    margin: 20px;
    width: 50%;
    display: inline-block;
  }
}
</style>
