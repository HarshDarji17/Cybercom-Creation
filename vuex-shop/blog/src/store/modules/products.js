import axios from "axios";
const state = {
    products:[]
};
const getters = {
    allProducts: state => state.products
};
const actions = {
    async getProducts({commit}){
        const response = await axios.get("http://localhost:3000/products");
           commit("setProducts",response.data);
        // console.log(response.data)
    },
    async addProduct( { commit }, product){
         const response = await axios.post("http://localhost:3000/products" , product);
         commit("newProduct" , response.data);
    },
    async deleteProduct({commit} , id) {
       await axios.delete(`http://localhost:3000/products/${id}`);
       commit("removeProduct" , id)
    }
};
const mutations = {
    setProducts: (state,products) => (state.products = products),
    newProduct: (state , product) => state.products.unshift(product),  // unshift add to data in first array index
    removeProduct: (state , id) =>  (state.products.filter(product => product.id !== id))
};

export default {
    state,
    getters,
    actions,
    mutations

}