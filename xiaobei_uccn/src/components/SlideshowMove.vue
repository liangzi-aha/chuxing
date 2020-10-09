<template>
  <div class="wrapper2">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../static/img/knowxiaobei1.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../static/img/knowXiaobei0.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../static/img/dianbeiBloc.png"/>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "slideshow-move",
        mounted(){
          var wrapper2 = new Swiper ('.wrapper2 .swiper-container', {
            autoplay:true,
//          direction: 'horizontal', // 垂直切换选项
//          loop: false, // 循环模式选项
            autoplay:false,//等同于以下设置
            effect : 'coverflow',
            centeredSlides: true,
            slidesPerView: 2,
            coverflowEffect: {
              rotate: 10,
              stretch: 20,
              depth: 400,
              modifier: 2,
			    // slideShadows : true
            },
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
        }
    }
</script>

<style scoped>
  *{
    font-family: '微软雅黑';
  }
  .wrapper2>.swiper-container{
    width: 100%;
  }
  .wrapper2>.swiper-container img{
    display: block;
    width: 100%;
    margin: auto;
  }
</style>
