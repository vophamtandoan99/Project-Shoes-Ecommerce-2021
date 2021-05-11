<template>
  <div class="viewcart-1">
    <header class="container-view">
      <h1>View Cart</h1>
      <ul class="breadcrumb">
        <li>Home</li>
        <li>View Cart</li>
      </ul>
      <!-- <span class="count">{{ itemCount }} items in the bag</span> -->
    </header>
    <b-container fluid="xl" class="container">
      <b-row>
        <b-col lg="6">
          <div class="thumbnail">
            <b-img
              class="img-product"
              left
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/33a1f66c4e0b41c4b9d2ac91005f9db9_9366/Giay_UltraBoost_21_DJen_FY0306_01_standard.jpg"
              alt="Left image"
            ></b-img>
          </div>
          <div class="detail">
            <h4 class="name">Adidas UltraBoost 21</h4>
            <p class="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <b-badge variant="light" class="price">$350</b-badge>
          </div>
        </b-col>
        <b-col>
          <div class="quantity">
            <b-form-spinbutton
              id="demo-sb"
              v-model="value"
              min="1"
              max="100"
            ></b-form-spinbutton>
          </div>
          <div class="remove">
            <b-icon icon="backspace"></b-icon>
          </div>
        </b-col>
        <b-col lg="3">
          <div class="bill">
            <b-col class="col-right">
              <div class="total_cart">
                <div class="cart-caculation">
                  <div class="or-summary">
                    <h4 style="text-decoration: underline">ORDER SUMMARY</h4>
                    <div class="count-product">
                      <p>2 PRODUCTS</p>
                    </div>
                    <div class="price-total">
                      <p>Product total: <b-badge>$600</b-badge></p>
                    </div>
                    <div>
                      <p>Total: <b-badge>$600</b-badge></p>
                    </div>
                    <div>
                      <b-button block variant="dark"
                        >Check out <b-icon icon="arrow-right"></b-icon
                      ></b-button>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <top-nav-home />
    <content-footer-home />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ContentFooterHome from "../components/Footer/ContentFooterHome.vue";
import TopNavHome from "../layout/TopNavHome.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Swal from "sweetalert2";
export default {
  components: { ContentFooterHome, TopNavHome },
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Product Name",
        },
        {
          key: "price",
          label: "Price",
        },
        {
          key: "quantity",
          label: "Quantity",
        },
        {
          key: "total",
          label: "Total",
        },
        {
          key: "actions",
          label: "Actions",
        },
      ],
      items: [
        {
          name: "Huy",
          price: "120 vnd",
          quantity: "2",
          total: "240 vnd",
        },
      ],
      info: [
        {
          key: "name",
          label: "",
        },
        {
          key: "amount",
          label: "",
        },
        {
          key: "price",
          label: "",
        },
        {
          key: "actions",
          label: "",
        },
      ],
      bill: [
        {
          name: "Adidas",
          amount: "1",
          price: "$25.54",
        },
        {
          name: "Converse",
          amount: "1",
          price: "$30.25",
        },
      ],
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    getItem() {
      axios
        .get(`http://127.0.0.1:8000/api/view-cart`)
        .then((resp) => {
          console.log(resp);
          console.log("đã có đata");
        })
        .then((res) => {
          console.log(res);
          console.log("đã có đata 11");
        });
    },
  },
};
</script>

<style scoped>
.total-price {
  float: right;
}
.row {
  position: relative;
  overflow: auto;
  width: 100%;
  float: left;
}
.total_cart {
  background-color: rgb(177, 172, 172);
  max-width: 500px;
  padding: 15px 15px 15px 15px;
  /* float: right; */
}
.cart-caculation {
  background-color: white;
  padding: 10px 10px;
}
.left {
  width: 70%;
}
.price-total {
  display: inline-block;
}
.col-right {
  float: right;
  max-width: 450px;
  /* bottom: 25rem; */
  /* margin-right: 11rem; */
}
.container-view {
  margin: 5px 20px 5px 20px;
}
.container {
  width: 100%;
  margin: 0 auto;
  overflow: auto;
}
header.container {
  margin-bottom: 1.5rem;
}

header .breadcrumb {
  color: #7d7d7d;
}

header .breadcrumb li {
  float: left;
  padding: 0 6px;
  height: 20px;
  line-height: 20px;
}

header .breadcrumb li:first-child {
  padding-left: 2px;
}

header .breadcrumb li:not(:last-child)::after {
  content: " \276f";
  padding-left: 8px;
}

header .count {
  float: right;
  color: #333333;
  height: 20px;
  line-height: 20px;
}
.detail {
  padding: 0 0.5rem;
  line-height: 2.2rem;
  margin-left: 15rem;
}
.detail .name {
  font-size: 1.2rem;
}
.detail .price {
  font-size: 1.5rem;
}
.detail .des {
  color: #7d7d7d;
  font-size: 1rem;
}
.viewcart-1 {
  margin-top: 80px;
}
.quantity {
  display: inline-block;
  width: 170px;
  height: 70px;
  position: relative;
  margin-top: 63px;
}
.remove {
  /* position: relative; */
  margin-left: 12rem;
  /* margin-bottom: -19px; */
  margin-top: -59px;
}
h3 {
  text-align: center;
  font-weight: bolder;
}
h2 {
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
  margin-top: 130px;
}
.content {
  margin-bottom: 30px;
}
.thumbnail {
  max-width: 200px;
  float: left;
  margin-bottom: 20px;
}
.table-ct {
  color: black;
}
.ipmd {
  margin-top: 20px;
}
.btsubmit {
  display: block !important;
  margin: 30px auto 0 !important;
}
.prtotal {
  float: right;
  margin-top: -21px;
}
.paym {
  display: block !important;
  margin: 30px auto 0 !important;
}
.img-product {
  width: 200px;
}
.comeback {
  margin-bottom: 30px !important;
}
.table-bill {
  display: block;
}
</style>
