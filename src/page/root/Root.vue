<template>
  <div class="root">
    <div class="router">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <i-tabbar :tabs="tabs" class="tabbar"></i-tabbar>
  </div>
</template>

<script>
import ITabbar from '@/components/tabbar/Tabbar'
export default {
  components: { ITabbar },
  data () {
    return {
      tabs: [
        { title: 'home', herf: '#/home' },
        { title: 'forum', herf: '#/forum' },
        { title: 'mine', herf: '#/mine' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.root
  height 100%
  background-color #fafafa
  display flex
  flex-direction column
  .router
    overflow hidden
    flex 1
</style>
