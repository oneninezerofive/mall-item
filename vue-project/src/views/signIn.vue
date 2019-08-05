<template>
  <div>
    <div data-v-39ce8b4c>
      <div data-v-39ce8b4c class="el-card login-form-layout is-always-shadow">
        <!---->
        <div style="height:400px;" class="el-card__body">
          <form data-v-39ce8b4c class="el-form el-form--label-left" autocomplete="on">
            <div data-v-39ce8b4c style="text-align: center;">
              <svg
                data-v-81d70f2a
                data-v-39ce8b4c
                aria-hidden="true"
                class="svg-icon"
                style="width: 56px; height: 56px; color: rgb(64, 158, 255);"
              >
                <use data-v-81d70f2a xlink:href="#icon-login-mall" />
              </svg>
            </div>
            <h2 data-v-39ce8b4c class="login-title color-main">admin-sign-In</h2>
            <div data-v-39ce8b4c class="el-form-item is-required">
              <!--输入用户名处-->
              <div class="el-form-item__content">
                <el-input @blur="checkname" v-model="uername" placeholder="Please enter user"></el-input>
              </div>
            </div>
            <div data-v-39ce8b4c class="el-form-item is-success is-required">
              <!--输入密码处-->
              <div class="el-form-item__content">
                <el-input
                  @blur="onpw"
                  placeholder="Please enter a password"
                  v-model="paw"
                  show-password
                ></el-input>
              </div>
            </div>
            <div data-v-39ce8b4c class="el-form-item">
              <!---->
              <div class="el-form-item__content">
                <!--登陆按钮-->
                <el-button @click="signIn" type="primary" style="width:318px">signin In</el-button>
                <el-alert
                  style="margin-top:5px"
                  @close="onclose"
                  v-show="warningSwich"
                  :title="warning"
                  :type="type1"
                ></el-alert>
              </div>
            </div>
          </form>
        </div>
      </div>
      <img data-v-39ce8b4c src="../assets/login_center_bg.png" class="login-center-layout" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //提示信息
      warning: "",
      type1: "error",
      //提示开显示隐藏的开关
      warningSwich: false,

      //开关，判断数据库有没有这个用户名，
      name: false,

      //用户名
      uername: "",
      //密码
      paw: ""
    };
  },

  methods: {
    //验证用户名是否存在
    checkname() {
      if (this.uername.trim()) {
        this.$axios(
          "http://localhost:3000/checkname?userName=" + this.uername
        ).then(result => {
          console.log(result);
          if (result.data == "yes") {
            this.name = true;
            this.warningSwich = true;
            this.warning = "User names are available";
            this.type1 = "success";
          } else {
            this.warningSwich = true;
            this.warning = "User names are too popular";
            this.name = false;
            this.type1 = "error";
          }
        });
      } else {
        this.warningSwich = true;
        this.warning = "The user name cannot be empty";
        this.type1 = "error";
        this.name = false;
      }
    },

    onpw() {
      if (!this.paw.trim()) {
        this.warningSwich = true;
        this.warning = "The password cannot be empty";
        this.type1 = "error";
      }
    },

    signIn() {
      //如果密码不为空，且验证用户名通过
      console.log(
        this.paw && this.name,
        "密码",
        this.paw,
        "用户名开关",
        this.name
      );
      if (this.paw && this.name) {
        const param = {
            uerName: this.uername,
            password: this.paw
        }
        this.$axios
          .post(`http://localhost:3000/signIn`, this.$qs.stringify(param))
          .then(r => {
            console.log(r);
          })
          .catch(() => {
            this.warningSwich = true;
            this.warning = "fail to sign in";
            this.type1 = "error";
          });
      } else {
        this.warningSwich = true;
        this.warning = "Incorrect user name or password";
        this.type1 = "error";
      }
    },

    //点击关闭提醒的时候
    onclose() {
      this.warningSwich = false;
    }
  }
};
</script>

<style scoped>
</style>
