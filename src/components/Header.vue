<template>
  <header class="header">
    <Nav />
    <div class="header__content">
      <div class="header__title">{{ $t('header.title') }}</div>
      <div class="header__subtitle">{{ $t('header.subTitle') }}</div>
    </div>
    <video
      src="../assets/video/hubble-space.mp4"
      poster="../assets/img/header/hubble-space-poster.jpg"
      height="min-content"
      class="header__video"
      loop="loop"
      muted="muted"
    ></video>
  </header>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  components: { Nav }
}
</script>
