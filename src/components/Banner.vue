<template>
<div>
    <div>
        <el-carousel :interval="4000" height="500px">
            <el-carousel-item v-for="item in imagebox" :key="item.id">
            <img :src="item.idView" class="image">
            </el-carousel-item>
        </el-carousel>
    </div>
</div>
</template>

<script>

export default{
  name: 'BannerL',
  data () {
    return {
      imagebox: [{id: 0, idView: require('../assets/imgs/slider/slide-1.jpg')},
      {id: 1, idView: require('../assets/imgs/slider/slide-2.jpg')},
      {id: 2, idView: require('../assets/imgs/slider/slide-3.gif')},
      {id: 3, idView: require('../assets/imgs/slider/slide-4.png')},
      {id: 4, idView: require('../assets/imgs/slider/slide-5.gif')},
      {id: 5, idView: require('../assets/imgs/slider/slide-6.jpg')}
        // imagebox是assets下一个放图片的文件夹
      ]
    }
  }
}
</script>

<style>

.image{
/*设置图片宽度和浏览器宽度一致*/
  width:100%;
  height:inherit;
}
</style>		