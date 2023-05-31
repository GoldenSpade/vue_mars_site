<template>
  <div class="items-amount">
    <div class="container">
      <div class="items-amount__wrap">
        <span class="items-amount__text">{{ $t('itemsAmount.items') }}</span>
        <ItemsPerPageFilter />
        <span class="items-amount__total">
          ({{ marsImagesStore.imagesLength }}
          {{ $t('itemsAmount.total') }})</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import ItemsPerPageFilter from './ItemsPerPageFilter.vue'
import { useMarsImages } from '../stores/marsImages'
import { useItemsAmount } from '../stores/itemsAmount'

export default {
  components: { ItemsPerPageFilter },

  setup () {
    const marsImagesStore = useMarsImages()
    const itemsAmountStore = useItemsAmount()

    return {
      marsImagesStore,
      itemsAmountStore
    }
  }
}
</script>
