<template>
    <div id="container"></div>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'Three',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls: null
    }
  },
  methods: {
    init: function () {
      let container = document.getElementById('container')

      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      // this.controls = new Three.OrbitControls(this.camera)

      this.scene = new Three.Scene()

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      let material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      //      this.controls.update()
      container.appendChild(this.renderer.domElement)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      //   this.controls.update()
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted () {
    this.init()
    this.animate()
  }
}
</script>

<style scoped>

#container {
height: 600px;
 width:800px;
}

</style>
