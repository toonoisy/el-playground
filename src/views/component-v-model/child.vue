<template>
  <div class="child">
    <el-input
      :value="value"
      @input="$emit('input', $event)"
    />
    <!-- <el-input
      :value="modelVal"
      @input="$emit('update', $event)"
    /> -->
  </div>
</template>

<script>
export default {
  name: 'Child',
  // model: {
  //   prop: 'modelVal',
  //   event: 'update',
  // },
  props: {
    value: {
      type: String,
      default: '',
    },
    // modelVal: {
    //   type: String,
    //   default: '',
    // },
  },
};
</script>

<style>

</style>
