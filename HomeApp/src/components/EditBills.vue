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
                    <div class="q-display-1 q-mb-md">Edit {{this.name}}</div>
                    <q-input class="col-10" type="text" v-bind:value="this.amount" float-label="amount" :placeholder="this.amount" />
                    <q-btn color="red" v-close-overlay label="Close" />
                </div>
            </q-modal>
    </div>
</template>

<script>
export default {
  name: 'EditBills',
  props: ['EditHome'],
  data () {
    return {
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
