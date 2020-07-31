<template>
    <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/project">Projects</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/blog">Blog</nuxt-link></li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.nav-list {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.nav-item {
    margin-right: 2rem;
}
</style>