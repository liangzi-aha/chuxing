<template>
    <div class="body">
      <div class="_nav">
        <div id="nav">
          <img src="../../static/img/xiaobeiLogo.png" alt="" />
          <img src="../../static/img/select.png" alt="" />
        </div>
        <div class="celect">
          <ul>
            <li><router-link to="/HomePage" anchor="#xiaobeiTrip" class="label">首页</router-link></li>
            <li><a href="###" anchor="#wrapper1" class="label">小呗出行</a></li>
            <li><a href="###" anchor="#download" class="label">下载APP</a></li>
            <li><a href="###" anchor="#AboutUs" class="label">关于我们</a></li>
            <li><a href="###" anchor="#journalism" class="label">渠道合作</a></li>
            <li><a href="###" anchor="#message" class="label">新闻资讯</a></li>
          </ul>
        </div>
      </div>
      <router-view></router-view>
      <FootMove></FootMove>
    </div>
</template>

<script>
  import FootMove from '@/components/FootMove'
    export default {
        name: "nav-move",
        components:{
          FootMove:FootMove,
        },
        mounted(){
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);

          var bol = false;
          //点击显示隐藏
          // $('#nav img').eq(1).click(function(){
          //   bol = !bol;
          //   console.log('点击')
          //   if(bol){
          //     $('.celect').css('display','block');
          //   }else{
          //     $('.celect').css('display','none');
          //   }
          // })
          //点击动画显示隐藏
          $('#nav img').eq(1).click(function(){
            bol = !bol;
            console.log('点击')
            if(bol){
              $('.celect').animate({
                'height': '3rem'
              },200);
            }else{
              $('.celect').animate({
                'height': '0'
              },200);
            }
          })

          $('.celect ul li').click(function(){
            bol = !bol;
            $('.celect').animate({
              'height': '0'
            },200);
          })

          $(".label").bind("click",function(){
            $('.shade').css({
              display:'block',
            })
            //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
            $('html,body').animate({scrollTop: ($($(this).attr('anchor')).offset().top - 50)},1000,function () {
              $('.shade').css({
                display:'none',
              })
            });
          })
        }
    }
</script>

<style scoped>
  *{
    font-family: '微软雅黑';
  }
  html,body{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .body{
    margin-top: 1rem;

  }
  /*固定定位*/
  ._nav{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 5;
  }
  #nav{
    width: 100%;
    height: 1rem;
    background-color: rgb(19,19,19);
    position: relative;
  }
  #nav img:nth-of-type(1){
    width: 1.43rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.4rem;
    margin: auto;
  }
  #nav img:nth-of-type(2){
    width: 0.4rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.4rem;
    margin: auto;
  }
  /*隐藏显示*/
  /*.celect{*/
    /*width: 100%;*/
    /*height: 3rem;*/
    /*background-color: rgb(19,19,19);*/
    /*display: none;*/
    /*position: absolute;*/
    /*top: 1rem;*/
    /*z-index: 2;*/
  /*}*/
  /*隐藏显示动画*/
  .celect{
    width: 100%;
    height: 0;
    background-color: rgb(19,19,19);
    display: block;
    position: absolute;
    top: 1rem;
    z-index: 2;
    overflow: hidden;
  }
  .celect ul{
    list-style: none;
  }
  .celect ul li{
    height: 0.5rem;
    font-size: 0.2rem;
    line-height: 0.5rem;
    color: white;
    padding-left: 0.3rem;
    box-sizing: border-box;
    border-bottom: 0.02rem solid rgb(106,106,106);
  }
  .celect a{
    color: white;
    text-decoration: none;
  }
</style>
