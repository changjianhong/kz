<template>
  <div class="tabbar-component">
    <div v-for="t in tabs" :key="t.title">
      <a :href="t.herf">{{t.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  props: {
    tabs: Array
  }
}
</script>

<style lang="stylus" scoped>
.tabbar-component
  height 49px
  border-top 1px solid #eeeeee
  display flex
  justify-content space-around
  align-items center
</style>
