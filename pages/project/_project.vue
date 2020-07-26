<template>
  <article style="text-align: center">
    <div class="project-thumbnail" :style="{backgroundImage: 'url(' + projectPost.thumbnail + ')'}"></div>
    <h1>{{ projectPost.title }}</h1>
    <div>{{ projectPost.body }}</div>
  </article>
</template>

<script>
export default {
  asyncData ({ params }) {
    console.log("params: "+JSON.stringify(params));
    return { project: params.project };
  },
  computed: {
    projectPost() {
      return this.$store.getters.getSingleProject(this.project);
    }
  }
}
</script>

<style scoped>
.project-thumbnail {
  width: 400px;
  height: 400px;
  background-position: center;
  background-size: cover;
  margin: 0.5rem auto;
}
</style>