<template>
  <div>
    <h4 :style="{ marginBottom: '20px' }">{{ title }}</h4>
    <v-chart
      height="220"
      :data="data"
      :forceFit="true"
      :scale="scale"
      :padding="['auto', 'auto', '40', '80']"
    >
      <v-tooltip/>
      <v-axis data-key="x"></v-axis>
      <v-axis data-key="y" :label="labelFormat" :title="vTitle"/>
      <v-bar position="x*y"/>
    </v-chart>
  </div>
</template>

<script>
const data1 = []
const data2 = []
const vTitle = {
  offset: 60
}
for (let i = 14; i < 22; i += 1) {
  data1.push({
    x: `04-${i + 1}`,
    y: Math.floor(Math.random() * 100) + 150
  })
}
for (let i = 14; i < 22; i += 1) {
  data2.push({
    x: `04-${i + 1}`,
    y: Math.floor(Math.random() * 150) + 200 + '人'
  })
}

const tooltip = [
  'x*y',
  (x, y) => ({
    name: x,
    value: y
  })
]
const scale1 = [
  {
    dataKey: 'x'
  },
  {
    dataKey: 'y',
    alias: '单位(万元)'
  }
]
const scale2 = [
  {
    dataKey: 'x'
  },
  {
    dataKey: 'y',
    alias: '单位(人)'
  }
]

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter (text) {
    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  }
}

export default {
  name: 'Bar',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      data: data1,
      scale: scale1,
      tooltip,
      labelFormat,
      vTitle
    }
  },
  methods: {
    judgeType () {
      if (this.type === '1') {
        this.data = data1
      } else if (this.type === '2') {
        this.data = data2
        this.scale = scale2
      }
    }
  },
  mounted () {
    this.judgeType()
  }
}
</script>
