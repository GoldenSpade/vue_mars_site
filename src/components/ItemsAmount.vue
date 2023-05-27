<template>
  <div class="items-amount">
    <div class="container">
      <div class="items-amount__wrap">
        <span class="items-amount__text">Items per page:</span>
        <Select :items="itemsAmount"/>
        <span class="items-amount__total"> (4476 total)</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Select from './Select.vue'

export default {
  components: { Select },

  setup () {
    const itemsAmount = ref([15, 25, 50, 100])

    return {
      itemsAmount
    }
  }
}
</script>
