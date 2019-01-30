<template>
    <div>
        <div class="justify-center row animated fadeIn" v-for="bills of bills" :key="bills.id" >
            <q-btn @click="put(bills.id, bills.id, bills.paid = !bills.paid)" v-model="paid" size="1rem" rounded class="col-12 q-ma-xs" v-bind:class="[{ 'unpaid' : !bills.paid, 'paid' : bills.paid }]" :icon='bills.icon' v-bind:label="!bills.paid == true ? bills.name + `: $`+(bills.amount/bills.number_housemates).toFixed(2) : '✔'" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Bills',
  props: ['PageIndex'],
  data () {
    return {
      bills: [],
      errors: [],
      paid: null
    }
  },
  methods: {
    loadbills () {
      console.log('fetching')
      return axios.get('http://localhost:3002/mybills/1/')
    },
    put (membersID, id, paid) {
      var url = 'http://localhost:3002/paid/' + id
      this.id = id
      axios.put(url, {
        paid: paid
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
    this.loadbills()
      .then(response => {
        this.bills = response.data.sort()
        this.id = response.data.bills.id
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>
.paid {
    background-color: green;
    color: white;
}
.unpaid {
    background-color: orange;
    color: white;
}
</style>
