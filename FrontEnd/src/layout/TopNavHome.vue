<template>
  <div class="topnavhome">
    <b-navbar class="topnavbar" toggleable="lg" type="dark">
      <b-navbar-brand class="logo" href="#" to="/login">SHOES STORE</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-nav>
        <router-link tag="li" class="item-menu" to="/home">Home</router-link>
        <router-link tag="li" class="item-menu" to="/shop">Shop</router-link>
        <router-link tag="li" class="item-menu" to="/about">About</router-link>
        <router-link tag="li" class="item-menu" to="/contact"
          >Contact</router-link
        >
      </b-navbar-nav>

      <b-collapse id="nav-collapse" is-nav> </b-collapse>
      <div class="search-p">
        <b-form-input class="search_ip" placeholder="Search items">
        </b-form-input>
        <b-icon class="clear" icon="backspace" font-scale="2"></b-icon>
      </div>
      <router-link to="/viewcart" data-toggle="modal" data-target="#cart">
        <b-badge variant="danger" class="total-count"></b-badge>
        <b-icon icon="cart2" font-scale="2" aria-hidden="true" class="iccart">
        </b-icon>
      </router-link>
      <b-button class="register" variant="light" to="/register" pill
        >Register
      </b-button>
      <b-button class="btn_login" variant="light" to="/loginpage" pill
        >Login
      </b-button>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item-menu {
  margin-left: 30px;
  color: black;
}
.item-cart {
  float: right;
}
/* li{
  font-weight: bold;
} */
li:hover {
  color: rgb(152, 49, 221);
}
li.item-menu:active {
  color: blueviolet;
}
.topnavhome {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
}
.search-p {
  display: flex;
}
.clear {
  margin: 4px 22px 0 7px;
}
.clear:hover {
  color: #786ce0;
}
.cart-bt {
  margin: 15px 15px;
}
.iccart {
  margin-left: 20px;
}
.search_ip {
  float: right;
}
.register{
  margin-left: 30px;

}
.register:hover {
  background-color: #786ce0;
}

.btn_login:hover {
  background-color: #786ce0;
}
.logo{
  font-weight: bold;
  color: #786ce0;
}
</style>