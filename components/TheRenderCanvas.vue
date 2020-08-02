<template>
  <canvas id="render-canvas"></canvas>
</template>

<script>
export default {
  mounted() {
    this.createScene();
  },
  methods: {
    createScene() {
      const canvas = document.getElementById("render-canvas");
      const engine = new BABYLON.Engine(canvas);
      const scene = new BABYLON.Scene(engine);

      const camera = new BABYLON.UniversalCamera(
        "cam1",
        new BABYLON.Vector3(0, 0, -10),
        scene
      );

      camera.attachControl(canvas, true);

      const light = new BABYLON.HemisphericLight(
        "light1",
        new BABYLON.Vector3(0, 1, 0),
        scene
      );
      light.intensity = 0.7;

      const sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

      engine.runRenderLoop(() => {
        if (scene) {
          scene.render();
        }
      });
    },
  },
};
</script>

<style scoped>
#render-canvas {
  width: 640px;
  height: 360px;
}
</style>