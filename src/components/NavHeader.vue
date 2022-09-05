<template>
    <div class="nav-header">
        <div class="container">
            <div class="header-logo">
                    <img src="../assets/imgs/index/logo.jpg" alt="" height="100px" width="350px">
            </div>
            <div id="menu5">
                <ul class="menu-top">
                    <li><a href="#" class="menu-button"><span class="menu-label">首页</span></a></li>
                    <li><a href="#" class="menu-button menu-drop"><span class="menu-label">关于我们</span></a>
                        <div class="menu-dropdown menu-dropdown1">
                            <ul class="menu-sub">
                                <li><a href="#" class="menu-subbutton"><span class="menu-label">公司概况</span></a></li>
                                <li><a href="#" class="menu-subbutton"><span class="menu-label">专业优势</span></a></li>
                                <li><a href="#" class="menu-subbutton"><span class="menu-label">核心团队</span></a></li>
                                <li><a href="#" class="menu-subbutton"><span class="menu-label">发展历程</span></a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#" class="menu-button menu-drop"><span class="menu-label">产品中心</span></a>
                        <div class="menu-dropdown menu-dropdown2">
                            <ul class="menu-sub">
                                <li><a href="#" class="menu-subbutton"><span class="menu-label">智能感知</span>
                                </a></li>
                                <li><a href="#" class="menu-subbutton"><span class="menu-label">智能计算</span>
                                </a></li>
                                <li><a href="#" class="menu-subbutton"><span class="menu-label">只能机器人</span>
                                </a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#" class="menu-button menu-drop"><span class="menu-label">新闻资讯</span></a>
                        <div class="menu-dropdown menu-dropdown3">
                                <ul class="menu-sub">
                                    <li><a href="#" class="menu-subbutton"><span class="menu-label">公司新闻</span></a></li>
                                    <li><a href="#" class="menu-subbutton"><span class="menu-label">行业动态</span></a></li>
                                    <li><a href="#" class="menu-subbutton"><span class="menu-label">媒体报道</span></a></li>
                                </ul>
                        </div>
                    </li>
                    <li><a href="#" class="menu-button"><span class="menu-label">联系我们</span></a>
                    </li>
                    <li class="menu-right"><a href="#" class="menu-button menu-drop"><span class="menu-label">Social</span></a>
                        <div class="menu-dropdown menu-dropdown6">
                            <ul class="menu-sub">
                                <li><a href="#" class="menu-subbutton"><img src="../assets/static/picture/facebook.png"><span class="menu-label">Facebook</span></a></li>
                                <li><a href="#" class="menu-subbutton"><img src="../assets/static/picture/twitter.png"><span class="menu-label">Twitter</span></a></li>
                                <li><a href="#" class="menu-subbutton"><img src="../assets/static/picture/googleplus.png"><span class="menu-label">Google+</span></a></li>
                                <li><a href="#" class="menu-subbutton"><img src="../assets/static/picture/linkedin.png"><span class="menu-label">LinkedIn</span></a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
    </div>    
</div>
</template>
<script>
export default {
    name:'nav-header',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="scss"> 
@import url(../assets/static/css/modern-menu.scss);
@import url(../assets/static/css/preview.scss);
.nav-header{
    position: relative;
    z-index: 999;
    .container{
         height: 112px;
         display: flex;
         position: fixed;
         top:0;
         justify-content: space-between;
         align-items: center;
         background: #fff;
         .header-logo{
            margin-left: 20px;
         }
    }    
}

</style>

