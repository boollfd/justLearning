<template>
<div class="cart">
  <HeadBar>
  <button slot="left" @click="goback">返回</button>
  <span slot="center">cart</span>
</HeadBar>
  <div v-for="item in this.$store.state.cart" class="cartItem">
    <img :src='"@/assets/img/nav/ico-nav"+item+".png"' alt="">
    <span>{{item}}</span>
    <button @click="addItem(item)">+</button>
    <button @click="deleteItem(item)">-</button>
  </div>
</div>
</template>

<script>
import HeadBar from "@/components/headBar/HeadBar";
export default {
name: "Cart",
  components:{HeadBar},
  methods:{
    goback(){
      history.back()
    },
    addItem(item){
      if (this.$store.state.cart.indexOf(this.$route.query.id)===-1){
        this.$store.commit('add',item)
      }
    },
    deleteItem(item){
      if (this.$store.state.cart.indexOf(item)!==-1){
        this.$store.commit('delete',item)
      }
    }
  }
}
</script>

<style scoped>
.cart{
  display: grid;
}
.cartItem{
  display: inline;
  height: 30px;
}
.cartItem img{
  float: left;
  width: 30px;
}
.cartItem button{
  float: right;
  margin: 3px;
}
</style>