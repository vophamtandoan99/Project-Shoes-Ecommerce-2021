<template>
  <footer class="bg3 p-t-75 p-b-32">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-lg-3 p-b-50">
          <h4 class="stext-301 cl0 p-b-30">NAVIGATE</h4>
          <ul>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                All products
              </a>
            </li>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Shop </a>
            </li>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Home </a>
            </li>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Contact </a>
            </li>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> About </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-3 p-b-50">
          <h4 class="stext-301 cl0 p-b-30">CATEGORIES</h4>
          <ul>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Sneaker </a>
            </li>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Oxford </a>
            </li>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Boot </a>
            </li>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Chelsea </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-3 p-b-50">
          <h4 class="stext-301 cl0 p-b-30">POPULAR BRANDS</h4>
          <ul>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Nike </a>
            </li>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Adidas </a>
            </li>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Dr.Marten </a>
            </li>
            <li class="p-b-10">
              <a href="#" class="stext-107 cl7 hov-cl1 trans-04"> Converse </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-3 p-b-50">
          <h4 class="stext-301 cl0 p-b-30">SUBSCRIBE TO OUR NEWSLETTER</h4>
          <p class="text-p">
            Get the latest updates on new products and upcoming sales
          </p>
          <div class="form-prefixPostfix wrap">
            <input
              class="form-input"
              id="nl_email"
              name="nl_email"
              type="email"
              value=""
              placeholder="Your email address"
            />
            <input
              class="button button--primary form-prefixPostfix-button--postfix"
              type="submit"
              value="Subscribe"
            />
          </div>
        </div>
      </div>
      <div class="copyright text-center">
        &copy; Coded with
        <i class="fa fa-heart heart"></i> by
        <a href="#" target="_blank">Hlee</a>. Designed by
        <a href="#" target="_blank">Shoes Store</a>.
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
.bg3 {
  background-color: #222;
}
.p-b-32,
.p-tb-32,
.p-all-32 {
  padding-bottom: 32px;
}
.form-prefixPostfix.wrap{
flex-wrap: wrap;
margin-top: 20px;
}
.text-p {
  color: whitesmoke;
}
.p-t-75,
.p-tb-75,
.p-all-75 {
  padding-top: 75px;
}
footer {
  display: block;
}
/* *, *:before, *:after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
} */
/* *, ::after, ::before {
    box-sizing: inherit;
} */
.container-fluild {
  max-width: 1380px;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
/* *, *:before, *:after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
} */
.p-b-50,
.p-tb-50,
.p-all-50 {
  padding-bottom: 50px;
}
.stext-301 {
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.6;
  text-transform: uppercase;
}
.cl0 {
  color: #fff;
  margin: 0px 44px;
}
.p-b-30,
.p-tb-30,
.p-all-30 {
  padding-bottom: 30px;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
.h4,
h4 {
  font-size: 1.5rem;
}
.text-center {
  color: white;
}
a {
  color: rgb(179, 177, 177);
}
a:hover {
  color: #0056b3;
}
</style>