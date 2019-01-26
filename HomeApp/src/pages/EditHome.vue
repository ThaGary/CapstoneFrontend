<template >
    <div class="editpage justify-center text-center row">
        <div class="homeinfo col-10">
            <h3 class="text-weight-bolder">Update Home.</h3>
            <h6 class="subtitle text-weight-thin">
                 Let home know when information is updated.
            </h6>
            <q-input type="text" :value="houseEdit[0].house_name" float-label="House Name" :placeholder="houseEdit[0].house_name" />
            <q-input type="password" :value="houseEdit[0].password" float-label="House Password" no-pass-toggle :placeholder="houseEdit[0].password"/>
            <q-select
                :placeholder="houseEdit[0].trash_day"
                :value="houseEdit[0].trash_day"
                float-label="Trash Day"
                radio
                :options="selectOptions"
            />
            <q-input type="number" :value="houseEdit[0].zipcode" float-label="Zipcode" :placeholder="houseEdit[0].zipcode" />
            <span class="chip-container">
                <h4>
                    Number of Housemates: {{ houseEdit[0].number_housemates }}
                </h4>
                </span>
            <q-slider v-model="houseEdit[0].number_housemates" :min="0" :max="10" :step="1" label snap markers />
        </div>
        <div v-if="houseEdit && houseEdit.length" class="bills q-mb-xl col-12">
            <h3 class="col-12 text-weight-bolder">Update Bill Amount.</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Use Total we will do the math for you. Leave empty if does not apply.
            </h6>
            <div class="text-weight-bolder q-mt-md row justify-center items-center" v-for="houseEdit of houseEdit" :key="houseEdit.id">
                <span class="billInput justify-center row"><div class="name justify-end q-pt-xs">{{ houseEdit.name }} :</div><input class="input" type="number" :placeholder="houseEdit.amount" />
                </span>
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
        <q-layout-footer>
            <q-toolbar color="green">
            <q-toolbar-title>
                Update
            </q-toolbar-title>
            </q-toolbar>
        </q-layout-footer>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditHome',
  data () {
    return {
      selectOptions: [
        {
          label: 'Mon',
          value: 'Mon'
        },
        {
          label: 'Tue',
          value: 'Tue'
        },
        {
          label: 'Wed',
          value: 'Wed'
        },
        {
          label: 'Thu',
          value: 'Thu'
        },
        {
          label: 'Fri',
          value: 'Fri'
        },
        {
          label: 'Sat',
          value: 'Sat'
        }
      ],
      marker: 6,
      post: [],
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
</style>
