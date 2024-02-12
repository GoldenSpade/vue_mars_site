import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loadImages } from '../composables/loadImages'
import { usePagination } from './pagination'
import { useCalendarData } from './calendarData'
import { scrollToTop } from '../composables/scrollToTop'

export const useMarsImages = defineStore('marsImages', () => {
  const isLoad = ref(false)
  const canUseLoad = ref(true)
  const loadTimeCounter = ref(0)
  const images = ref([])
  const imagesLength = computed(() => images.value.length || 0)
  const error = ref(false)

  const calendarDataStore = useCalendarData()
  const paginationStore = usePagination()

  const camNames = computed(() => {
    const names = images.value.map(elem => elem.camera.full_name || [])

    return ['Select Camera', ...names.filter((elem, idx) => names.indexOf(elem) === idx)]
  })

  const wasCamFilterUsed = ref(false)

  const selectedCamName = ref('Select Camera')

  const filteredByCamNames = ref([])

  const filterByCamName = currentCamName => {
    selectedCamName.value = currentCamName
    filteredByCamNames.value = images.value.filter(elem => elem.camera.full_name === currentCamName)
    paginationStore.filteredCurrentPage = 1

    if (selectedCamName.value !== 'Select Camera') {
      wasCamFilterUsed.value = true
    } else {
      wasCamFilterUsed.value = false
    }

    scrollToTop()
    paginationStore.currentPage = 1
  }

  const load = async () => {
    images.value = []
    selectedCamName.value = 'Select Camera'
    wasCamFilterUsed.value = false
    loadTimeCounter.value = 0

    paginationStore.currentPage = 1

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

      const data = await loadImages(
        import.meta.env.VITE_API_URL,
        calendarDataStore.apiDateFormat,
        import.meta.env.VITE_API_KEY
      )

      images.value = data

      if (imagesLength.value > 0) {
        clearInterval(dataLoadingTimer)
        isLoad.value = true
      }
    } catch (err) {
      error.value = err
      console.log(error.value)
    }
  }

  return {
    isLoad,
    canUseLoad,
    loadTimeCounter,
    images,
    imagesLength,
    error,
    calendarDataStore,
    paginationStore,
    camNames,
    wasCamFilterUsed,
    selectedCamName,
    filterByCamName,
    filteredByCamNames,
    load
  }
})
