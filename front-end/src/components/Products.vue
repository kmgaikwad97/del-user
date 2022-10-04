<template>
  <div>
    <div class="container product-page">
        <div class="product-heading">
            <h2>Products</h2>
        </div>
        <div class="row m-0">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="items of product" :key="items._id">
                <figure>
                    <img :src="items.img" class="img-fluid" alt="">
                </figure>
                <p class="title">
                   <b>{{items.title}}</b> 
                </p>
                <div>
                    <p class="price">
                       <b>₹ {{items.price}}</b> 
                    </p>
                </div>
                <div>
                    <p>{{items.desc}}</p>
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
import axios from 'axios'
export default {
    name:'Product',
    data(){
        return{
            product:""
        }
    },
    async mounted() {
        const result = await axios.get('http://localhost:3001/getProduct');
        console.log(result);
        this.product = result.data
    },
}


</script>

<style>

</style>