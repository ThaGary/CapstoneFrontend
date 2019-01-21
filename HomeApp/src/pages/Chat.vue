<template>
    <div>
        <h1>Hello</h1>
        <q-chat-message
            v-for="(msg, index) in messages"
            :key="`avatar-${index}`"
            :label="msg.label"
            :sent="msg.sent"
            :text-color="msg.textColor"
            :bg-color="msg.bgColor"
            :name="msg.name"
            :text="msg.text"
            :stamp="msg.stamp"
        />
        <q-chat-message
            name="Vladimir"
        >
            <q-spinner-dots size="2rem" />
        </q-chat-message>
    </div>
</template>

<script>
export default {
  name: 'Chat'
}
</script>

<style>

</style>
