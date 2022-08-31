<template>
  <div class="footer">
    <div class="footer-logo">
        <img src="../assets/imgs/index/logo1.jpg" alt="">
        <p>云生数字</p>
    </div>
    <div class="footer-link">
        <a href="">云生数字主页</a><span>|</span>
        <a href="">云生数字主页</a><span>|</span>
        <a href="">云生数字主页</a><span>|</span>
        <a href="">云生数字主页</a><span>|</span>
        <a href="">云生数字主页</a>
    </div>
    <div class="copyright">
        Copyright @2019 <span class="domain">mi.futurefe.com</span> All Rights
    </div>
  </div>
</template>

<script>
export default {
    name:"nav-footer"
}
</script>

<style lang="scss">
.footer{
    height: 233px;
    border-top: 4px solid #e9e6e6;
    background-color: #eceaea;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 36px;
        img{
            width: 53px;
            height: 53px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        a{
            display: inline-block;
        }
        span{
            margin: 0 10px;
        }
        margin-bottom: 13px;
    }
    .copyright{
        .domain{
            color: #340a87;
        }
    }
}
</style>