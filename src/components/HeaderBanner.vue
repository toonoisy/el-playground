<template>
  <div class="header">
    <span
      v-for="e in text"
      :key="e"
    >
      {{ e }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    text () {
      // return 'PLAYGROUND'.split('');
      return 'playground'.split('');
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  color: #fff;
  color: #000;
  // background: #409EFF;
  // font-weight: 700;
  display: flex;
  // justify-content: space-evenly;
  justify-content: center;
  // padding-left: 20px;
  border-bottom: 1px solid #ebeef5;
  span {
    margin-left: 10px;
  }
}

</style>
