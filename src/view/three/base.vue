<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div id="th">
        </div>
        <div>
          转动块
        </div>
      </el-col>
      <el-col :span="12">
        <div id="ope">
        </div>
        <div>
          坐标系
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div id="grid">
        </div>
        <div>
          网格
        </div>
      </el-col>
      <el-col :span="12">
        <div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'ThreeBase',
  data() {
    return {
      scene: '',
      camera: '',
      renderer: '',
      cube: ''
    }
  },
  mounted() {
    this.initAll('th')
    this.initLine('ope')
    this.initGrid()
    // this.render()
  },
  methods: {
    initGrid() {
      let scene = new THREE.Scene()
      const og = document.getElementById('grid')
      let camera = new THREE.PerspectiveCamera(45, og.clientWidth / og.clientHeight, 1, 10000)
      camera.position.x = 0
      camera.position.y = 1000
      camera.position.z = 0
      camera.up.x = 1
      camera.up.y = 0
      camera.up.z = 0
      camera.lookAt(0, 0, 0)
      let renderer = new THREE.WebGLRenderer({
        antialias : true
      })
      renderer.setSize(og.clientWidth, og.clientHeight)
      renderer.setClearColor(0xFFFFFF, 1.0)
      og.appendChild(renderer.domElement)
      let light = new THREE.DirectionalLight(0xFF0000, 1.0, 0)
      light.position.set(100, 100, 200)
      scene.add(light)
      var geometry = new THREE.Geometry()
      geometry.vertices.push(new THREE.Vector3(- 500, 0, 0))
      geometry.vertices.push(new THREE.Vector3(500, 0, 0))
      for ( var i = 0; i <= 20; i ++ ) {
        var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) )
        line.position.z = ( i * 50 ) - 500
        scene.add(line)
        line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) )
        line.position.x = ( i * 50 ) - 500
        line.rotation.y = 90 * Math.PI / 180
        scene.add(line)
      }
      function render() {
        renderer.clear()
        // requestAnimationFrame(render)
        renderer.render(scene, camera)
      }
      render()
    },
    initAll(doc) {
      let scene = new THREE.Scene()
      const og = document.getElementById(doc)
      let camera = new THREE.PerspectiveCamera(75, og.clientWidth/og.clientHeight, 0.1, 1000)
      camera.lookAt(0, 0, 0)
      let renderer = new THREE.WebGLRenderer()
      renderer.setSize(og.clientWidth, og.clientHeight)
      og.appendChild(renderer.domElement)
      const geometry = new THREE.CubeGeometry(1,1,1)
      const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
      let cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      camera.position.z = 5
      function render() {
        requestAnimationFrame(render)
        cube.rotation.x += 0.1
        cube.rotation.y += 0.1
        renderer.render(scene, camera)
      }
      render()
    },
    initLine() {
      let scene = new THREE.Scene()
      const og = document.getElementById('ope')
      let camera = new THREE.PerspectiveCamera(45, og.clientWidth / og.clientHeight, 1, 10000)
      camera.position.x = 500;
      camera.position.y = 500;
      camera.position.z = 500;
      camera.up.x = 1;
      camera.up.y = 0;
      camera.up.z = 0;
      camera.lookAt(0, 0, 0)
      let renderer = new THREE.WebGLRenderer({
        antialias : true
      })
      renderer.setSize(og.clientWidth, og.clientHeight)
      renderer.setClearColor(0xFFFFFF, 1.0)
      og.appendChild(renderer.domElement)

      let light = new THREE.DirectionalLight(0xFF0000, 1.0, 0)
      light.position.set(100, 100, 200)
      scene.add(light)

      var p1 = new THREE.Vector3(0, 0, 0)
      var p2 = new THREE.Vector3(500, 0, 0)
      var geometry = new THREE.Geometry()
      geometry.vertices.push(p1)
      geometry.vertices.push(p2)
      let material = new THREE.MeshBasicMaterial({color: 0x00ff00})
      var line = new THREE.Line(geometry, material, THREE.LineSegments)
      scene.add(line)

      p1 = new THREE.Vector3(0, 0, 0)
      p2 = new THREE.Vector3(0, 500, 0)
      geometry = new THREE.Geometry()
      geometry.vertices.push(p1)
      geometry.vertices.push(p2)
      material = new THREE.MeshBasicMaterial({color: 0x00ff00})
      line = new THREE.Line(geometry, material, THREE.LineSegments)
      scene.add(line)

      p1 = new THREE.Vector3(0, 0, 0)
      p2 = new THREE.Vector3(0, 0, 500)
      geometry = new THREE.Geometry()
      geometry.vertices.push(p1)
      geometry.vertices.push(p2)
      material = new THREE.MeshBasicMaterial({color: 0x00ff00})
      line = new THREE.Line(geometry, material, THREE.LineSegments)
      scene.add(line)
      // const geometry = new THREE.CubeGeometry(1,1,1)
      // const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
      // let cube = new THREE.Mesh(geometry, material)
      // scene.add(cube)
      // camera.position.z = 5
      function render() {
        requestAnimationFrame(render)
        // cube.rotation.x += 0.1
        // cube.rotation.y += 0.1
        renderer.render(scene, camera)
      }
      render()
    }
    // render() {
    //   let that = this
    //   requestAnimationFrame(that.render)
    //   this.cube.rotation.x += 0.1
    //   this.cube.rotation.y += 0.1
    //   this.renderer.render(this.scene, this.camera)
    // }
  }
}
</script>

<style>
  #th, #ope, #grid {
    width: 100%;
    height: 300px;
  }
</style>