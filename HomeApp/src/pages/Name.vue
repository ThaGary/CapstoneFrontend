<template>
  <div class="login flex row content-center justify-center text-center">
    <p>
      <img
        src="~assets/capstonelogo.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <div class="col-10 q-mx-xl">
        <q-input v-model="text" type="name" float-label="First Name" />
        <div class="q-mt-xs buttons row justify-center">
            <q-btn class="q-ma-md col-4" color="amber-8" label="Join Home" @click="$router.push('/homejoin')" />
            <q-btn class="q-ma-md col-5" color="amber-8" label="Create Home" @click="$router.push('/homecreate')" />
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
