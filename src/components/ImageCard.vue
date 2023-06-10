<template>
  <div class="image-card" @mouseover="isHovering = true" @mouseout="isHovering = false">
    <div class="image-card__wrap">
      <img class="image-card__image" :src="imageItem.img_src" alt="Photo" />
      <div class="image-card__text">
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold"
            >{{ $t('imageCard.id') }}
          </span>
          <span class="image-card__text-item-content">{{ imageItem.id }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold">{{
            $t('imageCard.camName')
          }}</span>
          <span class="image-card__text-item-content">{{ imageItem.camera.name }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold">{{
            $t('imageCard.camFullName')
          }}</span>
          <span class="image-card__text-item-content">{{ imageItem.camera.full_name }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold">{{
            $t('imageCard.earthDate')
          }}</span>
          <span class="image-card__text-item-content">{{ earthDate }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold">{{
            $t('imageCard.roverName')
          }}</span>
          <span class="image-card__text-item-content">{{ imageItem.rover.name }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold">{{
            $t('imageCard.roverStatus')
          }}</span>
          <span class="image-card__text-item-content">{{ roverStatusUpper }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold">{{
            $t('imageCard.landDate')
          }}</span>
          <span class="image-card__text-item-content">{{ landingDate }}</span>
        </p>
        <p class="image-card__text-item-row">
          <span class="image-card__text-item-content image-card__text-item-content--bold">{{
            $t('imageCard.launchDate')
          }}</span>
          <span class="image-card__text-item-content">{{ launchDate }}</span>
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
import { changeDateFormat } from '../composables/dateFormat.js'

export default {
  props: ['imageItem'],
  components: { BaseIcon },

  setup (props) {
    const isHovering = ref(false)

    const roverStatusUpper = computed(() => firstLetterToUpperCase(props.imageItem.rover.status))

    const earthDate = computed(() => changeDateFormat(props.imageItem.earth_date))
    const landingDate = computed(() => changeDateFormat(props.imageItem.rover.landing_date))
    const launchDate = computed(() => changeDateFormat(props.imageItem.rover.launch_date))

    return {
      isHovering,
      roverStatusUpper,
      earthDate,
      landingDate,
      launchDate
    }
  }
}
</script>
