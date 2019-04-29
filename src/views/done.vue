<template>

  <div class="step-done-cont table-page-search-wrapper">
    <a-row>
      <a-col>
        <a-card title="提交成功">
          <a-form layout="inline">
            <a-row
              type="flex"
              :gutter="40"
              justify="center"
            >
              <a-icon
                :class="{ 'icon': true, 'success': true }"
                :type="'check-circle'"
              />
            </a-row>
            <p class="success-tip">贵司的申请已提交成功！</p>
              <p class="normal-tip">我们会在2个工作日内反馈
              审核结果
              </p>
              <a-row
                type="flex"
                :gutter="40"
                justify="center"
                style="margin: 50px 0 30px 0;"
              >
                <a-col
                  :md="6"
                  :sm="24"
                >
                  <router-link to="/home">
                    <a-button
                      type="primary"
                      style="width: 100%"
                    >返回首页</a-button>
                  </router-link>
                </a-col>
                <a-col
                  :md="3"
                  :sm="24"
                >
                  <router-link to="/home">
                    <a-button
                      type="primary"
                      ghost
                    >查看账户</a-button>
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

<style scoped lang="less">
.warn-tips {
  color: #e75319;
  letter-spacing: 0.74px;
}
.step-done-cont {
  .icon {
    font-size: 72px;
    line-height: 72px;
    margin-bottom: 24px;
  }
  .success {
    color: #2c68ff;
  }
  .success-tip{
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }
  .normal-tip{
    text-align: center;
  }
}
</style>
