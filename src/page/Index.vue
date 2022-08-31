<template>
  <div class="index">
    <div class="banner">
      <Banner></Banner>
    </div>
    <div class="index-detail">
      <div class="detail-title">
        <div class="fwxm">服务项目</div>
        <p>用心做好每一个网站，未客户提供一站式解决方案</p>
        <div class="item">
        <a href="">
          <div class="fwxm-item">
            <div class="item-img"><img src="../assets/imgs/index/item-1.jpg" alt="">
          </div>
          <div class="item-title">商业网站建设</div>
          </div>
        </a>
        <a href="">
          <div class="fwxm-item">
              <div class="item-img"><img src="../assets/imgs/index/item-1.jpg" alt="">
          </div>
            <div class="item-title">智能硬件物联网开发</div></div>
        </a>
        <a href="">
          <div class="fwxm-item">
              <div class="item-img"><img src="../assets/imgs/index/item-1.jpg" alt="">
              </div>
              <div class="item-title">手机APP开发</div>
          </div>
        </a>
        <a href="">
          <div class="fwxm-item">
              <div class="item-img"><img src="../assets/imgs/index/item-1.jpg" alt="">
              </div>
              <div class="item-title">手机APP开发</div>
          </div>
        </a>  
        <a href="">
          <div class="fwxm-item">
              <div class="item-img"><img src="../assets/imgs/index/item-1.jpg" alt="">
              </div>
              <div class="item-title">手机APP开发</div>
          </div>
        </a>  
        <a href="">
          <div class="fwxm-item">
              <div class="item-img"><img src="../assets/imgs/index/item-1.jpg" alt="">
              </div>
              <div class="item-title">手机APP开发</div>
          </div>
        </a>
        </div>  
      </div>
      <div class="jjfa">
        <div class="title-1">
              SOLUTION
            </div>
            <div class="title-2">—解决方案—</div>
        <div class="jjfa-detail">
          <div class="jjfa-title">
              <div class="jjfa-img">
                <a href=""><img src="../assets/imgs/index/jjfa-1.jpg" alt=""></a>
              </div>
              <div class="jjfa-titles">
                信息管理
              </div>
              <div class="jjfa-details">
                重点发展10个业务领域，实现对民生水利、生态水利的全行业支撑。构建基于互联网+水务的服务体系
              </div>
          </div>
          <div class="jjfa-title">
              <div class="jjfa-img">
                <a href=""><img src="../assets/imgs/index/jjfa-1.jpg" alt=""></a>
              </div>
              <div class="jjfa-titles">
                信息管理
              </div>
              <div class="jjfa-details">
                重点发展10个业务领域，实现对民生水利、生态水利的全行业支撑。构建基于互联网+水务的服务体系
              </div>
          </div>
          <div class="jjfa-title">
              <div class="jjfa-img">
                <a href=""><img src="../assets/imgs/index/jjfa-1.jpg" alt=""></a>
              </div>
              <div class="jjfa-titles">
                信息管理
              </div>
              <div class="jjfa-details">
                重点发展10个业务领域，实现对民生水利、生态水利的全行业支撑。构建基于互联网+水务的服务体系
              </div>
          </div>
          <div class="jjfa-title">
              <div class="jjfa-img">
                <a href=""><img src="../assets/imgs/index/jjfa-1.jpg" alt=""></a>
              </div>
              <div class="jjfa-titles">
                信息管理
              </div>
              <div class="jjfa-details">
                重点发展10个业务领域，实现对民生水利、生态水利的全行业支撑。构建基于互联网+水务的服务体系
              </div>
          </div>
        </div>
      </div>
      <div class="xwzx">
        <div class="xwzx-title">新闻中心</div>
        <div class="xwzx-detail">你可以及时了解公司及公司产品的相关动态</div>
        <div class="xwzx-contents">
          <a href=""><div class="xwzx-details">
            <div class="xwzx-titles">
              <span>01</span>为什么软件开发这么难？
            </div>
            <div class="xwzx-time">2022-06-02 10:01:55</div>
            <div class="wxzx-content">有的人认为，一款好的编程语言可以减轻软件开发者身上的负担，且能够相应地提高他们地效率。</div>
          </div></a>
          <a href=""><div class="xwzx-details">
            <div class="xwzx-titles">
              <span>01</span>为什么软件开发这么难？
            </div>
            <div class="xwzx-time">2022-06-02 10:01:55</div>
            <div class="wxzx-content">有的人认为，一款好的编程语言可以减轻软件开发者身上的负担，且能够相应地提高他们地效率。</div>
          </div></a>
        </div>
        <a href=""><div class="bt">查看更多文章</div></a>
      </div>
      <div class="lxwm">
        <div class="lxwm-detail">
          <div class="lxwm-title">联系我们</div>
          <div class="address">
            <span>公司地址：</span>
            浙江省杭州市西湖区保俶路浙江大学西溪校区培训楼西楼1楼
          </div>
          <div class="iphone">
            <span>联系电话：</span>
            15188640848  王总
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner.vue";
export default {
    name:"IndexL",
    components:{
    Banner,
  }
}
</script>
<style lang="scss">
 .index{
  //background-image: url("../assets/imgs/index/bg1.png");
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-attachment: fixed;
  .index-detail{
    .detail-title{
      .fwxm{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2.5rem;
        letter-spacing: 3px;
        text-align: center;
        padding-top: 2.5rem;
        padding-bottom: 20px;
      }
        .fwxm-item{
           border: .0625rem solid rgb(173, 171, 171,0.2);
           width: 30%;
            display: inline-block;
            margin: 1.25rem 1.25rem;
            text-align: center;
        }
            .item-img{
              display: inline-block;
              overflow: hidden;
              img{
                width: 100%;
                object-fit: cover;
                transition: 0.2s;
              }
              img:hover{
                transform: scale(1.5);
              }
            }
            .item-title{
              font-family: 楷体;
              font-size: 22px;
              text-align: center;
              font-weight: bold;
              padding: 22px;
              padding-top: 5%;
            }
      p{
        text-align: center;
        font-size: 17px;
        margin-top: .3125rem;
        margin-bottom: .9375rem;
      }
      a:hover .fwxm-item{
        -webkit-box-shadow:#ccc 0rem .625rem .625rem;
        -moz-box-shadow:#ccc 0rem .625rem .625rem;
        box-shadow: #ccc 0rem .625rem .625rem;
        
        .fwxm-item:hover{
          
        }
      }
      .item{
        text-align: center;
      } 
      
    }
    .jjfa{
        height: 700px;
      }
      .title-1{
        margin-top: 50px;
        font-size: 35px;
        text-align: center;
      }
      .title-2{
        margin-top: 10px;
        font-size: 26px;
        text-align: center;
      }
      .jjfa-detail{
        text-align: center;
      }     
      .jjfa-title{
        margin: 0 auto;
        background: #f5f5f5;
        display: inline-block;
        height: 400px;
        margin-left: 20px;
        margin-top: 55px;
        position: relative;
        width: 300px;
        border-radius: 5px 5px 20px 20px;
        //border: 1px solid #ccc;
      }
      .jjfa-title:before{
        border-top: 100px solid #f5f5f5;
        border-left: 150px solid transparent;
        border-right: 150px solid transparent;
        content: "";
        height: 0;
        left: 0;
        position: absolute;
        bottom: -92px;
        width: 0;
        border-radius: 20px;
      }
      .jjfa-img{
        border-radius: 50%;
        margin: 30px 0px;
        text-align: center;
        img{
          border-radius: 50%;
          width: 170px;
          height: 170px;
        }
      }
      .jjfa-titles{
        font-family: 楷体;
        font-size: 28px;
        font-weight: bolder;
        text-align: center;
        margin-bottom: 20px;
      }
      .jjfa-details{
        font-size: 18px;
        line-height: 25px;
        margin-left: 5px;
        text-align: left;
      }
      
      .xwzx{
        .bt{
          border: 1px solid #ccc;
          height: 50px;
          width: 400px;
          text-align: center;
          margin: auto;
          line-height: 50px;
          font-size: 18px;
          color: #000000;
          margin-bottom: 30px;
        }
        .bt:hover{
          background: #1e90ff;
        }
        .xwzx-contents{
          margin-left: 13%;
          margin-bottom: 50px;
        }
        .xwzx-title{
          font-size: 30px;
          text-align: center;
        }
        .xwzx-detail{
          font-size: 16px;
          color: #bebebe;
          text-align: center;
          margin-top: 8px;
          margin-bottom: 25px;
        }

        .xwzx-details{
          width: 550px;
          height: 250px;
          background: #f8f8f8;
          display: inline-block;
          margin-right: 20px;
          .xwzx-titles{
            font-size: 30px;
            line-height: 80px;
            margin-left: 20px;
            span{color: #1e90ff;margin-right: 8px;}
          }
          .xwzx-time{
            margin-left: 58px;
            margin-top: -15px;
            font-size: 14px;
            color: #bebebe;
          }
          .wxzx-content{
            margin-left: 58px;
            font-size: 16px;
            margin-top: 25px;
            line-height: 25px;
            letter-spacing: 2px;
            color: #696969;
            margin-right: 15px;
          }
        }
        .xwzx-details:hover{
          box-shadow: 1px 1px 3px 3px #f8f8f8;
          background-color: #ffffff;
        }
      }
      .lxwm{
        background-image: url(../assets/imgs/index/lxwm.jpg) ;
        background-size: 100% 100%;
        font-size: 18px;
        height: 450px;
        margin-bottom: 50px;
        margin-top: 20px;
      }
      .lxwm-detail{
        padding-top: 150px;
        .lxwm-title{
          font-size: 25px;
          color: #ffffff;
          margin-left: 80px;
          margin-bottom: 25px;
        }
        .address{
          margin-left: 80px;
          color: #2c2b2b;
          margin-bottom: 10px;
          span{
            color: #696969;
          }
        }
        .iphone{
          margin-left: 80px;
          span{
            color: #696969;
          }
        }
      }
  }
}
</style>

