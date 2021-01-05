<template>
  <div class="Profile">
    <nav-bar class="navbar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <div class="user">
      <div class="userpic">
        <img src="~assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="useritem">
        <p>
          <span>登录/注册</span>
        </p>
        <div class="little">
          <img src="~assets/img/profile/phone.svg" alt="">
          <span >暂无绑定手机号</span>
        </div>
        <img class="userright" src="~assets/img/common/arrow-left.svg" alt="">
      </div>
    </div>
    <div class="message">

      <div class="mesleft">
        <p>
          <span class="mestexta">0.00</span>
          <span>元</span>
        </p>
        <p>
          <span>我的余额</span>
        </p>
      </div>

      <div class="mescenter">
        <p>
          <span class="mestexta">0</span>
          <span>个</span>
        </p>
        <p>
          <span>我的优惠</span>
        </p>
      </div>

      <div class="mesright">
        <p>
          <span class="mestexta">0</span>
          <span>分</span>
        </p>
        <p>
          <span>我的积分</span>
        </p>
      </div>

    </div>

    <div class="list">
      <div class="listleft">
        <div >
          <img src="~assets/img/profile/message.svg" alt="">
        </div>
        <div >
          <img src="~assets/img/profile/pointer.svg" alt="">
        </div>
        <div >
          <img src="~assets/img/profile/vip.svg" alt="">
        </div>
      </div>

      <div class="listright">
        <div class="listtext">
          <p>我的消息</p>
        </div>
        <div class="listtext">
          <p>积分商城</p>
        </div>
        <div class="listtext">
          <p>会员卡</p>
        </div>
      </div>

    </div>
    <div class="others">

      <div class="othersleft">

        <div >
          <img src="~assets/img/profile/cart.svg" alt="">
        </div>
        <div >
          <img src="~assets/img/profile/shopping.svg" alt="">
        </div>
      </div>

      <div class="othersright">
        <div class="listtext">
          <p>我的购物车</p>
        </div>
        <div class="listtext">
          <p>下载购物APP</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/NavBar/NavBar"

  export default {
    name: "Profile",
    components:{
      NavBar
    },
  }
</script>

<style scoped>
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .user{
    position: relative;
    background-color: var(--color-tint);
    height: 100px;
    color: #ffffff;
    display: flex;
   /* overflow: hidden;*/
  }
  .userpic img {
    height: 80px;
    width: 80px;
    margin: 10px 15px;
  }
  .useritem{
    margin: 26px 0;
  }
  .little{
    display: flex;
    position: relative;
/*    background-color: gold;*/
    font-size: 15px;
    height: 20px;
    line-height: 20px;
    margin: 5px 0;
    left: -3px;
  }
  .little img {
    height: 18px;
    width: 18px;
  }
  .userright{
    display: flex;
    position: absolute;
    right: 5px;
    top: 40%;

    height: 20px;
    width: 20px;
  }
  .message{
    height: 100px;
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 14px;
    border-bottom: 12px solid #eee;
    }
  .mestexta{
    color: red;
    font-size: 25px;
  }
  .mesleft{
    /*background-color: yellow;*/
    width: 33.33%;

  }
  .mescenter{
    /*background-color: gold;*/
    width: 33.34%;
    border-left:  2px solid #eee;
  }
  .mesright{
   /* background-color: goldenrod;*/
    width: 33.34%;
    border-left:  2px solid #eee;
  }
  .list{
    display: flex;
    height: 150px;
    line-height: 50px;
    font-size: 16px;
    border-bottom: 12px solid #eee;
  }
  .listleft{
    flex: 1;
  }
  .list img {
    width: 20px;
    height: 20px;
    margin: 0 0 0 15px;
  }
  .listright{
    flex: 8;
  }
  .listtext{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    width: 100%;
  }
  .others{
    display: flex;
    height: 100px;
    line-height: 50px;
    font-size: 16px;
  }
  .others img {
    width: 20px;
    height: 20px;
    margin: 0 0 0 15px;
  }
  .othersleft{
    flex: 1;
  }
  .othersright{
    flex: 8;
  }
</style>
