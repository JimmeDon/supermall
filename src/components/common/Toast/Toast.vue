<template>
  <div class="Toast" v-show="isShow">
    <span >{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return{
        message: '',
        isShow: false
      }
    },
    methods:{
      show(message = '默认字符',duration =2000){
        this.isShow = true;
        this.message = message;

        setTimeout(()=>{
          this.isShow = false;
          this.message = '';
        },duration)
      }
    }
  }
</script>

<style scoped>
  .Toast{
    position: fixed;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
/*    width: 150px;*/
 /*   align-items: center;*/
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    z-index: 99;
  }
</style>
