<template>
  <v-btn
      class="btn"
      :color="color"
      :dark="dark"
      :disabled="disabled"
      :x-large="xLarge"
      @click="$emit('click')"
  >
    {{ buttonText }}
  </v-btn>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    xLarge: {
      type: Boolean,
      default: true
    },
    dark: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'button'
    }
  }
}
</script>
