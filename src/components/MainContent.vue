<template>
  <main class="main-content">
    <div class="container">
      <div
        class="main-content__wrap"
        v-if="
          marsImagesStore.imagesLength > 0 && !marsImagesStore.wasCamFilterUsed
        "
      >
        <ImageCard
          v-for="item in paginationStore.paginatedImages"
          :imageItem="item"
          :key="item.id"
        />
      </div>

      <div
        class="main-content__wrap"
        v-if="
          marsImagesStore.imagesLength > 0 && marsImagesStore.wasCamFilterUsed
        "
      >
        <ImageCard
          v-for="item in paginationStore.filteredPaginatedImages"
          :imageItem="item"
          :key="item.id"
        />
      </div>

      <NoDataMessage
        v-else-if="
          !marsImagesStore.error && marsImagesStore.loadTimeCounter === 7
        "
      />

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
      marsImagesStore.load()
    })

    return {
      marsImagesStore,
      paginationStore
    }
  }
}
</script>
