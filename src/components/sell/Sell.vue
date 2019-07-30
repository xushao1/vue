<template>
  <div id="sell " class='flex flex-vertical flex-jube' style="height: 100%;overflow: hidden;">
    <div class="header">
      <heade></heade>
    </div>
    <div class="content flex-f1">
      <transition enter-active-class="animated fadeIn" enter-leave-class="animated fadeOut"><router-view></router-view> </transition>
    </div>
<!--    <div class="shop" style="height: 50px;">-->
<!--      <shop-cart></shop-cart>-->
<!--    </div>-->
  </div>
</template>

<script>

export default {
  name: 'sell',
  components: {

  },
  data () {
    return {
      price: 0
    }
  },
  created () {
    // console.log(this.$store.getters);
    //
    // this.price = this.$store
  }

}
</script>

<style scoped lang="less">
.content {
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}

</style>
