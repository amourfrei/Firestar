<template>

  <div class="step-one-cont table-page-search-wrapper">
    <a-row>
      <a-col>
        <a-card title="企业实名认证">
          <a-row>
            <a-col
              :span="18"
              :offset="3"
            >
              <a-steps :current="2">
                <a-step>
                  <span slot="title">基本信息及实名认证</span>
                </a-step>
                <a-step title="证件上传" />
                <a-step title="确认贷款信息" />
              </a-steps>
            </a-col>
          </a-row>

          <a-divider
            style="margin:40px 0;"
            orientation="left"
          >企业信息</a-divider>

          <a-form layout="inline">
            <a-row
              type="flex"
              justify="center"
              :gutter="48"
            >
              <a-col
                :md="7"
                :sm="24"
              >
                <a-form-item label="企业名称">
                  <span><a>50</a>万元</span>
                </a-form-item>
              </a-col>
              <a-col
                :md="7"
                :sm="24"
              >
                <a-form-item label="额度范围">
                  <span>5.00 ~ 200.00万元</span>
                </a-form-item>
              </a-col>
              <a-col
                :md="7"
                :sm="24"
              >
                <a-form-item label="总费用">
                  <span><a>1.74</a>万元</span>
                </a-form-item>
              </a-col>
              <a-col
                :md="7"
                :sm="24"
              >
                <a-form-item label="期限">
                  <span>12个月</span>
                </a-form-item>
              </a-col>

              <a-col
                :md="7"
                :sm="24"
              >
                <a-form-item label="期限范围">
                  <span>12 - 60个月</span>
                </a-form-item>
              </a-col>

              <a-col
                :md="7"
                :sm="24"
              >
                <a-form-item label="费用说明">
                  <span>参考月利率0.56%</span>
                </a-form-item>
              </a-col>

              <a-col
                :md="7"
                :sm="24"
              >
                <a-form-item label="月供">
                  <span>43199元</span>
                </a-form-item>
              </a-col>

              <a-col
                :md="7"
                :sm="24"
              >
                <a-form-item label="还款方式">
                  <span>分期还款</span>
                </a-form-item>
              </a-col>

              <a-col
                :md="7"
                :sm="24"
              >
                <a-form-item label="放款时间">
                  <span>7个工作日（审批为5个工作日）</span>
                </a-form-item>
              </a-col>
            </a-row>

            <a-row
              type="flex"
              :gutter="40"
              justify="center"
              style="margin:50px 0 30px 0;"
            >
              <a-col
                :md="21"
                :sm="24"
              >
                <p class="manual">仅限批发零售业、注册经营满3年、月对公流水20万以上</p>
                <p class="manual">1、经营年限：公司注册经营满3年</p>
                <p class="manual">2、经营场所要求：沿街门店或专业市场专柜</p>
                <p class="manual">3、流水要求：月对公银行流水20万以上</p>
                <p class="manual">4、房产要求：需提供名下本地房产</p>
                <p class="manual">5、行业要求：仅限批发零售业</p>
                <p class="manual">6、房产要求：家庭对外负债支出不超过家庭总收入的70%</p>
                <p class="warn-tips">温馨提示：仅限批发零售业、注册经营满3年、月对公流水20万以上方可申请</p>
              </a-col>
            </a-row>

            <a-row
              type="flex"
              :gutter="40"
              justify="center"
            >
              <a-col
                :md="6"
                :sm="24"
              >
                <router-link to="/done">
                  <a-button
                    type="primary"
                    style="width: 100%"
                  >下一步</a-button>
                </router-link>
              </a-col>
              <a-col
                :md="3"
                :sm="24"
              >
                <router-link to="/step-two">
                  <a-button
                    type="primary"
                    ghost
                  >返回</a-button>
                </router-link>
              </a-col>
            </a-row>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>

</template>

<script>
export default {
  name: 'stepThree'
}
</script>

<style scoped>
.warn-tips {
  color: #e75319;
  letter-spacing: 0.74px;
}
</style>
