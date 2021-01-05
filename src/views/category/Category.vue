<template>
  <div class="Category">

    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>

    <category-menu :menulist = "resultlist" @bbb="isclick" ></category-menu>

    <category-content :Item = "MoreCategory"></category-content>

  </div>


</template>

<script>
  import NavBar from "components/common/NavBar/NavBar"
  import Scroll from 'components/common/BScroll/Scroll'

  import CategoryMenu from './childComps/CategoryMenu'
  import CategoryContent from './childComps/CategoryContent'

  import {getCategorydata,getMoreCategory} from 'network/category'


  export default {
    name: "Category",
    data(){
      return {
        resultlist:[],
        MoreCategory:{}

      }
    },
    components:{
      NavBar,
      CategoryMenu,
      CategoryContent,
      Scroll,
    },
    created(){
      //请求数据
      this.getCategorydata();
      getMoreCategory(3627).then(res =>{
        /*console.log(typeof res.data);*/
        this.MoreCategory = res.data;
       /* console.log(this.MoreCategory);*/
      })
    },
    methods:{
      getCategorydata(){
        getCategorydata().then(res =>{
         /* console.log(res);*/
          /*console.log(res.data.category.list);*/
          this.resultlist = res.data.category.list;

        })
      },
      isclick(aaa){
        /*console.log(aaa);*/
        getMoreCategory(aaa).then(res =>{
          /*console.log(typeof res.data);*/
          this.MoreCategory = res.data;
         /* console.log(this.MoreCategory);*/

        })
      }
    }

  }
</script>

<style scoped>
  .Category{
    height: 100vh;
   /* position: relative;*/
  }
  .navbar{
    background-color: var(--color-tint);
    color: white;
  }
  .contenta{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 35%;

    overflow: hidden;

    height: calc(100% - 44px - 56px);
/*    background-color: goldenrod;*/
  }

</style>
