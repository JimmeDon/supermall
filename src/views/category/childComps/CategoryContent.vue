<template>
  <scroll class="Itemcontent">
    <div class="CategoryContent">
      <div class="block" v-for="item in Item.list" >
        <a :href="item.link">
          <img :src="item.image" alt="">
          <span class="text">{{item.title}}</span>
        </a>
      </div>
    </div>
  </scroll>
</template>
<script>
  import Scroll from 'components/common/BScroll/Scroll'

  export default {
    name: "CategoryContent",
    props:{
      Item:{
        type:Object,
        default:{},
      },
    },
    components:{
      Scroll,
    }
  }
</script>
import Scroll from 'components/common/BScroll/Scroll'
<style scoped>
  .Itemcontent{
    overflow: hidden;

    width: 65%;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 35%;
  }
  .CategoryContent{
    height: calc(100% - 44px - 56px);
  }
  .block{
    display: inline-block;
    width: 50%;
    height: 100px;
    text-align: center;
  }
  .block img {
    width: 120px;
    height: 120px;
    flex: 1;
  }
</style>
