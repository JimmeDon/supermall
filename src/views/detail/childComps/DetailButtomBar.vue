<template>
  <div class="buttomnav">
    <div class="barleft">
      <div class="leftitem">
        <i class="icon serve"></i>
        <span class="text">客服</span>
      </div>
      <div class="leftitem">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="leftitem">
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="barright ">
      <div class="rightitem rone">
        <span class="text" @click="addTocart">加入购物车</span>
      </div>
      <div class="rightitem rtwo">
        <span class="text">购买</span>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: "DetailButtomBar",
    methods:{
      addTocart(){
        this.$emit('addTocarts')
      }
    },
    components:{
    }
  }
</script>

<style scoped>
  .buttomnav{
    height: 58px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    border-top: 2px solid #f2f5f8;
/*    position: relative;
    bottom: 49px;
    background-color: red;*/
    display: flex;
  }
  .barleft{
/*    background-color: blue;*/
    margin-left: 8px;
    display: flex;
    width: 40%;
    text-align: center;
  }
  .leftitem{
    display: inline-block;
    flex: 1;
  }
  .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 3px;
/*    background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100% ;*/
  }
  .serve{
    background: url("../../../assets/img/detail/kefu.svg")  0 0/100%;
  }
  .shop{
    background: url("../../../assets/img/detail/dianpu.svg")  0 0/100%
  }
  .select{
    background: url("../../../assets/img/detail/shoucang.svg")  0 0/100%
  }
  .barright{
    width: 60%;
    display: flex;
    text-align: center;
    color: #fff;
  }
  .rightitem {
    flex: auto;
    line-height: 58px;
    height: 58px;
  }
  .rone{
    background-color: #ffea2a;
  }
  .rtwo{
    background-color: red;
  }

</style>
