<template>
  <div :style="{ padding: '48px 20px 20px 20px' }">
    <h4 :style="{ marginBottom: '20px' }">{{ title }}</h4>
    <a-row justify="center">
      <a-col>
        <v-chart :forceFit="true" :height="height" :data="data2" :scale="scale">
          <v-tooltip :showTitle="false" data-key="item*percent"/>
          <v-axis/>
          <v-legend data-key="item"/>
          <v-pie position="percent" color="item" :vStyle="pieStyle" :label="labelConfig"/>
          <v-coord type="theta"/>
        </v-chart>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set')


const sourceData2 = [
  { item: '个人现金贷', count: 33 },
  { item: '小额贷', count: 27 },
  { item: '抵押贷', count: 60 },
  { item: '预授信', count: 60 }
]


const scale = [
  {
    dataKey: 'percent',
    min: 0,
    formatter: '.0%'
  }
]

const dv2 = new DataSet.View().source(sourceData2)
const data = [];
[dv2].forEach(item => {
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
  data () {
    return {
      data2: data[0],
      scale,
      height: 400,
      width: 500,
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
