import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { loadImages } from '../composables/loadImages'

import { useCalendarData } from '../stores/calendarData'

export const useMarsImages = defineStore('marsImages', () => {
  const isLoad = ref(false)
  const images = ref([])
  const error = ref(null)

  const url = ref(import.meta.env.VITE_API_URL)
  const apiKey = ref(import.meta.env.VITE_API_KEY)

  const calendarData = useCalendarData()

  const camNames = computed(() => {
    const names = images.value.map(elem => elem.camera.full_name)

    return names.filter((elem, idx) => names.indexOf(elem) === idx)
  })

  const load = async () => {
    isLoad.value = false
    try {
      images.value = await loadImages(
        url.value,
        calendarData.apiDateFormat,
        apiKey.value
      )
      isLoad.value = true
    } catch (err) {
      error.value = err
      console.log(error.value)
    }
  }

  return {
    isLoad,
    images,
    error,
    url,
    apiKey,
    calendarData,
    camNames,
    load
  }
})
