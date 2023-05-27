<template>
  <nav class="nav">
    <div class="nav__logo-outer">
      <router-link :to="{ name: 'home' }">
        <img src="../assets/img/nav/nav-logo.png" class="nav__logo" />
      </router-link>
      <span class="nav__logo-caption">Marssite</span>
    </div>
    <LanguageSwitcher />
  </nav>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  components: { LanguageSwitcher }
}
</script>
