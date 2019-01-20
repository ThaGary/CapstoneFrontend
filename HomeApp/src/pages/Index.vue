<template>
  <q-page class="flex column items-center justify-center">
    <div class="row q-ma-xl justify-center">
      <q-chip avatar="assets/whitelogo.svg" color="amber-6" text-color="white" class="text-bold q-ma-xs">$400</q-chip>
      <q-chip avatar="assets/fire-alt-solid.svg" color="red" text-color="white" class="text-bold q-ma-xs">$21</q-chip>
      <q-chip avatar="assets/tint-solid.svg" color="blue-11" text-color="white" class="text-bold q-ma-xs">$20</q-chip>
      <q-chip avatar="assets/bolt-solid.svg" color="yellow" text-color="white" class="text-bold q-ma-xs">$69</q-chip>
      <q-chip avatar="assets/wifi-solid.svg" color="black" text-color="white" class="text-bold q-ma-xs">$69</q-chip>
      <q-chip avatar="assets/carrot-solid.svg" color="green" text-color="white" class="text-bold q-ma-xs">$21</q-chip>
    </div>
    <q-list class="column">
      <q-collapsible class="col-10" icon="hammer" label="House Rules">
        <div>
          Content
        </div>
      </q-collapsible>
      <q-collapsible class="col-10" icon="wifi" label="Wifi Pass">
        <div>
          Content
        </div>
      </q-collapsible>
      <q-collapsible class="col-10" icon="shopping_cart" label="Third">
        <div>
          Content
        </div>
      </q-collapsible>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style>
</style>
