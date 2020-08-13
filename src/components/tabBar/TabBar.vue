<template>
<div class="tabBar">
  <div @click="nowIndex(index)" v-for="(card,index) in cards" class="tabBarItem" >
    <router-link :to='"/"+card'>
      <tab-bar-item :currentIndex="currentIndex" :index="index" :key="index">
        <img :src='"@/assets/img/tabbar/"+card+".png"' alt="" slot="icon-normal" v-if="currentIndex!==index">
        <img :src='"@/assets/img/tabbar/"+card+"_active.png"' alt="" slot="icon-active" v-else>
        <div slot="cardName" :class="{active:currentIndex===index}">{{ card }}</div>
      </tab-bar-item>
    </router-link>
  </div>
</div>
</template>

<script>
import TabBarItem from "@/components/tabBar/TabBarItem";
export default {
name: "TabBar",
  components:{
    TabBarItem
  },
  data(){
  return{
    currentIndex:0,
    cards:['home','category','cart','profile']
  }
  },
  methods:{
    nowIndex(index){
      this.currentIndex=index
    }
  }
}
</script>

<style scoped>
.tabBar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px #ccc;
}
.tabBarItem{
  flex: 1;
  text-align: center;
}
.active{
  color: red;
}
</style>