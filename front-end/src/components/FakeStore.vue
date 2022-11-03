<template>
<div>
    <div class="container product-page">
        <div class="product-heading">
            <h2>Products</h2>
        </div>
        <div class="row m-0">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="item of product" :key="item._id">
                <figure>
                    <img :src="item.img" class="img-fluid" alt="" />
                </figure>
                <p class="title">
                    <b>{{ item.title }}</b>
                </p>
                <div>
                    <p class="price">
                        <b>₹ {{ item.price }}</b>
                    </p>
                </div>
                <div>
                    <p>{{ item.desc }}</p>
                </div>
            </div>
        </div>

        <!-- pagination starts -->

        <div class="my-4">
            <h2>Pagination coming soon</h2>
        </div>
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
            product: "",
        };
    },
    async mounted() {
        const result = await axios.get("http://localhost:3001/getProduct");
        console.log(result);
        this.product = result.data;
    },
    // mounted(){
    //     this.$store.dispatch('getProduct')
    // }
};
</script>

<style>
</style>
