<template>

  <div class="CategoryMenuItem">
    <div class="item " v-for="(item,index) in Item "
         :class="{Active: currentIndex === index } "
         @click="isActivee(index)">
      {{item.title}}
    </div>
  </div>

</template>

<script>
  export default {
    name: "CategoryMenuItem",
    props:{
      Item:{
        type:Array,
        default:[],
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      isActivee(index){
        this.currentIndex = index;
/*        console.log(this.Item[index].maitKey);*/
        const aaa = this.Item[index].maitKey
        /*this.$emit('itemClick',aaa)*/
        this.$emit('itemClick',aaa)
        console.log(aaa + '@1');
      }
    },
  }
</script>

<style scoped>
  .item{
    height: 50px;
    line-height: 50px;
    background-color: #f6f6f6;
    text-align: center;
/*    border-bottom: 1px solid #666666;*/
  }

  .Active{
    background-color: #fff;
    color: red;
  }
</style>
