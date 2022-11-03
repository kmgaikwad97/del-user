import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product:[
      {
        title:"Product1",
        desc:"This is the sample product",
        img:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
        price:"200",
        status:"active"
      },
      {
        title:"Product2",
        desc:"This is the sample product",
        img:"https://thumbs.dreamstime.com/b/home-beauty-produc…s-sponges-soap-facial-brush-l-light-114383211.jpg",
        price:"100",
        status:"active"
      },
      {
        title:"Product3",
        desc:"This is the sample product",
        img:"https://thumbs.dreamstime.com/b/set-care-beauty-products-skin-29817248.jpg",
        price:"500",
        status:"active"
      },
      {
        title:"Product4",
        desc:"This is the sample product",
        img:"https://thumbs.dreamstime.com/b/beauty-products-3084741.jpg",
        price:"600",
        status:"active"
      },
      {
        title:"Product5",
        desc:"This is the sample product",
        img:"https://thumbs.dreamstime.com/b/spa-beauty-products-4120911.jpg",
        price:"800",
        status:"active"
      },
      {
        title:"Product6",
        desc:"This is the sample product",
        img:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
        price:"230",
        status:"inactive"
      },
      {
        title:"Product7",
        desc:"This is the sample product",
        img:"https://thumbs.dreamstime.com/b/beauty-products-3084741.jpg",
        price:"270",
        status:"inactive"
      },
      {
        title:"Product8",
        desc:"This is the sample product",
        img:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
        price:"209",
        status:"inactive"
      },
      {
        title:"Product9",
        desc:"This is the sample product",
        img:"https://thumbs.dreamstime.com/b/home-beauty-produc…s-sponges-soap-facial-brush-l-light-114383211.jpg",
        price:"219",
        status:"inactive"
      },
      {
        title:"Product10",
        desc:"This is the sample product",
        img:"https://thumbs.dreamstime.com/b/beauty-products-3084741.jpg",
        price:"529",
        status:"inactive"
      },
      {
        title:"Product11",
        desc:"This is the sample product",
        img:"https://thumbs.dreamstime.com/b/spa-beauty-products-4120911.jpg",
        price:"729",
        status:"inactive"
      },
      {
        title:"Product12",
        desc:"This is the sample product",
        img:"https://thumbs.dreamstime.com/b/set-care-beauty-products-skin-29817248.jpg",
        price:"229",
        status:"inactive"
      },
    ]
  },
  getters: {
  },
  mutations: {
    // NEW_DEL({state},deleteFun){
    //   state.
    // }
  },
  actions: {
    deleteUser({commit}, deleteFun ){
      commit('NEW_DEL', deleteFun)
    }
  },
  modules: {
  }
})
