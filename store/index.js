// STATE
export const state = () => ({
  projectPosts: [],
  blogPosts: []
});

// MUTATIONS
export const mutations = {
  setPosts(state, payload) {
    // change state to load posts into the store
    state.projectPosts = payload.projectPosts;
    state.blogPosts = payload.blogPosts;
  }
};

// ACTIONS
export const actions = {
  // call action on initialization
  async nuxtServerInit({ commit, getters }) {
    // get files from assets directories
    const [projectFiles, blogFiles] = await Promise.all([
      require.context('~/assets/content/project', false, /\.json$/),
      require.context('~/assets/content/blog', false, /\.json$/)]);
    // get posts from asset files
    let projectPosts = getters.getPosts(projectFiles);
    let blogPosts = getters.getPosts(blogFiles);
    // commit mutation to set posts in state
    await commit ({
      type: 'setPosts',
      projectPosts: projectPosts,
      blogPosts: blogPosts
    });
  }
};

// GETTERS
export const getters = {
  // helper function to set post data
  getPosts: state => files => {
    let posts = files.keys().map(key => {
      let res = files(key);
      // slice key to set the post slug
      res.slug = key.slice(2, -5);
      return res;
    });
    return posts;
  },
  // return single blog post (called by _blog.vue)
  getSingleBlog: state => slug => {
    let singlePost = state.blogPosts.find(post => post.slug === slug);
    return singlePost;
  },
  // return single project post (called by _project.vue)
  getSingleProject: state => slug => {
    let singlePost = state.projectPosts.find(post => post.slug === slug);
    return singlePost;
  }
}