<template>
  <div class="card page mt-3">
      <div class="card-body">
          <div v-chat-scroll id="msgbox" class="card-body">
              <div class="messages row animated fadeIn q-ma-md" v-for="(msg, index) in messages" :key="index">
                  <div v-bind:class="[{ 'justify-end' : check(msg.members_id), 'justify-start' : !check(msg.members_id)  }]" class="items-center row col-12 q-pt-md q-mr-xs">
                    <q-chip v-show="!check(msg.members_id)" pointing="right" color="grey-4">
                      <p class="name q-mt-md">
                        {{ msg.first_name }}:
                      </p>
                    </q-chip>
                    <div v-bind:class="[{ 'LoggedInUser amber-8 text-right justify-end' : check(msg.members_id), 'OtherUsers text-left justify-start' : !check(msg.members_id)  }]"  class="textbox q-ma-xs row">
                      <div v-bind:class="[{ 'justify-end' : check(msg.members_id), 'justify-start' : !check(msg.members_id)  }]" class="msgtag row">
                        <div class="msgbody">
                          <p class="text">
                            {{ msg.text }}
                          </p>
                        </div>
                        <span class="bottomline col-12"></span>
                        <p class="stamp">
                          {{ msg.stamp.slice(4, 11) }}{{ msg.stamp.slice(16, 21) }}
                          </p>
                      </div>
                    </div>
                    <div>
                      <q-chip v-show="check(msg.members_id)" pointing="left" color="amber-8" class="justify-center">
                        <p class="name q-mt-md">
                          :{{ msg.first_name }}
                        </p>
                      </q-chip>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <q-layout-footer class="animated slideInUp" v-model="footer">
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
      LoggedInUser: 1,
      members_id: 1,
      house_id: 1,
      first_name: 'Gary',
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
        first_name: this.first_name,
        text: this.text,
        stamp: Date(),
        members_id: 1,
        house_id: 1
      })
      axios.post(`http://localhost:3002/chat/`, {
        text: this.text,
        stamp: Date(),
        members_id: 1,
        house_id: 1
      })
        .then(response => {})
        .catch(e => {
          this.errors.push(e)
        })
      this.text = ''
    },
    click () {
      console.log(this.stamp, this.members_id, this.text, 'CLICKED')
    },
    check (id) {
      if (id === this.LoggedInUser) {
        return true
      } else {
        return false
      }
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
  color: black;
  font-size: 0.6em;
  font-weight: bold;
  text-align: right
}
.name {
  font-weight: bold;
  color: black;
  font-size: 1em;
  text-align: left;
}
.card-body {
  width: 100vw;
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
html {
  overflow:   scroll;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
.LoggedInUser {
  padding-bottom: .3em;
  padding-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 2.5em;
  max-width: 60vw;
  background-color:  #ffb348;
  color: black;
  /* box-shadow: 1px 3px 10px #f2a43a */
}
.OtherUsers {
  padding-bottom: .3em;
  padding-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 2.5em;
  max-width: 60vw;
  background-color: #e9e9e9;
  color: black;
  /* box-shadow: 1px 1px 10px black */
}
.bottomline {
    display:block;
    border:none;
    color:white;
    height:1px;
    background:black;
    background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from(#000), to(#fff));
}
</style>
