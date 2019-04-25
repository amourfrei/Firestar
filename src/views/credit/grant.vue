<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="6" :sm="24">
            <a-form-item label="贷款单编号">
              <a-input v-model="queryParam.id" placeholder=""/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="贷款单状态">
              <a-input v-model="queryParam.customId" placeholder=""/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="客户编号">
              <a-input v-model="queryParam.customId" placeholder=""/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="客户名称">
              <a-input v-model="queryParam.customId" placeholder=""/>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="放款主体">
              <a-select v-model="queryParam.status1" placeholder="请选择" default-value="0">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">主体A</a-select-option>
                <a-select-option value="2">主体B</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item label="贷款期限">
              <a-select v-model="queryParam.status2" placeholder="请选择" default-value="0">
                <a-select-option value="0">12个月</a-select-option>
                <a-select-option value="1">6个月</a-select-option>
                <a-select-option value="2">1个月</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
              <a-form-item label="创建时间">
                <a-date-picker v-model="queryParam.date1" style="width: 100%" placeholder="请选择通过时间"/>
              </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
              <a-form-item label="放款时间">
                <a-date-picker v-model="queryParam.date1" style="width: 100%" placeholder="请选择通过时间"/>
              </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
              <a-form-item label="还款时间">
                <a-date-picker v-model="queryParam.date1" style="width: 100%" placeholder="请选择通过时间"/>
              </a-form-item>
          </a-col>
          <a-col :md="!advanced && 8 || 24" :sm="24">
            <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
              <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
              <a-button style="margin-left: 8px" @click="() => queryParam = {}">导出</a-button>
            </span>
          </a-col>
        </a-row>
        <a-row>
          <a-col>
            <a-button type="primary" @click="showModal">+新增贷款发放</a-button>
          </a-col>
        </a-row>
        <a-divider dashed />
      </a-form>
    </div>
    <j-table></j-table>

  <a-modal
      title="新增贷款发放"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      cancelText="返回"
      okText="确定"
    >
    <div class="table-page-search-wrapper">
    <a-form layout="inline">
    <a-row>
          <a-col :span="20">
            <a-form-item label="客户编号">
              <a-input v-model="queryParam.id" placeholder=""/>
            </a-form-item>
          </a-col>
    </a-row>
    <a-row>
          <a-col :span="20">
            <a-form-item label="客户名称">
              <a-input v-model="queryParam.id" placeholder=""/>
            </a-form-item>
          </a-col>
    </a-row>
    <a-row>
      <a-col :span="20">
            <a-form-item label="放款主体">
              <a-select v-model="queryParam.status1" placeholder="重庆小贷" default-value="0">
                <a-select-option value="0">重庆小贷</a-select-option>
                <a-select-option value="1">成都小贷</a-select-option>
              </a-select>
            </a-form-item>
     </a-col>
    </a-row> 

    <a-row>
      <a-col :span="20">
            <a-form-item label="还款方式">
              <a-select v-model="queryParam.status1" placeholder="等额本息" default-value="0">
                <a-select-option value="0">等额本息</a-select-option>
                <a-select-option value="1">等额本金</a-select-option>
              </a-select>
            </a-form-item>
     </a-col>
    </a-row> 

    <a-row>
      <a-col :span="20">
            <a-form-item label="贷款期限">
              <a-select v-model="queryParam.status1" placeholder="一个月" default-value="0">
                <a-select-option value="0">一个月</a-select-option>
                <a-select-option value="1">三个月</a-select-option>
              </a-select>
            </a-form-item>
     </a-col>
    </a-row> 
    
    <a-row>
          <a-col :span="20">
            <a-form-item label="日 利 率 ">
              <a-input v-model="queryParam.id" placeholder="">
                <span class="suffix" slot="suffix">% / 天</span>
              </a-input>
            </a-form-item>
          </a-col>
    </a-row>

    <a-row>
          <a-col :span="20">
            <a-form-item label="可贷金额">
              <a-input v-model="queryParam.id" placeholder="">
                <span class="suffix" slot="suffix">元</span>
              </a-input>
            </a-form-item>
          </a-col>
    </a-row>

    <a-row>
          <a-col :span="20">
            <a-form-item label="贷款金额">
              <a-input v-model="queryParam.id" placeholder=""><span class="suffix" slot="suffix">元</span></a-input>
            </a-form-item>
          </a-col>
    </a-row>

    </a-form>
    </div>
  </a-modal>
  </a-card>
</template>

<script>
import JTable from './tableOne'


export default {
  name: 'grant',
  components: {
    JTable
  },
  data () {
    return {
      mdl: {},
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      visible:false,
      confirmLoading: false,
    }
  },
  filters: {

  },
  created () {
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      this.visible = false
    }
  }
}
</script>

<style scoped>
.suffix{
  color: #999;
}
</style>