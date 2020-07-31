<template>
  <nuxt-link :to="projectLink" class="project-preview">
    <article>
      <div class="project-thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <div class="project-content">
        <h1>{{ title }}</h1>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProjectPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    projectLink() {
      return '/project/' + this.id;
    }
  }
}
</script>

<style scoped>
.project-preview {
  width: 60%;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 4px #ccc;
  margin: 0.5rem;
  text-decoration: none;
}

.project-thumbnail {
  width: 80px;
  height: 80px;
  display: inline-block;
  background-position: center;
  background-size: cover;
  text-decoration: none;
  margin: 0.5rem;
}

.project-content {
  display: inline-block;
  color: #222;
  margin: 0.5rem;
}
</style>