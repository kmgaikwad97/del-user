<template>
  <div>
    <div class="container product-page">
      <!-- Heading Starts -->
      <div class="product-heading">
        <h1>FakeStore Products</h1>
      </div>
      <!-- Heading Ends -->
      <div class="row m-0">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
          v-for="product in products"
          :key="product.title"
        >
          <figure>
            <img :src="product.img" class="img-fluid" alt="" />
          </figure>
          <p class="title">
            <b>{{ product.title }}</b>
          </p>
          <div>
            <p class="price">
              <b>₹ {{ product.price }}</b>
            </p>
          </div>
          <div>
            <p>{{ product.desc }}</p>
          </div>
        </div>
      </div>

      <!-- pagination starts -->

      <!-- <div class="my-4">
            <h2>Pagination coming soon</h2>
        </div> -->
      <!-- pagination ends -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Product",
  data() {
    return {
      // product: ""
    };
  },
  // async mounted() {
  //     const result = await axios.get('http://localhost:3001/getProduct');
  //     console.log(result);
  //     this.product = result.data
  // },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
</style>
