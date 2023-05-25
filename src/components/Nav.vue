<template>
  <nav class="nav">
    <div class="nav__logo-outer">
      <img src="../assets/img/nav/nav-logo.png" class="nav__logo" />
      <span class="nav__logo-caption">Mars site</span>
    </div>
    <LanguageSwitcher class="nav__lang" />
    <!-- <ul>
      <li>
        <RouterLink :to="Tr.i18nRoute({ name: 'home' })">{{ $t("nav.home") }}</RouterLink>
      </li>
      
      <li>
        <RouterLink :to="Tr.i18nRoute({ name: 'about' })">{{ $t("nav.about") }}</RouterLink>
      </li>
    </ul> -->
  </nav>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import Tr from '@/i18n/translation'

export default {
  components: { LanguageSwitcher },
  setup () {
    return { Tr }
  }
}
</script>
