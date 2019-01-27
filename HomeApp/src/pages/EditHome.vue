<template >
    <div class="editpage justify-center text-center row">
          <EditHouse class="col-12" v-bind:EditHome="EditHome"/>
          <EditBills class="col-12" v-bind:EditHome="EditHome"/>
          <EditBulletin class="col-12"/>
    </div>
</template>

<script>
import axios from 'axios'
import EditBulletin from 'components/EditBulletin'
import EditBills from 'components/EditBills'
import EditHouse from 'components/EditHouse'

export default {
  name: 'EditHome',
  components: {
    EditHouse,
    EditBills,
    EditBulletin
  },
  data () {
    return {
      EditHome: [
        // {
        //   id: 1,
        //   name: 'Rent',
        //   icon: 'fas fa-home',
        //   amount: 2100,
        //   day: 4,
        //   icon_color: 'green',
        //   house_id: 1,
        //   house_name: 'G House',
        //   house_password: 123456,
        //   number_housemates: 6,
        //   trash_day: 'Tue',
        //   zipcode: 80226
        // },
        // {
        //   id: 2,
        //   name: 'Power',
        //   icon: 'fas fa-bolt',
        //   amount: 360,
        //   day: 14,
        //   icon_color: 'yellow',
        //   house_id: 1,
        //   house_name: 'G House',
        //   house_password: 123456,
        //   number_housemates: 6,
        //   trash_day: 'Tue',
        //   zipcode: 80226
        // },
        // {
        //   id: 3,
        //   name: 'Water',
        //   icon: 'fas fa-tint',
        //   amount: 120,
        //   day: 24,
        //   icon_color: 'blue',
        //   house_id: 1,
        //   house_name: 'G House',
        //   house_password: 123456,
        //   number_housemates: 6,
        //   trash_day: 'Tue',
        //   zipcode: 80226
        // },
        // {
        //   id: 4,
        //   name: 'Internet',
        //   icon: 'fas fa-wifi',
        //   amount: 210,
        //   day: 20,
        //   icon_color: 'black',
        //   house_id: 1,
        //   house_name: 'G House',
        //   house_password: 123456,
        //   number_housemates: 6,
        //   trash_day: 'Tue',
        //   zipcode: 80226
        // },
        // {
        //   id: 5,
        //   name: 'Gas',
        //   icon: 'fas fa-fire-alt',
        //   amount: 100,
        //   day: 8,
        //   icon_color: 'red',
        //   house_id: 1,
        //   house_name: 'G House',
        //   house_password: 123456,
        //   number_housemates: 6,
        //   trash_day: 'Tue',
        //   zipcode: 80226
        // }
      ]
    }
  },
  methods: {
  },
  created () {
    axios.get('http://localhost:3002/house/1')
      .then(res => (this.EditHome = res.data))
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>
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
      border: transparent;
  }
  .green {
      color: green
  }
  .houseamount {
      padding-left: 1em;
      padding-top: 1em
  }
  ::-webkit-scrollbar {
    display: none;
}
</style>
