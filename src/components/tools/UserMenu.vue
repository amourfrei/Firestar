<template>
  <div class="user-wrapper">
    <div class="content-box">
      <a class="top-link">帮助中心</a>
      <a class="top-link m-l-20">关于我们</a>
    </div>
  </div>
</template>

<script>
import NoticeIcon from '@/components/NoticeIcon'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserMenu',
  components: {
    NoticeIcon
  },
  methods: {
    ...mapActions(['Logout']),
    ...mapGetters(['nickname', 'avatar']),
    handleLogout () {
      const that = this

      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk () {
          return that.Logout({}).then(() => {
            window.location.reload()
          }).catch(err => {
            that.$message.error({
              title: '错误',
              description: err.message
            })
          })
        },
        onCancel () {
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .m-l-20{
    margin-left: 20px;
  }
  .top-link{
    font-size: 14px;
    color: #6B6B6B;
    letter-spacing: 0.58px;
    &:hover{
      color: #2C67FF;
    }
  }
</style>
