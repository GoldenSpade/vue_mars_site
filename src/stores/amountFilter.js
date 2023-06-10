import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAmountFilter = defineStore('amountFilter', () => {
  const selectedItemsPerPage = ref( [10, 20, 30, 40, 50, 100])
  const currentItemPerPage = ref(20)


  return {
    selectedItemsPerPage,
    currentItemPerPage,
  }
})
