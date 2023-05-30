import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { loadImages } from '../composables/loadImages'

import { useCalendarData } from '../stores/calendarData'

export const useMarsImages = defineStore('marsImages', () => {
  const isLoad = ref(false)
  const loadTimeCounter = ref(0)
  const images = ref([])
  const imagesLength = computed(() => images.value.length || 0)
  const error = ref(null)

  const url = ref(import.meta.env.VITE_API_URL)
  const apiKey = ref(import.meta.env.VITE_API_KEY)

  const calendarDataStore = useCalendarData()

  const camNames = computed(() => {
    const names = images.value.map(elem => elem.camera.full_name)
    return names.filter((elem, idx) => names.indexOf(elem) === idx)
  })

  const load = () => {
    images.value = []

    const dataLoadingTimer = setInterval(async () => {
      loadTimeCounter.value++
    }, 1000)

    try {
      setTimeout(async () => {
        images.value = await loadImages(
          url.value,
          calendarDataStore.apiDateFormat,
          apiKey.value
        )
        if (imagesLength.value > 0) {
          clearInterval(dataLoadingTimer)
        }
        isLoad.value = true
      }, 1000)
      
    } catch (err) {
      error.value = err
      console.log(error.value)
    }
    
    // if (dataLoadingTimer.value === 6) {
    //   clearInterval(dataLoadingTimer)
    // }
  }

  // images pagination

  const totalItems = imagesLength.value
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

  return {
    isLoad,
    loadTimeCounter,
    images,
    imagesLength,
    error,
    url,
    apiKey,
    calendarDataStore,
    camNames,
    load,
    totalItems,
    itemsPerPage,
    maxPagesShown,
    currentPage,
    fromIdx,
    onClickHandler,
    paginatedImages
  }
})
