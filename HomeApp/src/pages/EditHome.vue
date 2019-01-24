<template >
    <div class="editpage justify-center text-center row">
        <div class="homeinfo col-10">
            <h3 class="text-weight-bolder">Update Home.</h3>
            <h6 class="subtitle text-weight-thin">
                 Let home know when information is updated.
            </h6>
            <q-input v-model="text" type="text" :float-label="houseEdit[0].house_name" :placeholder="houseEdit[0].house_name" />
            <q-input v-model="text" type="password" :float-label="houseEdit[0].password" no-pass-toggle :placeholder="houseEdit[0].password"/>
            <q-input v-model="text" type="number" :float-label="houseEdit[0].zipcode" :placeholder="houseEdit[0].zipcode" />
            <span class="chip-container">
                <h4>
                    Number of Housemates: {{ houseEdit[0].number_housemates }}
                </h4>
                </span>
            <q-slider v-model="houseEdit[0].number_housemates" :min="0" :max="10" :step="1" label snap markers />
        </div>
        <div class="trash col-12 q-pt-md">
            <h3 class="text-weight-bolder">Trash Day</h3>
            <q-radio class="q-ml-xs" v-model="option" val="Mon" color="amber" label="Mon" style="margin-left: 10px" />
            <q-radio class="q-ml-xs" v-model="option" val="Tues" color="red" label="Tues" style="margin-left: 10px" />
            <q-radio class="q-ml-xs" v-model="option" val="Wed" color="secondary" label="Wed" />
            <q-radio class="q-ml-xs" v-model="option" val="Thur" color="amber" label="Thurs" style="margin-left: 10px" />
            <q-radio class="q-ml-xs" v-model="option" val="Fri" color="red" label="Fri" style="margin-left: 10px" />
            <q-radio class="q-ml-xs" v-model="option" val="Sat" color="secondary" label="Sat" />
        </div>
        <div v-if="houseEdit && houseEdit.length" class="bills col-10">
            <h3 class="col-12 text-weight-bolder">Update Bill Amount.</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Use Total we will do the math for you. Leave empty if does not apply.
            </h6>
            <div class=" row inputwithdate" v-for="houseEdit of houseEdit" :key="houseEdit.id">
                <q-input class="col-7" prefix="$" v-model="text" :placeholder="houseEdit.amount" type="number" :float-label="houseEdit.name" />
                <q-input class="col-3" v-model="day" :placeholder="houseEdit.day" type="number" :float-label="Date" />
            </div>
        </div>
        <div class="bulletin col-10">
            <h3 class="col-12 text-weight-bolder">Bulletin Board</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Add, Edit, Remove Post.
            </h6>
            <q-btn class="q-mb-xl" round size="1em" icon="add"></q-btn>
        </div>
        <q-layout-footer v-model="footer">
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
      marker: 6,
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
    axios.get(`http://localhost:3003/house/1`)
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
  q-layout-footer {
    position:fixed;
    left:0px;
    bottom:0px;
    height:30px;
    width:100%;
  }
</style>
