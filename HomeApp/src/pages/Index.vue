<template>
  <q-page class="flex row items-center justify-center">
    <Today class="col-10" />
    <Bills class="col-3" />
    <div class="text-thin col-8 column" >
      <Bulletin class="text-bold q-ma-md" />
    </div>
    <q-page-sticky position="right" :offset="[18, 18]">
      <q-btn fab-mini color="amber-8" icon="group" class="animate-pop" @click="$router.push('/chat')"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import Bulletin from 'components/Bulletin'
import Bills from 'components/Bills'
import Today from 'components/Today'

export default {
  name: 'PageIndex',
  components: {
    Bulletin,
    Bills,
    Today
  }
}
</script>

<style>
q-page-sticky {
    position: absolute;
    bottom: 2em;
    right: 2em;
}
.v-switch-button {
  background-image: url(/assets/power.svg)!important;
}
</style>
