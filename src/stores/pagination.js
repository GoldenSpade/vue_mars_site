import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useMarsImages } from './marsImages'
import { useAmountFilter } from './amountFilter'
import { scrollToTop } from '../composables/scrollToTop'

export const usePagination = defineStore('pagination', () => {
  const marsImagesStore = useMarsImages()
  const amountFilterStore = useAmountFilter()

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

  const paginatedImages = computed(() => {
    scrollToTop()

    return [...marsImagesStore.images].splice(fromIdx.value, itemsPerPage.value)
  })

  // Filtered images pagination

  const filteredItemsPerPage = computed(() => amountFilterStore.currentItemPerPage)
  const filteredMaxPagesShown = ref(5) // amount of max pagination links
  const filteredCurrentPage = ref(1)
  // starter index for paginatedPosts
  const filteredFromIdx = computed(() => (currentPage.value - 1) * filteredItemsPerPage.value)

  // Paginate event page. Is equal to pagination item number (it's >= 1)
  const filteredOnClickHandler = page => {
    currentPage.value = page
  }

  const filteredPaginatedImages = computed(() => {
    scrollToTop()

    return [...marsImagesStore.filteredByCamNames].splice(
      filteredFromIdx.value,
      filteredItemsPerPage.value
    )
  })

  const filteredPaginatedImagesLength = computed(
    () => marsImagesStore.filteredByCamNames.length || 0
  )

  return {
    marsImagesStore,
    amountFilterStore,
    itemsPerPage,
    maxPagesShown,
    currentPage,
    fromIdx,
    onClickHandler,
    paginatedImages,
    filteredItemsPerPage,
    filteredMaxPagesShown,
    filteredCurrentPage,
    filteredFromIdx,
    filteredOnClickHandler,
    filteredPaginatedImages,
    filteredPaginatedImagesLength
  }
})
