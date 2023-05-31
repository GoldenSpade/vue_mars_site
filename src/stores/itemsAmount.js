import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useItemsAmount = defineStore('itemsAmount', () => {
  const selectedItemsPerPage = ref([10, 15, 25, 50, 100])
  const currentItemPerPage = ref(10)

  const selectedCamera = ref('Choose the camera')

  const updateSelected = dataObj => {
    if (dataObj.name === 'itemsPerPage') {
      currentItemPerPage.value = dataObj.value
    }

    if (dataObj.name === 'navCameras') {
      selectedCamera.value = dataObj.value
    }
  }

  return {
    selectedItemsPerPage,
    currentItemPerPage,
    updateSelected,
    selectedCamera
  }
})
