<template>
  <div class="items-amount">
    <div class="container">
      <div class="items-amount__wrap">
        <span class="items-amount__text">{{ $t('itemsAmount.items') }}</span>
        <Select :items="itemsAmount" />
        <span class="items-amount__total">
          ({{ marsImagesStore.imagesLength }}
          {{ $t('itemsAmount.total') }})</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Select from './Select.vue'
import { useMarsImages } from '../stores/marsImages'

export default {
  components: { Select },

  setup () {
    const marsImagesStore = useMarsImages()
    const itemsAmount = ref([15, 25, 50, 100])

    return {
      itemsAmount,
      marsImagesStore
    }
  }
}
</script>
