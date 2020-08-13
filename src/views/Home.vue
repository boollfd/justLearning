<template>
  <div class="home" >

  <head-bar class="headBar">
    <span slot="center">home</span>
  </head-bar>

    <swiper>swiper</swiper>

    <div><img src="@/assets/img/feature.png" width="100%"/></div>
<suggest></suggest>
    <img src="../assets/img/hotgoods.png"  class="goodsHead"/>
    <keep-alive>
      <goods></goods>
    </keep-alive>



  </div>
</template>

<script>
import HeadBar from "@/components/headBar/HeadBar";
import Swiper from "@/components/swiper/Swiper";
import Suggest from "@/components/suggest/Suggest";
import Goods from "@/components/goods/Goods";

export default {
  name: 'Home',
  components: {
    Suggest,
    HeadBar,
    Swiper,
    Goods
  }
}
</script>
<style>
.headBar{
  background-color: lightpink;
}
.goodsHead{
  width:100%;
  position: sticky;
  top: 0;
}
</style>
