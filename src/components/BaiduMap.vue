<template>
  <div id="dt" ref="dt">
  </div>
</template>

<script>
export default {
    name:'BaiduMap',
   methods:{
    map(){
        let map=new window.BMap.Map(this.$refs.dt)
        map.centerAndZomm(new window.BMap.Point(116.404,39.915),15)
        map.addControl(new window.BMap.MapTypeControl({
            mapTypes:[
                window.BMAP_NORMAL_MAP,
                window.BMAP_HYBRID_MAP
            ]
        }))
        map.setCurrentCity('四川省')
        map.enableScrollWheelZoom(true)

    }
   },
   mounted(){
    this.map()
   }
}
</script>

<style>

</style>