<template>
  <div>
    <el-table
      v-loading="loading"
      :data="tableData"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        prop="date"
        label="Date"
      />
      <filterable-column
        v-model="filterValue"
        label="Name"
        width="200"
        prop="name"
        :filters="options"
      />
      <el-table-column
        prop="address"
        label="Address"
        width="500"
      />
    </el-table>
    <div class="output-display">
      <div>Selected: {{ filterValue }}</div>
    </div>
  </div>
</template>

<script>
import FilterableColumn from '@/components/FilterableColumn';

export default {
  components: {
    FilterableColumn
  },

  data () {
    return {
      loading: false,
      tableData: [],
      filterValue: '',
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
    };
  },

  watch: {
    filterValue: {
      handler (val) {
        if (!val) return;
        this.mockRequest();
      }
    }
  },

  methods: {
    mockRequest () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>

</style>
