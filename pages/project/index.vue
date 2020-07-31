<template>
  <div class="project-page">
    <ProjectPreview 
      v-for="post in projectPosts"
      :key="post.slug"
      :id="post.slug"
      :title="post.title"
      :thumbnail="post.thumbnail" />
  </div>
</template>

<script>
import ProjectPreview from "~/components/ProjectPreview"

export default {
  components: {
    ProjectPreview
  },
  computed: {
    projectPosts() {
      return this.$store.state.projectPosts
    }
  }
}
</script>

<style scoped>
.project-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>