<template>
  <div>
    <post-card
      v-for="post in postsList"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  name: "Posts",
  components: {PostCard},
  data() {
    return {
      postsList: undefined
    }
  },
  methods: {
    async init() {
      await this.$store.dispatch("getPosts")
      const posts = this.$store.getters.posts
      /*
        in order to avoid of using getters here we can update plugins
        and get it in a way @PostState posts or @CacheState posts
        Can implement it if you hire me =)
      */
      this.postsList = posts
    },
  },
  created() {
    this.init()
  }
}
</script>
