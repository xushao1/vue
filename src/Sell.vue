<template>
  <div id="sell">
    <div class="header">
      <heade></heade>
    </div>
    <div class="content">
      {{price}}
    </div>
    <div class="shop">
      <shop-cart></shop-cart>
    </div>
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


</style>
