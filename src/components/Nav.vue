<template>
  <nav class="nav">
    <div class="nav__logo-outer" @click="goHome">
      <img src="../assets/img/nav/nav-logo.png" class="nav__logo" />
      <span class="nav__logo-caption">Marssite</span>
    </div>

    <div class="nav__items">
      <div class="nav__back" v-show="showBackButton" @click="goHome">
        <BaseIcon iconName="arrowBack" /> <span class="nav__back-caption">Back</span>
      </div>
      <LanguageSwitcher />
    </div>
  </nav>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'

export default {
  components: {
    LanguageSwitcher,
    BaseIcon
  },

  setup () {
    const router = useRouter()
    const route = useRoute()

    const goHome = () => router.push({ name: 'home' })

    const showBackButton = computed(() => route.name === 'singleCard')

    return {
      router,
      route,
      goHome,
      showBackButton
    }
  }
}
</script>
