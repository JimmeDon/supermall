<template>
  <div id="home" >
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <tab-control :titles ="['流行','新款','精选']"
                 @tabClick="tabClick" ref="tabControl1"
                  v-show="isShowtab"
                  class="tabControl"/>
    <scroll class="content"
              ref="scroll"
              @scroll="contentscrollposition"
            :probe-type = '3'
            :pull-up-load = 'true'
            @pullingUp = "loadmore()"
    >
      <home-swiper class="home-swi"
                   :banners="banners"
                   @SwiperLoaded = "swiperload"/>
      <recommend-view :recommends="recommends"/>
      <feature-view></feature-view>
      <tab-control :titles ="['流行','新款','精选']"
                    @tabClick="tabClick" ref="tabControl2"/>
      <goods-list  :goods = "shouGoods"/>
    </scroll>
    <back-top @click.native="backclick" v-show="isShow"></back-top>

  </div>
</template>

<script>
  import NavBar from "components/common/NavBar/NavBar"
  import tabControl from 'components/content/tabControl/tabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/BScroll/Scroll'
  import BackTop from 'components/common/BackTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import {getHomeMultidata,getHomeGoods} from "network/home";

  import {debounce} from 'common/utils.js'

  export default {
    name: "Home",

    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      tabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return{
        result:null,
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        scroll: null,
        isShow:false,
        tabOffsetTop:0,
        isShowtab:false,
        saveY:0
      }
    },
    created() {
      //1. 请求多个数据
      this.getHomeMultidata()
        //2. 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    activated(){
      /*console.log('active');*/
      this.scroll&&this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)

    },
    deactivated(){
      /*console.log('deactive');*/
      this.saveY = this.$refs.scroll.y
    },
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh);
      this.$bus.$on('imgloaded',()=>{
        refresh()
      })
    },
    methods: {
      //网络请求
      //获取轮播图和推荐的数据
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.result = res;
          this.banners = res.data.banner.list;
            /*        this.keywords = res.data.keywords.list;
                    this.dKeywords = res.data.dKeyword.list;*/
          this.recommends = res.data.recommend.list
        })
      },
      //获得流行 潮流 热售的数据
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1

          this.$refs.scroll.finishPull()
        })
      },
      //事件监听相关
      tabClick(index){
/*        this.currentType = Object.keys(this.goods)[index]*/
        /*console.log(index);*/
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;

                     },
      //back-top返回顶部监听
      backclick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentscrollposition(position){
        this.isShow = (-position.y) >1000;
        this.isShowtab = (-position.y) >this.tabOffsetTop;
      },
      loadmore(){
/*        console.log('上拉加载更多');*/
        this.getHomeGoods(this.currentType)

        this.scroll&&this.$refs.scroll.refresh()
      },
      swiperload(){
       this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
/*        console.log(this.$refs.tabControl.$el.offsetTop);*/
      }
    },
    computed:{
      shouGoods(){
        return this.goods[this.currentType].list
      },
    },
  }
</script>

<style scoped>
/*
  .home-nav{
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .home-swi{
    padding-top: 44px;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
*/
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

/*  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;*/
}

/*.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}*/

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
  .tabControl{
    position: relative;
    z-index: 9;
  }
</style>
