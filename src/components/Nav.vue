<template>
  <nav class="nav">
    <div class="nav__logo-outer" @click="goHome">
      <img src="../assets/img/nav/nav-logo.png" class="nav__logo" />
      <span class="nav__logo-caption">Marssite</span>
    </div>
    <LanguageSwitcher />
  </nav>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useRouter } from 'vue-router'

export default {
  components: { LanguageSwitcher },

  setup () {
    const router = useRouter()

    const goHome = () => router.push({ name: 'home' })

    return {
      router,
      goHome
    }
  }
}
</script>
