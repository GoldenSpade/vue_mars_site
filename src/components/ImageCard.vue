<template>
  <div class="image-card" @mouseover="isHovering = true" @mouseout="isHovering = false">
    <div class="image-card__wrap">
      <img class="image-card__image" :src="imageItem.img_src" alt="Photo" />
      <div class="image-card__text">
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold"
            >Image ID:
          </span>
          <span class="image-card__text-item-content">{{ imageItem.id }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold"
            >Camera Name:</span
          >
          <span class="image-card__text-item-content">{{ imageItem.camera.name }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold"
            >Camera Full Name:</span
          >
          <span class="image-card__text-item-content">{{ imageItem.camera.full_name }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold"
            >Earth date:</span
          >
          <span class="image-card__text-item-content">{{ imageItem.earth_date }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold"
            >Rover Name:</span
          >
          <span class="image-card__text-item-content">{{ imageItem.rover.name }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold"
            >Rover Status:</span
          >
          <span class="image-card__text-item-content">{{ roverStatusUpper }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold"
            >Landing Date:</span
          >
          <span class="image-card__text-item-content">{{ imageItem.rover.landing_date }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold"
            >Launch Date:</span
          >
          <span class="image-card__text-item-content">{{ imageItem.rover.launch_date }}</span>
        </p>
      </div>
    </div>

    <div class="image-card__icon-bg" :class="{ 'image-card__icon-bg--hover': isHovering }">
      <BaseIcon iconName="showImage" />
    </div>
    <div class="image-card__front-bg" :class="{ 'image-card__front-bg--hover': isHovering }"></div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { firstLetterToUpperCase } from '../composables/firstLetterToUpperCase.js'

export default {
  props: ['imageItem'],
  components: { BaseIcon },

  setup (props) {
    const isHovering = ref(false)

    const roverStatusUpper = computed(() => firstLetterToUpperCase(props.imageItem.rover.status))

    return {
      isHovering,
      roverStatusUpper
    }
  }
}
</script>
