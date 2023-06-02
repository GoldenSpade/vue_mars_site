<template>
  <!-- <div class="scroll-to-top scroll-to-top--show"> -->
  <div class="scroll-to-top" :class="{ 'scroll-to-top--show': isVisible }">
    <button class="scroll-to-top__btn" @click="scrollToTop">
      <BaseIcon iconName="arrowUp" class="ico--ml-none" />
      <span class="scroll-to-top__text">TOP</span>
    </button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import BaseIcon from './BaseIcon.vue'

export default {
  components: { BaseIcon },

  setup () {
    const isVisible = ref(true)
    const scrollY = ref(0)

    const updateScrollY = () => {
      scrollY.value = window.scrollY
      if (scrollY.value >= 900) {
        isVisible.value = true
      } else {
        isVisible.value = false
      }
    }

    watchEffect(() => {
      window.addEventListener('scroll', updateScrollY)
    })
 
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }

    return {
      isVisible,
      scrollY,
      updateScrollY,
      scrollToTop
    }
  }
}
</script>
