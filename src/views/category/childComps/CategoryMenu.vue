<template>

  <scroll class="menucontent">
    <div class="CategoryMenu">
      <div class="CategoryMenuItem">
        <div class="item " v-for="(item,index) in menulist "
             :class="{Active: currentIndex === index } "
             @click="isActivee(index)">
          {{item.title}}
        </div>
      </div>
    </div>
  </scroll>
</template>
<script>
  import Scroll from 'components/common/BScroll/Scroll'

  export default {
    name: "CategoryMenu",
    data(){
      return{
        currentIndex:0
      }
    },
    props:{
      menulist:{
        type:Array,
        default:[],
      }
    },
    components:{
      Scroll,

    },
    methods:{
      isclick(aaa){
        console.log('---');
/*        console.log(aaa+'@2');
        this.$emit('Itemclick',aaa)*/

      },
      isActivee(index){
        this.currentIndex = index;
        /*        console.log(this.Item[index].maitKey);*/
        const aaa = this.menulist[index].maitKey;
        /*this.$emit('itemClick',aaa)*/
        this.$emit('bbb',aaa);
        /*console.log(aaa + '@1');*/
      }

    }
  }
</script>

<style scoped>



  .menucontent{
    overflow: hidden;

    width: 35%;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    /*background-color: yellow;*/
  }

  .CategoryMenu{
    left: 0;
    height: calc(100% - 44px - 56px);
    overflow: hidden;
  }
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
