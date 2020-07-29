<template>
  <div>
    <div>
      <div style="position:relative">
        Echarts 高级
      </div>
      <div style="position:absolute;right: 20px;top:0">
        <router-link to="/echarts/base">Echarts 基础---</router-link>
      </div>
    </div>
    <div>
      <el-row>
        <el-col :span="12">
          <div id="gl-blend" :style="{width: '100%',height: '400px'}">
            地球全貌
          </div>
        </el-col>
        <el-col :span="12">
          <div id="3d-hookFace">
            3d曲面
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="12">
        <div id="3d-city" :style="{width: '100%',height: '400px'}">
          3d城市
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          3d路径图
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>GL散点图</div>
      </el-col>
      <el-col>
        <div>GL路径图</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
import "echarts/map/js/province/yunnan.js"
import 'echarts-gl'
export default {
  name: 'echartsHigh',
  data() {
    return {
      blend: null,
      hookFace: null,
      city: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    this.blend = null,
    this.hookFace = null,
    this.city = null
  },
  methods: {
    initChart() {
      // 地球全貌
      this.blend = echarts.init(document.getElementById('gl-blend'))
      // this.blend.setOption({
      //   backgroundColor: '#000',
      //   globe: {
      //     baseTexture: require('@/assets/images/earth.jpg'), // 地球的纹理 支持canvas
      //     // heightTexture: require('@/assets/images/bathymetry_bw_composite_4k.jpg'), // 凹凸纹理
      //     displacementScale: 0.1,
      //     shading: 'lambert',
      //     environment: require('@/assets/images/starfield.jpg'),
      //     light: {
      //       ambient: {
      //         intensity: 0.1
      //       },
      //       main: {
      //         intensity: 1.5
      //       }
      //     },
      //     layers: [{
      //       type: 'blend',
      //       blendTo: 'emission',
      //       texture: require('@/assets/images/night.jpg')
      //     }, {
      //       type: 'overlay',
      //       texture: require('@/assets/images/clouds.png'),
      //       shading: 'lambert',
      //       distance: 5
      //     }]
      //   },
      //   series: {
      //     type: 'lines3D',
      //       coordinateSystem: 'globe',
      //       blendMode: 'lighter',
      //       lineStyle: {
      //           width: 1,
      //           color: 'rgb(50, 50, 150)',
      //           opacity: 1
      //       },

      //       data: [
      //         [
      //           [116.20, 39.56, 1],[40.71, -74, 2]
      //         ]
      //       ]
      //   }
      // })
      
      // 曲面
      // this.hookFace = echarts.init(document.getElementById('3d-hookFace'))
    
      // 3d-city
      this.city = echarts.init(document.getElementById('3d-city'))
      this.city.setOption({
        series:[
          {
            type: 'map3D',
            name: '云南',
            selectedMode: 'single',
            boxDepth: 90,
            regionHeight: 8,
            map: '云南',
            viewControl: {
              distance: 150,
              rotateSensitivity: 0,
              zoomSensitivity: 0
            },
            label: {
              show: true,
              textStyle: {
                color: '#0a1640',
                fontSize: 12,
                backgroundColor: 'rgba(0,0,0,0)'
              }
            },
            itemStyle: {
              color: '#81d0f1',
              borderWidth: 0.5,
              borderColor: '#459bca'
            },
            emphasis: {
              label: {
                show: true,
                textStyle: {
                  color: '#fff'
                }
              },
              itemStyle: {
                color: '#0489d6'
              }
            },
            regions: [
              // {}
            ]
          }
        ]
      })
      this.city.on('click', (e) => {
        console.log(e, '....')
      })
      // 
    }
  }
}
</script>

<style>

</style>