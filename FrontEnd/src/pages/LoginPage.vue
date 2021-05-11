<template>
  <div class="loginpage">
    <b-container class="bg-login">
      <b-row class="justify-content-md-center mt-4">
        <b-col>
          <h2>Login My Account</h2>
          <!-- <b-card header="Login - Shoes Store"
          header-bg-variant="primary"
          header-text-variant="white">
          </b-card> -->
          <b-card-text>
            <b-form :model="model" :rules="rules" ref="form" @submit="onSubmit">
              <b-form-group description="Enter your email" label="Email">
                <b-form-input
                  v-model="email"
                  required
                  type="email"
                ></b-form-input>
              </b-form-group>
              <b-form-group description="Enter your password" label="Password">
                <b-form-input
                  v-model="password"
                  required
                  type="password"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-button
                  block
                  variant="primary"
                  type="submit"
                  :disabled="acceptableSubmittion"
                  >Login</b-button
                >
              </b-form-group>
              <b-form-group class="redire">
                <p class="forgot-password text-right mt-2 mb-4">
                  <router-link to="/forgot-password"
                    >Forgot password ?</router-link
                  >
                </p>
                <p class="forgot-password text-right mt-2 mb-4">
                  <router-link to="/register"
                    >You Don't Have Account ?</router-link
                  >
                </p>
              </b-form-group>
            </b-form>
          </b-card-text>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // onSubmit(event) {
    //   event.preventDefault()
    //   localStorage.setItem("auth", true);
    // },
    onSubmit(event) {
      event.preventDefault();

      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })

        .then(() => this.$router.push("/admin/overview"));
    },
  },
  computed: {
    acceptableSubmittion() {
      return this.email.length > 0 && this.password.length > "" ? false : true;
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
}
.btnlogin {
  margin: -50px 172px;
  padding: 10px 40px;
}
.bg-login {
  background-color: rgb(238 247 31);
  width: 500px;
  border-radius: 5px;
  margin-top: 10%;
}
.forgot-password {
  text-align: center;
}
.redire {
  text-align: center;
}
.loginpage {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>