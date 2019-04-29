<template>
  <div class="home-cont">
    <div class="info-cont">
      <div class="info-cont_left normal-cont">
        <div class="title">
          <span class="title-main">金融平台</span> <b class="title-sub">Finance Platform</b>
        </div>
        <div class="platform-sam-cont">
          <img
            class="platform-sam"
            src="../assets/sample-5.png"
          />
          <img
            class="platform-sam"
            src="../assets/sample-6.png"
          />
          <img
            class="platform-sam"
            src="../assets/sample-7.png"
          />
        </div>
      </div>
      <div class="info-cont_right normal-cont">
        <div class="title">
          <span class="title-main">行业动态</span> <b class="title-sub">Industry News</b>
        </div>
        <a-divider></a-divider>
        <div class="info-chunk">
          <img src="../assets/sample-8.png">
          <div class="info-inner">
            <p class="i-t">
              2017-05-11
            </p>
            <p class="i-a">
              网络借贷资金存管业务指引
            </p>
          </div>
        </div>
        <a-divider></a-divider>
        <div class="info-chunk">
          <img src="../assets/sample-9.png">
          <div class="info-inner">
            <p class="i-t">
              2018-12-11
            </p>
            <p class="i-a">
              网络借贷资金存管业务指引
            </p>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="data-cont normal-cont">
      <div class="title">
        <span class="title-main">平台数据</span> <b class="title-sub">Platform Data</b>
      </div>
      <div class="data-main-cont">
        <img
          width="100%"
          src="../assets/sample-11.png"
        />
      </div>
      <div class="data-footer-cont">
        <span>2000</span><b>家监管企业</b>
        <span>10</span><b>家高风险企业</b>
        <span>0.5%</span><b>高风险企业占比</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="less" scoped>
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
