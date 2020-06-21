<template>
  <article style="text-align: center">
    <h1>{{ blogPost.title }}</h1>
    <p>Published at: {{ blogPost.date }}</p>
    <p style="font-style: italic">{{ blogPost.description }}</p>
    <div>{{ blogPost.body }}</div>
  </article>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
      };
  }
}
</script>

<style scoped>

</style>