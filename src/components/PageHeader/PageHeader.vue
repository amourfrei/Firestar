<template>
  <div class="c-home-cont">
    <div class="page-header">
      <div class="page-header-index-wide">
        <!-- <s-breadcrumb /> -->
        <div class="detail">
          <div class="main" v-if="!$route.meta.hiddenHeaderContent">
            <div class="row">
              <div class="j-logos">
                <img src="../../assets/logo-d.png">
                <a-divider class="logo-divider" type="vertical"/>
                <p class="logo-title">京东城市贷款平台</p>
              </div>
              <div class="j-menus">
                <router-link to="/home">
                  <a class="j-menu-title">首页</a>
                </router-link>
                <router-link to="/collect">
                  <a class="j-menu-title">申请贷款</a>
                </router-link>
                <router-link to="/home">
                  <a class="j-menu-title">老赖公示</a>
                </router-link>
                <router-link to="/account">
                  <a class="j-menu-title">我的账户</a>
                </router-link>
              </div>

              <a-input-group class="j-search" compact>
                <!-- <a-select
                  size="large"
                  defaultValue="企业"
                >
                  <a-select-option value="Sign Up">企业</a-select-option>
                  <a-select-option value="Sign In">个人</a-select-option>
                </a-select>-->
                <a-input-search
                  placeholder="请输入搜索关键字"
                  style="width: 170px; float:right;"
                  size="large"
                />
              </a-input-group>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="login-cont-outer" v-if="$route.meta.showLoginCont">
      <div class="login-cont">
        <div class="login-inner">
          <a-card
            style="width:100%;"
            headStyle="padding-left: 40px;"
            :tabList="tabListNoTitle"
            :activeTabKey="noTitleKey"
            @tabChange="key => onTabChange(key, 'noTitleKey')"
          >
            <div v-if="noTitleKey">
              <a-form
                id="components-form-demo-normal-login"
                :form="form"
                class="login-form"
                @submit="handleSubmit"
              >
                <a-form-item>
                  <a-input
                    size="large"
                    v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
                    placeholder="邮箱/用户名/已验证手机号"
                  >
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-input
                    size="large"
                    v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
                    type="password"
                    placeholder="登录密码"
                  >
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-checkbox
                    v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
                  >记住我</a-checkbox>
                  <a class="login-form-forgot" href>忘记密码?</a>
                  <a-button
                    type="primary"
                    html-type="submit"
                    class="login-form-button"
                    size="large"
                  >登录</a-button>
                  <a
                    style="position:relative; top: 30px;float: right;"
                    href="#"
                    @click="showModal"
                  >注册</a>
                </a-form-item>
              </a-form>
            </div>
            <!-- <div v-else="noTitleKey === 'company'">app content</div> -->
          </a-card>
        </div>
      </div>
    </div>

    <div class="search-list-outer" v-if="$route.meta.showSearchList">
      <div class="search-header-list">
        <a-row type="flex" justify="space-between" :gutter="48" align="middle">
          <a-col :md="6" :sm="24">
            <a-input-group style="margin-top: -12px;display:flex;" class="j-search" compact>
              <a-select defaultValue="企业">
                <a-select-option value="Sign Up">企业</a-select-option>
                <a-select-option value="Sign In">个人</a-select-option>
              </a-select>
              <a-input-search placeholder="请输入搜索关键字" style="width: 170px"/>
            </a-input-group>
          </a-col>

          <a-col :md="18" :sm="24">
            <ul>
              <li>首字母筛选</li>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
              <li>G</li>
              <li>H</li>
              <li>I</li>
              <li>J</li>
              <li>K</li>
              <li>L</li>
              <li>M</li>
              <li>N</li>
              <li>O</li>
              <li>P</li>
              <li>Q</li>
              <li>R</li>
              <li>S</li>
              <li>T</li>
              <li>U</li>
              <li>V</li>
              <li>W</li>
              <li>X</li>
              <li>Y</li>
              <li>Z</li>
            </ul>
          </a-col>
        </a-row>
      </div>
    </div>

    <a-modal v-model="visible" title="企业新用户注册" onOk="handleOk" :width="380">
      <template slot="footer">
        <div class="go-login-cont">
          已有账号？
          <a class @click="handleOk">立即登录</a>
        </div>
      </template>

      <div class="table-page-search-wrapper">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          style="padding-bottom:30px;"
          @submit="handleSubmit"
          layout="inline"
        >
          <a-form-item label="企业名称">
            <a-input size="large" placeholder="企业名称"></a-input>
          </a-form-item>
          <a-form-item label="手机号">
            <a-input size="large" placeholder="手机号"></a-input>
          </a-form-item>
          <a-form-item label="登录密码">
            <a-input size="large" type="password" placeholder="登录密码"></a-input>
          </a-form-item>

          <a-form-item label="验证码">
            <a-input size="large" type="password" placeholder="登录密码" style="width: 137px;"></a-input>
            <a-button
              style="margin-left: 15px;display: inline-block;width: 100px;text-align: center;padding: 0;"
              size="large"
              type="primary"
              disabled
            >获取验证码</a-button>
          </a-form-item>

          <a-form-item>
            <a-checkbox>我已经阅读同意</a-checkbox>
            <a href>《服务条款》</a>
            <a-button type="primary" html-type="submit" class="login-form-button" size="large">确认</a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'

export default {
  name: 'PageHeader',
  components: {
    's-breadcrumb': Breadcrumb
  },
  props: {
    title: {
      type: [String, Boolean],
      default: true,
      required: false
    },
    logo: {
      type: String,
      default: '',
      required: false
    },
    avatar: {
      type: String,
      default: '',
      required: false
    }
  },
  data () {
    return {
      dataSource: [],
      loading: false,
      visible: false,
      queryParam: {},
      tabList: [
        {
          key: 'tab1',
          // tab: 'tab1',
          scopedSlots: { tab: 'customRender' }
        },
        {
          key: 'tab2',
          tab: 'tab2'
        }
      ],
      contentList: {
        tab1: 'content1',
        tab2: 'content2'
      },
      tabListNoTitle: [
        {
          key: 'personal',
          tab: '我是个人'
        },
        {
          key: 'company',
          tab: '我是企业'
        }
      ],
      key: 'tab1',
      noTitleKey: 'personal',
      form: ""
    }
  },
  methods: {
    handleChange (value) {
      this.dataSource =
        !value || value.indexOf('@') >= 0 ? [] : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`]
    },
    onTabChange (key, type) {
      console.log(key, type)
      this[type] = key
    },
    handleSubmit (e) {
      e.preventDefault()
    },
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      this.loading = true
      setTimeout(() => {
        this.visible = false
        this.loading = false
      }, 3000)
    },
    handleCancel (e) {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.page-header {
  background: #fff;
  // padding: 16px 32px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  .logo-divider {
    height: 30px;
  }

  .j-menus {
    width: 325px;
  }

  .j-logos {
    width: 435px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .j-search {
    width: 250px;
  }

  .logo-title {
    font-size: 24px;
    color: #2c68ff;
    margin-bottom: 0;
  }

  .j-menu-title {
    margin-left: 20px;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.66px;
    text-align: center;
    &:hover {
      color: #2c68ff;
    }
  }

  .detail {
    display: flex;
    /*margin-bottom: 16px;*/

    .avatar {
      flex: 0 1 72px;
      margin: 0 24px 8px 0;

      & > span {
        border-radius: 72px;
        display: block;
        width: 72px;
        height: 72px;
      }
    }

    .main {
      width: 100%;
      flex: 0 1 auto;

      .row {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        .avatar {
          margin-bottom: 16px;
        }
      }

      .title {
        font-size: 20px;
        font-weight: 500;

        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        margin-bottom: 16px;
        flex: auto;
      }
      .logo {
        width: 28px;
        height: 28px;
        border-radius: 4px;
        margin-right: 16px;
      }
      .content,
      .headerContent {
        flex: auto;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;

        .link {
          margin-top: 16px;
          line-height: 24px;

          a {
            font-size: 14px;
            margin-right: 32px;
          }
        }
      }
      .extra {
        flex: 0 1 auto;
        margin-left: 88px;
        min-width: 242px;
        text-align: right;
      }
      .action {
        margin-left: 56px;
        min-width: 266px;
        flex: 0 1 auto;
        text-align: right;
        &:empty {
          display: none;
        }
      }
    }
  }
}

.mobile .page-header {
  .main {
    .row {
      flex-wrap: wrap;
      .avatar {
        flex: 0 1 25%;
        margin: 0 2% 8px 0;
      }

      .content,
      .headerContent {
        flex: 0 1 70%;

        .link {
          margin-top: 16px;
          line-height: 24px;

          a {
            font-size: 14px;
            margin-right: 10px;
          }
        }
      }

      .extra {
        flex: 1 1 auto;
        margin-left: 0;
        min-width: 0;
        text-align: right;
      }

      .action {
        margin-left: unset;
        min-width: 266px;
        flex: 0 1 auto;
        text-align: left;
        margin-bottom: 12px;

        &:empty {
          display: none;
        }
      }
    }
  }
}
.search-header-list {
  height: 48px;
  line-height: 48px;
  text-align: right;
  max-width: 1200px;
  margin: 0 auto;
  ul {
    list-style-type: none;
    padding: 0 20px 0 0;
    text-align: right;
    li {
      display: inline-block;
      margin-left: 10px;
      &:nth-of-type(n + 2):hover {
        color: #2c67ff;
        cursor: default;
      }
    }
  }
}
.search-list-outer {
  background: #fff;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
}
.login-cont {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  height: 533px;
  background: url('../../assets/home-bg.png');
}
.login-inner {
  width: 360px;
  height: 375px;
  position: absolute;
  right: 88px;
  top: 85px;
  /deep/.ant-tabs-nav-wrap .ant-tabs-nav-scroll {
    padding-left: 30px;
  }
}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
  position: relative;
  top: 20px;
}
/deep/.ant-form-inline .ant-form-item > .ant-form-item-label {
  width: 80px !important;
}
/deep/.ant-modal-body {
  padding-bottom: 60px;
}
.go-login-cont {
  width: 100%;
  text-align: center;
}
</style>
