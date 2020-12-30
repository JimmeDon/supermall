


export default  {
  /*    addCart(state,payLoad){
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
      }}*/
  addCounter(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}

