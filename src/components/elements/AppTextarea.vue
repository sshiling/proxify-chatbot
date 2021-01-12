<template>
  <v-textarea
      :value="value"
      :label="label"
      :filled="filled"
      @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: 'AppTextarea',
  model: {
    prop: 'value',
    event: 'input'
  },

  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    filled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
