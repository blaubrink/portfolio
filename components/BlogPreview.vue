<template>
  <nuxt-link :to="blogLink" class="blog-preview">
    <article>
      <div class="blog-thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <div class="blog-content">
        <h1>{{ title }}</h1>
        <span>{{ date }}</span>
        <p>{{ description }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BlogPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    blogLink() {
      return '/blog/' + this.id;
    }
  }
}
</script>

<style scoped>
.blog-preview {
  width: 60%;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 4px #ccc;
  margin: 0.5rem;
  text-decoration: none;
}

.blog-thumbnail {
  width: 80px;
  height: 80px;
  display: inline-block;
  background-position: center;
  background-size: cover;
  text-decoration: none;
  margin: 0.5rem;
}

.blog-content {
  display: inline-block;
  color: #222;
  margin: 0.5rem;
}
</style>