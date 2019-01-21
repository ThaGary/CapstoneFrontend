<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="amber-8">
        <img  alt="Capstone logo" src="~assets/whitelogo.svg">
        <q-toolbar-title>
          HomeDash
        </q-toolbar-title>
        <q-btn flat round dense icon="menu" @click="rightDrawerOpen = !rightDrawerOpen" />
        <q-layout-drawer side="right" v-model="rightDrawerOpen">
          <q-list-header>HomeDash</q-list-header>
            <q-item @click.native="openURL('home')">
              <q-item-side icon="home" />
              <q-item-main label="Docs" sublabel="Home" />
            </q-item>
              <q-item @click.native="$router.push('/edithome')">
                <q-item-side icon="settings" />
                <q-item-main label="Settings" sublabel="Settings" />
              </q-item>
              <q-item @click.native="openURL('')">
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
