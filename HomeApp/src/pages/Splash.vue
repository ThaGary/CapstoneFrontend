<template>
  <div class="splash page flex row content-center justify-center text-center">
    <p>
      <img class="col-12"
        src="~assets/capstonelogo.svg"
      >
    </p>
    <h1>HomeApp</h1>
    <div class="col-10 q-mx-xl">
        <div class="q-mt-xs buttons row justify-center">
            <q-btn class="signup q-ma-md col-4" color="amber-8" label="Sign Up" @click="$router.push('/name')"/>
            <q-btn class="login q-ma-md col-4" color="amber-8" label="Login" @click="$router.push('/login')"/>
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
