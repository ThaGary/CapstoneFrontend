<template>
        <div class="col-10">
            <h3 class="col-12 text-weight-bolder">Bulletin Board</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Add, Edit, Remove Post.
            </h6>
            <div class="q-mt-md justify-center row" v-for="post of bulletin" :key="post.id">
                <q-card inline color="amber-7" class="col-10 bigger q-mt-sm">
                    <q-card-title class="relative-position">
                        <div class="ellipsis">{{ post.title }}</div>
                    </q-card-title>
                    <q-card-main class="text-faded">
                        {{ post.entry }}
                    </q-card-main>
                </q-card>
            </div>
            <q-btn class="q-mt-xl" round size="1em" icon="add"></q-btn>
        </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditBulletin',
  data () {
    return {
      bulletin: [],
      errors: []
    }
  },
  created () {
    axios.get('http://localhost:3002/bulletin/1')
      .then(res => (this.bulletin = res.data))
      .catch(err => console.log(err))
  }
}
</script>

<style>

</style>
