import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let url = "http://localhost:8000/products/findAll";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    productsArray: [],
    inCart: [],
    user: {
      isAuthenticated: false,
      name: "",
      email: "",
      idToken: "",
      accessToken: "",
      partner: false
    },
    endpoints: {
      login: "http://localhost:3000/login",
      partnercheck: "http://localhost:8000/check",
      products: "http://localhost:8000/products",
    },
  },
  getters: {
      getProducts: (state) => state.productsArray,
      inCart: state => state.inCart,
  },
  mutations: {
    setUrls (state) {
      state.endpoints.login = process.env.VUE_APP_AUTH_URL;
       state.endpoints.products = process.env.VUE_APP_PRODUCTS_URL;
       url = state.endpoints.products+"/findAll";
    },
    logout(state) {
      state.user.isAuthenticated = false;
      state.user.name = "";
      state.user.email ="";
      state.user.idToken ="";
      state.user.accessToken = "";
      state.user.partner = "";
    },
    login(state, payload) {
      state.user.isAuthenticated = true;
      state.user.name = payload.name;
      state.user.email =payload.email;
      state.user.idToken =payload.idToken;
      state.user.accessToken =payload.accessToken;
    },
     SET_PARTNER(state, partner) { 
      state.user.partner = partner;
    },
    SET_PRODUCTS(state, product) {
      state.productsArray = product
    },
    setProducts(state, payload) {
      state.productsArray = payload;
    },
    addToCart(state, payload) { 
     console.log(payload);
     state.inCart.push(payload);
    },
    removeFromCart(state, item) { 
      state.inCart.splice(item, 1); 
    },
    /*
    logout(state) {
     state.user.isAuthenticated = false;
     state.user.name = "";
     state.user.email ="";
     state.user.idToken ="";
    },
    login(state, payload) {
     state.user.isAuthenticated = true;
     state.user.name = payload.name;
     state.user.email =payload.email;
     state.user.idToken =payload.idToken;
    },*/
  },
  
  actions: {
    /*async getProducts({ commit }){
        try{
          const data = await axios.get(this.state.endpoints.products)
          commit('SET_PRODUCTS', data.data)
          
        }catch (error) {
          alert(error)
          console.log(error)
        }
        
    },*/
    async getProducts(state) {
      const products = await fetch(url, { headers });
      const prods = await products.json();
      state.commit("setProducts", prods);
      console.log(prods);
    },
    async checkPartner({ state, commit }) {
      let accessToken = state.user.accessToken;
      console.log("checking partner access", state.endpoints.partnercheck);
      const AuthStr = 'Bearer '.concat(accessToken);
      const AuthHeader = { 'Authorization': AuthStr};
      console.log("AuthToken=",AuthHeader);
      let response = await fetch(state.endpoints.partnercheck, { 
        method: 'GET',
        headers: {
          'Authorization': AuthStr }
        });
      console.log("partneraccess",response);
      if (response.ok) {
        commit('SET_PARTNER', true);
        console.log("TRUE");
      } else {
        commit('SET_PARTNER', false);
        console.log("FALSE");
      }
    },
    registerProduct({ state }, obj) {
      let productsurl = state.endpoints.products;
      console.log(productsurl);
      let accessToken = state.user.accessToken;
      const AuthStr = 'Bearer '.concat(accessToken);
      console.log('Auth'.concat(AuthStr));
      console.log(obj);
      axios.post(productsurl, obj, { 
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': AuthStr
          },
          credentials: 'include',
      })
      .then(response => {
        console.log('Response:', response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    },
  },
  modules: {
  }
})