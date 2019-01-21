<template>
    <div class="editpage justify-center text-center row">
        <div class="homeinfo col-10">
            <h3 class="text-weight-bolder">Update Home.</h3>
            <h6 class="subtitle text-weight-thin">
                 Let home know when information is updated.
            </h6>
            <q-input v-model="text" type="text" float-label="House Name" />
            <q-input v-model="text" type="password" float-label="House Password" no-pass-toggle/>
            <q-input v-model="number" type="number" float-label="Number of Housemates" />
        </div>
        <div class="trash col-12 q-pt-md">
            <h3 class="text-weight-bolder">Trash Day</h3>
            <q-radio class="q-ml-xs" v-model="option" val="Mon" color="amber" label="Mon" style="margin-left: 10px" />
            <q-radio class="q-ml-xs" v-model="option" val="Tues" color="red" label="Tues" style="margin-left: 10px" />
            <q-radio class="q-ml-xs" v-model="option" val="Wed" color="secondary" label="Wed" />
            <q-radio class="q-ml-xs" v-model="option" val="Thur" color="amber" label="Thurs" style="margin-left: 10px" />
            <q-radio class="q-ml-xs" v-model="option" val="Fri" color="red" label="Fri" style="margin-left: 10px" />
            <q-radio class="q-ml-xs" v-model="option" val="Sat" color="secondary" label="Sat" />
        </div>
        <div class="bills col-10">
            <h3 class="col-12 text-weight-bolder">Update Bill Amount.</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Use Total we will do the math for you. Leave empty if does not apply.
            </h6>
            <q-input prefix="$" class="col-11 input" v-model="number" type="number" float-label="Rent" />
            <q-input class="col-9" v-model="number" type="number" float-label="Water" />
            <q-input v-model="number" type="number" float-label="Power" />
            <q-input v-model="number" type="number" float-label="Internet" />
            <q-input v-model="number" type="number" float-label="Gas" />
            <q-input v-model="number" type="number" float-label="Groceries" />
            <q-input v-model="number" type="number" float-label="Other" />
        </div>
        <div class="bulletin col-10">
            <h3 class="col-12 text-weight-bolder">Bulletin Board</h3>
            <h6 class="col-12 subtitle text-weight-thin">
                 Add, Edit, Remove Post.
            </h6>
            <q-btn class="q-mb-xl" round size="1em" icon="add"></q-btn>
        </div>
    </div>
</template>

<script>
export default {
  name: 'EditHome'
}
</script>

<style>
  .subtitle {
      margin-top: -2em;
      color: #919191;
  }
</style>
