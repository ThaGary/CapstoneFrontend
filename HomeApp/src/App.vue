<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: whitesmoke;
  font-family: 'Fjalla One', sans-serif;
}
h1 {
  color:orange;
}
svg .white {
  fill:#FFFFFF
}
svg .gray {
  fill:#E0E0E0
}
svg .yellow {
  fill:#FFEB3B
}
</style>
