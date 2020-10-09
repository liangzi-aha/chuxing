<template>
  <div class="body">
    <img src="../../static/img/homePage4.png" style="margin: 1.6rem 0;"/>
  </div>
</template>

<script>
    export default {
        name: "slideshow-one",
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);
        }
    }
</script>

<style scoped>
  *{
    font-family: '微软雅黑';
  }
  .body{
    width: 100%;
  }
  .body img{
    width: 100%;
    vertical-align: bottom;
  }
</style>
