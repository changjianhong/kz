<script>
import provider from '@/data-provider'
export default {
  name: 'forum',
  data () {
    return {
      icons: []
    }
  },
  mounted () {
    this.getIconfonts()
  },
  render (h) {
    return (
      <div class="forum">
        {this.icons.map(svg => {
          return (
            <div class="svg-box" domPropsInnerHTML={svg.show_svg}></div>
          )
        })}
      </div>
    )
  },
  methods: {
    getIconfonts () {
      provider.iconfont.getList().then(res => {
        if (res.data.code === 200) {
          this.icons = res.data.data.icons
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.forum
  height 100%
  overflow auto
  display flex
  flex-wrap wrap
  .svg-box
    width 20vw
    height 20vw
    border 1px solid #eeeeee
    box-sizing border-box
    line-height 20vw
    color #999999
    &:hover
      font-size 20px
      color red
</style>
