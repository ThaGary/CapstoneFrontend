<template>
        <div class="col-10">
            <h3 class="col-12 text-weight-bolder">Bulletin Board</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Add, Edit, Remove Post.
            </h6>
            <div class="q-mt-md column justify-center" v-for="post of bulletin" :key="post.id">
                <button class="bigger col-12 row justify-center q-mt-sm" @click="setFormData(post.id, post.title, post.entry, post.house_id), minimizedModal1=!minimizedModal1">
                <q-card class="col-10 bigger q-mt-sm" inline color="amber-7">
                    <q-card-title class="relative-position">
                        <div class="ellipsis">{{ post.title }}</div>
                    </q-card-title>
                    <q-card-main class="text-faded">
                        {{ post.entry }}
                    </q-card-main>
                </q-card>
                </button>
                <q-modal v-model="minimizedModal1" minimized>
                    <div style="padding: 50px">
                        <div class="title text-bold q-mx-md">Edit {{title}}
                        </div>
                        <q-input class="col-10" type="text" :value="post.title" v-model="editTitle" float-label="Title" :placeholder="title" />
                        <q-input class="col-10" type="textarea" :value="post.entry" v-model="editEntry" float-label="Entry" :placeholder="entry" />
                        <div class="buttons q-mt-md justify-center row">
                            <q-btn class="q-ma-xs col-3" color="red" v-close-overlay label="DELETE" @click="deleteBull(post.id),showNotification()" />
                            <q-btn class="q-ma-xs col-3" color="green" v-close-overlay label="Update" @click="put(editTitle, editEntry),showNotification()" />
                            <q-btn class="q-ma-xs col-3" color="amber-7" v-close-overlay label="Cancel" />
                        </div>
                    </div>
                </q-modal>
            </div>
            <q-btn class="q-my-xl" @click="setHouse(), minimizedModal2=!minimizedModal2" round size="1em" icon="add"></q-btn>
                <q-modal v-model="minimizedModal2" minimized>
                    <div style="padding: 50px">
                        <div class="title text-bold q-mx-md">Edit {{title}}
                        </div>
                        <q-input class="col-10" type="text" :value="title" v-model="newTitle" float-label="Title" :placeholder="title" />
                        <q-input class="col-10" type="textarea" :value="entry" v-model="newEntry" float-label="Entry" :placeholder="entry" />
                        <div class="buttons q-mt-md justify-center row">
                            <q-btn class="q-ma-xs col-5" color="green" v-close-overlay label="Add" @click="post(post.house_id, newTitle, newEntry),showNotification()" />
                            <q-btn class="q-ma-xs col-5" color="red" v-close-overlay label="Close" />
                        </div>
                    </div>
                </q-modal>
        </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditBulletin',
  data () {
    return {
      bulletin: [],
      minimizedModal1: false,
      minimizedModal2: false,
      errors: [],
      title: '',
      entry: '',
      house_id: 1,
      editEntry: '',
      editTitle: '',
      newEntry: '',
      newTitle: ''
    }
  },
  methods: {
    setFormData (id, title, entry, houseID) {
      this.id = id
      this.title = title
      this.entry = entry
      console.log(this.title, this.entry)
    },
    setHouse () {
      this.house_id = 1
      console.log(this.house_id)
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
    deleteBull (id) {
      var url = 'http://localhost:3002/bulletin/' + id
      axios.delete(url, {id: id})
    },
    post (newTitle, newEntry) {
      this.title = newTitle
      this.entry = newEntry
      var url = 'http://localhost:3002/bulletin/'
      console.log('post', this.house_id, newTitle, newEntry)
      axios.post(url, {
        title: newTitle,
        entry: newEntry,
        house_id: this.house_id
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
      .then(res => {
        this.bulletin = res.data
        this.house_id = res.data.house_id
      })
      .catch(err => console.log(err))
  }
}
</script>

<style>
.title {
    font-size: 1.6em
}
</style>
