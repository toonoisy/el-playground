<template>
  <div>
    <el-button
      type="primary"
      :round="true"
      @click="handleClick"
    >
      Try Clicking Repeatedly
    </el-button>
    <span>
      Triggered clicks: {{ count }} (one click allowed per sec)
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    };
  },

  methods: {
    handleClick () {
      this.count++;
    }
  }
  
};
</script>

<style lang="less" scoped>
span {
  margin-left: 10px;
}
</style>
