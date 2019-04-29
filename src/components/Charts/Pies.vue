<template>
  <div :style="{ padding: '20px' }">
    <h4 :style="{ marginBottom: '20px' }">{{ title }}</h4>
    <a-row
      type="flex"
      justify="center"
      :gutter="48"
    >
      <a-col
        :md="8"
        :sm="24"
      >
      <h4 style="text-align: center;font-weight:bold;">近90天的标的</h4>
        <v-chart
          :forceFit="true"
          :height="height"
          :data="data1"
          :scale="scale"
        >
          <v-tooltip
            :showTitle="false"
            dataKey="item*percent"
          />
          <v-axis />
          <v-legend dataKey="item" />
          <v-pie
            position="percent"
            color="item"
            :vStyle="pieStyle"
            :label="labelConfig"
          />
          <v-coord type="theta" />
        </v-chart>
      </a-col>

      <a-col
        :md="8"
        :sm="24"
      >
      <h4 style="text-align: center;font-weight:bold;">近90天的期限</h4>
        <v-chart
          :forceFit="true"
          :height="height"
          :data="data2"
          :scale="scale"
        >
          <v-tooltip
            :showTitle="false"
            dataKey="item*percent"
          />
          <v-axis />
          <v-legend dataKey="item" />
          <v-pie
            position="percent"
            color="item"
            :vStyle="pieStyle"
            :label="labelConfig"
          />
          <v-coord type="theta" />
        </v-chart>
      </a-col>

      <a-col
        :md="8"
        :sm="24"
      >
      <h4 style="text-align: center;font-weight:bold;">近90天标的金额</h4>
        <v-chart
          :forceFit="true"
          :height="height"
          :data="data3"
          :scale="scale"
        >
          <v-tooltip
            :showTitle="false"
            dataKey="item*percent"
          />
          <v-axis />
          <v-legend dataKey="item" />
          <v-pie
            position="percent"
            color="item"
            :vStyle="pieStyle"
            :label="labelConfig"
          />
          <v-coord type="theta" />
        </v-chart>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set')

const sourceData1 = [{ item: '抵押标', count: 49 }, { item: '信用标', count: 51 }]

const sourceData2 = [
  { item: '1月标', count: 33 },
  { item: '2月标', count: 21 },
  { item: '3月标', count: 17 },
  { item: '4-6月标', count: 13 },
  { item: '6-12月标', count: 9 },
  { item: '其他标', count: 7 }
]

const sourceData3 = [{ item: '0-20万', count: 33 }, { item: '21-50万', count: 32 }, { item: '51万以上', count: 35 }]

const scale = [
  {
    dataKey: 'percent',
    min: 0,
    formatter: '.0%'
  }
]

const dv1 = new DataSet.View().source(sourceData1)
const dv2 = new DataSet.View().source(sourceData2)
const dv3 = new DataSet.View().source(sourceData3)
const data = [];
[dv1, dv2, dv3].forEach(item => {
  item.transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  })
  data.push(item.rows)
})
// dv.transform({
//   type: 'percent',
//   field: 'count',
//   dimension: 'item',
//   as: 'percent'
// })
// const data = dv.rows
export default {
  name: 'Pies',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data1: data[0],
      data2: data[1],
      data3: data[2],
      scale,
      height: 400,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1,
        transition: 'all 2s ease-in 0s'
      },
      labelConfig: [
        'percent',
        {
          offset: -40,
          textStyle: {
            rotate: 0,
            textAlign: 'center',
            shadowBlur: 2,
            fill: '#fff'
          }
        }
      ]
    }
  }
}
</script>
