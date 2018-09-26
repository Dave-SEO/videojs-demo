<!--  -->
<template>
  <div>
     <div id="mse"></div>
  </div>
</template>
<script type='text/ecmascript-6'>
// import Player from 'xgplayer'
// import 'xgplayer-mp4';
export default {
  data () {
    return {
      urlmp4: ''
    }
  },
  components: {},
  computed: {},
  mounted () {
    this.init()
  },
  methods: {
    init(){
      this.$http.get('http://localhost:8885/api/seller').then((res)=>{
        let str = JSON.parse(res.data)
        console.log(str.trailers[0].hightUrl)
       
         let player = new Player({
        id: 'mse',
        url: str.trailers[0].hightUrl
        });
        player.emit('resourceReady', [ { name: '高清', url: 'http://vfx.mtime.cn/Video/2018/09/19/mp4/180919095245958262.mp4' }, { name: '标清', url: 'http://vfx.mtime.cn/Video/2018/09/19/mp4/180919095245958262.mp4' }]);
      })
    }
  }
}
</script>
<style  scoped>
</style>
