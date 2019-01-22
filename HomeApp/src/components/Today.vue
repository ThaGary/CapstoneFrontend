<template>
    <q-card inline class="bigger q-mt-sm">
      <q-card-media>
        <img src="~assets/weather/sunny.svg" height="100px" >
      </q-card-media>
      <q-card-title class="relative-position">
        <div class="ellipsis">TODAYS DATE</div>
      </q-card-title>
      <q-card-main class="text-faded">
          80
      </q-card-main>
    </q-card>
</template>

<script>
export default {
  name: 'Today'
}
</script>

<style scoped>
img {
    background-color: skyblue;
}
</style>
