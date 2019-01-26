<template>
  <div class="card mt-3">
      <div class="card-body">
          <div v-chat-scroll id="msgbox" class="card-body">
              <div class="messages justify-center row q-ma-md" v-for="(msg, index) in messages" :key="index">
                  <div class="items-center row q-pt-md q-mr-xs">
                    <div class="textbox q-ml-xs">
                      <p class="name">{{ msg.first_name }}: </p>
                      <p class="text">{{ msg.text }}</p>
                      <p class="stamp">{{ msg.stamp.slice(0, 6) }}</p>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <q-layout-footer v-model="footer">
        <form @submit.prevent="sendMessage">
          <q-toolbar color="amber-8">
            <q-toolbar-title>
              Chat:
              <input type="text" class="form-control fixedTextInput" prefix="chat: " color="#f2a43a" v-model="text" />
            </q-toolbar-title>
            <button type="Submit" class="btn" v-on:click="pingServer()" @click="click">
              <i class="fas fa-share"></i>
            </button>
          </q-toolbar>
        </form>
      </q-layout-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import io from 'socket.io-client'
import axios from 'axios'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)
export default {
  data () {
    return {
      text: '',
      stamp: Date(),
      member_id: 1,
      house_id: 1,
      messages: [],
      socket: io.connect('http://localhost:3002')
    }
  },
  methods: {
    loadPosts () {
      return axios.get('http://localhost:3002/chat/1/')
    },
    sendMessage (e) {
      e.preventDefault()
      this.socket.emit('SEND_MESSAGE', {
        text: this.text,
        stamp: Date(),
        member_id: 1,
        house_id: 1
      })
      this.text = ''
    },
    click () {
      console.log(this.stamp, this.member_id, this.text, 'CLICKED')
    },
    pingServer () {
      this.socket.emit('pingServer', 'PING')
    }
  },
  created () {
    this.loadPosts()
      .then(response => {
        this.messages = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  mounted () {
    this.socket.on('MESSAGE', (data) => {
      this.messages = [...this.messages, data]
      this.$nextTick(function () {
        var msgbox = document.getElementById('msgbox')
        msgbox.scrollTop = msgbox.scrollHeight
      })
    })
  }
}
</script>

<style scoped>
q-layout-footer {
    position: absolute;
    bottom: 0px;
    width: 100vw;
}
button {
  background-color: transparent;
  border:transparent
}
i {
  color: white;
}
input {
  min-width: 90vw
}
.stamp {
  color: white;
  font-size: 0.6em;
  font-weight: bold;
  text-align: right
}
.name {
  font-weight: bold;
  color: white;
  font-size: 1.3em;
  text-align: left;
}
.textbox {
  padding-bottom: .3em;
  padding-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
  background-color: #f2a43a;
  border-radius: .3em;
  max-width: 65vw;
  min-width: 65vw;
}
.text {
  font-weight: bold;
  font-size: 1em;
}
#msgbox {
  height: 85vh;
  overflow-y: scroll;
}

@keyframes sent {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
