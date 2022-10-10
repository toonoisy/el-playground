<template>
  <el-table-column
    :label="label"
    :width="width"
    :prop="prop"
    class-name="filterable-column"
  >
    <template #header>
      <span :class="['column-label', label]">{{ label }}</span>
      <el-select
        ref="selector"
        v-model="selected"
        class="column-selector"
        multiple
        :popper-append-to-body="true"
        popper-class="column-selector-popper"
        collapse-tags
        placeholder
        :style="`width:${selectorWidth}px;`"
        @change="handleChange"
      >
        <el-option
          v-for="item in filters"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.value === selected[0]"
        />
      </el-select>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'FilterColumn',

  model: {
    event: 'update',
  },

  props: {
    label: {
      type: String,
      default: ''
    },

    prop: {
      type: String,
      default: ''
    },

    width: {
      type: String,
      default: ''
    },

    filters: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      selected: [],
      selectorWidth: ''
    };
  },

  mounted () {
    this.setDefault();
    this.$nextTick(() => {
      const label = document.querySelector(`span.${this.label}`);
      if (label) this.selectorWidth = label.offsetWidth + 30;
    });
  },

  methods: {
    setDefault () {
      this.selected.length = 0;
      this.selected.push(this.filters[0]?.value);
      this.$emit('update', this.selected[0]);
    },

    handleChange (val) {
      if (val.length > 1) {
        val.shift();
      }
      this.$refs.selector.blur(); // close dropdown menu
      this.$emit('update', val[0]);
    }
  }
  
};
</script>

<style lang="less" scoped>
::v-deep.column-selector {
  .el-input .el-input__inner {
    border: none;
  }
  .el-select__tags {
    display: none;
  }
  // triangle shape
  i {
    display: inline-block;
    margin-top: 14px;
    width: 0px;
    height: 0px;
    border-top: 10px solid #409EFF;
    border-left: 10px solid transparent;
    &::before {
      display: none;
    }
  }
}
.column-label {
  position: absolute;
  z-index: 1;
  top: 8px;
}
</style>
