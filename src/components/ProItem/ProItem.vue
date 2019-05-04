
<template>
  <div class="pro-list">
    <div class="pro-item" v-for="(item,index) in proList" :key="index">
      <div class="item-l">
        <div class="pro-icon">
          <img src="../../assets/01-gxd.png" class="pro-icon-img" alt>
        </div>
        <div class="pro-info">
          <div class="t-name">{{item.name}}</div>
          <div class="t-money">{{item.number}}</div>
          <div class="t-msg">{{item.msg}}</div>
        </div>
      </div>
      <div class="item-c">
        <p class="pro-concrete">{{item.loanTime}}</p>
        <p class="pro-concrete">{{item.rate}}</p>
        <p class="pro-concrete">{{item.termTime}}</p>
      </div>
      <div class="item-r">
        <a-button type="primary" class="pro-btn">平台详情</a-button>
        <a-button type="danger" class="pro-btn">申请贷款</a-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProItem',
  props: {
    proList: {
      type: Array
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.pro-list {
  .pro-item {
    padding: 30px;
    overflow: hidden;
    position: relative;
    .item-l {
      position: relative;
      float: left;
      width: 40%;
      .pro-icon {
        float: left;
        .pro-icon-img {
          width: 90px;
          height: 90px;
          border: 1px solid #ccc;
        }
      }
      .pro-info {
        float: left;
        font-size: 20px;
        margin-left: 25px;
        width: 230px;
        .t-name {
          color: #2c67ff;
          font-weight: 600;
        }
        .t-money {
          margin-top: 10px;
          color: #ed2d2d;
          font-size: 26px;
          font-weight: 600;
        }
        .t-msg {
          margin-top: 10px;
          color: #707070;
          font-size: 20px;
        }
      }
    }
    .item-l::after {
      position: absolute;
      content: ' ';
      width: 1px;
      right: 0;
      top: 0;
      height: 138px;
      border-right: 1px solid #ccc;
    }
    .item-c {
      width: 30%;
      float: left;
      position: relative;
      .pro-concrete {
        padding-left: 40px;
        color: #707070;
        font-size: 20px;
        line-height: 1;
      }
    }
    .item-c::after {
      position: absolute;
      content: ' ';
      width: 1px;
      right: 0;
      top: 0;
      height: 138px;
      border-right: 1px solid #ccc;
    }
    .item-r {
      float: left;
      .pro-btn {
        display: block;
        width: 210px;
        height: 50px;
        margin-left: 40px;
        margin-top: 10px;
      }
    }
  }
  .pro-item::after {
    position: absolute;
    content: ' ';
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #ccc;
    left: 0;
    bottom: 0;
    padding: 30px;
  }
}
</style>
