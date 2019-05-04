<template>
  <div class="search-cont table-page-search-wrapper">
    <a-row>
      <a-col>
        <a-card>
          <a-form layout="inline">
            <a-row type="flex" justify="space-between" :gutter="48" align="middle">
              <a-col :md="15" :sm="24">
                <b
                  @click="changeActive(1)"
                  :class="active === 1 ? 'active' : ''"
                  class="p-button"
                >综合排序</b>
                <b
                  @click="changeActive(2)"
                  :class="active === 2 ? 'active' : ''"
                  class="p-button"
                >评分排序</b>
                <b
                  @click="changeActive(3)"
                  :class="active === 3 ? 'active' : ''"
                  class="p-button"
                >息费排序</b>
                <b
                  @click="changeActive(4)"
                  :class="active === 4 ? 'active' : ''"
                  class="p-button"
                >交易排序</b>
                <b
                  @click="changeActive(5)"
                  :class="active === 5 ? 'active' : ''"
                  class="p-button"
                >成立时间</b>
              </a-col>

              <a-col :md="3" :sm="24" style="text-align: right;">
                <a class="normal-link">更多条件</a>
              </a-col>
            </a-row>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
    <a-row>
      <a-col>
        <router-link to="/stas">
          <img class="sample-list" src="../assets/sample-2.png" alt>
        </router-link>
        <router-link to="/stas">
          <img class="sample-list" src="../assets/sample-3.png" alt>
        </router-link>
        <router-link to="/stas">
          <img class="sample-list" src="../assets/sample-4.png" alt>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'collect',
  data () {
    return {
      queryParam: {},
      active: 1
    }
  },
  methods: {
    changeActive: function (val) {
      this.active = val
    }
  }
}
</script>

<style scoped lang="less">
.sample-list {
  margin-top: 30px;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease-in 0s;
  }
}
.p-button {
  display: inline-block;
  width: 100px;
  height: 40px;
  margin-right: 30px;
  text-align: center;
  line-height: 40px;
  transition: all 0.2s ease-in 0s;
  border-radius: 2px;
  &:hover,
  &.active {
    background: #2c68ff;
    color: #fff;
    cursor: pointer;
  }
}
</style>
