<template>
  <div
    class="image-card"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
  >
    <div class="image-card__wrap">
      <img class="image-card__image" :src="imageItem.img_src" alt="Photo" />
      <div class="image-card__text">
        <p class="image-card__text-item-row">
          Image ID:
          <span class="image-card__text-item-content">{{ imageItem.id }}</span>
        </p>
        <p class="image-card__text-item-row">
          Camera:
          <span class="image-card__text-item-content">{{
            imageItem.camera.full_name
          }}</span>
        </p>
        <p class="image-card__text-item-row">
          Earth date:
          <span class="image-card__text-item-content">{{
            imageItem.earth_date
          }}</span>
        </p>
      </div>
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
import { ref, computed } from 'vue'
import BaseIcon from './BaseIcon.vue'

export default {
  props: ['imageItem'],
  components: { BaseIcon },

  setup (props) {
    const isHovering = ref(false)

    return {
      isHovering,
    }
  }
}
</script>
