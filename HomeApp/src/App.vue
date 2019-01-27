<template>
  <div id="q-app">
    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: white;
  /* font-family: 'Fjalla One', sans-serif; */
}
h1 {
  color:orange;
}
.page {
  position: fixed;
  width: inherit;
}
</style>
