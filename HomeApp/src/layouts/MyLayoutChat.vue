<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="amber-8">
        <img  alt="Capstone logo" src="~assets/whitelogo.svg" @click="$router.push('/home')">
        <q-toolbar-title>
          HomeDash
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
            <q-input class="fixedTextInput" prefix="chat:" inverted color="white" v-model="text" stack-label="" />
          </q-toolbar-title>
          <i class="fas fa-share"></i>
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
  q-layout-footer {
    position: absolute;
    bottom: 0px;
    width: 100vw;
  }
</style>
