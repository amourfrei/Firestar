<template>
  <div class="search-cont table-page-search-wrapper">
    <a-row>
      <a-col>
        <a-card>
          <a-form layout="inline">
            <a-row type="flex" justify="space-between" :gutter="48" align="middle">
              <a-col :md="6" :sm="24">
                <a-form-item style="margin-bottom:0;" label="贷款类型">
                  <a-select v-model="queryParam.status3" placeholder="企业" default-value="0">
                    <a-select-option value="0">企业</a-select-option>
                    <a-select-option value="1">个人</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col :md="6" :sm="24">
                <a-form-item style="margin-bottom:0;" label="贷款金额">
                  <a-select v-model="queryParam.status2" placeholder="50万元" default-value="0">
                    <a-select-option value="0">50万元</a-select-option>
                    <a-select-option value="1">100万元</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col :md="6" :sm="24">
                <a-form-item style="margin-bottom:0;" label="贷款期限">
                  <a-select v-model="queryParam.status1" placeholder="12个月" default-value="0">
                    <a-select-option value="0">6个月</a-select-option>
                    <a-select-option value="1">12个月</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col :md="4" :sm="24">
                <a-button type="primary">搜索贷款</a-button>
              </a-col>
            </a-row>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
    <a-row>
      <a-col>
        <router-link to="/stas">
          <div class="data-cont-p normal-cont">
            <div class="title">
              <span class="title-main">产品列表</span>
              <b class="title-sub">Platform Data</b>
            </div>
            <ProItem :proList="proList"></ProItem>
          </div>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { ProItem } from '@/components'
export default {
  name: 'search',
  components: {
    ProItem
  },
  data () {
    return {
      queryParam: {},
      proList: [
        {
          src: '',
          name: '我来贷-工薪贷',
          number: '5000-300000',
          msg: '额度范围(元)',
          loanTime: '2天放款',
          rate: '月费率1.71%-3%',
          termTime: '6-12个月'
        },
        {
          src: '',
          name: '我来贷-工薪贷',
          number: '5000-300000',
          msg: '额度范围(元)',
          loanTime: '2天放款',
          rate: '月费率1.71%-3%',
          termTime: '6-12个月'
        },
        {
          src: '',
          name: '我来贷-工薪贷',
          number: '5000-300000',
          msg: '额度范围(元)',
          loanTime: '2天放款',
          rate: '月费率1.71%-3%',
          termTime: '6-12个月'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.data-cont-p {
  margin-top: 48px;
}
.normal-cont {
  background: #ffffff;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.05);
  padding: 30px;
  .title-main {
    font-size: 32px;
    color: #3e3e3e;
    letter-spacing: 1.48px;
  }
  .title-sub {
    font-size: 16px;
    color: #e7e7e7;
    letter-spacing: 0.74px;
    margin-left: 20px;
  }
}
.sample-list {
  margin-top: 30px;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease-in 0s;
  }
}
</style>
