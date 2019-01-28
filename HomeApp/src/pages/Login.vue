<template>
  <div class="splash page flex row content-center justify-center text-center">
    <p>
      <img
        src="~assets/capstonelogo.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <div class="col-10 q-mx-xl">
        <div class="q-mt-xs buttons row justify-center">
          <q-input class="q-ma-md col-12 animated fadeInRight" v-model="email" type="email" float-label="Email" />
          <q-input class="q-ma-md col-12 animated fadeInLeft" v-model="password" type="password" float-label="password" no-pass-toggle />
          <q-btn class="login q-ma-md col-4 animated tada" color="amber-8" label="Login" @click="$router.push('/home')"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
    .splash {
        width: 100vw;
        height: 100vh;
    }
</style>
