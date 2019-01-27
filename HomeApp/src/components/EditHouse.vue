<template>
    <div>
        <div class="">
            <h3 class="text-weight-bolder">Update Home</h3>
            <h6 class="subtitle text-weight-thin">
                Let home know when information is updated.
            </h6>
            <div class="input justify-center row">
                <q-input class="col-10" type="text" v-bind:value="EditHome[0].house_name" float-label="House Name" :placeholder="EditHome[0].house_name" />
                <q-input class="col-10" type="password" :value="EditHome[0].password" float-label="House Password" no-pass-toggle :placeholder="EditHome[0].password"/>
            </div>
            <div class="trash justify-center row q-my-md">
                <h3 class="text-weight-bolder">Trash Day</h3>
                <h6 class="subtitle text-weight-thin">
                    What day do you have trash services.
                </h6>
                <q-option-group
                    inline
                    type="radio"
                    value="radio"
                    v-model="EditHome[0].trash_day"
                    :options="[
                    { label: 'Mon', value: 'Mon', color: 'amber-7' },
                    { label: 'Tue', value: 'Tue', color: 'amber-7' },
                    { label: 'Wed', value: 'Wed', color: 'amber-7' },
                    { label: 'Thu', value: 'Thu', color: 'amber-7' },
                    { label: 'Fri', value: 'Fri', color: 'amber-7' }
                    ]"
                />
            </div>
            <div class="justify-center row housemates">
                <h3 class="text-weight-bolder">Whats your Zipcode?</h3>
                <h6 class="subtitle text-weight-thin">
                    Zipcode info is for weather services on home page.
                </h6>
                <q-input class="col-10" type="number" :value="EditHome[0].zipcode" float-label="Zipcode" :placeholder="EditHome[0].zipcode" />
                <span class="chip-container">
                <h3 class="text-weight-bolder">
                    Number of Housemates: {{ EditHome[0].number_housemates }}
                </h3>
                </span>
                <q-slider class="col-10" color="amber-7" v-model="EditHome[0].number_housemates" :min="0" :max="10" :step="1" label snap markers />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'EditHouse',
  props: ['EditHome']
}
</script>

<style>

</style>
