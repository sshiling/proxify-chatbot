import Vue from 'vue'
import ApiService from '@/services/api'

Vue.mixin({
  computed: {
    $api: () => new ApiService()
  }
})
