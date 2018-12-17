<template>
    <div class="foot">
      <div class="foot_link">
        <div class="blogroll">
          <span>友情链接:</span>
          <a href="http://www.xiaobeikeji.cn/">点呗外卖</a>
          <a href="http://www.dianbeikaka.com/ ">点呗卡卡</a>
          <a href=" http://xia.didiwaimai.cn/index.html">三只虾·点虾</a>
          <a href="javascript:void(0)">小呗科技</a>
        </div>
        <div class="phone">
          <p>客服电话：4000-793-111</p>
          <p>电子邮箱：<a href="###">bike@xiaobeikeji.com</a></p>
          <p>备案号：<a href="http://beian.bizcn.com/login.jsp">赣ICP备18015059号-1</a></p>
        </div>
        <div class="share">
          <div>
            <img src="../../static/img/weixin1.png" alt="" class="weixin" />
            <img src="../../static/img/weixin.png" @click="WXshare()" style="width: 61px;"/>
          </div>
          <div>
            <a href="https://weibo.com/u/6812022190">
              <img src="../../static/img/weibo.png" style="width: 61px;"/>
            </a>
          </div>
        </div>
      </div>
      <div class="QR_code">
        <div>
          <img src="../../static/img/vipcn.png" height="198" width="198"/>
          <p>小呗出行公众号</p>
        </div>
        <div>
          <img src="../../static/img/appDownload.png" height="198" width="198"/>
          <p>小呗出行APP下载</p>
        </div>
      </div>
      <div class="input">
        <span>姓名</span>
        <input type="text" maxlength="5" class="name">
        <span>联系方式</span>
        <input type="text" class="mobilePhone" maxlength="11">
        <span>留言</span>
        <input type="text" class="leaveWord">
        <span class="submit" @click="submit()">提交</span>
        <img src="../../static/img/contact_us.png" alt="">
        <span>联系我们：4000-793-111</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "footUccn",
        data(){
          return {
            bol:true,
            bol1:true,
          }
        },
        methods:{
          submit(){
            if(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test($('.mobilePhone').val()*1)){
              $('.name').val();
              $('.mobilePhone').val();
              $('.leaveWord').val();
            }else{
              alert('手机号错误');
            }
          },
          WXshare(){
            if (this.bol==true&&this.bol1==true){
              $('.weixin').css('display','block');
              this.bol = !this.bol;
            }else if(this.bol==false&&this.bol1==true){
              $('.weixin').css('display','none');
              this.bol = !this.bol;
            }else if (this.bol==true&&this.bol1==false){
              $('.weixin').css('display','block');
              $('.weibo').css('display','none');
              this.bol = !this.bol;
              this.bol1 = !this.bol1;
            }
          },
          WBshare(){
            if (this.bol1==true&&this.bol==true){
              $('.weibo').css('display','block')
              this.bol1 = !this.bol1;
            }else if(this.bol1==false&&this.bol==true){
              $('.weibo').css('display','none');
              this.bol1 = !this.bol1;
            }else if (this.bol1==true&&this.bol==false){
              $('.weibo').css('display','block');
              $('.weixin').css('display','none');
              this.bol1 = !this.bol1;
              this.bol = !this.bol;
            }
          }
        }
    }
</script>

<style scoped>
  *{
    font-family: '微软雅黑';
  }
  .foot{
    width: 100%;
    height: 430px;
    background-color: black;
    min-width: 1600px;
  }
  .blogroll{
    color: rgb(0,196,255);
    font-size: 24px;
    line-height: 40px;
  }
  .blogroll a{
    text-decoration: none;
    color: rgb(0,196,255);
  }
  .phone{
    color: white;
    font-size: 24px;
  }
  .phone a{
    text-decoration: none;
    color: white;
    font-size: 24px;
  }
  .phone p{
    line-height: 45px;
  }
  .share{
    margin-top: 36px;
    height: 65px;
  }
  .share div{
    display: inline-block;
    position: relative;
  }
  .share div:nth-of-type(2){
    margin-left: 38px;
  }
  .weixin{
    width: 237px;
    position: absolute;
    top: -245px;
    left: -90px;
    z-index: 1;
    display: none;
  }
  .weibo{
    position: absolute;
    top: -265px;
    left: -90px;
    z-index: 1;
    display: none;
  }
  .QR_code{
    float: right;
    margin-right: 245px;
  }
  .QR_code div{
    float: right;
    margin-top: 39px;
    text-align: center;
    color: white;
  }
  .QR_code div p{
    margin-top: 15px;
    font-size: 18px;
  }
  .QR_code div:nth-of-type(1){
    margin-left: 42px;
  }
  .foot_link{
    float: left;
    margin:58px 0 0 245px;
  }
  .input{
    clear: both;
    margin-left: 202px;
    padding-top: 35px;
    font-size: 24px;
    color: white;
    width: 1500px;
    margin: auto;
  }
  .input span{
    display: inline-block;
    height: 46px;
    line-height: 46px;
  }
  .input input{
    text-indent: 0.5rem;
    height: 40px;
    border-radius: 10px;
    /*vertical-align: middle;*/
    font-size: 22px;
    outline: none;
  }
  .input input:nth-of-type(1){
    width: 137px;
  }
  .input input:nth-of-type(2){
    width: 187px;
  }
  .input input:nth-of-type(3){
    width: 282px;
  }
  .input span:nth-of-type(n+2){
    margin-left: 36px;
  }
  .submit{
    /*自定义按钮*/
    width: 95px;
    height: 32px !important;
    text-align: center;
    line-height: 32px !important;
    border-radius: 8px;
    font-size: 22px;
    background-color:rgb(0,169,255);
    margin-top: 9px;
    margin-left: 32px;
    cursor:pointer;
    /*文字不可选*/
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .input img{
    vertical-align: middle;
    margin-left: 50px;
  }
  .input span:nth-last-child(1){
    margin-left: 15px;
  }
</style>
