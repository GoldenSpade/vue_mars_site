<template>
  <main class="main-content">
    <div class="container">
      <div class="main-content__wrap">
        <ImageCard v-for="(item, idx) in 17" :key="idx" :cardNumber="idx + 1" />
      </div>
    </div>
  </main>
</template>

<script>
import ImageCard from './ImageCard.vue'
import { useMarsImages } from '../stores/marsImages'

export default {
  components: { ImageCard },

  setup () {
    const marsImages = useMarsImages()

    marsImages.load()
  }
}
</script>
