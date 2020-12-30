<template>
  <div id="Detail">
    <detail-nav-bar class="navbar"
                    @navClick = "itemClick"
                    ref="navbar" :currentIndex  = "currentIndex">
    </detail-nav-bar>
    <scroll class="content"
            ref="scroll"
            :probeType = '3'
            @scroll="detailposition">
      <detail-swiper :top-images = "topImages"></detail-swiper>

      <detail-base-info :goods = "goods"></detail-base-info>

      <detail-shop-info :shop = "shop"></detail-shop-info>
      <!--使用Shop会报错  为什么-->

      <detail-param-info :param-info = "paramInfo"ref="params"></detail-param-info>

      <detail-comment-info :comment-iofo = "commentIofo" ref="comment"></detail-comment-info>

      <detail-goods-info :detailInfo = "detailInfo" @imageLoad = "imageLoad" ref="goods"></detail-goods-info>
    </scroll>

    <back-top @click.native="backtop"
              v-show="isShow"
              class="backtop"></back-top>
    <detail-buttom-bar @addTocarts = "addcarts" ></detail-buttom-bar>

    <!--<toast :tips = "message" :isShow = "isShoww"/>-->

  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailButtomBar from './childComps/DetailButtomBar'

  import Toast from 'components/common/Toast/Toast'
  import BackTop from  'components/common/BackTop/BackTop'
  import { mapActions } from 'vuex'

  import {getDetail,Goods,Shop,GoodsParam,Comments} from "network/detail";

  import Scroll from 'components/common/BScroll/Scroll'

  import {debounce,formaData} from 'common/utils'

  export default {
    name: "Detail",
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},

        commentIofo:{},
        paramsscrollY:[],
        isShow:false,
        currentIndex:0,
        message:'',
        isShoww:false
      }
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      BackTop,
      DetailButtomBar,
      /*Toast,*/
    },
    created(){
      //1. 保存传入的iid
      this.iid = this.$route.params.id;
      //2. 根据iid请求详情数据
      getDetail(this.iid).then(res => {
       /* console.log(res);*/
        //获取结果
        const data = res.result;
        //获取轮播图的数据
        this.topImages = data.itemInfo.topImages;
        //获得推荐数据
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        //获取店铺信息
        this.shop = new Shop(data.shopInfo);
        //获得详情
        this.detailInfo = data.detailInfo;
        //获取参数
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
        //获得评论信息
        this.commentIofo = new Comments(data.rate);
        /*this.commentIofo = data.rate.list[0]*/
/*        console.log(this.commentIofo);*/

        this.$nextTick(() =>{
          this.paramsscrollY.push(0);
          this.paramsscrollY.push(this.$refs.params.$el.offsetTop);
          this.paramsscrollY.push(this.$refs.comment.$el.offsetTop);
          this.paramsscrollY.push(this.$refs.goods.$el.offsetTop)
        })
      })
    },
    methods:{
      ...mapActions(['addCart']),
      debounce,
      formaData,
      imageLoad(){
        this.$refs.scroll.refresh()
      },
      itemClick(index){
/*        console.log(index);
        console.log(this.paramsscrollY[index]);*/
        /*console.log(this.$refs.scroll.getScrolly());*/
        /*this.scroll&&this.$refs.scroll.refresh()*/
        this.$refs.scroll.scrollTo(0,-this.paramsscrollY[index]+50,0)
      },
      detailposition(position){
        this.isShow = (-position.y) > 500;
        this.$refs.navbar.currentIndex = this.currentIndex
      },
      backtop(){
        this.$refs.scroll.scrollTo(0,0,0)
      },
      addcarts(){
/*        console.log('----');*/
        const product = {};
        product.iid = this.iid;
        product.img = this.topImages[0];
        product.desc = this.goods.desc;
        product.title = this.goods.title;
        product.price = this.goods.realPrice;
        product.count = 1;


        /*this.$store.commit('addCart',product);*/
          this.addCart(product).then(res =>{
            console.log(res);
            this.$toast.show(res,2000);
            /*console.log( this.$toast);*/
          })
         /* this.$store.dispatch('addCart',product)*//*.then(res =>{
            /!*console.log(typeof res);*!/
           this.isShoww = true;
            this.message = res

            setTimeout(() => {
              this.isShoww = false;
              this.message = ''
            }, 1500)
          })*/
/*          this.$store.dispatch('addCart',product)*/
      }
    }
  }
</script>

<style scoped>
  #Detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    overflow: hidden;
  }

  .content{
    height: calc(100% - 99px );
  }
  
  .navbar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .backtop{
    position: fixed;
  }
</style>
