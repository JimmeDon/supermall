<template>
  <div class="CartListItem">

    <div class="left">
      <check-button class="btn" @btncklick = "btnidclick" :isChecked = "itemIofo.checked"></check-button>
      <img :src="itemIofo.img" alt="">
    </div>
    <div class="right">
      <div class="righttop">
        <span class="title text">{{itemIofo.title}}</span>
        <span class="desc text">{{itemIofo.desc}}</span>
      </div>
      <div>
        <span class="price ">￥{{itemIofo.price}}</span>
        <div class="counter">
          <span>-</span>
          <div class="count">{{itemIofo.count}}</div>
          <span>+</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CheckButton from 'components/common/cheakButton/CheakButton'

  export default {
    name: "CartListItem",
/*    data(){
      return {
        iisChecked:this.itemIofo.checked
      }
    },*/
    components:{
      CheckButton
    },
    props:{
      itemIofo:{
        type:Object,
        default:{}
  }
    },
    /*  computed:{
      ...mapGetters({
        length:'cartLength',
        list:'cartlist'
      })
    },*/
    mounted(){
    },
    methods:{
      btnidclick(){
        this.itemIofo.checked = !this.itemIofo.checked
        /*this.iisChecked = !this.iisChecked*/
      }
    }
  }
</script>

<style scoped>
  .CartListItem{
    background-color: #fff;
    display: flex;
    height: 19vh;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    margin: 5px 3px 5px 3px;
    border-radius:2%;
    overflow:hidden;
  }

  .left{
    position: relative;
    width: 30%;
  }

  .left img{
    height: 90px;
    width: 60px;
    position: absolute;
    top: 10px;
    left: 25px;
/*    margin-left: 20px;*/
  }

  .btn{
    position: absolute;
    top: 46px;
    left: 3px;
  }
  .right{
    top: 10px;
    position: relative;
    width: 70%;
  }
.title{
  font-size: 14px;
  position: absolute;
  padding: 3px;
  top: 10px; ;
  width: 234px;
}
.desc{
  position: absolute;
  top: 38px;
  padding: 3px;
  font-size: 11px;
  width: 234px;
}
  .price{
    position: absolute;
    top: 72px;
    left: 20px;
  }

/*  .counte{
    background-color: black;
    position: absolute;
    right: 15px;
    bottom: 15px;
  }*/
  .counter{
    padding: 3px;
    width: 50px;
    display: flex;
    border: 1px solid #666666;
    border-radius:20%;
    position: absolute;
    right: 15px;
    bottom: 15px;

  }
  .count{
    padding:0 10px 0 10px ;
  }
  .text{
    border-collapse: collapse;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

</style>
