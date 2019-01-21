<template>
  <div class="splash flex row content-center justify-center text-center">
    <p>
      <img
        src="~assets/capstonelogo.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <h1>HomeDash</h1>
    <div class="col-10 q-mx-xl">
        <q-input v-model="email" type="email" float-label="Email" />
        <q-input v-model="password" type="password" float-label="password" no-pass-toggle />
        <div class="q-mt-xs buttons row justify-center">
            <q-btn class="signup q-ma-md col-4" color="amber-8" label="Sign Up" @click="$router.push('/name')"/>
            <q-btn class="login q-ma-md col-4" color="amber-8" label="Login" @click="$router.push('/home')"/>
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
