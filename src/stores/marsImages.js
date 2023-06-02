import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loadImages } from '../composables/loadImages'

import { useCalendarData } from './calendarData'
import { useAmountFilter } from './amountFilter'

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

  

  /* const amountFilterStore = useAmountFilter()

  // images pagination

  const itemsPerPage = computed(() => amountFilterStore.currentItemPerPage)
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

  // Filtered images pagination

  const filteredItemsPerPage = computed(
    () => amountFilterStore.currentItemPerPage
  )
  const filteredMaxPagesShown = ref(5) // amount of max pagination links
  const filteredCurrentPage = ref(1)
  // starter index for paginatedPosts
  const filteredFromIdx = computed(
    () => (currentPage.value - 1) * filteredItemsPerPage.value
  )

  // Paginate event page. Is equal to pagination item number (it's >= 1)
  const filteredOnClickHandler = page => {
    currentPage.value = page
  }

  const filteredPaginatedImages = computed(() =>
    [...filteredByCamNames.value].splice(
      filteredFromIdx.value,
      filteredItemsPerPage.value
    )
  )

  const filteredPaginatedImagesLength = computed(
    () => filteredByCamNames.value.length || 0
  ) */

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
    load,
   
    // amountFilterStore,

    // itemsPerPage,
    // maxPagesShown,
    // currentPage,
    // fromIdx,
    // onClickHandler,

    // paginatedImages,
    // filteredItemsPerPage,
    // filteredMaxPagesShown,
    // filteredCurrentPage,
    // filteredFromIdx,
    // filteredOnClickHandler,
    // filteredPaginatedImages,
    // filteredPaginatedImagesLength
  }
})
