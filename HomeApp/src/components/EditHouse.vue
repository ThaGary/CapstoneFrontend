<template>
    <div>
        <div class="">
            <h3 class="text-weight-bolder">Update Home</h3>
            <h6 class="subtitle text-weight-thin">
                Let home know when information is updated.
            </h6>
            <div class="input justify-center row">
                <div class="houseInput justify-center row">
                    <q-input class="col-8" type="text" v-bind:value="EditHome.house_name" float-label="House Name" @click="putHouseName=!putHouseName" v-model="newhouse_name" :placeholder="EditHome[0].house_name" />
                    <transition appear enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight" mode="out-in">
                        <q-btn size="sm" class="col-2 q-ml-md" @click="putName(EditHome[0].house_id, newhouse_name), showNotification(), updatedName=!updatedName" color="green" v-if="putHouseName">
                            <transition appear enter-active-class="animated tade" leave-active-class="animated tada" mode="out-in">
                                <div v-if="!updatedName"> Click to Update </div>
                                <div v-else @click="putHouseName=!putHouseName"> <i class="fas fa-check"/> </div>
                            </transition>
                        </q-btn>
                    </transition>
                </div>
                <div class="houseInput q-mt-sm justify-center row">
                    <q-input class="col-8" type="password" v-bind:value="EditHome[0].password" float-label="House Password" @click="putHousePass=!putHousePass" v-model="newpassword" :placeholder="EditHome[0].password" />
                    <transition appear enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight" mode="out-in">
                        <q-btn size="sm" class="col-2 q-ml-md" @click="putPass(EditHome[0].house_id, newpassword), showNotification(), updatedPass=!updatedPass" color="green" v-if="putHousePass">
                            <transition appear enter-active-class="animated tada" leave-active-class="animated tada faster" mode="out-in">
                                <div v-if="!updatedPass"> Click to Update </div>
                                <div v-else @click="putHousePass=!putHousePass"> <i class="fas fa-check"/> </div>
                            </transition>
                        </q-btn>
                    </transition>
                </div>
            </div>
            <div class="trash justify-center">
                <h3 class="text-weight-bolder col-12">Trash Day</h3>
                <h6 class="subtitle col-12 text-weight-thin">
                    What day do you have trash services.
                </h6>
                <div :@click="putTrash(EditHome[0].house_id, EditHome[0].trash_day)">
                <q-option-group
                    inline
                    type="radio"
                    v-bind:value="EditHome[0].trash_day"
                    v-model="EditHome[0].trash_day"
                    :options="[
                    { label: 'Mon', value: 'Mon', color: 'amber-7' },
                    { label: 'Tue', value: 'Tue', color: 'amber-7' },
                    { label: 'Wed', value: 'Wed', color: 'amber-7' },
                    { label: 'Thu', value: 'Thu', color: 'amber-7' },
                    { label: 'Fri', value: 'Fri', color: 'amber-7' }
                    ]"
                />
                </div>
            </div>
            <div class="justify-center row housemates">
                <h3 class="text-weight-bolder">Whats your Zipcode?</h3>
                <h6 class="subtitle q-mt-md text-weight-thin">
                    Zipcode info is for weather services on home page.
                </h6>
                <div class="houseInput justify-center row">
                    <q-input class="col-8" type="number" v-bind:value="EditHome[0].zipcode" float-label="Zipcode" @click="putHouseZip=!putHouseZip" v-model="newzipcode" :placeholder="EditHome[0].zipcode" />
                    <transition appear enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight" mode="out-in">
                        <q-btn size="sm" class="col-2 q-ml-md" @click="putZip(EditHome[0].house_id, newzipcode), showNotification(), updatedZip=!updatedZip" color="green" v-if="putHouseZip">
                            <transition appear enter-active-class="animated tade" leave-active-class="animated tada" mode="out-in">
                                <div v-if="!updatedZip"> Click to Update </div>
                                <div v-else @click="putHouseZip=!putHouseZip"> <i class="fas fa-check"/> </div>
                            </transition>
                        </q-btn>
                    </transition>
                </div>
                <span class="chip-container">
                <h3 class="text-weight-bolder">
                    Number of Housemates: {{ EditHome[0].number_housemates }}
                </h3>
                </span>
                  <q-slider :@click="putHousemates(EditHome[0].house_id, EditHome[0].number_housemates)" class="col-10" color="amber-7" v-model="EditHome[0].number_housemates" :min="0" :max="10" :step="1" label snap markers />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditHouse',
  props: ['EditHome'],
  show: true,
  data () {
    return {
      putHouseName: false,
      putHousePass: false,
      putHouseZip: false,
      updatedName: false,
      updatedPass: false,
      updatedZip: false,
      newhouse_name: '',
      newpassword: '',
      newTrash: '',
      trash_day: 'Tue',
      newZipcode: 0
    }
  },
  methods: {
    putTrash (id, day) {
      this.trash_day = day
      console.log(day)
      var url = 'http://localhost:3002/house/' + id
      axios.put(url, {
        trash_day: day
      })
        .then(response => {
          console.log(response, 'success')
        })
        .catch(error => {
          console.log(error)
          this.errors.push(error)
        })
    },
    putHousemates (id, num) {
      this.number_housemates = num
      console.log(num)
      var url = 'http://localhost:3002/house/' + id
      axios.put(url, {
        number_housemates: num
      })
        .then(response => {
          console.log(response, 'success')
        })
        .catch(error => {
          console.log(error)
          this.errors.push(error)
        })
    },
    putName (id, name) {
      console.log(id, this.newhouse_name, name)
      var url = 'http://localhost:3002/house/' + id
      axios.put(url, {
        house_name: name
      })
        .then(response => {
          console.log(response, 'success')
        })
        .catch(error => {
          console.log(error)
          this.errors.push(error)
        })
    },
    putPass (id, pass) {
      console.log(id, pass)
      var url = 'http://localhost:3002/house/' + id
      axios.put(url, {
        house_password: pass
      })
        .then(response => {
          console.log(response, 'success')
        })
        .catch(error => {
          console.log(error)
          this.errors.push(error)
        })
    },
    putZip (id, zip) {
      console.log(id, zip)
      var url = 'http://localhost:3002/house/' + id
      axios.put(url, {
        zipcode: zip
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
  }
}
</script>

<style>
.houseInput {
    min-width: 90vw;
}
</style>
