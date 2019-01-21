<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="amber-8">
        <i class="fas fa-arrow-left"></i>
        <q-toolbar-title>
          HomeDash
        </q-toolbar-title>
        <q-btn flat round dense icon="menu" />
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
  q-layout-footer {
    position: absolute;
    bottom: 0px;
    width: 100vw;
  }
</style>
