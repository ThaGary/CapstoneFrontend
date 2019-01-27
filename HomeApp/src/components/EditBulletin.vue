<template>
        <div class="col-10">
            <h3 class="col-12 text-weight-bolder">Bulletin Board</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Add, Edit, Remove Post.
            </h6>
            <div class="q-mt-md column justify-center" v-for="post of bulletin" :key="post.id">
                <button class="bigger col-12 row justify-center q-mt-sm" @click="setFormData(post.id, post.title, post.entry), minimizedModal=!minimizedModal">
                <q-card class="col-10 bigger q-mt-sm" inline color="amber-7">
                    <q-card-title class="relative-position">
                        <div class="ellipsis">{{ post.title }}</div>
                    </q-card-title>
                    <q-card-main class="text-faded">
                        {{ post.entry }}
                    </q-card-main>
                </q-card>
                </button>
                <q-modal v-model="minimizedModal" minimized>
                    <div style="padding: 50px">
                        <div class="q-display-1 q-mx-md">Edit {{title}}
                        </div>
                        <q-input class="col-10" type="text" :value="title" v-model="editTitle" float-label="Title" :placeholder="title" />
                        <q-input class="col-10" type="textarea" :value="entry" v-model="editEntry" float-label="Entry" :placeholder="entry" />
                        <div class="buttons row">
                            <q-btn class="q-ma-xs col-5" color="green" v-close-overlay label="Update" @click="put(editTitle, editEntry),showNotification()" />
                            <q-btn class="q-ma-xs col-5" color="red" v-close-overlay label="Close" />
                        </div>
                    </div>
                </q-modal>
            </div>
            <q-btn class="q-my-xl" round size="1em" icon="add"></q-btn>
        </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditBulletin',
  data () {
    return {
      bulletin: [],
      minimizedModal: false,
      errors: [],
      title: '',
      entry: '',
      editEntry: '',
      editTitle: ''
    }
  },
  methods: {
    setFormData (id, title, entry) {
      this.id = id
      this.title = title
      this.entry = entry
      console.log(this.title, this.entry)
    },
    put (editTitle, editEntry) {
      this.title = editTitle
      this.entry = editEntry
      var url = 'http://localhost:3002/bulletin/' + this.id
      console.log('put', this.id, editEntry)
      axios.put(url, {
        title: editTitle,
        entry: editEntry
      })
        .then(response => {
          console.log(response, 'success')
        })
        .catch(error => {
          console.log(error)
          this.errors.push(error)
        })
    },
    showNotification () {
      window.location.reload()
      this.$q.notify({ color: 'green', textColor: 'white', message: 'Bills Updated!', icon: 'thumb_up' })
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
