<template>
  <main class="main-content">
    <div class="container">
      <div
        class="main-content__wrap"
        v-if="marsImagesStore.imagesLength > 0 && !marsImagesStore.wasCamFilterUsed"
      >
        <div
          class="image-card__outer"
          v-for="item in paginationStore.paginatedImages"
          :key="item.id"
        >
          <router-link :to="{ name: 'singleCard', params: { imageId: item.id } }">
            <ImageCard :imageItem="item" />
          </router-link>
        </div>
      </div>

      <div
        class="main-content__wrap"
        v-if="marsImagesStore.imagesLength > 0 && marsImagesStore.wasCamFilterUsed"
      >
        <div
          class="image-card__outer"
          v-for="item in paginationStore.filteredPaginatedImages"
          :key="item.id"
        >
          <router-link :to="{ name: 'singleCard', params: { imageId: item.id } }">
            <ImageCard :imageItem="item" />
          </router-link>
        </div>
      </div>

      <NoDataMessage v-else-if="!marsImagesStore.error && marsImagesStore.loadTimeCounter === 7" />

      <Loader v-else-if="marsImagesStore.imagesLength == 0" />
    </div>
  </main>
</template>

<script>
import { onMounted } from 'vue'
import ImageCard from './ImageCard.vue'
import { useMarsImages } from '../stores/marsImages'
import { usePagination } from '../stores/pagination'
import Loader from './Loader.vue'
import NoDataMessage from './NoDataMessage.vue'

export default {
  components: {
    ImageCard,
    Loader,
    NoDataMessage
  },

  setup () {
    const marsImagesStore = useMarsImages()
    const paginationStore = usePagination()

    onMounted(() => {
      if (marsImagesStore.canUseLoad) {
        marsImagesStore.load()
      } else {
        marsImagesStore.canUseLoad = true
      }
    })

    return {
      marsImagesStore,
      paginationStore
    }
  }
}
</script>
