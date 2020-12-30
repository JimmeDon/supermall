<template>
  <div id="detail">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles"
              class="titlesItem"
              :class="{active: index === currentIndex
              }"
              @click="titleclick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/NavBar/NavBar"

  export default {
    name: "DetailNavBar",
    data(){
      return{
        titles:['商品', '参数', '评论', '推荐'],
        currentIndex:0,
      }
    },
    components:{
      NavBar
    },
    methods:{
      backClick(){
        this.$router.go(-1)
      },
      titleclick(index){
        this.currentIndex = index;
        this.$emit('navClick',index)
      }
    }
  }
</script>

<style scoped>
  .titles{
    display: flex;
    font-size: 13px;
  }
  .titlesItem{
    flex: 1;
  }
  .back img{
    margin-top: 12px;
  }
  .active{
    color: red;
  }
</style>
