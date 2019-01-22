<template>
    <div class="column q-ma-xs justify-center">
      <toggle-button class="text-bold q-ma-xs" id="changed-font" color="orange" value="false" name="home" :labels="{checked: '$400', unchecked: 'Paid'}" :width="85" :height="40" :speed="480" />
      <toggle-button class="text-bold q-ma-xs" id="changed-font" color="red" value="false" name="gas" :labels="{checked: '$21', unchecked: 'Paid'}" :width="85" :height="40" :speed="480" />
      <toggle-button class="text-bold q-ma-xs" id="changed-font" color="blue" value="false" name="water" :labels="{checked: '$20', unchecked: 'Paid'}" :width="85" :height="40" :speed="480" />
      <toggle-button class="text-bold q-ma-xs" id="changed-font" color="violet" value="false" name="power" :labels="{checked: '$69', unchecked: 'Paid'}" :width="85" :height="40" :speed="480" />
      <toggle-button class="text-bold q-ma-xs" id="changed-font" color="purple" value="false" name="wifi" :labels="{checked: '$30', unchecked: 'Paid'}" :width="85" :height="40" :speed="480" />
      <toggle-button class="text-bold q-ma-xs" id="changed-font" color="green" value="false" name="groceries" :labels="{checked: '$40', unchecked: 'Paid'}" :width="85" :height="40" :speed="480" />
    </div>
</template>

<script>
export default {
  name: 'Bills'
}
</script>

<style scoped>
.vue-js-switch#changed-font {
  font-size: 1em;
}
</style>
