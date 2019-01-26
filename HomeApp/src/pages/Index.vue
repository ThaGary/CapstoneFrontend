<template>
  <q-page class="flex column">
    <Today class="col-12 q-mx-md q-mt-md" />
    <Bills class="col-12 q-mx-md q-mt-md" />
    <div class="text-thin col-12 column" >
      <Bulletin class="q-mx-md q-mt-md" />
    </div>
    <q-page-sticky position="right" :offset="[18, 18]">
      <q-btn fab-mini color="amber-8" icon="chat" class="animate-pop" @click="$router.push('/chat')"/>
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
</style>
