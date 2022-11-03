import axios from "axios";

export const getProducts = ({ commit }) => {
  axios
//   .get("https://fakestoreapi.com/products")
    .get("http://localhost:3001/getProduct")
    // axios.get('http://localhost:3001/getProduct')
    .then((response) => {
      commit("SET_PRODUCTS", response.data);
      console.log(response.data);
    });
};

// import axios from 'axios';
// export const getProducts = ({ commit}) =>{
//     axios.get('https://fakestoreapi.com/products')
//     .then(response =>{
//         commit('SET_PRODUCTS',response.data);
//     console.log(response.data);
//     })
// }
