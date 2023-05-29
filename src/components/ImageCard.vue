<template>
  <div
    class="image-card"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
  >
    <div class="image-card__wrap">
      <img class="image-card__image" :src="imageItem.img_src" alt="Photo" />
      <p class="image-card__text">
        {{ cardNumber }}. {{ imageItem.camera.full_name }}
      </p>
    </div>

    <div
      class="image-card__icon-bg"
      :class="{ 'image-card__icon-bg--hover': isHovering }"
    >
      <BaseIcon iconName="showImage" />
    </div>
    <div
      class="image-card__front-bg"
      :class="{ 'image-card__front-bg--hover': isHovering }"
    ></div>
  </div>
</template>

<script>
import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue'

export default {
  props: ['cardNumber', 'imageItem'],
  components: { BaseIcon },

  setup () {
    const isHovering = ref(false)

    return {
      isHovering
    }
  }
}
</script>
