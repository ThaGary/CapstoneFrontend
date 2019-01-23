<template>
    <div v-if="posts && posts.length" class="column q-ma-xs justify-center">
      <q-btn v-for="posts of posts" :key="posts.id" round class="q-ma-xs" :style="{backgroundColor: posts.icon_color, color: 'white'}" @click="paid" :icon='posts.icon' />
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
    },

    paid: function () {
      for (var key in this.post) {
        this.posts[key].icon = 'fas-bolt'
      }
      console.log('clicked', this.posts.length)
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

</style>
