<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!IsActive" ><slot name = "item-icon"></slot></div>
    <div v-else><slot name = "item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name = "item-text"></slot></div>
  </div>
</template>

<script>

  export default {
    name: "TabBarItem",
    props:{
      path:String,
      Activecolor:{
        type:String,
        default: 'red'
      }
    },
    methods: {
      itemClick(){
        this.$router.push(this.path)


        }
    },
    data(){
      return {
/*        IsActive:true*/
      }
    },
    computed:{
      IsActive(){
/*        console.log(this.$route.path.indexOf(this.path));*/
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.IsActive ? {color:this.Activecolor}:{}
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 22px;
    height: 22px;
    margin-top: 5px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
