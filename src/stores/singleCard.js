import { defineStore } from 'pinia'
import { useMarsImages } from './marsImages'
import { ref, computed } from 'vue'

export const useSingleCard = defineStore('singleCard', () => {
  const marsImagesStore = useMarsImages()
  const singleCardId = ref(null)

  const singleCard = computed(() => {
    let target = marsImagesStore.images.find(elem => elem.id === +singleCardId.value)
    
    if (marsImagesStore.imagesLength > 0) {
      localStorage.setItem('singleCardLocal', JSON.stringify(target))
      return target
    } else {
      marsImagesStore.load()
      return JSON.parse(localStorage.getItem('singleCardLocal'))
    }
  })

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
