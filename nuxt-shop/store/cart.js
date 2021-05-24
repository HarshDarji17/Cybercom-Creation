// const cart = {
//   state: {
//    cartData: {
//    products: [],
//    totalPrice: 0,
//    Quantities:0
//    }
//   },
//   getters: {
//    getCart: (state) => {
//     return state.cartData;
//    },
//    getPrice: (state) => {
//        let price = 0;
//        state.cartData.products.forEach(product => (
//           price += product.totalPrice
//       ))
//       return price;
//    },
//    getQuantities: (state) => {
//        let qauntites = 0;
//        state.cartData.products.forEach(product => (
//         qauntites += parseInt(product.quantity)
//        ))
//        return qauntites;
//    }
//   },
//   mutations: {
//    addToCart: (state, payload) => {
//      const product = state.cartData.products.find(pro => pro.id === payload.id);
//      if(product) {
//          return state;
//      } else {
//          payload.totalPrice = parseInt(payload.quantity) * payload.price;
//          console.log(payload);
//          state.cartData = {...state.cartData, products: [...state.cartData.products, payload],totalPrice: state.cartData.totalPrice + payload.price, Quantities: state.cartData.Quantities + 1 };
//      }
//    },
//    updateQuantity: (state, payload) => {
//        const product = state.cartData.products.find(product => product.id === payload.id);
//        product.totalPrice = product.price * parseInt(product.quantity);
//        const index = state.cartData.products.findIndex(product => product.id === payload.id);
//        state.cartData.products[index] = product;
       
//    },
//    deleteProduct: (state, id) => {
//        state.cartData.products = state.cartData.products.filter(product => product.id !== id);
//    }
//   },
//   actions: {
//    addToCart: (obj, payload) => {
//        obj.commit("addToCart", payload);
//    },
//    updateQuantity: (obj, payload) => {
//       obj.commit("updateQuantity", payload);
//    },
//    deleteProduct: (obj, id) => {
//        obj.commit("deleteProduct", id);
//    }
//   }
// }

// export default cart;
import Vue from 'vue'

export const state = () => ({
  cartItems: [],
})

export const mutations = {

  // add product in cart
  addToCart(state, product) {
    let productInCart = state.cartItems.find((item) => {
      return item.product.id === product.id
    })

    if (productInCart) {
      productInCart.quantity++
    } else {
      state.cartItems.push({
        product,
        quantity: 1,
      })
      
    }
  },

  // remove one product from cart
  decrementQuantity(state, product) {
    let productInCart = state.cartItems.find((item) => {
      return item.product.id === product.id
    })

    if (productInCart.quantity > 1) {
      productInCart.quantity--
    } else {
      state.cartItems = state.cartItems.filter((item) => {
        return item.product.id !== product.id
      })
    }
    
  },

  // remove all quantities of product from cart
  removeItem(state, product) {
    state.cartItems = state.cartItems.filter((item) => {
      return item.product.id !== product.id
    })  
  },
}

export const getters = {
  // cart items
  cartItems: (state) => state.cartItems,

  // cart quantities
  cartQuantities: (state) => {
    let total = 0

    state.cartItems.forEach((item) => {
      total += item.quantity
    })

    return total
  },

  // cart total
  cartTotal: (state) => {
    let total = 0

    state.cartItems.forEach((item) => {
      total += item.product.price * item.quantity
    })

    return total
  },
}