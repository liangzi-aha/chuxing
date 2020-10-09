<template>
  <div id="default">
    <div id="nav">
      <router-link to="/"><img src="static/img/xiaobeiLogo.png" alt="" @click="homePage()"/></router-link>
      <ul class="nav_link">
        <li><router-link to="/" anchor="#xiaobeiTrip" class="label">首页</router-link></li>
        <li><a anchor="#wrapper1" class="label">小呗出行</a></li>
        <li><a anchor="#download" class="label">下载APP</a></li>
        <li><a anchor="#AboutUs" class="label">关于我们</a></li>
        <li><a anchor="#journalism" class="label">渠道合作</a></li>
        <li><a anchor="#message" class="label">新闻资讯</a></li>
        <!--<p class="shade"></p>-->
      </ul>
    </div>
    <div style="width: 100%;height: 85px;background-color: white"></div>
    <router-view></router-view>
    <FootUccn></FootUccn>
  </div>
</template>

<script>
  import FootUccn from '@/components/FootUccn'
    export default {
        name: "NavUccn",
        components:{
          FootUccn:FootUccn,
        },
        data(){
          return{
            path:'',
          }
        },
        mounted(){
          if (this.$route.path == '/Slideshow'){
            window.onscroll = function () {
              if($(document).scrollTop()+85 > ($('#xiaobeiTrip').offset().top-10)){
                for (var i = 0;i < $('.nav_link li').length;i++){
                  $('.nav_link li').eq(i).css({
                    background:'transparent'
                  })
                  $('.nav_link li').eq(0).css({
                    background:'rgb(0,169,255)'
                  })
                }
              }
              if($(document).scrollTop()+85 > ($('#wrapper1').offset().top-10)){
                for (var i = 0;i < $('.nav_link li').length;i++){
                  $('.nav_link li').eq(i).css({
                    background:'transparent'
                  })
                  $('.nav_link li').eq(1).css({
                    background:'rgb(0,169,255)'
                  })
                }
              }
              if($(document).scrollTop()+85 > ($('#download').offset().top-10)){
                for (var i = 0;i < $('.nav_link li').length;i++){
                  $('.nav_link li').eq(i).css({
                    background:'transparent'
                  })
                  $('.nav_link li').eq(2).css({
                    background:'rgb(0,169,255)'
                  })
                }
              }
              if($(document).scrollTop()+85 > ($('#AboutUs').offset().top-10)){
                for (var i = 0;i < $('.nav_link li').length;i++){
                  $('.nav_link li').eq(i).css({
                    background:'transparent'
                  })
                  $('.nav_link li').eq(3).css({
                    background:'rgb(0,169,255)'
                  })
                }
              }
              if($(document).scrollTop()+85 > ($('#journalism').offset().top-10)){
                for (var i = 0;i < $('.nav_link li').length;i++){
                  $('.nav_link li').eq(i).css({
                    background:'transparent'
                  })
                  $('.nav_link li').eq(4).css({
                    background:'rgb(0,169,255)'
                  })
                }
              }
              if($(document).scrollTop()+85 > ($('#message').offset().top-10)){
                for (var i = 0;i < $('.nav_link li').length;i++){
                  $('.nav_link li').eq(i).css({
                    background:'transparent'
                  })
                  $('.nav_link li').eq(5).css({
                    background:'rgb(0,169,255)'
                  })
                }
              }
            }
          }

          $(".label").bind("click",function(){
            $('.shade').css({
              display:'block',
            })
            //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
            $('html,body').animate({scrollTop: ($($(this).attr('anchor')).offset().top - 85)},1000,function () {
              $('.shade').css({
                display:'none',
              })
            });
          })
        },
        watch:{
          //监听路由
          $route(to,from){
            console.log(to.path);
            if (to.path == '/NewsInquiry'){
                $('.shade').css({
                  display:'block',
                })
            }
          }
        },
        methods:{
          homePage(){
            $('.shade').css({
              display:'none',
            })
            for (var i = 0;i < $('.nav_link li').length;i++) {
              $('.nav_link li').eq(i).css({
                background: 'transparent'
              })
              $('.nav_link li').eq(0).css({
                background: 'rgb(0,169,255)'
              })
            }
          }
        }
    }
</script>

<style scoped>
  *{
    font-family: '微软雅黑';
  }
  /*#app{*/
    /*position: relative;*/
  /*}*/


  #nav{
    width: 100%;
    height: 85px;
    background-color: black;
    position: fixed;
    top: 0;
    z-index: 100;
    min-width: 1600px;
  }
  #nav img{
    position: absolute;
    top: 0;
    bottom: 0;
    left:253px;
    margin: auto;
    z-index: 200;
  }
  .nav_link{
    width: 940px;
    height: 46px;
    list-style: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 174px;
    margin: auto;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
  }

  .shade{
    width: 940px;
    height: 46px;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 250;
    display: none;
  }

  .nav_link li{
    border-radius: 5px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor:pointer;
  }
  .nav_link a{
    display: block;
    text-decoration: none;
    border-radius: 5px;
    color: white;
    line-height: 46px;
    font-size: 21px;
    padding:0 20px;
    text-align: center;
  }
  .nav_link li:nth-of-type(1){
    background-color: rgb(0,169,255);
  }
</style>
