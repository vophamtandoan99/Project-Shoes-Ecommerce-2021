<template>
  <div class="vue-tempalte">
    <div class="container">
      <form :model="model" :rules="rules" ref="form" @submit="onSubmit">
        <h3>Register My Account</h3>
        <div class="form-group">
          <label>Last Name</label>
          <input
            type="email"
            placeholder="Enter your email"
            class="form-control form-control-lg"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            class="form-control form-control-lg"
          />
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Enter your confirm password"
            class="form-control form-control-lg"
          />
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block">
          Register
        </button>

        <div class="social-icons">
          <ul>
            <li>
              <a href="#"><i class="fa fa-google"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
          </ul>
        </div>
      </form>
    </div>
    <top-nav-home/>
  </div>
</template>

<script>
import TopNavHome from '../layout/TopNavHome.vue';
export default {
  data() {
    return {};
  
    TopNavHome},
};
</script>

<style scoped>
.vue-tempalte {
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}
.container {
  width: 500px;
  background-color: #f7ec22;
  border-radius: 5px;
}
.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}
h3 {
  text-align: center;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}
.btn-block {
  margin-bottom: 20px;
}
</style>