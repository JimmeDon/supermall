<template>
  <div class="CheckButton" :class = "{check:isChecked}">
    <img src="~assets/img/cart/tick.svg"
         alt=""
         @click="btnclick">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default: false
      }
    },
    methods:{
      btnclick(){
        this.$emit('btncklick');

      }
    }
  }
</script>

<style scoped>
  .CheckButton{
   /* background-color: red;*/
    border-radius: 50%;
    border: 2px solid #666666;
    position: fixed;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .CheckButton img{
    width: 13px;
    height: 13px;
  }
  .check{
  border-color: red;
  background-color: red;

}
</style>
