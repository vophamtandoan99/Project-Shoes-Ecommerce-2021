<template>
  <div class="carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2800"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Summer 2021"
        text="Xu hướng hot trong năm 2021."
        img-src="https://s1.storage.5giay.vn/image/2021/03/20210310_183248981d2229403e5f65b1bd5cdba6_1615350624.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://gcs.justfreshkicks.com/2019/08/b75948f8-screen-shot-2019-09-03-at-12.11.16-pm-1024x480.png">
        <h1>Trend 2021</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://myshoppeos.com/wp-content/uploads/2020/01/4319b207b85691d3c03deb54742bc63c-1024x480.jpg"
      ></b-carousel-slide>
      <!-- <b-img :src="require('../assets/slide/slide1.jpg')"></b-img> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide caption="Spring 2021">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://25.cdn.ekm.net/ekmps/shops/kieran01/images/frank-james-zeno-bordo-white-brogue-shoes-[2]-32610-p.jpg?v=1"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <hr  width="50%" size="10px" align="center" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
.carousel {
  position: relative;
  margin-top: 79px;
}
</style>