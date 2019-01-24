<template>
    <div v-if="posts && posts.length" class="q-ma-xs row justify-center">
      <q-btn v-for="posts of posts" :key="posts.id" size="1rem" class="q-ma-xs" :style="{backgroundColor: '#f2a43a', color: 'white'}" :icon='posts.icon' :label="`$`+(posts.amount/posts.number_housemates).toFixed(2)" />
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Bills',
  data () {
    return {
      posts: [],
      errors: []
    }
  },
  methods: {
    loadPosts () {
      return axios.get('http://localhost:3003/bills/1/')
    }
  },
  created () {
    this.loadPosts()
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>
@media screen and ( max-width: 900px ) {
  div { flex-basis: 33%; }                    /* forces three items to a divne */
}

@media screen and ( max-width: 600px ) {
  div { flex-basis: 50%; }                    /* forces two items to a divne */
}

@media screen and ( max-width: 300px ) {
  div { flex-basis: 100%; }                   /* forces one item per divne line */
}
</style>
