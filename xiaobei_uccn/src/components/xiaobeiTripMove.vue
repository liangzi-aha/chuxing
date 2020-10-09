<style scoped>
  *{
    font-family: '微软雅黑';
  }
  .body{
    width: 90%!important;
    margin: auto;
    font-family: '微软雅黑';
  }
  .body h1{
    font-size: 0.28rem;
    text-align: center;
    padding-top: 0.37rem;
    line-height: 0.4rem;
    margin-bottom: 0.4rem;
  }
  .body p{
    text-indent:2em;
    font-size: 0.24rem;
    line-height: 0.4rem;
  }
  .title{
    width:4rem;
    height: 0.65rem;
    line-height: 0.65rem;
    font-size: 0.24rem;
    margin:0.4rem auto;
    text-align: center;
    background-color: rgb(0,169,255);
    border-radius: 10px;
    color: white;
  }
  .foot_one{
    margin-bottom: 0.84rem;
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
  #nav span{
    font-size: 0.3rem;
    width: 0.8rem;
    line-height: 1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.4rem;
    margin: auto;
  }
  #nav span a{
    text-decoration: none;
    color: white;
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
<template>
  <div>
    <div class="_nav">
      <div id="nav">
        <img src="../../static/img/xiaobeiLogo.png" alt="" />
        <span><router-link to="/m_index">首页</router-link></span>
      </div>
    </div>

    <div class="body">
      <h1> “小呗出行”重磅来袭，<br>第一批代理正式开放申请！</h1>
      <p>经过两个月紧张的筹备，小呗成功自主研发了完全符合国标的智能共享电动单车，并正式为其命名“小呗出行”目前正在量产，各项准备工作也已经初步完成。我们已经进入最后的调试阶段，预计在十月内完成一切准备工作，近期即将正式上线。</p>
      <p>我们相信，我们有着看似平淡但却有着非凡意义的闪光点。当这个闪光点被我们擦亮，在绿色出行面前，这不仅是一份事业，而是一份责任。</p>
      <div class="title">久违了“小呗出行”即将上线</div>
      <p>近几年，国家提倡绿色出行。绿色出行就是采用对环境影响最小的出行方式。既节约能源、提高能效、减少污染、又益于健康、兼顾效率的出行方式。通过碳减排和碳中和实现环境资源的可持续绿色出行利用和交通的可持续发展。在这条路上“小呗出行”任重而道远。</p>
      <p>“小呗出行”致力于倡导绿色出行理念，通过整合电车产能及供应链，在全国推广共享电车的出行理念，为各大城市提供便捷高效的绿色出行服务，满足用户的美好生活需要，同时推动电车行业转型升级、打造城市绿色交通体系、提升城市出行效率，助力信用城市、智慧城市建设。并且，我们的app经过开发测试现已提交至各大应用商店，近期即将全面上线。</p>
      <div class="title">上线车型已初步确定</div>
      <p>小呗出行车型近期已经初步确定。严格按照国家标准。（1999年出台的国家标准《电动自行车通用技术条件》，对电动车的外观 、车重、车速、管理等各项指标，均有严格规定。其中，对于电单车整车主要技术性能要求有三项硬性标准：最高车速应不大 于20公里/小时、整车质量(重量)应不大于40公斤、必须具有良好的脚踏骑行功能。）不仅外形时尚而且小巧轻便，是年轻人出行的首选。我们致力于打造对外开放共享的高端智能纯电动车平台。不仅创新性地将智能芯片技术运用到电动自行车上，并且价格实惠，是全新的城市代步工具。满足了城市用户在10公里以内的中短途出行需求，并与支付宝达成战略协议，芝麻信用600分以上可免押金。从运维、服务等方面严格监管，并以卓越的整车系统集成与匹配、整车控制系统、电驱动系统三大关键核心技术“打通市民出行最后三公里”，为生态文明城市创建添砖加瓦。</p>
      <div class="title" >第一批开放十所城市</div>
      <p>即日起，小呗出行正式开放代理通道。第一批上线仅开放十个城市。</p>
      <div class="title">公司支持</div>
      <p>品牌推广：标准化品牌资源+定制化创意营销，资源整合，打造品效合一</p>
      <p>专属定制：企业登录专属UI，专属运营配套支持媒体支持：“小呗出行”app以及微信微博等自媒体支持</p>
      <p class="foot_one">统一培训：公司将进行统一培训，培训内容包括产品使用、运营管理等。</p>
    </div>
    <FootMove></FootMove>
  </div>
</template>

<script>
  import FootMove from '@/components/FootMove'
    export default {
        name: "xiaobei-trip",
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
                'height': '0.7rem'
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
        }
    }
</script>
