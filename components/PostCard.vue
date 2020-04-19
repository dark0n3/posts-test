<template>
  <div style="border-bottom: 2px solid" @click='$router.push(`posts/post/${post.id}`)'>
    <h3> {{post.title}} </h3>
    <p> {{post.body}} </p>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ['post'],
}
</script>
