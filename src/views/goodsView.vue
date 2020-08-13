<template>
<div>
  <HeadBar>
    <button slot="left" @click="goback">返回</button>
    <span slot="center">我是商品</span>
  </HeadBar>
  <button @click="addItem">+</button>
  <button @click="deleteItem">-</button>
</div>
</template>

<script>
import HeadBar from "@/components/headBar/HeadBar";
export default {
name: "goodsView",
  components: {HeadBar},
  methods:{
  goback(){
    history.back()
  },
    addItem(){
    if (this.$store.state.cart.indexOf(this.$route.query.id)===-1){
      this.$store.commit('add',this.$route.query.id)
    }

    },
    deleteItem(){
      if (this.$store.state.cart.indexOf(this.$route.query.id)!==-1){
        this.$store.commit('delete',this.$route.query.id)
      }
    }
  }
}
</script>

<style scoped>

</style>