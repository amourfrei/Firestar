<template>
  <div class="stas-cont">
    <a-row style="margin-top: 30px;">
      <a-col>
        <a-card :loading="loading" :bordered="false" :body-style="{padding: '0'}">
          <div class="salesCard">
            <a-tabs
              default-active-key="1"
              size="large"
              :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}"
            >
              <a-tab-pane loading="true" tab="我的申请单" key="1">
                <div class="my-application">
                  <a-row>
                    <a-col>
                      <div class="application-table">
                        <a-table :dataSource="data1">
                          <a-table-column title="编号" data-index="code" key="code" align="center"></a-table-column>
                          <a-table-column
                            title="申请时间"
                            data-index="appTime"
                            key="appTime"
                            align="center"
                          />
                          <a-table-column
                            title="平台"
                            data-index="platform"
                            key="platform"
                            align="center"
                          />
                          <a-table-column
                            title="产品"
                            data-index="proName"
                            key="proName"
                            align="center"
                          ></a-table-column>
                          <a-table-column
                            title="贷款本金"
                            key="principal"
                            data-index="principal"
                            align="center"
                          ></a-table-column>
                          <a-table-column
                            title="贷款周期"
                            data-index="cycle"
                            key="cycle"
                            align="center"
                          />
                          <a-table-column title="审批状态" key="status" align="center">
                            <template slot-scope="text, record">
                              <div class="success-cls" v-if="text.statusCode==='1'">成功</div>
                              <div class="error-cls" v-else>
                                失败
                                <p>原因：身份审核未通过</p>
                              </div>
                            </template>
                          </a-table-column>
                          <a-table-column title="操作" key="action" align="center">
                            <template slot-scope="text, record">
                              <div class="btns" v-if="text.statusCode==='1'">
                                <a-button type="primary" size="small">查看详情</a-button>
                                <br>
                                <a-button type="primary" size="small" class="btn2">还款</a-button>
                              </div>
                              <div class="btns" v-else-if="text.statusCode==='2'">
                                <a-button type="primary" size="small">重新申请</a-button>
                              </div>
                            </template>
                          </a-table-column>
                        </a-table>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </a-tab-pane>
              <a-tab-pane tab="还款" key="2">
                <div class="top-box">
                  <div class="money-title">总贷款金额</div>
                  <div class="money-num">567.00</div>
                  <div class="money-msg">
                    <p class="service">待付服务费：5.23</p>
                    <p class="breach">待付违约金：0</p>
                  </div>
                </div>
                <div class="my-application">
                  <a-row>
                    <a-col>
                      <div class="application-table">
                        <a-table :dataSource="data2">
                          <a-table-column title="编号" data-index="code" key="code" align="center"></a-table-column>
                          <a-table-column
                            title="申请时间"
                            data-index="appTime"
                            key="appTime"
                            align="center"
                          />
                          <a-table-column
                            title="平台"
                            data-index="platform"
                            key="platform"
                            align="center"
                          />
                          <a-table-column
                            title="产品"
                            data-index="proName"
                            key="proName"
                            align="center"
                          ></a-table-column>
                          <a-table-column
                            title="贷款本金"
                            key="principal"
                            data-index="principal"
                            align="center"
                          ></a-table-column>
                          <a-table-column
                            title="贷款周期"
                            data-index="cycle"
                            key="cycle"
                            align="center"
                          />
                          <a-table-column title="待还款" align="center">
                            <template slot-scope="text">
                              <div :class="[text.red=='1'?'red':'']">{{text.wait}}</div>
                            </template>
                          </a-table-column>
                          <a-table-column title="服务费" align="center">
                            <template slot-scope="text">
                              <div :class="[text.red=='1'?'red':'']">{{text.serviceCharge}}</div>
                            </template>
                          </a-table-column>
                          <a-table-column
                            title="还款日"
                            data-index="repayment"
                            key="repayment"
                            align="center"
                          />
                          <a-table-column title="逾期" align="center">
                            <template slot-scope="text">
                              <div :class="[text.red=='1'?'red':'']">{{text.overdue}}</div>
                            </template>
                          </a-table-column>
                          <a-table-column title="违约金" align="center">
                            <template slot-scope="text">
                              <div :class="[text.red=='1'?'red':'']">{{text.falsify}}</div>
                            </template>
                          </a-table-column>
                          <a-table-column title="审批状态" key="status" align="center"></a-table-column>
                          <a-table-column title="操作" key="action" align="center">
                            <template slot-scope="text">
                              <div class="btns">
                                <a-button type="primary" size="small">立即还款</a-button>
                              </div>
                            </template>
                          </a-table-column>
                        </a-table>
                      </div>
                    </a-col>
                  </a-row>
                </div>
              </a-tab-pane>
              <a-tab-pane tab="账户管理" key="3"></a-tab-pane>
            </a-tabs>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const data1 = [{
  key: '1',
  code: '1',
  appTime: '2018.01.01',
  platform: '易汇金融',
  proName: '小额贷',
  principal: '50.000',
  cycle: '6个月',
  statusCode: '1',
  status: ''
},
{
  key: '2',
  code: '2',
  appTime: '2019.01.01',
  platform: '小赢卡贷',
  proName: '小额贷',
  principal: '50.000',
  cycle: '3个月',
  statusCode: '2',
  status: ''

}]
const data2 = [{
  key: '1',
  code: '1',
  appTime: '2018.01.01',
  platform: '易汇金融',
  proName: '小额贷',
  principal: '50.000',
  cycle: '6个月',
  wait: '438.00',
  serviceCharge: '432',
  repayment: '2018.07.01',
  overdue: '1',
  falsify: '10',
  red: '1'
},
{
  key: '2',
  code: '2',
  appTime: '2019.01.01',
  platform: '小赢卡贷',
  proName: '小额贷',
  principal: '50.000',
  cycle: '3个月',
  wait: '432',
  serviceCharge: '100',
  repayment: '2019.04.01',
  overdue: '-',
  falsify: '-',
  red: '0'
}]
export default {
  name: 'statistics',
  components: {

  },
  data () {
    return {
      //
      loading: false,
      data1,
      data2
    }
  }
}
</script>

<style scoped lang='less'>
.top-box {
  color: #777777;
  margin-left: 71px;
  .money-title {
    font-size: 24px;
  }
  .money-num {
    color: #f35555;
    font-size: 71px;
    font-weight: 600;
  }
  .money-msg {
    .service {
    }
    .breach {
    }
  }
}
.my-application {
  // text-align: center;
  font-size: 18px;
  .application-table {
    position: relative;
    left: 50%;
    width: 80%;
    transform: translateX(-50%);
  }
}
.btns {
  text-align: center;
  .btn2 {
    margin-top: 12px;
  }
}
.success-cls {
  text-align: center;
  color: #7ed321;
  font-size: 20px;
}
.error-cls {
  color: #ff3b3b;
  text-align: center;
  font-size: 20px;
  p {
    color: #898989;
    font-size: 12px;
  }
}
.red {
  color: #ff3b3b;
}
/deep/.ant-table-thead > tr > th,
/deep/.ant-table-tbody > tr > td {
  padding: 16px 0 !important;
}
</style>
