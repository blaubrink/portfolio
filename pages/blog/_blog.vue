<template>
  <article style="text-align: center">
    <div class="blog-thumbnail" :style="{backgroundImage: 'url(' + blogPost.thumbnail + ')'}"></div>
    <h1>{{ blogPost.title }}</h1>
    <p>Published at: {{ blogPost.date }}</p>
    <p style="font-style: italic">{{ blogPost.description }}</p>
    <div>{{ blogPost.body }}</div>
  </article>
</template>

<script>
export default {
  asyncData ({ params }) {
    console.log("params: "+JSON.stringify(params));
    return { blog: params.blog };
  },
  computed: {
    blogPost() {
      return this.$store.getters.getSingleBlog(this.blog);
    }
  }
}
</script>

<style scoped>
.blog-thumbnail {
  width: 400px;
  height: 400px;
  background-position: center;
  background-size: cover;
  margin: 0.5rem auto;
}
</style>