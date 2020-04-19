<template>
  <div>
    <h4> {{userName}} </h4>
    <p> {{comment}} </p>
  </div>
</template>

<script>

export default {
  name: 'CommentCard',
  props: ['userName', 'comment']
}
</script>
