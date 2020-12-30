<template>
  <div class="Comment" v-if="Object.keys(commentIofo).length !== 0">
    <div class="title" @click="commentclick">
        <div>
          <span class="titlefrist">评价：</span>
          <span class="titlescend">{{commentIofo.cRate}}</span>
          <img src="~assets/img/common/arrow_1.svg" alt="">
        </div>
    </div>
    <div class="user">
      <div class="usertitle">
        <img :src="commentIofo.avatar"  alt="" class="avatar">
        <span class="username">{{commentIofo.name}}</span>
        <span class="create">{{commentIofo.create |  showData()}}</span>
      </div>

      <div class="content">
        <div>{{commentIofo.content}}</div>
        <div v-if="commentIofo.image.length !== 0">
          <img class="contentpic" :src="commentIofo.image" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {debounce,formaData} from 'common/utils'

  export default {
    name: "DetailCommentInfo",
    props:{
      commentIofo:{
        type: Object,
        default() {
          return {}
        }
      }
  },
    methods:{
      formaData,
      commentclick(){

      }
    },
    filters:{
      showData(value){
        //1. 将时间戳转化成Date对象
        const date = new Date(value * 1000)
        //2. 将date进行格式化
        return formaData(date,'yyyy:MM:dd:hh:mm:ss')

      }
    }
  }
</script>

<style scoped>
  .Comment{
    /*大标签*/
    background-color: #fff;
    border-bottom: 5px solid #f2f5f8;
  }
  .title{
    overflow: hidden;
    padding: 20px;
    border-bottom:  2px solid #f2f5f8;
  }

  .titlefrist{
    /*评价*/
    font-weight: bold;
  }

  .title img{
    width: 15px;
    height: 15px;
    float: right;
  }

  .user{
    padding: 15px;
  }

  .usertitle{
    display: flex;
    padding: 5px;

  }

  .avatar{
    width: 30px;
    height: 30px;
    border-radius:100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-right: 10px;
  }

  .username{
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    align-content: center;
  }

  .create {
    font-size: 13px;
    color: var(--color-text);
/*    border: solid #666666;*/
    padding: 3px;
    margin-left: 5px;
    margin-top: 5px;
    line-height: 13px;
    height: 13px;

  }

  .contentpic{
    margin: 15px 5px -5px 0;
    width: 50px;
    height: 50px;
  }

  .content{
    font-size: 13px;
    margin: 5px 5px 0 5px;
  }
</style>
