<template>
  <div class="counter">
    <span>-</span>
    <div class="count">{{itemIofo.count}}</div>
    <span>+</span>
  </div>
</template>

<script>
  export default {
    name: "counter"
  }
</script>

<style scoped>
  .counter{
    padding: 3px;
    width: 50px;
    display: flex;
    border: 1px solid #666666;
    border-radius:20%;
/*    position: absolute;
    right: 15px;
    bottom: 15px;*/

  }
  .count{
    padding:0 10px 0 10px ;
  }
</style>
