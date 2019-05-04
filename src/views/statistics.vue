<template>
  <div class="stas-cont">
    <a-row>
      <a-col>
        <a-card title="平台登记信息">
          <a-row>
            <a-col :span="16">
              <img src="../assets/sample-1.png">
            </a-col>

            <a-col :span="8" style="text-align: center;">
              <v-chart :force-fit="true" :height="405" :data="pieData" :scale="pieScale">
                <v-tooltip :showTitle="false" data-key="item*percent"/>
                <v-axis/>
                <!-- position="right" :offsetX="-140" -->
                <v-legend data-key="item"/>
                <v-pie position="percent" color="item" :vStyle="pieStyle" :label="labelConfig"/>
                <v-coord type="theta" :radius="0.75" :innerRadius="0.7"/>
              </v-chart>
              <router-link to="/step-one">
                <a-button style="width: 70%;" size="large" type="primary">申请贷款</a-button>
              </router-link>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>

    <a-row style="margin-top: 30px;">
      <a-col>
        <a-card :loading="loading" :bordered="false" :body-style="{padding: '0'}">
          <div class="salesCard">
            <a-tabs
              default-active-key="1"
              size="large"
              :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}"
            >
              <a-tab-pane loading="true" tab="数据统计" key="1">
                <a-row>
                  <a-col>
                    <bar title="成交额"/>
                  </a-col>
                </a-row>

                <a-row>
                  <a-col>
                    <Pies title="标的分布"/>
                  </a-col>
                </a-row>
              </a-tab-pane>
              <a-tab-pane tab="平台项目" key="2"></a-tab-pane>
              <a-tab-pane tab="违规信息" key="3"></a-tab-pane>
            </a-tabs>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Bar, Pies } from '@/components'
const DataSet = require('@antv/data-set')

const sourceData = [{ item: '项目合规率', count: 100 }]

const pieScale = [
  {
    dataKey: 'percent',
    min: 0,
    formatter: '.0%'
  }
]

const dv = new DataSet.View().source(sourceData)
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
})
const pieData = dv.rows
export default {
  name: 'statistics',
  components: {
    Bar,
    Pies
  },
  data () {
    return {
      //
      loading: false,
      pieScale,
      pieData,
      sourceData,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      labelConfig: [
        'percent',
        {
          offset: -100,
          textStyle: {
            rotate: '90deg',
            textAlign: 'center',
            shadowBlur: 2,
            fontSize: '20',
            shadowColor: 'rgba(0, 0, 0, .45)'
          }
        }
      ]
    }
  }
}
</script>

<style scoped lang='less'>
</style>
