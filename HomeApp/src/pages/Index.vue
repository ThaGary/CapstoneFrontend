<template>
  <q-page class="flex column items-center justify-start">
    <Bills />
    <Bulletin class="text-bold q-ma-xs" />
    <Bulletin class="text-bold q-ma-xs" />
  </q-page>
</template>

<script>
import Bulletin from 'components/Bulletin'
import Bills from 'components/Bills'

export default {
  name: 'PageIndex',
  components: {
    Bulletin,
    Bills
  }
}
</script>

<style>

</style>
