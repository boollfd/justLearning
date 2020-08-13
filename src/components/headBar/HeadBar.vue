<template>
  <div class="headBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: "HeadBar"
}
</script>

<style scoped>
.headBar{
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 20px;
}
.center{
  flex: 3;
  width: 100%;
}
.left{
  flex: 1;
  float: left;
}
.right{
  float: right;
  flex: 1;
}
</style>