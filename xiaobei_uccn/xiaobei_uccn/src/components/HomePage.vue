<template>
    <div class="body">
      <div class="wrapper1" id="xiaobeiTrip">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../static/img/banner1M.png" class="loading"/>
            </div>
            <div class="swiper-slide">
              <img src="../../static/img/banner2M.png"/>
            </div>
            <div class="swiper-slide">
              <img src="../../static/img/banner3M.png"/>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="wrapper1" id="wrapper1">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../static/img/homePage2.png"/>
              <div>
                <p>Security</p>
                <p>安全</p>
                <p>符合国标，不超速更安全 </p>
                <p>·符合国家《电动自行车通用技术条件》标准 <br>
                  ·最高车速低于25km/h；<br>
                  ·整车重量小于55KG;<br>
                  ·具备良好的脚踏骑行功能；<br>
                  ·电动机额定输出功率小于240W。</p>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../../static/img/homePage2_1.png"/>
              <div>
                <p>Intelligence</p>
                <p>智能</p>
                <p>3秒开锁，向繁琐说拜拜  </p>
                <p>·通过App定位到附近停放车辆 <br>
                  ·扫码开锁，轻拧车把前进<br>
                  ·点击结束用车，自动扣费并锁车<br>
                  ·支持支付宝、微信两种充值方式</p>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../../static/img/homePage2_2.png"/>
              <div>
                <p>Convenient</p>
                <p>便捷</p>
                <p>规范停车，守护都市秩序  </p>
                <p>·到达目的地之后，请将单车停放在路边 <br>
                  ·非机动车白线区域<br>
                  ·公共停车区域</p>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <img src="../../static/img/homePage3.png" id="download"/>
      <div class="know" id="AboutUs">
        <p>认识小呗</p>
        <img src="../../static/img/homePage4.png"/>
        <p>“小呗出行”在车型、安全性能等方面
          严格按照国家标准，具备良好的脚踏骑行功
          能.减缓交通管理压力，改善人们出行方式，
          提倡共享经济，实现环境资源的可持续绿色
          出行利用和交通的可持续发展，为绿色出行
          事业贡献自己力所能及的力量</p>
        <div class="wrapper2">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../static/img/che.png"/>
              </div>
              <div class="swiper-slide">
                <img src="../../static/img/jiangxiXiaoBei.png"/>
              </div>
              <div class="swiper-slide">
                <img src="../../static/img/bloc.png"/>
              </div>
            </div>

            <div class="swiper-button-prev swiper-button-white"></div>
            <div class="swiper-button-next swiper-button-white"></div>
          </div>
        </div>
      </div>
      <div class="support ">
        <div class="advantage">
          <p>公司支持</p>
          <p>核·心·优·势</p>
        </div>
        <img src="../../static/img/homePage5.png"/>
        <div class="support_logo" id="support_logo">
          <div>
            <img src="../../static/img/team.png"/>
            <p>超强<br>专业团队</p>
          </div>
          <div>
            <img src="../../static/img/technology.png"/>
            <p>行业 <br>领先技术</p>
          </div>
        </div>
        <div class="support_logo">
          <div>
            <img src="../../static/img/system.png"/>
            <p>科学<br>管理系统</p>
          </div>
          <div>
            <img src="../../static/img/pattern.png"/>
            <p>精准<br>投放模式</p>
          </div>
        </div>
      </div>
      <div class="cooperation" id="journalism">
        <div>
          <p>渠道合作</p>
          <p>中国县域城市是目前共享出行最大的市场
            李克强总理指出 :共享经济不仅是在做加法，
            更是在做乘法。2018年正是共享出行的最快
            增长爆发期。</p>
          <p>共享出行市场小呗出行共享事业与您分
            享中国县域出行的万亿级市场潜在4亿用户出
            行难出行贵的问题一直未解决，让我们一起打
            造绿色出行、时尚出行的新城市，共同跟随时
            代C的脚步，拥护美好的未来。完善的合作流程
            让您拥有更好的体验！</p>
        </div>
        <img src="../../static/img/homePage6.png"/>
      </div>



      <div class="News" id="message">
        <div class="News_title">
          <p>新闻资讯</p>
          <p>行业新闻·最新动态·市场营销</p>
        </div>
        <img src="../../static/img/homePage7.png" style="margin-bottom: 0.8rem;"/>


        <div class="wrapper3">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" style="width: 100%;height: 6.2rem;">

                <div class="News_text" style="position: static;height: 6.2rem;">
                  <router-link to="/xiaobeiTripMove" style="text-decoration: none;">
                    <img src="../../static/img/news1.png" alt="">
                    <p>“小呗出行”重磅来袭</p>
                    <p>经过两个月紧张的筹备，小呗成功自主研发了
                      完全符合国标的智能共享电动单车，并正式为其命
                      名“小呗出行”目前正在量产，各项准备工作也已
                      经初步完成。我们已经进入最后的调试阶段，预计
                      在十月内完成一切准备工作，近期即将正式上线。</p>
                  </router-link>
                </div>

              </div>
              <div class="swiper-slide">
                <div class="News_text" style="position: static;height: 6.2rem;">
                  <router-link to="/xiaobeiTripMove" style="text-decoration: none;">
                    <img src="../../static/img/news2.png" alt="">
                    <p>“小呗出行”重磅来袭</p>
                    <p>经过两个月紧张的筹备，小呗成功自主研发了
                      完全符合国标的智能共享电动单车，并正式为其命
                      名“小呗出行”目前正在量产，各项准备工作也已
                      经初步完成。我们已经进入最后的调试阶段，预计
                      在十月内完成一切准备工作，近期即将正式上线。</p>
                  </router-link>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="News_text" style="position: static;height: 6.2rem;">
                  <router-link to="/xiaobeiTripMove" style="text-decoration: none;">
                    <img src="../../static/img/news3.png" alt="">
                    <p>“小呗出行”重磅来袭</p>
                    <p>经过两个月紧张的筹备，小呗成功自主研发了
                      完全符合国标的智能共享电动单车，并正式为其命
                      名“小呗出行”目前正在量产，各项准备工作也已
                      经初步完成。我们已经进入最后的调试阶段，预计
                      在十月内完成一切准备工作，近期即将正式上线。</p>
                  </router-link>
                </div>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <!--<div class="swiper-pagination"></div>-->
          </div>
        </div>

      </div>
      <div class="contact">
        <div class="contact_text">
          <p>联系我们</p>
          <p>Contact us</p>
          <img src="../../static/img/relation_logo.png" style="width: 0.3rem;vertical-align: middle"/>
          <p>如果您对我们有什么建议</p>
          <p>联系电话：<a href="javascript:void(0)" style="text-decoration: none;color: white;">4000-793-111</a></p>
          <p>联系地址：杭州市萧山区博地中心A座25楼</p>
          <p>电子邮箱：company@dianbeiwaimai.cn</p>
        </div>
        <img src="../../static/img/homePage8.png"/>
      </div>

    </div>
</template>

<script>
  import SlideshowMove from '@/components/SlideshowMove'
    export default {
        name: "home-page",
        components:{
          SlideshowMove:SlideshowMove,
        },
        mounted(){
          window.onscroll = null;
          //引入外部js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);

          //轮播图1
          var wrapper1 = new Swiper ('.wrapper1 .swiper-container', {
            autoplay:true,
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          })

          //轮播图2
          var wrapper2 = new Swiper ('.wrapper2 .swiper-container', {
            autoplay:true,
//          direction: 'horizontal', // 垂直切换选项
//          loop: false, // 循环模式选项
            autoplay:false,//等同于以下设置
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            effect : 'coverflow',
            centeredSlides: true,
            slidesPerView: 2,
            initialSlide: 1,
            coverflowEffect: {
              rotate: 10,
              stretch: 20,
              depth: 400,
              modifier: 2,
              // slideShadows : true
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            on: {
              slideChangeTransitionEnd: function () {
                if (this.activeIndex==0){
                  $('.know p').eq(0).html('认识小呗');
                  $('.know p').eq(1).html('“小呗出行”在车型、安全性能等方面严格按照国家标准，具备良好的脚踏骑行功能.减缓交通管理压力，改善人们出行方式，提倡共享经济，实现环境资源的可持续绿色出行利用和交通的可持续发展，为绿色出行事业贡献自己力所能及的力量');
                }else if(this.activeIndex==1){
                  $('.know p').eq(0).html('江西小呗');
                  $('.know p').eq(1).html('江西小呗出行网络科技有限公司于2018年10月成立，是一家绿色城市出行解决方案提供商和执行者，是对外开放共享的高端智能纯电动车出行平台，致力于低碳、环保、智能出行方式的互联网公司。');
                }else if(this.activeIndex==2){
                  $('.know p').eq(0).html('点呗集团');
                  $('.know p').eq(1).html('点呗集团主要以生活服务类平台为主，是一家共享经济、孵化创投等多元化发展的国际性企业。经营多项业务，推出平台互助生活圈实现生活上的双重便利，形成以点呗科技为架构的生活圈。');
                }
              }
            }
          })

          //轮播图3
          var wrapper3 = new Swiper ('.wrapper3 .swiper-container', {
            autoplay:true,
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          })

          //判断图片加载后#app显示
          if($('.loading')[0].readyState='compelete'){
            setTimeout(function () {
              $('#app').css('display','block')
            },1)
          }
        }
    }
</script>

<style scoped>
  *{
    font-family: '微软雅黑';
  }
  .swiper-container {
    width: 100%;
  }
  .swiper-container img{
    vertical-align: bottom;
    width: 100%;
  }
  .body img{
    width: 100%;
    vertical-align: bottom;
  }
  .swiper-slide{
    position: relative;
  }
  .swiper-slide div{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 0.33rem;
    text-align: center;
    color: rgb(64,64,64);
    font-family: '微软雅黑';
  }
  .swiper-slide div p:nth-of-type(1){
     margin-top: 60%;

   }
  .swiper-slide div p:nth-of-type(2){
     margin-top: 2%;
   }
  .swiper-slide div p:nth-of-type(3){
    margin-top: 7%;
    font-size: 0.39rem;
  }
  .swiper-slide div p:nth-of-type(4){
    margin: 4% 17% 0;
    font-size: 0.22rem;
    text-align: left;
  }
  .know{
    overflow: hidden;
    position: relative;
  }
  .know p:nth-of-type(1){
    position: absolute;
    left: 0;
    right: 0;
    top:11%;
    margin: auto;
    font-size: 0.4rem;
    color: rgb(46,46,46);
    text-align: center;
    font-family: '微软雅黑';
  }
  .know p:nth-of-type(2){
    position: absolute;
    left: 0;
    right: 0;
    bottom:10%;
    margin: auto;
    font-size: 0.24rem;
    padding: 0 0.5rem;
    text-indent: 2em;
    font-family: '微软雅黑';
    line-height: 0.4rem;
  }
  .support{
    position: relative;
  }
  .advantage{
    font-size: 0.42rem;
    font-family: '微软雅黑';
    position: absolute;
    top: 8%;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    color: white;
  }
  .advantage p:nth-of-type(2){
      font-size: 0.17rem;
      font-family: '微软雅黑';
  }

  .support_logo{
    width: 90%;
    position: absolute;
    bottom: 20%;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content:space-around;
    font-size:0.3rem;
    font-family: '微软雅黑';
    text-align: center;
    color: white;
  }
  .support_logo p{
    margin-top: 0.2rem;
  }
  #support_logo{
    bottom: 50%;
  }
  .support_logo div img{
    width: 1.5rem;
  }
  .cooperation{
    position: relative;
  }
  .cooperation div{
    position: absolute;
    top: 15%;
  }
  .cooperation div p:nth-of-type(1){
    text-align: center;
    font-size: 0.36rem;
    line-height: 0.4rem;
    font-family: '微软雅黑';
  }
  .cooperation div p:nth-of-type(2){
    margin: 0.4rem 8% 0;
    font-size: 0.24rem;
    text-indent: 2em;
    line-height: 0.5rem;
    font-family: '微软雅黑';
  }
  .cooperation div p:nth-of-type(3){
    font-size: 0.24rem;
    text-indent: 2em;
    margin: 0 8%;
    line-height: 0.5rem;
    font-family: '微软雅黑';
  }
  .News{
    position: relative;
  }
  .News>div:nth-of-type(1){
    width: 100%;
    position: absolute;
    top: 11%;
    font-size: 0.3rem;
    font-family: '微软雅黑';
    text-align: center;
  }
  .wrapper3{
    position: absolute;
    top: 28%;
    left: 0;
    right: 0;
    margin: auto;
    /*padding: 0.2rem;*/
    font-size: 0.3rem;
    font-family: '微软雅黑';
    /*background-color: rgb(0,169,255);*/
    width: 100%;
    height: 5rem;
  }
  .News_title p:nth-of-type(1){
    font-size: 0.36rem;
  }
  .News_title p:nth-of-type(2){
    font-size: 0.14rem;
  }
  .News_text{
    padding: 0.2rem;
    width: 65%;
    margin: auto;
    background-color: rgb(0,169,255);
  }
  .News_text>img{
    width: 100%;
  }
  .News_text p:nth-of-type(1){
    font-size: 0.3rem;
    text-align: center;
    color: white;
    margin-top: 0.2rem!important;
  }
  .News_text p:nth-of-type(2){
    font-size: 0.178rem;
    text-indent: 2em;
    margin: 0.2rem 0;
    color: white;
    line-height: 0.3rem;
  }
  .contact{
    position: relative;
  }
  .contact div{
    width: 100%;
    position: absolute;
    top: 0.9rem;
    font-size: 0.3rem;
    font-family: '微软雅黑';
    text-align: center;
    color: white;
  }
  .contact_text p:nth-of-type(1){
    font-size: 0.36rem;
  }
  .contact_text p:nth-of-type(n+2){
    font-size: 0.24rem;
    line-height: 0.4rem;
  }
  .wrapper2{
    position: absolute;
    top: 23%;
    left: 0;
    right: 0;
    margin: auto;
  }
  .swiper-button-prev{
    background-size: 0.3rem;
  }
  .swiper-button-next{
    background-size: 0.3rem;
  }

</style>
