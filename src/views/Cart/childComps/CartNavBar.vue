<template>
  <div class="CartNavBar">

    <nav-bar>
      <div class="center" slot="center">购物车({{length}})</div>

      <div class="right" slot="right">
        <span>编辑</span>
        <img class="more" src="~assets/img/cart/more.svg" alt="">
      </div>

    </nav-bar>

  </div>
</template>

<script>
  import NavBar from "components/common/NavBar/NavBar"
  import { mapGetters } from 'vuex'


  export default {
    name: "CartNavBar",
    components:{
      NavBar,
    },
    computed:{
      ...mapGetters({
        length:'cartLength',
        list:'cartlist'
      })
    }
  }


</script>

<style scoped>
  .CartNavBar{
    background-color:rgba(100,100,100,.1) ;
  }
  .right{
/*    background-color: red;*/
    font-size: 10px;
  }
  .more{
    width: 10px;
    height: 10px;
    position: relative;
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
