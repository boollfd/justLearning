<template>
<div class="goods">
    <router-link :to="{path:'/goodsView',query:{id:1}}"><img src="@/assets/img/nav/ico-nav1.png" /></router-link>
    <router-link :to="{path:'/goodsView',query:{id:2}}"><img src="@/assets/img/nav/ico-nav2.png" /></router-link>
    <router-link :to="{path:'/goodsView',query:{id:3}}"><img src="@/assets/img/nav/ico-nav3.png" /></router-link>
    <router-link :to="{path:'/goodsView',query:{id:4}}"><img src="@/assets/img/nav/ico-nav4.png" /></router-link>
    <router-link :to="{path:'/goodsView',query:{id:5}}"><img src="@/assets/img/nav/ico-nav5.png" /></router-link>
    <router-link :to="{path:'/goodsView',query:{id:6}}"><img src="@/assets/img/nav/ico-nav6.png" /></router-link>
    <router-link :to="{path:'/goodsView',query:{id:7}}"><img src="@/assets/img/nav/ico-nav7.png" /></router-link>
    <router-link :to="{path:'/goodsView',query:{id:8}}"><img src="@/assets/img/nav/ico-nav8.png" /></router-link>
  </div>
</template>

<script>
export default {
name: "Suggest"
}
</script>

<style scoped>

.goods img{
  width: 50%;
}
</style>