<template>
  <div>
    <h2> {{title}} </h2>
    <p> {{body}} </p>
    <div>
      <h3> Comments: </h3>
      <comment-card
        v-for="comment in comments"
        :key="comment.id"
        :userName="comment.name"
        :comment="comment.body"
      />
    </div>
  </div>
</template>

<script>
import * as postsApi from '@/api/posts';
import CommentCard from '@/components/CommentCard.vue'

export default {
  name: "SpecificPost",
  components: { CommentCard },
  data() {
    return {
      postId: this.$route.params.id,
      comments: undefined,
      title: undefined,
      body: undefined
    }
  },
  methods: {
    async init() {
      const postData = await postsApi.getPost(this.postId)
      this.title = postData.title;
      this.body = postData.body;
      this.comments = await postsApi.getComments(this.postId)
    }
  },

  created() {
    this.init()
  }
}
</script>
