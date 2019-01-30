<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header class="">
      <q-toolbar color="amber-8">
        <img  alt="Capstone logo" src="~assets/whitelogo.svg">
        <q-toolbar-title>
          RoomEase
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer class="animated slideInUp" v-model="footer">
          <q-toolbar class="items-center justify-between" color="amber-8">
            <q-btn size="md" flat color="white" icon="settings" class="animated tada" @click.native="$router.push('/edithome')">
            </q-btn>
            <q-btn size="md" flat color="white" icon="chat" class="animated tada" @click.native="$router.push('/chat')">
            </q-btn>
            <q-btn size="md" color="white" icon="exit_to_app" flat class="animated tada" @click="minimizedModal=!minimizedModal">
            </q-btn>
            <q-modal v-model="minimizedModal" minimized>
              <div style="padding: 50px">
                  <div class="title text-bold q-mx-md">Are you sure you want to logout?
                  </div>
                  <div class="buttons q-mt-md justify-center row">
                      <q-btn class="q-ma-xs col-3" color="red" v-close-overlay label="LogOut" @click.native="$router.push('/')" />
                      <q-btn class="q-ma-xs col-3" color="amber-7" v-close-overlay label="Cancel" />
                  </div>
              </div>
            </q-modal>
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
      minimizedModal: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>

</style>
