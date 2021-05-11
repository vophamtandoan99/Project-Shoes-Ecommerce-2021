<template>
  <div class="product-details">
    <div class="container">
      <b-row>
        <b-col lg="6">
          <img
            class="img"
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/uoxteud0rv2d2wml9xkl/air-force-1-07-shoe-vrP72V.png"
            alt="IMG-PRODUCT"
          />
        </b-col>
        <b-col lg="6">
          <div class="info-product">
            <h1 class="my-4">
              {{ productTitle }} Nike Air
              <b-badge class="sale" variant="danger"> 50%</b-badge>
            </h1>
            <b-badge class="price" variant="light"> $50</b-badge>
            <b-badge class="discount" variant="danger"> $25</b-badge>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in
              voluptatibus illo doloremque delectus natus autem explicabo
              accusamus maxime.
            </p>
            <div class="size">
              <p>Size:</p>
              <b-form-select
                class="sl-size"
                v-model="selected"
                :options="options"
              >
              </b-form-select>
            </div>
            <div class="color">
              <p>Color:</p>
              <b-form-select
                class="sl-color"
                v-model="selecteds"
                :options="color"
              >
              </b-form-select>
              <div class="quantity">
                <p>Quantity:</p>
                <b-form-spinbutton
                  class="count"
                  id="demo-sb"
                  v-model="value"
                  min="1"
                  max="50"
                ></b-form-spinbutton>
              </div>
            </div>
            <div>
              <b-button class="addtocart" @click="addToCart">
                ADD TO CART
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <div class="description">
          <h3>Description</h3>
          <p>
            Hàng loạt bản mẫu. Hàng loạt cải tiến. Hàng loạt thử nghiệm. Đồng
            hành cùng chúng tôi trên hành trình tìm kiếm sự hòa hợp đỉnh cao
            giữa trọng lượng, sự êm ái và độ đàn hồi. Nike Air. Đón chào
            nguồn năng lượng hoàn trả phi thường.
          </p>
          <br />
          <ul>
            <li>Vừa vặn như đi tất</li>
            <li>Có dây buộc</li>
            <li>Thân giày adidas Primeknit+</li>
            <li>Lớp lót bằng vải dệt</li>
            <li>Đệm gót giày nâng đỡ</li>
          </ul>
        </div>
      </b-row>
    </div>
    <top-nav-home />
  </div>
</template>

<script>
import ContentFooterHome from "../components/Footer/ContentFooterHome.vue";
import TopNavHome from "../layout/TopNavHome.vue";
export default {
  components: { TopNavHome, ContentFooterHome },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an size" },
        { value: "1", text: "37" },
        { value: "2", text: "38" },
        { value: "3", text: "39" },
        { value: "4", text: "40" },
      ],
      selecteds: null,
      color: [
        { value: null, text: "Please select an color" },
        { value: "1", text: "Black" },
        { value: "2", text: "White" },
        { value: "3", text: "Blue" },
        { value: "4", text: "Orange" },
      ],
    };
  },
};
</script>

<style scoped>
.product-details {
  margin-top: 10%;
}
.img-product {
  display: block;
  float: left;
}
.sale {
  font-size: 16px;
  margin-bottom: 20px;
}
.addtocart {
  margin-left: 40px;
}
.info-product {
  display: block;
  float: right;
}
.price {
  font-size: 30px;
  margin-bottom: 15px;
  margin-right: 20px;
  text-decoration: line-through;
}
.size {
  width: 250px;
  margin-bottom: 15px;
}
.color {
  width: 250px;
  margin-bottom: 15px;
}
.quantity {
  width: 250px;
  margin-bottom: 15px;
}
.discount {
  font-size: 30px;
  margin-bottom: 15px;
}
.img {
  width: 500px;
  height: 500px;
}
</style>