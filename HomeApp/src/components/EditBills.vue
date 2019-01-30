<template>
    <div>
        <h3 class="col-12 text-weight-bolder">Update Bill Amount.</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Use Total we will do the math for you. Leave empty if does not apply.
            </h6>
        <div class="row justify-center" v-bind:key="bills.id" v-for="bills in EditHome">
            <button class="q-ma-xs justify-center row col-10" @click="setFormData(bills.name, bills.id, bills.amount), minimizedModal=!minimizedModal">
                <q-chip :id="bills.id" class="q-ma-xs col-10" square color="amber-7" v-model="name" text-color="white" detail :icon="bills.icon">
               {{bills.name}}: ${{bills.amount}}
                </q-chip>
            </button>
            <q-modal v-model="minimizedModal" minimized>
                <div style="padding: 50px">
                    <q-input class="col-10" type="text" prefix="$" :value="bills.amount" v-model="newAmount" float-label="amount" :placeholder="amount" />
                    <div class="buttons justify-center row">
                        <q-btn class="q-ma-xs col-3" color="red" v-close-overlay label="DELETE" @click="deleteBill(bills.id), showNotification()" />
                       <q-btn class="q-ma-xs col-3" color="green" v-close-overlay label="Update" @click="put(newAmount),showNotification()" />
                        <q-btn class="q-ma-xs col-3" color="amber-8" v-close-overlay label="Cancel" />
                    </div>
                </div>
            </q-modal>
        </div>
        <q-btn class="q-my-xl" @click="addFormData(), minimizedModal2=!minimizedModal2" round size="1em" icon="add"></q-btn>
                <q-modal v-model="minimizedModal2" minimized>
                    <div style="padding: 50px">
                        <div class="title text-bold q-mx-md">Add Bill
                        </div>
                        <q-input class="col-10" type="text" :value="Name" v-model="postName" float-label="name" :placeholder="name" />
                        <q-input class="col-10" type="number" :value="Cost" v-model="postCost" float-label="cost" :placeholder="cost" />
                        <div class="buttons q-mt-md justify-center row">
                            <q-btn class="q-ma-xs col-5" color="green" v-close-overlay label="Add" @click="post(postName, postCost),showNotification()" />
                            <q-btn class="q-ma-xs col-5" color="red" v-close-overlay label="Close" />
                        </div>
                    </div>
                </q-modal>
    </div>
</template>

<script>
import axios from 'axios'
import { Notify } from 'quasar'

Notify.create({ color: 'green', textColor: 'white', message: 'Updated!', icon: 'thumb_up', position: 'center', timeout: 1000 })

export default {
  name: 'EditBills',
  props: ['EditHome'],
  data () {
    return {
      newAmount: null,
      postName: '',
      postCost: 0,
      minimizedModal: false,
      minimizedModal2: false,
      name: '',
      house_id: 1,
      id: 0,
      amount: null
    }
  },
  methods: {
    setFormData (name, id, amount) {
      this.name = name
      this.id = id
      this.amount = amount
      console.log(this.id)
    },
    addFormData (id, houseId) {
      this.id = id
      this.house_id = houseId
      console.log(this.id, this.house_id)
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
    deleteBill (id) {
      console.log(id)
      var url = 'http://localhost:3002/bills/' + id
      axios.delete(url, {id: id})
    },
    post (name, cost) {
      this.house_id = 1
      this.postName = name
      this.postCost = cost
      var url = 'http://localhost:3002/bills/'
      console.log('post', this.house_id, name, cost)
      axios.post(url, {
        name: this.postName,
        icon: 'fas fa-home',
        amount: this.postCost,
        day: 5,
        icon_color: null,
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
      this.$q.notify.create({ color: 'green', textColor: 'white', message: 'Bills Updated!', icon: 'thumb_up' })
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
