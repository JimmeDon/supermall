<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperloaded">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return[]
        }
      }
      },
    methods:{
      swiperloaded(){
        if(!this.isload){
          this.$emit('SwiperLoaded');
          this.isload = true
        }

      }
    },
    data(){
       return{
         isload:false
       }
    }
  }
</script>

<style scoped>

</style>
