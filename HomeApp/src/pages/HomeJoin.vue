<template>
  <div class="login page flex row content-center justify-center text-center">
    <p>
      <img
       class="animated pulse"
        src="~assets/capstonelogo.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <div class="col-10 q-mx-xl">
        <q-input class="animated fadeInRight" v-model="text" type="text" float-label="House Name" />
        <q-input class="animated fadeInLeft" v-model="password" type="password" float-label="House Password" no-pass-toggle />
        <div class="q-mt-xs buttons row justify-center">
            <q-btn class="joinbtn q-ma-md col-4 animated tada" color="amber-8" label="Join" @click="$router.push('/home')"/>
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
    .login {
        background-color: white;
        width: 100vw;
        height: 100vh;
    }
</style>
