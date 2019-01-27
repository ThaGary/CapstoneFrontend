<template>
    <div>
        <h3 class="col-12 text-weight-bolder">Update Bill Amount.</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Use Total we will do the math for you. Leave empty if does not apply.
            </h6>
        <div class="row justify-center" v-bind:key="bills.id" v-for="bills in EditHome">
            <button class="q-ma-xs row col-10" @click="setFormData(bills.name, bills.id, bills.amount), minimizedModal=!minimizedModal">
                <q-chip :id="bills.id" class="q-ma-xs col-12" square color="amber-7" text-color="white" detail :icon="bills.icon">
               {{bills.name}}: ${{bills.amount}}
                </q-chip>
            </button>
        </div>
        <q-modal v-model="minimizedModal" minimized>
                <div style="padding: 50px">
                    <div class="q-display-1 q-mx-md">Edit {{this.name}}
                    </div>
                    <p>The previous total was ${{ this.amount }}</p>
                    <q-input class="col-10" type="text" prefix="$" :value="this.amount" v-model="newAmount" float-label="amount" :placeholder="amount" />
                    <div class="buttons row">
                        <q-btn class="q-ma-xs col-5" color="green" v-close-overlay label="Update" @click="put(newAmount),showNotification()" />
                        <q-btn class="q-ma-xs col-5" color="red" v-close-overlay label="Close" />
                    </div>
                </div>
            </q-modal>
    </div>
</template>

<script>
import axios from 'axios'
import { Notify } from 'quasar'

Notify.create({ color: 'green', textColor: 'white', message: 'Bills updated!', icon: 'thumb_up', position: 'center', timeout: 3000 })

export default {
  name: 'EditBills',
  props: ['EditHome'],
  data () {
    return {
      newAmount: 0,
      minimizedModal: false,
      name: '',
      id: 0,
      amount: 0
    }
  },
  methods: {
    setFormData (name, id, amount) {
      this.name = name
      this.id = id
      this.amount = amount
      console.log(this.name, this.id, this.amount)
    },
    getTempAmount () {
      console.log(this.amount)
    },
    put (newAmount) {
      this.amount = newAmount
      var url = 'http://localhost:3002/bills/1/' + this.id
      console.log('put', this.id, newAmount)
      axios.put(url, {
        amount: this.newAmount
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
button {
    background-color: transparent;
    border: transparent
}
</style>
