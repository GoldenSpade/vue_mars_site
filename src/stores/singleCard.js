import { defineStore } from 'pinia'
import { useMarsImages } from './marsImages'
import { ref, computed } from 'vue'

export const useSingleCard = defineStore('singleCard', () => {
  const marsImagesStore = useMarsImages()
  const singleCardId = ref(null)
  const singleCard = computed(() =>
    marsImagesStore.images.find(elem => elem.id === +singleCardId.value)
  )

  const getSingleCard = imageId => {
    singleCardId.value = imageId
  }

  return {
    marsImagesStore,
    singleCardId,
    singleCard,
    getSingleCard
  }
})
