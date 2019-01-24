<template>
    <q-list v-if="posts && posts.length" class="column">
      <q-collapsible v-for="post of posts" :key="post.id" class="col-10" icon="event_note" :label="post.title">
        <div>
          {{ post.entry }}
        </div>
      </q-collapsible>
    </q-list>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Bulletin',
  data () {
    return {
      posts: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3003/bulletin`)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style>

</style>
