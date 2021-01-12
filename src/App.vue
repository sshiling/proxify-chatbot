<template>
  <v-app>
    <AppHeader />
    <v-content>
      <v-container fluid>
        <AppMessages :messages="messages" />
        <AppForm
          :button-text="buttonText"
          :disabled="!questionToAsk"
          @submit="send"
        />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppMessages from '@/components/AppMessages'
import AppForm from '@/components/AppForm'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMessages,
    AppForm
  },

  data: () => ({
    form: {
      name: '',
      feeling: '',
      location: '',
      age: 0,
      hobby: '',
    },
    next: 0,
    buttonText: 'Let\'s Chat',
    questions: [],
    messages: []
  }),

  created() {
    this.$api.get('/questions.json').then(res => {
      this.questions = res.data.data
      this.askQuestion()
    })
  },

  mounted() {
    setTimeout(() => {
      this.buttonText = 'Send Message'
    }, 2000)
  },

  computed: {
    questionToAsk() {
      return this.questions[this.next]
    }
  },

  methods: {
    askQuestion() {
      if (!this.questions.length) return
      if (!this.questionToAsk) {
        alert('There are no more questions. Thank you!')
        console.log('Submit form data:', this.form)
        return
      }
      this.messages.push(this.questionToAsk)
    },

    send(text) {
      const questionKey = this.questionToAsk.ask
      this.form[questionKey] = text
      this.messages.push({
        owner: 'me',
        text
      })
      this.next++
      this.askQuestion()
    }
  }
}
</script>
