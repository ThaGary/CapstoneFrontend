<template>
    <div class="chat">
        <q-chat-message
            class="q-ma-md flex column"
            v-for="(msg, index) in messages"
            :key="`avatar-${index}`"
            :label="msg.label"
            :sent="(msg.members_id != 1) ? true : false"
            :text-color="msg.textColor"
            :bg-color="(msg.members_id != 1) ? `grey-3` : `amber-7`"
            :name="msg.first_name"
            :text="msg.text"
            :stamp="msg.datetime"
        />
        <q-layout-footer v-model="footer">
        <q-toolbar color="amber-8">
          <q-toolbar-title>
            <q-input class="fixedTextInput" prefix="chat:" inverted color="white" v-model="text" stack-label="" />
          </q-toolbar-title>
          <i class="fas fa-share"></i>
        </q-toolbar>
      </q-layout-footer>
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
          text: ['I\'m good, thank you!', 'And you?And you?'],
          datetime: 'May 31, 1991 9:00 PM',
          members_id: 7,
          house_id: 1
        },
        {
          first_name: 'Gary',
          text: ['hey everyone'],
          datetime: 'May 31, 1991 9:00 PM',
          members_id: 1,
          house_id: 1
        },
        {
          first_name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?And you?'],
          datetime: 'May 31, 1991 9:00 PM',
          members_id: 7,
          house_id: 1
        },
        {
          first_name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?And you?'],
          datetime: 'May 31, 1991 9:00 PM',
          members_id: 7,
          house_id: 1
        },
        {
          first_name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?And you?'],
          datetime: 'May 31, 1991 9:00 PM',
          members_id: 7,
          house_id: 1
        },
        {
          first_name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?And you?'],
          datetime: 'May 31, 1991 9:00 PM',
          members_id: 7,
          house_id: 1
        },
        {
          first_name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?And you?'],
          datetime: 'May 31, 1991 9:00 PM',
          members_id: 7,
          house_id: 1
        }
      ]
    }
  }
}
</script>

<style>
q-chat-message {
  height: 3em;
}
q-layout-footer {
    position: absolute;
    bottom: 0px;
    width: 100vw;
  }
</style>
