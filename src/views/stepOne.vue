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
              <a-steps :current="0">
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
                :md="9"
                :sm="24"
              >
                <a-form-item label="企业名称">
                  <a-input
                    v-model="queryParam.id"
                    placeholder=""
                  />
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="企业规模">
                  <a-select
                    v-model="queryParam.status"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">大型</a-select-option>
                    <a-select-option value="1">中型</a-select-option>
                    <a-select-option value="2">小型</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="企业类型">
                  <a-select
                    v-model="queryParam.status"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">大型</a-select-option>
                    <a-select-option value="1">中型</a-select-option>
                    <a-select-option value="2">小型</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="固定电话">
                  <a-input
                    v-model="queryParam.id"
                    placeholder=""
                  />
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="营业地址">
                  <a-select
                    v-model="queryParam.status"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">成都</a-select-option>
                    <a-select-option value="1">北京</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="员工数量">
                  <a-input
                    v-model="queryParam.id"
                    placeholder=""
                  />
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="主营业务">
                  <a-input
                    v-model="queryParam.id"
                    placeholder=""
                  />
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
              </a-col>

            </a-row>
          </a-form>

          <a-divider
            style="margin:40px 0;"
            orientation="left"
          >法人信息</a-divider>

          <a-form layout="inline">
            <a-row
              type="flex"
              justify="center"
              :gutter="48"
            >
              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="法定代表人姓名">
                  <a-input
                    v-model="queryParam.id"
                    placeholder=""
                  />
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="法定代表人手机号">
                  <a-input
                    v-model="queryParam.id"
                    placeholder=""
                  />
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="法定代表人证件类型">
                  <a-select
                    v-model="queryParam.status"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">身份证</a-select-option>
                    <a-select-option value="1">护照</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="法定代表人证件号码">
                  <a-input
                    v-model="queryParam.id"
                    placeholder=""
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>

          <a-divider
            style="margin:40px 0;"
            orientation="left"
          >紧急联系人信息</a-divider>

          <a-form layout="inline">
            <a-row
              type="flex"
              justify="center"
              :gutter="48"
            >
              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="紧急联系人姓名">
                  <a-input
                    v-model="queryParam.id"
                    placeholder=""
                  />
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="紧急联系人类型">
                  <a-select
                    v-model="queryParam.status"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">身份证</a-select-option>
                    <a-select-option value="1">护照</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="紧急联系人手机号码">
                  <a-input
                    v-model="queryParam.id"
                    placeholder=""
                  />
                </a-form-item>
              </a-col>

              <a-col
                :md="9"
                :sm="24"
              >
              </a-col>
            </a-row>
          </a-form>

          <a-divider
            style="margin:40px 0;"
            orientation="left"
          >其他信息</a-divider>

          <a-form layout="inline">
            <a-row
              type="flex"
              justify="center"
              :gutter="20"
            >
              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="银行卡号">
                  <a-input
                    v-model="queryParam.id"
                    placeholder="请输入银行卡号"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="9"
                :sm="24"
              >
                <span class="input-tips"><a>支持银行</a> 仅支持您本人名下的银行卡，输入卡号自动识别银行卡种</span>
              </a-col>
            </a-row>
          </a-form>

          <a-form layout="inline">
            <a-row
              type="flex"
              justify="center"
              :gutter="20"
            >
              <a-col
                :md="9"
                :sm="24"
              >
                <a-form-item label="银行预留手机号">
                  <a-input
                    v-model="queryParam.id"
                    placeholder="请输入预留手机号"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="9"
                :sm="24"
              >
                <span class="input-tips">请填写该卡在银行预留的手机号码，验证该银行卡是否真实属于本人</span>
              </a-col>
            </a-row>
          </a-form>
          <a-form layout="inline">
            <a-row
              type="flex"
              justify="center"
              :gutter="20"
            >
              <a-col
                :md="9"
                :sm="24"
              >
                <a-col
                  :md="16"
                  :sm="24"
                >
                  <a-form-item label="短信验证">
                    <a-input
                      v-model="queryParam.id"
                      placeholder="请输入验证码"
                    />
                  </a-form-item>
                </a-col>
                <a-col
                  :md="8"
                  :sm="24"
                >
                  <a-button
                    type="primary"
                    disabled
                  >获取验证码</a-button>
                </a-col>
              </a-col>
              <a-col
                :md="9"
                :sm="24"
              >
                <span class="input-tips"><a>没有收到短信？</a></span>
              </a-col>
            </a-row>

            <a-row type="flex" :gutter="40" justify="center">
              <a-col :md="6" :sm="24">
                <router-link to="/step-two">
                  <a-button type="primary" style="width: 100%">下一步</a-button>
                </router-link>
              </a-col>
              <a-col :md="3" :sm="24">
                <router-link to="/home">
                  <a-button type="primary" ghost>返回</a-button>
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
  name: 'stepOne',
  data() {
    return {
      queryParam: {}
    }
  }
}
</script>

<style lang="less" scoped>
.input-tips {
  font-size: 13px;
  color: #bebebe;
  letter-spacing: 0.58px;
  text-align: center;
  position: relative;
  top: 5px;
  > a {
    color: #2c67ff;
  }
}
</style>
