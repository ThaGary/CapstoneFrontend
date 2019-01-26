<template>
    <div>
        <div class="justify-center row" v-for="bills of bills" :key="bills.id" >
            <q-btn @click="click" v-on:click="bills.paid = !bills.paid" size="1rem" rounded class="col-12 q-ma-xs" v-bind:class="[{ 'unpaid' : !bills.paid, 'paid' : bills.paid }]" :icon='bills.icon' v-bind:label="!bills.paid == true ?  `$`+(bills.amount/bills.number_housemates).toFixed(2) :  '✔'" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Bills',
  data () {
    return {
      bills: [],
      errors: []
    }
  },
  methods: {
    loadbills () {
      console.log('fetching')
      return axios.get('http://localhost:3002/mybills/1/')
    },
    click () {
      console.log(this.datetime, 'CLICKED')
    }
  },
  created () {
    this.loadbills()
      .then(response => {
        this.bills = response.data
        console.log(this.bills)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>
.paid {
    background-color: lightgreen;
    color: white;
}
.unpaid {
    background-color: orange;
    color: white;
}
</style>
