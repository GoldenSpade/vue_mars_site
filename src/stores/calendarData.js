import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { addZero } from '../composables/addZero'

import { useMarsImages } from '../stores/marsImages'

export const useCalendarData = defineStore('calendarData', () => {
  const date = ref(new Date())
  const calendarLocale = ref('en')

  const day = computed(() => date.value.getDate())
  const month = computed(() => date.value.getMonth() + 1)
  const year = computed(() => date.value.getFullYear())

  const marsImagesStore = useMarsImages()

  const standartDateFotmat = computed(
    () => `${addZero(day.value)}/${addZero(month.value)}/${year.value}`
  )

  const dateLessThanTreeDays = computed(
    () => `${addZero(day.value - 3)}/${addZero(month.value)}/${year.value}`
  )

  const apiDateFormat = computed(() => {
    if (!marsImagesStore.isLoad) {
      return dateLessThanTreeDays.value.split('/').reverse().join('-')
    } else {
      return standartDateFotmat.value.split('/').reverse().join('-')
    }
  })

  const previewdDate = computed(() => {
    return apiDateFormat.value.split('-').reverse().join('/')
  })

  return {
    date,
    calendarLocale,
    day,
    month,
    year,
    standartDateFotmat,
    dateLessThanTreeDays,
    previewdDate,
    addZero,
    apiDateFormat
  }
})
