<template>
  <div class="myaccount-cont table-page-search-wrapper">
    <a-row>
      <a-col>
        <a-card>
          <div style="margin:40px 0;" class="my-title" orientation="left">我的账户</div>

          <a-form layout="inline">
            <a-row type="flex" justify="center" :gutter="48">
              <a-col :md="7" :sm="24">
                <a-form-item label="平台">
                  <span>
                    <a>50</a>万元
                  </span>
                </a-form-item>
              </a-col>
              <a-col :md="7" :sm="24">
                <a-form-item label="产品">
                  <span>小额贷</span>
                </a-form-item>
              </a-col>
              <a-col :md="7" :sm="24">
                <a-form-item label="总费用">
                  <span>
                    <a>1.74</a>万元
                  </span>
                </a-form-item>
              </a-col>
              <a-col :md="7" :sm="24">
                <a-form-item label="金额">
                  <span>
                    <a>50</a>万元
                  </span>
                </a-form-item>
              </a-col>

              <a-col :md="7" :sm="24">
                <a-form-item label="额度范围">
                  <span>5.00 - 200.00万元</span>
                </a-form-item>
              </a-col>

              <a-col :md="7" :sm="24">
                <a-form-item label="费用说明">
                  <span>参考月利率0.56%</span>
                </a-form-item>
              </a-col>

              <a-col :md="7" :sm="24">
                <a-form-item label="期限">
                  <span>12个月</span>
                </a-form-item>
              </a-col>

              <a-col :md="7" :sm="24">
                <a-form-item label="期限范围">
                  <span>12 - 60个月</span>
                </a-form-item>
              </a-col>

              <a-col :md="7" :sm="24">
                <a-form-item label="放款时间">
                  <span>7个工作日（审批为5个工作日）</span>
                </a-form-item>
              </a-col>
              <a-col :md="7" :sm="24">
                <a-form-item label="月供">
                  <span>43199元</span>
                </a-form-item>
              </a-col>
              <a-col :md="7" :sm="24">
                <a-form-item label="还款方式">
                  <span>分期付款</span>
                </a-form-item>
              </a-col>
              <a-col :md="7" :sm="24">
                <a-form-item label>
                  <span></span>
                </a-form-item>
              </a-col>
              <a-col :md="22" :sm="24">
                <a-table :columns="columns" :dataSource="data">
                  <template slot="name" slot-scope="text">
                    <a href="javascript:;">{{text}}</a>
                  </template>
                </a-table>
              </a-col>
            </a-row>
          </a-form>
          <div class="hk-btn-b">
            <a-button type="primary" class="hk-btn">还款</a-button>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const columns = [{
  title: '分期单',
  dataIndex: 'name',
  scopedSlots: { customRender: 'name' }
}, {
  title: '待还款',
  className: 'column-money',
  dataIndex: 'money'
}, {
  title: '服务费',
  dataIndex: 'address'
}, {
  title: '还款日',
  dataIndex: 'time'
}, {
  title: '逾期天数',
  dataIndex: 'late'
}, {
  title: '违约金',
  dataIndex: 'liquidatedDamages'
}]

const data = [{
  key: '1',
  name: '1',
  money: '100.000',
  address: '423',
  time: '2018.07.01',
  late: '-',
  liquidatedDamages: '-'
}, {
  key: '2',
  name: '2',
  money: '100.000',
  address: '423',
  time: '2018.07.01',
  late: '-',
  liquidatedDamages: '-'
}, {
  key: '3',
  name: '3',
  money: '100.000',
  address: '423',
  time: '2018.07.01',
  late: '-',
  liquidatedDamages: '-'
}]
export default {
  name: '',
  data () {
    return {
      data,
      columns
    }
  }
}
</script>

<style scoped lang="less">
.warn-tips {
  color: #e75319;
  letter-spacing: 0.74px;
}
.my-title {
  background: rgba(247, 247, 247, 0.59);
  border: 1px solid #e1e1e1;
  height: 60px;
  line-height: 60px;
  padding-left: 60px;
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #424242;
  letter-spacing: 0.82px;
}
th.column-money,
td.column-money {
  text-align: right !important;
}
.hk-btn-b {
  text-align: center;
  .hk-btn {
    width: 317px;
    height: 69px;
    font-size: 24px;
  }
}
</style>
