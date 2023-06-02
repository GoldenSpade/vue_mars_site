import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loadImages } from '../composables/loadImages'

import { useCalendarData } from './calendarData'

export const useMarsImages = defineStore('marsImages', () => {
  const isLoad = ref(false)
  const loadTimeCounter = ref(0)
  const images = ref([])
  const imagesLength = computed(() => images.value.length || 0)
  const error = ref(false)

  const calendarDataStore = useCalendarData()

  const camNames = computed(() => {
    const names = images.value.map(elem => elem.camera.full_name || [])
    return [
      'Select Camera',
      ...names.filter((elem, idx) => names.indexOf(elem) === idx)
    ]
  })

  const wasCamFilterUsed = ref(false)

  const selectedCamName = ref('Select Camera')

  const filteredByCamNames = computed(() => {
    if (selectedCamName.value !== 'Select Camera') {
      wasCamFilterUsed.value = true
    } else {
      wasCamFilterUsed.value = false
    }

    return images.value.filter(
      image => image.camera.full_name === selectedCamName.value
    )
  })

  const load = async () => {
    images.value = []

    loadTimeCounter.value = 0
    const dataLoadingTimer = setInterval(() => {
      loadTimeCounter.value++
      if (loadTimeCounter.value === 7) {
        clearInterval(dataLoadingTimer)
      }
    }, 1000)

    try {
      await new Promise(resolve => {
        setTimeout(resolve, 1000)
      })

      images.value = await loadImages(
        import.meta.env.VITE_API_URL,
        calendarDataStore.apiDateFormat,
        import.meta.env.VITE_API_KEY
      )
      if (imagesLength.value > 0) {
        clearInterval(dataLoadingTimer)
        isLoad.value = true
      }
    } catch (err) {
      error.value = err
    }
  }

  return {
    isLoad,
    loadTimeCounter,
    images,
    imagesLength,
    error,
    calendarDataStore,
    camNames,
    wasCamFilterUsed,
    selectedCamName,
    filteredByCamNames,
    load
  }
})
