<template >
    <div class="editpage justify-center text-center row">
          <EditHouse class="col-12 q-my-md" v-bind:EditHome="EditHome"/>
          <EditBills class="col-12 q-my-md" v-bind:EditHome="EditHome"/>
          <EditBulletin class="col-12 q-my-md"/>
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
      EditHome: []
    }
  },
  methods: {
  },
  created () {
    axios.get('http://localhost:3002/house/1')
      .then(res => (this.EditHome = res.data.sort()))
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
