<template>
  <v-row class="messages">
    <ul ref="messagesList">
      <li
        v-for="(message, index) in messages"
        :key="index"
        :class="message.owner"
      >
        {{ message.text }}
      </li>
    </ul>
  </v-row>
</template>

<script>
export default {
  name: 'AppMessages',
  props: {
    messages: {
      type: Array,
      required: true
    }
  },

  watch: {
    messages() {
      this.scrollToTheEnd()
    }
  },

  methods: {
    scrollToTheEnd() {
      setTimeout(() => {
        const container = this.$refs.messagesList
        container.scrollTop = container.scrollHeight
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0 20px;
  position: absolute;
  left: 0;
  right: 0;
  overflow-y: scroll;
  height:600px;
  z-index: 0;
}

ul li {
  display:inline-block;
  clear: both;
  padding: 20px;
  border-radius: 30px;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
}

.him {
  background: #eee;
  float: left;
}

.me {
  float: right;
  background: #0084ff;
  color: #fff;
}

.him + .me {
  border-bottom-right-radius: 5px;
}

.me + .me {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.me:last-of-type {
  border-bottom-right-radius: 30px;
}
</style>
