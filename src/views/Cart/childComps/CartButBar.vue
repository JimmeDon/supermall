<template>
  <div class="CartButBar">
    <div class="left">
      <check-button
        class="allcheck"
        :isChecked="isSelectAll"
        @click.native="checkClick"
      />
      <div class="lefttext text"><span>全选</span></div>
      <div class="price text">合计：{{totalprice}}</div>
    </div>
    <div class="right ">
      <div class="text" @click="calcclick"><span >结算({{checklength}})</span></div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/common/cheakButton/CheakButton'

  export default {
    name: "CartButBar",
    components:{
      CheckButton,
    },
    computed:{
      isSelectAll() {
        // 如果购物车为空
        if (this.$store.state.cartList.length === 0) return false;
        // 1、使用filter
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        // 2、使用find
        // return !this.$store.state.cartList.find(item => !item.checked)
        // 3、普通遍历
        for (let item of this.$store.state.cartList){
          if(!item.checked) {
            return false
          }
        }
        return true

      },
      totalprice(){
        return '￥' + this.$store.state.cartList.filter(item =>{
          return item.checked
        }).reduce((prevValue,item) => {
          return prevValue + item.price * item.count
        },0).toFixed(2)
      },
      checklength(){
        return this.$store.state.cartList.filter(item => item.checked).length
      }
    },
    methods:{
      checkClick(){
        /*console.log('触发点击事件');*/
        if (this.isSelectAll) { //全部选中
          this.$store.state.cartList.forEach(item => item.checked = false)
        } else { // 部分或全部不选中
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      },
      calcclick(){
        if(!this.isSelectAll){
          this.$toast.show('请选择购买的商品',2000)
        }
      }
    }

  }
</script>

<style scoped>
  .CartButBar{
    position: relative;
    bottom: 48px;
    z-index: 9;
    height: 40px;
    background-color: #fff;
  }
  .left{
    height: 40px;
    width: 70px;
    /*background-color: goldenrod;*/
  }
  .allcheck{
    position: absolute;
/*    left: 5px;
    top: 5px;*/
    display: flex;
    top: 10px;
    left: 3px;

    justify-content: center;

/*    width: 16px;
    height: 16px;*/
  }
  .lefttext{
    position: absolute;
    left: 25px;
    font-size: 12px;
  }
  .price{
    position: absolute;
    left:60px;
    font-size: 15px;
  }
  .right{

    background-color: #ff1d0f;
    width: 90px;
    height: 40px;
    border: 1px solid red;
    border-radius:2em;
    color: white;
  }

  .text{
    font-size: 11px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
</style>
