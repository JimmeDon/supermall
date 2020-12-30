<template>
    <div class="Cartcate">
      <div class="cartNavBtmItem">全部</div>
      <div class="cartNavBtmItem">降价</div>
      <div class="cartNavBtmItem">常买</div>
      <div class="cartNavBtmItem">分类</div>
    </div>
</template>

<script>
  export default {
    name: "Cartcate"
  }
</script>

<style scoped>
  .Cartcate{
  background-color:rgba(100,100,100,.1) ;
  /*    background-color: red;*/
  display: flex;
  text-align: center;
  /*    margin: 10px 0 10px 0;*/
  /*    margin-top: 10px;padding-bottom: 10px;*/
  padding: 10px 0 10px 0 ;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
}
.cartNavBtmItem{
  flex: 1;

}
</style>
