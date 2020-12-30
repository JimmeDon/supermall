import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],
  },
  actions,
  mutations,
  modules: {
  },
  getters,
})
 /* mutations: {
/!*    addCart(state,payLoad){
      oldProduct = null;
      for(let item of state.cartList){
        if(item.iid === payLoad.iid){
          oldProduct = item
        }
        }
    let oldProduct = state.cartList.find(item => item.iid === payLoad)
    if(oldProduct) {
      oldProduct.count += 1
    }else{
       padLoad.count =1
      state.cartList.push(payLoad)
    }}*!/
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    //context:{state,commit}
    addCart(context,payload){
      return new Promise ((resolve, reject) => {
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

        if(oldProduct) {
          context.commit('addCounter', oldProduct);
          resolve('当前商品数量+1')
        }else {
          context.commit('addToCart', payload);
          resolve('添加了新的商品')
        }
      })
    }
/!*    addCart(context, payload){
      // payload新添加的商品
      return new Promise((resolve, reject) => {
        // 查找之前数组中是否有该商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        // 判断oldProduct
        if(oldProduct) {
          context.commit('addCounter', oldProduct)
          resolve('当前商品数量+1')
        }else {
          // 当前加入的是新商品,push进来
          context.commit('addToCart', payload)
          resolve('添加了新的商品')
        }
      })
    }*!/
  },*/


