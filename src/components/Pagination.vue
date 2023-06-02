<template>
  <div class="pagination">
    <vue-awesome-paginate
      :total-items="marsImagesStore.imagesLength"
      :items-per-page="paginationStore.itemsPerPage"
      :max-pages-shown="paginationStore.maxPagesShown"
      v-model="paginationStore.currentPage"
      :on-click="paginationStore.onClickHandler"
      v-if="!marsImagesStore.wasCamFilterUsed"
    />

    <vue-awesome-paginate
      :total-items="paginationStore.filteredPaginatedImagesLength"
      :items-per-page="paginationStore.filteredItemsPerPage"
      :max-pages-shown="paginationStore.filteredMaxPagesShown"
      v-model="paginationStore.filteredCurrentPage"
      :on-click="paginationStore.filteredOnClickHandler"
      v-else
    />
  </div>
</template>

<script>
import { usePagination } from '../stores/pagination'
import { useMarsImages } from '../stores/marsImages'

export default {
  setup () {
    const marsImagesStore = useMarsImages()
    const paginationStore = usePagination()

    return {
      marsImagesStore,
      paginationStore
    }
  }
}
</script>
