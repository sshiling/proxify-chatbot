<template>
  <v-row class="form">
    <v-col cols="12">
      <AppTextarea
        v-model="input"
        label="Type your message"
        :filled="true"
      />
    </v-col>
    <v-col cols="12">
      <AppButton
        class="submit-btn"
        :disabled="disabled"
        :button-text="buttonText"
        @click="submit"
      />
    </v-col>
  </v-row>
</template>

<script>
import AppTextarea from '@/components/elements/AppTextarea'
import AppButton from '@/components/elements/AppButton'

export default {
  name: 'AppForm',
  components: {
    AppTextarea,
    AppButton
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'Send'
    }
  },

  data: () => ({
    input: '',
  }),

  methods: {
    submit() {
      this.$emit('submit', this.input)
      this.input = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #ffffff
}

.submit-btn {
  position: absolute;
  bottom: 12px;
  right: 22px;
  background: #56c8d8;
}
</style>
