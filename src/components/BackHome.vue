<template>
  <div
    class="back-home-button"
    v-show="showBackButton"
    @click="backHome"
  >
    <BaseIcon iconName="arrowBack" /> <span class="back-home-button__caption">Back</span>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  components: {
    BaseIcon
  },

  setup () {
    const router = useRouter()
    const route = useRoute()

    const showBackButton = computed(() => route.name === 'singleCard')

    const backHome = () => {
      router.push({ name: 'home' })
    }

    return {
      router,
      route,
      showBackButton,
      backHome
    }
  }
}
</script>
