<template>
  <div class="pagination">
    <vue-awesome-paginate
      :total-items="marsImagesStore.imagesLength"
      :items-per-page="marsImagesStore.itemsPerPage"
      :max-pages-shown="marsImagesStore.maxPagesShown"
      v-model="marsImagesStore.currentPage"
      :on-click="marsImagesStore.onClickHandler"
      v-if="!marsImagesStore.wasCamFilterUsed"
    />

    <vue-awesome-paginate
      :total-items="marsImagesStore.filteredPaginatedImagesLength"
      :items-per-page="marsImagesStore.filteredItemsPerPage"
      :max-pages-shown="marsImagesStore.filteredMaxPagesShown"
      v-model="marsImagesStore.filteredCurrentPage"
      :on-click="marsImagesStore.filteredOnClickHandler"
      v-else
    />
  </div>
</template>

<script>
import { useMarsImages } from '../stores/marsImages'

export default {
  setup () {
    const marsImagesStore = useMarsImages()

    return {
      marsImagesStore
    }
  }
}
</script>
