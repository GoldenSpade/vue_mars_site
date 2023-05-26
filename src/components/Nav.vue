<template>
  <nav class="nav">
    <div class="nav__logo-outer">
      <img src="../assets/img/nav/nav-logo.png" class="nav__logo" />
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
