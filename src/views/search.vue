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
                :md="6"
                :sm="24"
              >
                <a-form-item
                  style="margin-bottom:0;"
                  label="贷款类型"
                >
                  <a-select
                    v-model="queryParam.status3"
                    placeholder="企业"
                    default-value="0"
                  >
                    <a-select-option value="0">企业</a-select-option>
                    <a-select-option value="1">个人</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col
                :md="6"
                :sm="24"
              >
                <a-form-item
                  style="margin-bottom:0;"
                  label="贷款金额"
                >
                  <a-select
                    v-model="queryParam.status2"
                    placeholder="50万元"
                    default-value="0"
                  >
                    <a-select-option value="0">50万元</a-select-option>
                    <a-select-option value="1">100万元</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col
                :md="6"
                :sm="24"
              >
                <a-form-item
                  style="margin-bottom:0;"
                  label="贷款期限"
                >
                  <a-select
                    v-model="queryParam.status1"
                    placeholder="12个月"
                    default-value="0"
                  >
                    <a-select-option value="0">6个月</a-select-option>
                    <a-select-option value="1">12个月</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col
                :md="4"
                :sm="24"
              >
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
          <img class="sample-list"
            src="../assets/sample-2.png"
            alt=""
          >
        </router-link>
        <router-link to="/stas">
          <img class="sample-list"
            src="../assets/sample-3.png"
            alt=""
          >
        </router-link>
        <router-link to="/stas">
          <img class="sample-list"
            src="../assets/sample-4.png"
            alt=""
          >
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      queryParam: {}
    }
  }
}
</script>

<style scoped lang="less">
.sample-list{
  margin-top: 30px;
  &:hover{
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease-in 0s;
  }
}
</style>
