<template>
  <div class="selectable-table">
    <el-table :data="tableData">
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        prop="date"
        label="Date"
      />
      <el-table-column
        prop="name"
        label="Name"
      />
      <el-table-column
        prop="address"
        label="Address"
        width="300"
      />
      <el-table-column label="Checkbox">
        <template slot-scope="{ row }">
          <el-checkbox
            :value="row.isMultiChecked"
            @change="changeMultiSelection($event, row)"
          />
        </template>
      </el-table-column>
      <el-table-column label="Radio">
        <template slot-scope="{ row }">
          <!-- 
            此处在change函数中将checkbox改造成单选
            不使用radio是因为radio选中后默认无法去勾选且去勾选改造效果不佳
          -->
          <el-checkbox
            class="single-selection"
            :value="row.isSingleChecked"
            @change="changeSingleSelection($event, row)"
          />
        </template>
      </el-table-column>
    </el-table>
    <div class="output-display">
      <div>Checkbox: {{ multiSelectionStr }}</div>
      <div>Radio: {{ singleSelection }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          id: 1,
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          id: 2,
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          id: 3,
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          id: 4,
        },
      ],
      singleSelection: '',
      lastSingleSelection: '',
    };
  },
  computed: {
    multiSelection() {
      return this.tableData.filter((e) => e.isMultiChecked).map((e) => e.id);
    },
    multiSelectionStr() {
      return this.multiSelection.join();
    },
  },
  watch: {
    lastSingleSelection: {
      handler(val) {
        // 如果lastSingleSelection有值，要确保上次单选的联动的复选框去勾选
        if (!val) return;
        const row = this.tableData.find((e) => e.id === val);
        if (row && row.isMultiChecked) row.isMultiChecked = false;
      },
    },
  },
  methods: {
    changeMultiSelection(checked, row) {
      this.$set(row, 'isMultiChecked', checked);
    },
    changeSingleSelection(checked, row) {
      if (checked) {
        if (this.singleSelection) {
          // 保存上次单选的值
          this.lastSingleSelection = this.singleSelection;
        }
        this.singleSelection = row.id;
        // 确保isSingleChecked标识的行是唯一
        this.tableData.forEach((e) => {
          if (e.id !== row.id && e.isSingleChecked) e.isSingleChecked = false;
        });
      } else {
        this.singleSelection = '';
      }
      this.$set(row, 'isSingleChecked', checked);
      // 单选联动复选
      this.$set(row, 'isMultiChecked', checked);
    },
  },
};
</script>

<style lang="less" scoped>
::v-deep.selectable-table {
  width: 100%;
  .el-table {
    div.cell {
      text-align: center;
    }
    .single-selection {
      .el-checkbox__inner:after {
        display: none;
      }
      .el-checkbox__inner {
        border-radius: 100%;
      }
      // 选中时把背景置白，边框加粗，制造单选框选中的效果
      .el-checkbox__input.is-checked .el-checkbox__inner {
        border-width: 5px;
        background: #fff;
      }
    }
  }
}
</style>
