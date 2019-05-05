<template>
  <div class="search-cont table-page-search-wrapper">
    <a-row>
      <a-col>
        <a-card>
          <a-form layout="inline">
            <a-row
              type="flex"
              justify="space-between"
              :gutter="48"
              align="middle"
            >
              <a-col
                :md="15"
                :sm="24"
              >
                <b
                  @click="changeActive(1)"
                  :class="active === 1 ? 'active' : ''"
                  class="p-button"
                >综合排序</b>
                <b
                  @click="changeActive(2)"
                  :class="active === 2 ? 'active' : ''"
                  class="p-button"
                >评分排序</b>
                <b
                  @click="changeActive(3)"
                  :class="active === 3 ? 'active' : ''"
                  class="p-button"
                >息费排序</b>
                <b
                  @click="changeActive(4)"
                  :class="active === 4 ? 'active' : ''"
                  class="p-button"
                >交易排序</b>
                <b
                  @click="changeActive(5)"
                  :class="active === 5 ? 'active' : ''"
                  class="p-button"
                >成立时间</b>
              </a-col>

              <a-col
                :md="3"
                :sm="24"
                style="text-align: right;"
              >
                <a class="normal-link">更多条件</a>
              </a-col>
            </a-row>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
    <a-row>
      <a-col>
        <div class="data-cont-p normal-cont">
          <div class="title">
            <span class="title-main">产品列表</span>
            <b class="title-sub">Platform Data</b>
          </div>
          <ProItem :proList="proList"></ProItem>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { ProItem } from '@/components'
export default {
  name: 'collect',
  components: {
    ProItem
  },
  data() {
    return {
      queryParam: {},
      active: 1,
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
  },
  methods: {
    changeActive: function(val) {
      this.active = val
    }
  }
}
</script>

<style scoped lang="less">
.sample-list {
  margin-top: 30px;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease-in 0s;
  }
}
.p-button {
  display: inline-block;
  width: 100px;
  height: 40px;
  margin-right: 30px;
  text-align: center;
  line-height: 40px;
  transition: all 0.2s ease-in 0s;
  border-radius: 2px;
  &:hover,
  &.active {
    background: #2c68ff;
    color: #fff;
    cursor: pointer;
  }
}

.data-cont-p {
  margin-top: 48px;
}
.home-cont {
  width: 100%;
  .banner {
    width: 100%;
    height: 533px;
    background: url('../assets/home-bg.png');
  }
  .login-cont {
    width: 360px;
    height: 375px;
    background: #fff;
  }
}
.info-cont_left {
  float: left;
  width: 794px;
  height: 439px;
}
.info-cont_right {
  width: 359px;
  height: 439px;
  float: right;
}
.data-cont {
  width: 100%;
  height: 777px;
  margin-top: 40px;
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
.info-chunk img:hover,
.platform-sam:hover {
  transform: translate(0, -8px);
  box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in 0s;
}
.platform-sam:nth-of-type(n + 2) {
  margin-left: 30px;
}
.platform-sam-cont {
  margin-top: 30px;
}
.data-footer-cont {
  margin-top: 20px;
}
.data-main-cont {
  margin-top: 10px;
  overflow: hidden;
  .data-main-cont-l {
    float: left;
    width: 531px;
  }
  .data-main-cont-r {
    float: left;
    width: 500px;
  }
}
.data-footer-cont span {
  font-size: 28px;
  color: #2c67ff;
  margin-left: 20px;
}
.info-inner {
  width: 150px;
  float: right;
  .i-t {
    font-size: 18px;
    color: #b8b8b8;
    letter-spacing: 0.74px;
  }
  .i-a {
    font-size: 16px;
    color: #3e3e3e;
    letter-spacing: 0.74px;
  }
}
</style>
