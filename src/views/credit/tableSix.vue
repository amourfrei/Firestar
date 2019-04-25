<template>
  <div>
  <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data" :scroll="{ x: 2000}">
    <a slot="action" slot-scope="text" href="javascript:;">
      <span @click="showConfirm">通过 | </span> 
      <span @click="showModal">驳回</span>
    </a>
  </a-table>

  </div>
</template>
<script>
const columns = [
  { title: '序号', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: '申请时间', dataIndex: 'val1', key: '1', width: 150 },
  { title: '贷款单编号', dataIndex: 'val2', key: '2', width: 150 },
  { title: '贷款单状态', dataIndex: 'val3', key: '3', width: 150 },
  { title: '客户编号', dataIndex: 'val4', key: '4', width: 150 },
  { title: '客户名称', dataIndex: 'val5', key: '5', width: 150 },
  { title: '放款主体', dataIndex: 'val6', key: '6', width: 150 },
  { title: '还款方式', dataIndex: 'val7', key: '7', width: 150 },
  { title: '贷款期限', dataIndex: 'val8', key: '8', width: 150 },
  { title: '日利率 %/天', dataIndex: 'val9', key: '9', width: 150 },
  { title: '可贷金额', dataIndex: 'val10', key: '10', width: 150 },
  { title: '贷款金额', dataIndex: 'val11', key: '11', width: 150 },
  { title: '还款金额', dataIndex: 'val12', key: '12', width: 150 },
  { title: '放贷时间', dataIndex: 'val13', key: '13', width: 150 },
  { title: '还款时间', dataIndex: 'val14', key: '14', width: 150 },
  { title: '备注', dataIndex: 'val15', key: '15', width: 150 },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 120,
    scopedSlots: { customRender: 'action' },
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const data = [];
for (let i = 1; i < 100; i++) {
  data.push({
    key: i,
    name: `${i+i}`,
    val1: '2019-4-25',
    val2: `${i}`,
    val3: 'Bruno',
    val4: 'Trunp',
    val5: 'Linda',
    val6: '白条',
    val7: '80000',
    val8: '12个月',
    val9: '0.03%',
    val10: '1',
    val11: '额度变更',
    val12: '业务初审',
    val13: '2018-10-09',
    val14: '2020-10-08',
    val15: '已通过',
  });
}

export default {
  data() {
    return {
      data,
      columns,
      rowSelection
    }
  },
  methods: {
    showConfirm() {
      this.$confirm({
        title: '确认',
        content: '确定要通过吗？',
        onOk() {
        },
        onCancel() {},
      });
    },
    showModal() {
      this.$emit('showReject', true)
    }
  }
}
</script>

<style scoped>
.approval-opinion{
  width: 100%;
  border:1px solid #f1f1f1;
  border-radius: 2px;
  padding:10px;
}
.text-algin-right{
  text-align: right;
}
</style>
