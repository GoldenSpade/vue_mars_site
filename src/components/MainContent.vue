<template>
  <main class="main-content">
    <div class="container">
      <div class="main-content__wrap">
        <ImageCard
          v-for="(item, idx) in marsImagesStore.images"
          :key="idx"
          :cardNumber="idx + 1"
          :imageItem="item"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted } from 'vue'
import ImageCard from './ImageCard.vue'
import { useMarsImages } from '../stores/marsImages'

export default {
  components: { ImageCard },

  setup () {
    const marsImagesStore = useMarsImages()

    onMounted(() => {
      marsImagesStore.load()
      marsImagesStore.isLoad = true
    })

    return {
      marsImagesStore
    }
  }
}
</script>
