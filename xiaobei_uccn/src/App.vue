<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  // import NavUccn from '@/components/NavUccn'
export default {
  name: 'App',
  mounted(){
    if (this._isMobile()) {
        // alert("手机端");

        this.$router.replace('/m_index');
      } else {
        // alert("pc端");
        this.$router.replace('/pc_index');
      }
      //等图片加载完毕，在显示#app
      if($('#app')[0].readyState='compelete'){
        $('#app').css('display','none')
      }
      if($('.loading')[0].readyState='compelete'){
        setTimeout(function () {
          $('#app').css('display','block')
        },1)
      }
  },
  methods:{
    _isMobile(){
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  }
}
</script>

<style>

</style>
