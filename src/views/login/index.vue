<script lang="ts" setup>
import { ElForm, ElFormItem } from "element-plus";
import { User, Lock, Key, Picture, Loading } from "@element-plus/icons-vue";
import { type LoginRequestData } from "@/api/login/types/login";
import { reactive, ref } from "vue";
import { getLoginCodeApi, loginApi } from "@/api/login";
import { getUserStore } from "@/store/model/user";
import router from "@/router";

/** 登录按钮 Loading */
const loading = ref(false);
/** 验证码图片 URL */
const codeUrl = ref("");
const userStore = getUserStore();

/** 登录表单数据 */
const loginFormData: LoginRequestData = reactive({
  username: "admin",
  password: "12345678",
  code: "",
});

const handleLogin = () => {
  userStore.login(loginFormData).then(() => {
    router.push("/");
  });
};
/** 创建验证码 */
const createCode = () => {
  // 先清空验证码的输入
  loginFormData.code = "";
  // 获取验证码
  codeUrl.value = "";
  getLoginCodeApi().then((res) => {
    codeUrl.value = res.data;
  });
};
createCode();
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <div class="title">
        <img src="@/assets/layouts/logo-text-2.png" />
      </div>
      <div class="content">
        <el-form :model="loginFormData">
          <el-form-item>
            <el-input
              v-model="loginFormData.username"
              placeholder="用户名"
              :prefix-icon="User"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginFormData.password"
              type="password"
              placeholder="密码"
              :prefix-icon="Lock"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginFormData.code"
              placeholder="验证码"
              :prefix-icon="Key"
            >
              <template #append>
                <el-image :src="codeUrl" @click="createCode" draggable="false">
                  <template #placeholder>
                    <el-icon>
                      <Picture></Picture>
                    </el-icon>
                  </template>
                  <template #error>
                    <el-icon>
                      <Loading />
                    </el-icon>
                  </template>
                </el-image>
              </template>
            </el-input>
          </el-form-item>
          <el-button type="primary" size="large" @click.prevent="handleLogin"
            >登 录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  .login-card {
    width: 480px;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: #fff;
    overflow: hidden;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      img {
        height: 100%;
      }
    }
    .content {
      padding: 20px 50px 50px 50px;
      :deep(.el-input-group__append) {
        padding: 0;
        overflow: hidden;
        .el-image {
          width: 100px;
          height: 40px;
          border-left: 0px;
          user-select: none;
          cursor: pointer;
          text-align: center;
        }
      }
      .el-button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}
</style>
