<template>
  <div class="step-two-cont table-page-search-wrapper">
    <a-row>
      <a-col>
        <a-card title="证件上传">
          <a-row>
            <a-col
              :span="18"
              :offset="3"
            >
              <a-steps :current="1">
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
          >证件上传</a-divider>

          <a-form layout="inline">
            <a-row
              type="flex"
              justify="center"
              :gutter="48"
            >
              <a-col
                :md="12"
                :sm="24"
              >

                <a-form-item label="选择企业类型">
                  <a-radio-group
                    name="radioGroup"
                    :defaultValue="1"
                  >
                    <a-radio :value="1">企业/公司</a-radio>
                    <a-radio :value="2">个体工商户</a-radio>
                  </a-radio-group>
                </a-form-item>

                <a-form-item label="选择企业证件类型">
                  <a-select
                    v-model="queryParam.status"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">证件A</a-select-option>
                    <a-select-option value="1">证件B</a-select-option>
                    <a-select-option value="2">证件C</a-select-option>
                  </a-select>
                </a-form-item>

                <a-form-item label="企业营业执照">
                  <a-upload
                    name="avatar"
                    listType="picture-card"
                    class="avatar-uploader"
                    :showUploadList="false"
                    action=""
                    :beforeUpload="beforeUpload"
                    @change="handleChange"
                  >
                    <img
                      v-if="imageUrl"
                      :src="imageUrl"
                      alt="avatar"
                    />
                    <div v-else>
                      <a-icon :type="loading ? 'loading' : 'plus'" />
                      <div class="ant-upload-text">上传图片</div>
                    </div>
                  </a-upload>
                </a-form-item>

                <a-form-item
                  style="margin-top: 90px;"
                  label="组织机构代码证"
                >
                  <a-upload
                    name="avatar"
                    listType="picture-card"
                    class="avatar-uploader"
                    :showUploadList="false"
                    action=""
                    :beforeUpload="beforeUpload"
                    @change="handleChange"
                  >
                    <img
                      v-if="imageUrl"
                      :src="imageUrl"
                      alt="avatar"
                    />
                    <div v-else>
                      <a-icon :type="loading ? 'loading' : 'plus'" />
                      <div class="ant-upload-text">上传图片</div>
                    </div>
                  </a-upload>
                </a-form-item>

                <a-form-item
                  style="margin-top: 90px;"
                  label="税务登记证"
                >
                  <a-upload
                    name="avatar"
                    listType="picture-card"
                    class="avatar-uploader"
                    :showUploadList="false"
                    action=""
                    :beforeUpload="beforeUpload"
                    @change="handleChange"
                  >
                    <img
                      v-if="imageUrl"
                      :src="imageUrl"
                      alt="avatar"
                    />
                    <div v-else>
                      <a-icon :type="loading ? 'loading' : 'plus'" />
                      <div class="ant-upload-text">上传图片</div>
                    </div>
                  </a-upload>
                </a-form-item>

                <a-form-item
                  style="margin-top: 90px;"
                  label="法人证件照片（正面）"
                >
                  <a-upload
                    name="avatar"
                    listType="picture-card"
                    class="avatar-uploader"
                    :showUploadList="false"
                    action=""
                    :beforeUpload="beforeUpload"
                    @change="handleChange"
                  >
                    <img
                      v-if="imageUrl"
                      :src="imageUrl"
                      alt="avatar"
                    />
                    <div v-else>
                      <a-icon :type="loading ? 'loading' : 'plus'" />
                      <div class="ant-upload-text">上传图片</div>
                    </div>
                  </a-upload>
                </a-form-item>

                <a-form-item
                  style="margin-top: 90px;"
                  label="法人证件照片（反面）"
                >
                  <a-upload
                    name="avatar"
                    listType="picture-card"
                    class="avatar-uploader"
                    :showUploadList="false"
                    action=""
                    :beforeUpload="beforeUpload"
                    @change="handleChange"
                  >
                    <img
                      v-if="imageUrl"
                      :src="imageUrl"
                      alt="avatar"
                    />
                    <div v-else>
                      <a-icon :type="loading ? 'loading' : 'plus'" />
                      <div class="ant-upload-text">上传图片</div>
                    </div>
                  </a-upload>
                </a-form-item>

              </a-col>

              <a-col
                :md="11"
                :sm="24"
              >
                <img src="../assets/sample.png" />
              </a-col>
            </a-row>
            <div class="clearfix"></div>
          </a-form>
          <a-row
            type="flex"
            :gutter="40"
            justify="center"
            style="margin-top: 100px;"
          >
            <a-col
              :md="6"
              :sm="24"
            >
              <router-link to="/step-three">
                <a-button
                  type="primary"
                  style="width: 100%"
                >下一步</a-button>
              </router-link>
            </a-col>
            <a-col
              :md="3"
              :sm="24"
            >
              <a-button
                type="primary"
                ghost
              >返回</a-button>
            </a-col>
          </a-row>

        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
export default {
  name: 'stepOne',
  data() {
    return {
      queryParam: {},
      loading: false,
      imageUrl: ''
    }
  },
  methods: {
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl
          this.loading = false
        })
      }
    },
    beforeUpload(file) {
      // const isJPG = file.type === 'image/jpeg'
      // if (!isJPG) {
      //   this.$message.error('You can only upload JPG file!')
      // }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('图片大小超过2M！')
      }
      return isJPG && isLt2M
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

/deep/.avatar-uploader .ant-upload.ant-upload-select-picture-card {
  width: 100%;
  height: 100px;
}
</style>
