<template>
  <main class="main-content">
    <div class="container">
      <div class="main-content__wrap">
        <ImageCard v-for="(item, idx) in 15" :key="idx" />
      </div>
    </div>
  </main>
</template>

<script>
import ImageCard from './ImageCard.vue'

export default {
  components: { ImageCard }
}
</script>
