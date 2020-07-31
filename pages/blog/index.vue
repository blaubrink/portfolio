<template>
  <div class="blog-page">
    <BlogPreview 
      v-for="post in blogPosts"
      :key="post.slug"
      :id="post.slug"
      :title="post.title"
      :date="post.date"
      :description="post.description"
      :thumbnail="post.thumbnail" />
  </div>
</template>

<script>
import BlogPreview from "~/components/BlogPreview"

export default {
  components: {
    BlogPreview
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>

<style scoped>
.blog-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>