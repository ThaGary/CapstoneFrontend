<template >
    <div class="editpage justify-center text-center row">
        <div class="homeinfo col-10">
            <h3 class="text-weight-bolder">Update Home</h3>
            <h6 class="subtitle text-weight-thin">
                 Let home know when information is updated.
            </h6>
            <q-input type="text" :value="houseEdit[0].house_name" float-label="House Name" :placeholder="houseEdit[0].house_name" />
            <q-input type="password" :value="houseEdit[0].password" float-label="House Password" no-pass-toggle :placeholder="houseEdit[0].password"/>
            <div class="trash q-my-md">
              <h3 class="text-weight-bolder">Trash Day</h3>
              <h6 class="subtitle text-weight-thin">
                 What day do you have trash services.
              </h6>
                <q-option-group
                    inline
                    type="radio"
                    value="radio"
                    v-model="houseEdit[0].trash_day"
                    :options="[
                    { label: 'Mon', value: 'Mon', color: 'amber-7' },
                    { label: 'Tue', value: 'Tue', color: 'amber-7' },
                    { label: 'Wed', value: 'Wed', color: 'amber-7' },
                    { label: 'Thu', value: 'Thu', color: 'amber-7' },
                    { label: 'Fri', value: 'Fri', color: 'amber-7' }
                    ]"
                />
            </div>
            <div class="housemates">
              <h3 class="text-weight-bolder">Whats your Zipcode?</h3>
              <h6 class="subtitle text-weight-thin">
                 Zipcode info is for weather services on home page.
              </h6>
              <q-input type="number" :value="houseEdit[0].zipcode" float-label="Zipcode" :placeholder="houseEdit[0].zipcode" />
              <span class="chip-container">
              <h4>
                    Number of Housemates: {{ houseEdit[0].number_housemates }}
              </h4>
              </span>
            <q-slider v-model="houseEdit[0].number_housemates" :min="0" :max="10" :step="1" label snap markers />
            </div>
        </div>
        <div v-if="houseEdit && houseEdit.length" class="bills q-mb-xl col-12">
            <h3 class="col-12 text-weight-bolder">Update Bill Amount.</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Use Total we will do the math for you. Leave empty if does not apply.
            </h6>
            <div class="q-mt-md row justify-center items-center" v-for="(houseEdit, index) of houseEdit" :key="houseEdit.id">
                <q-input class="col-8" type="number" prefix="$" :value="houseEdit.amount" v-model="amount[index]" :float-label="houseEdit.name" :placeholder="houseEdit.amount" />
                <button class="col-2" @click="put(houseEdit.id)">
                    <i :label="houseEdit.icon" class="green fas fa-check-circle" />
                </button>
            </div>
        </div>
        <div v-if="post && post.length" class="col-10">
            <h3 class="col-12 text-weight-bolder">Bulletin Board</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Add, Edit, Remove Post.
            </h6>
            <div class="q-mt-md row" v-for="post of post" :key="post.id">
                <q-card inline class="bigger q-mt-sm">
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
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditHome',
  data () {
    return {
      marker: 6,
      post: [],
      amount: 210,
      houseEdit: [
        {
          house_name: '',
          password: '',
          number_housemates: 0,
          trash_day: '',
          name: '',
          icon: '',
          amount: 0,
          date: '',
          icon_color: '',
          house_id: 1
        }
      ],
      errors: []
    }
  },
  methods: {
    put (id) {
      var url = 'http://localhost:3002/bills/1/' + id
      console.log('put', id, this.amount)
      axios.put(url, {
        amount: this.amount
      })
        .then(response => {
          console.log(response, 'success')
        })
        .catch(error => {
          console.log(error)
          this.errors.push(error)
        })
    }
  },
  created () {
    axios.get('http://localhost:3002/house/1')
      .then(response => {
        this.houseEdit = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    console.log(this.houseEdit)
  }
}
</script>

<style>
  .subtitle {
      margin-top: -2em;
      color: #919191;
  }
  .input {
      border: 1px solid #f2a43a
  }
  .name {
      min-width: 4em;
      text-align: right
  }
  button {
      background-color: transparent;
      width: 100vw;
      border: green;
  }
  .green {
      color: green
  }
</style>
