<template>
  <div class="apply table-page-search-wrapper">
    <a-row>
      <a-col>
        <div class="apply-titile">
          <a-row>
            <a-col :span="16">
              <div class="title-l">
                <span class="title-name">我来贷-工薪贷</span>
                <span class="title-img-s">
                  <img
                    src="../assets/03-gxd.jpg"
                    class="title-img"
                    alt
                  >
                </span>
              </div>
              <div class="title-content">
                <img
                  src="../assets/04-gxd.jpg"
                  class="t-content-img"
                  alt
                >
              </div>
              <div class="title-form">
                <a-form>
                  <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="贷款金额"
                    class="form-item-w1"
                    help
                  >
                    <a-input
                      id="error"
                      placeholder
                      addonAfter="万元"
                    />
                  </a-form-item>
                  <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="贷款期限"
                    class="form-item-w2"
                    help
                  >
                    <a-input
                      id="error"
                      placeholder
                      addonAfter="个月"
                    />
                  </a-form-item>
                  <router-link to="/step-one">
                    <a-button
                      class="apply-btn"
                      size="large"
                    >立即申请</a-button>
                  </router-link>
                  <div class="apply-btn-msg">
                    <span>414</span>人成功申请
                  </div>
                </a-form>
              </div>
              <div class="form-item-1-msg">额度范围：5-50万</div>
              <div class="form-item-2-msg">期限范围：12-60个月</div>
            </a-col>

            <a-col
              :span="8"
              style="text-align: center;"
            >
              <v-chart
                :force-fit="true"
                :height="405"
                :data="pieData"
                :scale="pieScale"
              >
                <v-tooltip
                  :showTitle="false"
                  data-key="item*percent"
                />
                <v-axis />
                <!-- position="right" :offsetX="-140" -->
                <v-legend data-key="item" />
                <v-pie
                  position="percent"
                  color="item"
                  :vStyle="pieStyle"
                  :label="labelConfig"
                />
                <v-coord
                  type="theta"
                />
              </v-chart>
            </a-col>
          </a-row>
        </div>
        <a-row style="margin-top: 30px;">
          <a-col>
            <a-card
              :loading="loading"
              :bordered="false"
              :body-style="{padding: '0'}"
            >
              <div class="salesCard">
                <a-tabs
                  default-active-key="1"
                  size="large"
                  :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}"
                >
                  <a-tab-pane
                    loading="true"
                    tab="费用说明"
                    key="1"
                  >
                    <a-row>
                      <a-col>
                        <p class="key-1-msg">
                          月费率0.96%-2.98%，实际以机构批款情况为准。按月计费，如批款费率为2.9%则包含：月利率0.8%、月账户管理费2.08%、
                          快速审批费1.16%/笔，在第一期还款时扣除。月费率0.96%-2.98%，实际以机构批款情况为准。按月计费，如批款费率为2.9%
                          则包含：月利率0.8%、月账户管理费2.08%、快速审批费1.16%/笔，在第一期还款时扣除。
                          举例：贷款10000元，期限贷款10000元，期限为12个月，月费率2.88%，到账10000元，快速审批费116元在第一期还款时扣除。
                          第一期还款金额为1237.33元，剩下期数还款金额为1121.33元，应还款金额13638。实际金额及费率以账单为准，实际授信期限
                          以机构批款情况为准。举例：贷款10000元，期限贷款10000元，期限为12个月，月费率2.88%，到账10000元，快速审批费116
                          第一期还款金额为1237.33元，剩下期数还款金额为1121.33元，应还款金额13638。实际金额及费率以账单为准，实际授信期限
                          以机构批款情况为准。
                        </p>
                      </a-col>
                    </a-row>
                  </a-tab-pane>
                  <a-tab-pane
                    tab="还款说明"
                    key="2"
                  >
                    <a-row>
                      <a-col>
                        <div
                          class="ex-item"
                          v-for="(item,index) in exList"
                          :key="index"
                        >
                          <div class="ex-title">{{item.title}}</div>
                          <div class="ex-msg">{{item.msg}}</div>
                        </div>
                      </a-col>
                    </a-row>
                  </a-tab-pane>
                  <a-tab-pane
                    tab="流程办理"
                    key="3"
                  >
                    <a-row>
                      <a-col
                        :span="18"
                        :offset="3"
                      >
                        <a-steps
                          :current="2"
                          class="process-pad"
                        >
                          <a-step>
                            <span slot="title">基本信息及实名认证</span>
                          </a-step>
                          <a-step title="证件上传" />
                          <a-step title="确认贷款信息" />
                        </a-steps>
                      </a-col>
                    </a-row>
                  </a-tab-pane>
                </a-tabs>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set')

const sourceData = [{ item: '贷款10万／12个月', count: 80 }, { item: '利息3900元', count: 6 }, {item: '费用0元（0% / 月）', count: 12 }, {item: '一次性0元（0%）', count: 2}]

const pieScale = [
  {
    dataKey: 'percent',
    min: 0,
    formatter: '.0%'
  }
]

const dv = new DataSet.View().source(sourceData)
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
})
const pieData = dv.rows
export default {
  name: 'collect',
  data() {
    return {
      loading: false,
      pieScale,
      pieData,
      sourceData,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      labelConfig: [
        'percent',
        {
          // offset: -100,
          textStyle: {
            rotate: '90deg',
            textAlign: 'center',
            shadowBlur: 2,
            fontSize: '20',
            shadowColor: 'rgba(0, 0, 0, .45)'
          }
        }
      ],
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      },
      exList: [
        {
          title: '还款方式：',
          msg: '银行代扣：还款日当天01:31从绑定银行卡中自动扣款 主动还款'
        },
        {
          title: '提前还款：',
          msg: '单期提前还款，提前还款，贷款费用不减免，全部结清：需按顺序逐期还款'
        },
        {
          title: '逾期政策：',
          msg: '按剩余应还金额x0.5%／天，按天收取违约金'
        }
      ]
    }
  },
  methods: {
    changeActive: function(val) {
      this.active = val
    }
  }
}
</script>

<style scoped lang="less">
.apply {
  .apply-titile {
    background: #fff;
    padding: 20px 25px;
    .title-l {
      padding: 10px;
      border-bottom: 3px solid #4879d5;
      overflow: hidden;
      .title-name {
        display: inline-block;
        font-size: 28px;
        color: #333;
        float: left;
      }
      .title-img-s {
        display: inline-block;
        float: right;
        .title-img {
          width: 50px;
        }
      }
    }
    .title-content {
      border-bottom: 1px dashed #ccc;
      padding: 20px 0;
      .t-content-img {
        width: 450px;
      }
    }
    .title-form {
      overflow: hidden;
      margin-top: 30px;
      .form-item-w1,
      .form-item-w2 {
        width: 350px;
        float: left;
        .form-item-1-msg {
          position: absolute;
          left: 0;
        }
      }
      .form-item-w2 {
        margin-left: -80px;
      }
      .apply-btn {
        width: 140px;
        color: #fff;
        background-image: linear-gradient(-180deg, #fad448 0%, #f9a578 100%);
      }
    }
    .form-item-1-msg,
    .form-item-2-msg {
      width: 350px;
      float: left;
      color: #ccc;
    }
    .form-item-2-msg {
      margin-left: -80px;
    }
    .apply-btn-msg {
      text-align: center;
      color: #333;
      margin-top: 10px;
      font-size: 18px;
      span {
        color: red;
      }
    }
  }
  .key-1-msg {
    padding: 0px 65px 65px 60px;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #6b6b6b;
    letter-spacing: 0.74px;
  }
  .ex-item {
    padding-left: 60px;
    padding-bottom: 35px;
    .ex-title {
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #6b6b6b;
      letter-spacing: 0.99px;
    }
    .ex-msg {
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #6b6b6b;
      letter-spacing: 0.74px;
    }
  }
  .process-pad {
    padding: 105px 0;
  }
}
</style>
