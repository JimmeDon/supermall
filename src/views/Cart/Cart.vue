<template>
  <div class="Cart">
    <cart-nav-bar></cart-nav-bar>
    <cart-content></cart-content>
    <cart-but-bar></cart-but-bar>
  </div>
</template>

<script>
  import CartNavBar from './childComps/CartNavBar'
/*  import Cartcate from './childComps/Cartcate'*/
  import CartContent from './childComps/CartContent'
  import CartButBar from './childComps/CartButBar'

  export default {
    name: "Shopcart",
    components:{
      CartNavBar,
      CartContent,
      CartButBar
    }
  }
</script>

<style scoped>
  .Cart{
    height: 100vh;
  }
</style>
