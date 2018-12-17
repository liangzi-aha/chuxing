<template>
    <div class="foot">
      <div class="foot_link">
        <div class="link">
            <span>友情链接：</span>
            <a href="http://www.xiaobeikeji.cn/">点呗外卖</a>
            <a href="http://www.dianbeikaka.com/ ">点呗卡卡</a>
            <a href=" http://xia.didiwaimai.cn/index.html">三只虾·点虾</a>
            <a href="javascritp:void(0)">小呗科技</a>
            <p class="relation ">客服电话：4000-793-111</p>
            <p class="relation ">电子邮箱：
              <a href="javascritp:void(0)">bike@xiaobeikeji.com</a>
            </p>
        </div>
        <div class="share">
          <div class="weixin">
            <img src="../../static/img/weixin1.png" alt="">
            <a href="javascript:void(0)" @click="show()">
              <img src="../../static/img/weixin.png" alt="">
            </a>
          </div>
          <div class="weibo">
            <a href="https://weibo.com/u/6812022190">
              <img src="../../static/img/weibo.png" alt="">
            </a>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="phone">
        <input type="text" placeholder="请输入您的电话" maxlength="11" v-model="content" class="input">
        <img src="../../static/img/close.png" style="height: 0.3rem;width: 0.3rem" class="close"/>
        <span @click="callBack">给您回电</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "footMove",
        data(){
          return {
            bol:true,
            bol1:true,
            content:''
          }
        },
        watch:{
          content(curVal,oldVal){
            if(curVal != ''){
              $('.close').css('display','block');
            }else{
              $('.close').css('display','none');
            }
          }
        },
        mounted(){
          $('.close').click(function(){
            $('.input').val('');
            $('.close').css('display','none');
          })
          //外部引入js文件
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = './static/js/compatibility.js';
          document.body.appendChild(s);
        },
        methods:{
          show(){
            if(this.bol==true&&this.bol1==true){
              $('.weixin>img').css('display','block');
              this.bol = !this.bol;
            }else if(this.bol==false&&this.bol1==true){
              $('.weixin>img').css('display','none');
              this.bol = !this.bol;
            }else if(this.bol==true&&this.bol1==false){
              $('.weixin>img').css('display','block');
              $('.weibo>img').css('display','none');
              this.bol = !this.bol;
              this.bol1 = !this.bol1;
            }
          },
          show1(){
            if(this.bol1==true&&this.bol==true){
              $('.weibo>img').css('display','block');
              this.bol1 = !this.bol1;
            }else if(this.bol1==false&&this.bol==true){
              $('.weibo>img').css('display','none');
              this.bol1 = !this.bol1;
            }else if(this.bol1==true&&this.bol==false){
              $('.weixin>img').css('display','none');
              $('.weibo>img').css('display','block');
              this.bol1 = !this.bol1;
              this.bol = !this.bol;
            }
          },
          callBack(){
            if(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test($('.input').val()*1)){
                console.log('手机号正确');
            }else{
              console.log('手机号错误');
            }

          }
        }
    }
</script>

<style scoped>
  .foot{
    font-size: 0.19rem;
    color: rgb(0,127,193);
    position: relative;
    background-color: rgb(0,0,0);
  }
  .link{
    float: left;
    width: 72%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-left: 7%;
    font-family: '微软雅黑';
    line-height: 0.4rem;
  }
  .foot_link{
    position: relative;
  }
  .clear{
    clear: both;
  }
  .link a{
    text-decoration: none;
    color: rgb(0,127,193);
  }
  .relation{
    color: white;
  }
  .relation a{
    color: white;
  }
  .share{
    height: 55%;
    width: 10%;
    padding-right: 7%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .share div a img{
    width: 0.59rem;
  }
  .phone{
    width: 100%;
    height: 0.9rem;
    position: relative;
    border-top: 1px solid white;
    overflow: hidden;
  }
  .phone input{
    outline: none;
    height: 0.6rem;
    width: 70%;
    border-radius: 6px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.3rem;
    margin: auto;
    font-size: 0.23rem;
    text-indent: 0.5em;
    border: 0;
  }
  .phone span{
    font-size: 0.2rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.25rem;
    margin: auto;
    width: 18%;
    height: 0.6rem;
    background-color: white;
    border-radius: 5px;
    line-height: 0.6rem;
    text-align: center;
    color: rgb(70,70,70);
  }
  .weixin{
    position: relative;
  }
  .weixin>img{
    width: 1.4rem;
    position: absolute;
    top: -1.6rem;
    left: -0.4rem;
    z-index: 1;
    display: none;
  }
  .weibo{
    margin-top: 0.1rem;
    position: relative;
  }
  .weibo>img{
    width: 1.4rem;
    position: absolute;
    top: -1.6rem;
    left: -0.4rem;
    z-index: 1;
    display: none;
  }
  .close{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 67%;
    display: none;
  }
</style>
