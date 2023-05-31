import { defineStore } from 'pinia'
import { ref, computed, watchEffect } from 'vue'
import { loadImages } from '../composables/loadImages'

import { useCalendarData } from '../stores/calendarData'

export const useMarsImages = defineStore('marsImages', () => {
  // const isLoad = ref(false)
  const loadTimeCounter = ref(0)
  const images = ref([])
  const imagesLength = computed(() => images.value.length || 0)
  const error = ref(false)

  const calendarDataStore = useCalendarData()

  const camNames = computed(() => {
    const names = images.value.map(elem => elem.camera.full_name)
    return [
      'Select Camera',
      'Show All',
      ...names.filter((elem, idx) => names.indexOf(elem) === idx)
    ]
  })

  const selectedCamName = ref('Select Camera')

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
      }
      // isLoad.value = true
    } catch (err) {
      error.value = err
    }
  }

  // images pagination

  const totalItems = ref(20)
  const itemsPerPage = ref(20)
  const maxPagesShown = ref(5) // amount of max pagination links
  const currentPage = ref(1)
  // starter index for paginatedPosts
  const fromIdx = computed(() => (currentPage.value - 1) * itemsPerPage.value)

  // Paginate event page. Is equal to pagination item number (it's >= 1)
  const onClickHandler = page => {
    currentPage.value = page
  }

  const paginatedImages = computed(() =>
    [...images.value].splice(fromIdx.value, itemsPerPage.value)
  )

  const paginatedImagesLength = computed(() => paginatedImages.value.length)

  watchEffect(() => {
    if (
      selectedCamName.value !== 'Select Camera' &&
      selectedCamName.value !== 'Show All'
    ) {
      
    }
  })

  return {
    // isLoad,
    loadTimeCounter,
    images,
    imagesLength,
    error,
    calendarDataStore,
    camNames,
    selectedCamName,
    load,
    totalItems,
    itemsPerPage,
    maxPagesShown,
    currentPage,
    fromIdx,
    onClickHandler,
    paginatedImages,
    paginatedImagesLength
  }
})
