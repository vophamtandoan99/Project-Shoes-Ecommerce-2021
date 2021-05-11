<template>
  <div class="error404">
    <div class="">
      <div class="container">
        <div class="row">
          <img
            class="img_err"
            alt="404"
            src="https://illustatus.herokuapp.com/?title=Oops,%20Page%20not%20found&fill=%234f86ed"
          />
        </div>
        <h3 class="h2_err">
          <router-link class="title_danger" :to="{ path: '/' }"
            >Come Back...</router-link
          >
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error404 {
  text-align: center;
}
.img_err {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  width: 100%;
}
h3 {
  text-align: center;
  color: rgb(95, 95, 231);
}
h3:hover {
  color: rgb(170, 89, 236);
}
.container {
  text-align: center;
}
</style>
