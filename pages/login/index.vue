<template>
 <div>
   <h1> Sign in </h1>
   <span>
     <p v-if="error"> fields shouldn't be empty</p>
   </span>
   <form @submit.prevent="submit">
    <input placeholder="user" v-model="login"/>
    <input placeholder="******" type="password" v-model="password"/>
    <div>
       <button> Login </button>
    </div>
   </form>
  </div>
</template>

<script>
export default {
  name:"Login",
  data() {
    return {
      login: '',
      password: '',
      error: false,
    }
  },
  computed: {

  },
  methods: {
    submit() {
      if (this.login==='' || this.password==='') {
        this.error=true
      }
      else {
        this.$store.dispatch('setUser').then(() => {
          this.$router.replace('/posts')
        })
      }
    }
  }
}
</script>
