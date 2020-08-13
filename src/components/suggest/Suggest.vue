<template>
<div class="suggest">
  <div class="suggestRow">
    <a href=""><img src="@/assets/img/nav/ico-nav1.png" /></a>
    <a href=""><img src="@/assets/img/nav/ico-nav2.png" /></a>
    <a href=""><img src="@/assets/img/nav/ico-nav3.png" /></a>

    <a href=""><img src="@/assets/img/nav/ico-nav4.png" /></a>



  </div>
  <div class="suggestRow">
    <a href=""><img src="@/assets/img/nav/ico-nav5.png" /></a>
    <a href=""><img src="@/assets/img/nav/ico-nav6.png" /></a>
    <a href=""><img src="@/assets/img/nav/ico-nav7.png" /></a>
    <a href=""><img src="@/assets/img/nav/ico-nav8.png" /></a>
  </div>


</div>
</template>

<script>
export default {
name: "Suggest"
}
</script>

<style scoped>
.suggest{
/*display: flex;*/
/*  width: 100%;*/
}
.suggestRow{
  display: inline-flex;
  /*width: 100%;*/
}
.suggestRow img{
  width: 100%;
  flex-shrink: 1;
}
</style>