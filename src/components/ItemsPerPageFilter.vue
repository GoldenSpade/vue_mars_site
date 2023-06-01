<template>
  <select 
    class="select"
    v-model="amountFilterStore.currentItemPerPage"
  >
    <option
      v-for="(option, idx) in amountFilterStore.selectedItemsPerPage"
      :key="idx"
      :value="option"
      class="select__option"
    >
      {{ option }}
    </option>
  </select>
</template>
p
<script>
import { useAmountFilter } from '../stores/amountFilter'

export default {
  setup () {
    const amountFilterStore = useAmountFilter()

    return {
      amountFilterStore,
    }
  }
}
</script>
