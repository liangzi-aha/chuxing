<template>
  <div class="journalism">
    <div id="nav_list">
      <router-link to="/"><img src="static/img/xiaobeiLogo.png" alt="" @click="homePage()"/></router-link>
      <ul class="nav_link">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/">小呗出行</router-link></li>
        <li><router-link to="/">下载APP</router-link></li>
        <li><router-link to="/">关于我们</router-link></li>
        <li><router-link to="/">渠道合作</router-link></li>
        <li><router-link to="/">新闻资讯</router-link></li>
        <p class="shade"></p>
      </ul>
    </div>
    <div style="width: 100%;height: 85px;background-color: white"></div>
    <div class="News_Inquiry">
      <!--<h1>“小呗出行”重磅来袭，<br>第一批代理正式开放申请！</h1>-->
      <!--<p>经过两个月紧张的筹备，小呗成功自主研发了完全符合国标的智能共享电动单车，并正式为其命名“小呗出行”目前正在量产，各项准备工作也已经初步完成。我们已经进入最后的调试阶段，预计在十月内完成一切准备工作，近期即将正式上线。</p>-->
      <!--<p>我们相信，我们有着看似平淡但却有着非凡意义的闪光点。当这个闪光点被我们擦亮，在绿色出行面前，这不仅是一份事业，而是一份责任。</p>-->
      <!--<div>久等了“小呗出行”即将上线</div>-->
      <!--<p>近几年，国家提倡绿色出行。绿色出行就是采用对环境影响最小的出行方式。既节约能源、提高能效、减少污染、又益于健康、兼顾效率的出行方式。通过碳减排和碳中和实现环境资源的可持续绿色出行利用和交通的可持续发展。在这条路上，“小呗出行”任重而道远。</p>-->
      <!--<p> “小呗出行”致力于倡导绿色出行理念，通过整合电车产能及供应链，在全国推广共享电车的出行理念，为各大城市提供便捷高效的绿色出行服务，满足用户的美好生活需要，同时推动电车行业转型升级、打造城市绿色交通体系、提升城市出行效率，助力信用城市、智慧城市建设。并且，我们的app经过开发测试现已提交至各大应用商店，近期即将全面上线。-->
      <!--<div>上线车型已初步确定</div>-->
      <!--<p>小呗出行车型近期已经初步确定。严格按照国家标准。（1999年出台的国家标准《电动自行车通用技术条件》，对电动车的外观 、车重、车速、管理等各项指标，均有严格规定。其中，对于电单车整车主要技术性能要求有三项硬性标准：最高车速应不大 于20公里/小时、整车质量(重量)应不大于40公斤、必须具有良好的脚踏骑行功能。）不仅外形时尚而且小巧轻便，是年轻人出行的首选。我们致力于打造对外开放共享的高端智能纯电动车平台。不仅创新性地将智能芯片技术运用到电动自行车上，并且价格实惠，是全新的城市代步工具。满足了城市用户在10公里以内的中短途出行需求，并与支付宝达成战略协议，芝麻信用600分以上可免押金。从运维、服务等方面严格监管，并以卓越的整车系统集成与匹配、整车控制系统、电驱动系统三大关键核心技术“打通市民出行最后三公里”，为生态文明城市创建添砖加瓦。</p>-->
      <!--<div>第一批开放十所城市</div>-->
      <!--<p> 即日起，小呗出行正式开放代理通道。第一批上线仅开放十个城市。</p>-->
      <!--<div>公司支持</div>-->
      <!--<p>品牌推广：标准化品牌资源+定制化创意营销，资源整合，打造品效合一 <br>-->
        <!--专属定制：企业登录专属UI，专属运营配套支持<br>-->
        <!--媒体支持：“小呗出行”app以及微信微博等自媒体支持<br>-->
        <!--统一培训：公司将进行统一培训，培训内容包括产品使用、运营管理等。</p>-->
    </div>
    <FootUccn></FootUccn>
  </div>
</template>

<script>
  import FootUccn from '@/components/FootUccn'
  import axios from 'axios'
    export default {
        name: "news-inquiry",
        components:{
          FootUccn:FootUccn,
        },
        mounted(){
          console.log(this.$route.params.id)

          var id = this.$route.params.id;
          axios.post('/api/articleEdit/selectArticle?id=' + id + '&type=' + 2,{})
          .then(res=>{
            console.log(res)
            $('.News_Inquiry').append(res.data)
          })
          .catch(err=>{
            console.log(err)
          })

          window.onscroll = null;
          $('.nav_link li').eq(0).css({
            'width':'83'
          })
          $('.nav_link').css({
            'width':'100',
            'overflow':'hidden',
            'display':'block',
          })
        }
    }
</script>

<style scoped>
  h1,h2,h3,h4,h5,h6{
    text-align: center;
    line-height: 50px!important;
  }
  *{
    line-height: 30px;
    /*font-size: 20px;*/
  }
  .journalism{
    width: 100%;
    min-width: 1600px;
  }
  .News_Inquiry h1{
    font-size: 35px;
  }
  .News_Inquiry{
    width: 1000px;
    margin: auto;
    padding: 30px 0;
  }
  /*.News_Inquiry h1{*/
    /*margin-top: 70px;*/
    /*margin-bottom: 85px;*/
    /*text-align: center;*/
  /*}*/
  /*.News_Inquiry p{*/
    /*font-family: "Source Code Pro";*/
    /*text-indent: 2rem;*/
    /*font-size: 26px;*/
    /*line-height: 35px;*/
  /*}*/
  /*.News_Inquiry p:nth-last-child(1){*/
    /*text-indent: 0;*/
    /*margin-bottom: 100px;*/
  /*}*/
  /*.News_Inquiry div{*/
    /*font-size: 20px;*/
    /*width: 350px;*/
    /*height: 50px;*/
    /*background-color: rgb(0,169,255);*/
    /*text-align: center;*/
    /*line-height: 50px;*/
    /*border-radius: 10px;*/
    /*margin: 35px auto;*/
    /*color: white;*/
    /*cursor:pointer;*/
    /*!*文字不可选*!*/
    /*-webkit-user-select: none;*/
    /*-moz-user-select: none;*/
    /*-ms-user-select: none;*/
    /*user-select: none;*/
  /*}*/

  #nav_list{
    width: 100%;
    height: 85px;
    background-color: black;
    position: fixed;
    top: 0;
    z-index: 100;
    min-width: 1600px;
  }
  #nav_list img{
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
    /*transition: all 1s linear;*/
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
