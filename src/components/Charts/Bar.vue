<template>
  <div :style="{ padding: '20px' }">
    <h4 :style="{ marginBottom: '20px' }">{{ title }}</h4>
    <v-chart
      height="354"
      :data="data"
      :forceFit="true"
      :scale="scale"
      :padding="['auto', 'auto', '40', '80']"
    >
      <v-tooltip />
      <v-axis dataKey="x"></v-axis>
      <v-axis
        dataKey="y"
        :label="labelFormat"
        :title="vTitle"
      />
      <v-bar position="x*y" />
    </v-chart>
  </div>
</template>

<script>
const data = []
const vTitle = {
  offset: 60
}
for (let i = 0; i < 12; i += 1) {
  data.push({
    x: `2018年${i + 1}月`,
    y: Math.floor(Math.random() * 100) + 200
  })
}
const tooltip = [
  'x*y',
  (x, y) => ({
    name: x,
    value: y
  })
]
const scale = [
  {
    dataKey: 'x'
  },
  {
    dataKey: 'y',
    alias: '成交额(万)'
  }
]

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  }
}

export default {
  name: 'Bar',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data,
      scale,
      tooltip,
      labelFormat,
      vTitle
    }
  }
}
</script>
