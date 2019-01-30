<template>
  <q-page class="flex column">
    <Today class="col-12 q-mx-md q-mt-md animated fadeInRight" />
    <Bills v-bind:PageIndex="PageIndex" class="col-12 q-mx-md q-mt-md animated fadeInLeft" />
    <div class="text-thin col-12 column animated fadeInRight" >
      <Bulletin class="q-mx-md q-mt-md" />
    </div>
  </q-page>
</template>

<script>
import Bulletin from 'components/Bulletin'
import Bills from 'components/Bills'
import Today from 'components/Today'
import axios from 'axios'

export default {
  name: 'PageIndex',
  components: {
    Bulletin,
    Bills,
    Today
  },
  data () {
    return {
      first_name: '',
      last_name: '',
      house_leader: null,
      house_id: 0,
      members: [
        {
          first_name: '',
          last_name: '',
          house_leader: null,
          house_id: 0
        }
      ]
    }
  },
  methods: {
    getUser () {
      axios
        .get('http://localhost:3002/members/1')
        .then(response => {
          this.first_name = response.members.first_name
          this.last_name = response.members.last_name
          this.house_leader = response.members.house_leader
          this.house_id = response.members.house_id
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  beforeMount () {
    this.getUser()
  }
}
</script>

<style>

</style>
