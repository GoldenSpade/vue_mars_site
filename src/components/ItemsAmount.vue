<template>
  <div class="items-amount">
    <div class="container">
      <div class="items-amount__wrap">
        <span class="items-amount__text">{{ $t('itemsAmount.items') }}</span>
        <ItemsPerPageFilter />
        <span class="items-amount__total">
          ({{
            !marsImagesStore.wasCamFilterUsed
              ? marsImagesStore.imagesLength
              : paginationStore.filteredPaginatedImagesLength
          }}
          {{ $t('itemsAmount.total') }})</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import ItemsPerPageFilter from './ItemsPerPageFilter.vue'
import { useMarsImages } from '../stores/marsImages'
import { usePagination } from '../stores/pagination'
import { useAmountFilter } from '../stores/amountFilter'

export default {
  components: { ItemsPerPageFilter },

  setup () {
    const marsImagesStore = useMarsImages()
    const paginationStore = usePagination()
    const itemsAmountStore = useAmountFilter()

    return {
      marsImagesStore,
      paginationStore,
      itemsAmountStore
    }
  }
}
</script>
