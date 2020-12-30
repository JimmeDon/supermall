<template>
  <div class="CartContent">
    <scroll class="cart-list" ref="scroll">
      <cart-list-item v-for="(item,index) in list"
                      :item-iofo = "item"
                      :key = "index"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/BScroll/Scroll'
  import { mapGetters } from 'vuex'

  import CartListItem from './CartListItem'

  export default {
    name: "CartContent",
    components:{
      Scroll,
      CartListItem,
    },
    computed:{
      ...mapGetters({
        length:'cartLength',
        list:'cartlist'
      })
    },
    activated(){
      this.$refs.scroll.refresh()
    },
  }
</script>

<style scoped>
  .CartContent{
    height: calc(100% - 44px - 49px  );
    background-color:rgba(100,100,100,.1) ;
    overflow: hidden;
  }
  .cart-list{
    height: calc(100% - 30px);
    overflow: hidden;
  }
</style>
