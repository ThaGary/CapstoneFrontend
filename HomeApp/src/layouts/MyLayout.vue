<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="amber-8">
        <img  alt="Capstone logo" src="~assets/whitelogo.svg">
        <q-toolbar-title>
          HomeApp
        </q-toolbar-title>
        <q-btn flat round dense icon="menu" />
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>

      <q-layout-footer v-model="footer">
        <q-toolbar color="amber-8">
          <q-toolbar-title>
          </q-toolbar-title>
          <i class="fas fa-comments fa-2x"></i>
        </q-toolbar>
      </q-layout-footer>
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
