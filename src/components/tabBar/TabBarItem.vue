<template>
  <div class="tabBarItem">
    <slot name="icon-normal"></slot>
    <slot name="icon-active"></slot>
    <slot name="cardName"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem"
}
</script>

<style scoped>
.tabBarItem{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabBarItem img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>