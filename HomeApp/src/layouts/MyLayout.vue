<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="amber-8">
        <img  alt="Capstone logo" src="~assets/whitelogo.svg">
        <q-toolbar-title>
          HappyHouse
        </q-toolbar-title>
        <q-btn flat round dense icon="menu" @click="rightDrawerOpen = !rightDrawerOpen" />
        <q-layout-drawer side="right" v-model="rightDrawerOpen">
          <q-list-header>HappyHouse</q-list-header>
            <q-item @click.native="$router.push('/chat')">
              <q-item-side icon="group" />
              <q-item-main label="Chat" sublabel="Chat" />
            </q-item>
              <q-item @click.native="$router.push('/edithome')">
                <q-item-side icon="settings" />
                <q-item-main label="Settings" sublabel="Settings" />
              </q-item>
              <q-item @click.native="$router.push('/')">
                <q-item-side icon="exit_to_app" />
                <q-item-main label="Logout" sublabel="Logout" />
              </q-item>
        </q-layout-drawer>
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
      rightDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>

</style>
