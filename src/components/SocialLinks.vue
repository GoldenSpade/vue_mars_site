<template>
  <div class="social-links">
    <a href="https://www.facebook.com/HubbleTelescope/" target="__blank">
      <BaseIcon iconName="socialFb" class="social-links--ml-none"/>
    </a>
    <a href="https://twitter.com/HubbleTelescope" target="__blank">
      <BaseIcon iconName="socialTw" />
    </a>
    <a href="https://www.instagram.com/space_telescopes" target="__blank">
      <BaseIcon iconName="socialInst" />
    </a>
    <a href="https://www.youtube.com/user/HubbleSiteChannel" target="__blank">
      <BaseIcon iconName="socialYt" />
    </a>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: { BaseIcon }
}
</script>
