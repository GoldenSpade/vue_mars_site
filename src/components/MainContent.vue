<template>
  <main class="main-content">
    <div class="container">
      <div class="main-content__wrap" v-if="marsImagesStore.imagesLength > 0">
        <ImageCard
          v-for="item in marsImagesStore.paginatedImages"
          :imageItem="item"
          :key="item.id"
        />
      </div>
      <div v-else-if="!marsImagesStore.error && marsImagesStore.loadTimeCounter === 7"> Message error </div>
      <Loader v-else/>
    </div>
  </main>
</template>

<script>
import { onMounted } from 'vue'
import ImageCard from './ImageCard.vue'
import { useMarsImages } from '../stores/marsImages'
import Loader from './Loader.vue'

export default {
  components: {
    ImageCard,
    Loader
  },

  setup () {
    const marsImagesStore = useMarsImages()

    onMounted(() => {
      marsImagesStore.load()
    })

    return {
      marsImagesStore
    }
  }
}
</script>
