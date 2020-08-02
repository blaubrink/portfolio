<template>
  <div class="container">
    <h1>Lauritz Brinkmann Portfolio</h1>
    <p>Work in progress.</p>
    <TheRenderCanvas />
  </div>
</template>

<script>
import TheRenderCanvas from "~/components/TheRenderCanvas";

export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
  components: {
    TheRenderCanvas,
  },
};
</script>

<style scoped>
</style>