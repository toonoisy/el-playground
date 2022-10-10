<!-- re-encapsulated ElButton with multi-click prevention -->
<template>
  <o-el-button
    v-preventMultiClicks
    v-bind="$attrs"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot />
  </o-el-button>
</template>

<script>
import { Button } from 'element-ui';

export default {
  name: 'ElButton',

  components: {
    OElButton: Button
  },

  directives: {
    preventMultiClicks: {
      inserted (el) {
        el.handler = () => {
          el.style.pointerEvents = 'none';
          el.style.cursor = 'initial';
          setTimeout(() => {
            el.style.pointerEvents = 'auto';
            el.style.cursor = 'pointer';
          }, 1000);
        };
        el.addEventListener('click', el.handler);
      }
    },

    unbind (el) {
      el.removeEventListener('click', el.handler);
    }
  },

  computed: {
    flag () {
      // could be any state, eg., a global loading flag
      return false;
    },

    disabled () {
      // if no disabled attr provided, use flag as default
      return this.$attrs?.disabled || this.flag;
    }
  }
};
</script>

<style lang="less" scoped>

</style>
