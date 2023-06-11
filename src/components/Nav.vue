<template>
  <nav class="nav">
    <div class="nav__logo-outer" @click="goHome">
      <img src="../assets/img/nav/nav-logo.png" class="nav__logo" />
      <span class="nav__logo-caption">Marssite</span>
    </div>

    <div class="nav__items">
      <BackHome />
      <LanguageSwitcher />
    </div>
  </nav>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import BackHome from '@/components/BackHome.vue'

export default {
  components: {
    LanguageSwitcher,
    BackHome
  }
}
</script>
