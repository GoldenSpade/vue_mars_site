import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAmountFilter = defineStore('amountFilter', () => {
  const selectedItemsPerPage = ref( [15, 20, 25, 30])
  const currentItemPerPage = ref(15)

  return {
    selectedItemsPerPage,
    currentItemPerPage,
  }
})
