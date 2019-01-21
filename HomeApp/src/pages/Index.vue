<template>
  <q-page class="flex column items-center justify-start">
    <Bills />
    <Bulletin class="text-bold q-ma-xs" />
    <q-page-sticky position="right" :offset="[18, 18]">
      <q-btn fab-mini color="amber-8" icon="group" class="animate-pop" @click="$router.push('/chat')"/>
    </q-page-sticky>
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
q-page-sticky {
    position: absolute;
    bottom: 2em;
    right: 2em;
  }

</style>
