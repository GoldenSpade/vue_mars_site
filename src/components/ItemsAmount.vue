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
              : marsImagesStore.filteredPaginatedImagesLength
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
import { useAmountFilter } from '../stores/amountFilter'

export default {
  components: { ItemsPerPageFilter },

  setup () {
    const marsImagesStore = useMarsImages()
    const itemsAmountStore = useAmountFilter()

    return {
      marsImagesStore,
      itemsAmountStore
    }
  }
}
</script>
