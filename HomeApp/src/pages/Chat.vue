<template>
    <div class="chat">
        <q-chat-message
            class="q-ma-md flex column"
            v-for="(msg, index) in messages"
            :key="`avatar-${index}`"
            :label="msg.label"
            :sent="(msg.members_id != 1) ? true : false"
            :text-color="msg.textColor"
            :bg-color="(msg.members_id != 1) ? `amber-6` : `green-12`"
            :name="msg.first_name"
            :text="msg.text"
            :stamp="msg.datetime"
        />
    </div>
</template>

<script>
export default {
  name: 'Chat',
  methods: {},
  data () {
    return {
      message: '',
      yourID: 1,
      messages: [
        {
          first_name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          datetime: '1900-01-01 00:00:02',
          members_id: 7,
          house_id: 1
        },
        {
          first_name: 'Gary',
          text: ['hey everyone'],
          datetime: '1900-01-01 00:00:03',
          members_id: 1,
          house_id: 1
        },
        {
          first_name: 'Jane',
          text: ['And you?'],
          datetime: '1900-01-01 00:00:04',
          members_id: 7,
          house_id: 1
        },
        {
          first_name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          datetime: '1900-01-01 00:00:05',
          members_id: 6,
          house_id: 1
        },
        {
          first_name: 'Jane',
          text: ['And you?'],
          datetime: '1900-01-01 00:00:04',
          members_id: 7,
          house_id: 1
        },
        {
          first_name: 'Jane',
          text: ['And you?'],
          datetime: '1900-01-01 00:00:04',
          members_id: 7,
          house_id: 1
        }
      ]
    }
  }
}
</script>

<style>

</style>
