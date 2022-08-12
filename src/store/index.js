import { createStore } from 'vuex'
import axios from 'axios';
import router from '@/router';

const jtlaptopsURL = "https://jtlaptops.herokuapp.com/";
export default createStore({
  state: {
    users: null,
    products: null,
    showSpinner: true,
    readMeData: null,
    errMsg: ''
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setProducts(state, values) {
      state.products = values
    },
    setShowSpinner(state, value) {
      state.showSpinner = value
    },
    setReadMeUrl(state, value) {
      state.readMeData = value
    },
    setErrMsg(state, value) {
      state.errMsg = value
    }
  },
  actions: {
    fetchReadMeUrl: async(context)=> {
      let res = await axios.get(jtlaptopsURL);
      let {url} = await res.config;
      if((url != null) || (url != undefined)) {
        context.commit('setReadMeUrl', url);
        context.commit('setShowSpinner', false);
      }else {
        context.commit('setShowSpinner', true);
      }
    },
    fetchUsers: async (context) => {
      let res = await axios.get(jtlaptopsURL+"users");
      let {results } = await res.data;
      if(results instanceof(Array) ) {
        context.commit('setUsers', results);
      }else {
        context.commit('setErrMsg', results) ;
      }
    },
    fetchProducts: async (context)=> {
      let res = await axios.get(jtlaptopsURL+"products");
      let { results }  = await res.data;
      if(results instanceof(Array)) {
        context.commit('setProducts', results);
        context.commit('setShowSpinner', false);
      }else {
        context.commit('setErrMsg', results);
        context.commit('setShowSpinner', true);
      }
    },
    //Login
    login: async (context, payload) => {
      const {email, userpassword} = payload;
      const data = {
        email,
        userpassword
      };
      let res = await axios.patch(jtlaptopsURL+"users", data);
      let results = await res.data;
      if(results) {
        // context.commit('setUsers', results);
        // context.commit('setShowSpinner', false);

      }
    },
    //Signup
    signUp: async (context, payload)=> {
      let {fullname, email, userpassword, userRole,
        phonenumber, joinDate } = payload;
      const data = {
        fullname, 
        email,
        userpassword,
        userRole,
        phonenumber,
        joinDate
      };
      try{
        let res = await axios.post(jtlaptopsURL+"users", data);
        let {results}  = await res.data;
        if(results) {
          context.commit('setUsers', results);
          router.push({name: "login"});
        }
      }catch(e) {
        console.lolg(e);    
      }
    },
    // async updateUser(context, payload) {

    // }
  },
  modules: {
  }
})
