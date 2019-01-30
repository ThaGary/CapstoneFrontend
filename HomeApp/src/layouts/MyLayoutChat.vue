<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header class="animated slideInDown">
      <q-toolbar color="amber-8">
        <q-toolbar-title>
          <button class="row text-white text-bold items-center" @click="$router.push('/home')">
          <i class="fas fa-arrow-left"></i>
          <div class="q-pa-xs"> Back</div>
        </button>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>

</style>
