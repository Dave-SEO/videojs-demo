<!--  -->
<template>
  <div class="box">
      <video id="my-video" class="video-js vjs-default-skin" controls preload="auto"  data-setup='{}'></video>
  </div>
</template>

<script type='text/ecmascript-6'>
// import videojs from 'video.js'
// import 'videojs-resolution-switcher'
import '@/assets/videojs-resolution-switcher.js'

export default {
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  mounted () {
      this.$nextTick(()=>{
          this.init()
     $('#my-video').attr('src','https://vjs.zencdn.net/v/oceans.mp4?SD')
      videojs('my-video', {
        controls: true,
         plugins: {
            videoJsResolutionSwitcher: {
                default: 'low', // Default resolution [{Number}, 'low', 'high'],
                dynamicLabel: true
            }
        }
        },function(){
             var player = this;
            window.player = player
            player.updateSrc([
            {
                src: 'https://vjs.zencdn.net/v/oceans.mp4?SD',
                type: 'video/mp4',
                label: 'SD',
                res: 360
            },
            {
                src: 'https://vjs.zencdn.net/v/oceans.mp4?HD',
                type: 'video/mp4',
                label: 'HD',
                res: 720
            }
            ])
            player.on('resolutionchange', function(){
                console.info('Source changed to %s', player.src())
            })
        })
      })
  },
  methods: {
      init(){
          this.$http.get('http://192.168.20.217:8885/api/seller').then((res)=>{
              let json = JSON.parse(res.data)
              console.log(json)
          })
      }
  }
}
</script>
<style  scoped>
.box{
    width: 80%;
    margin: 0 auto;
}

</style>
