import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { addZero } from '../composables/addZero'

export const useCalendarData = defineStore('calendarData', () => {
  const date = ref(new Date('2023-02-01'))
  const calendarLocale = ref('en')

  const minDate = new Date(2023, 0, 1)
  const maxDate = new Date(2023, 11, 31)

  const day = computed(() => date.value.getDate())
  const month = computed(() => date.value.getMonth() + 1)
  const year = computed(() => date.value.getFullYear())

  const standartDateFotmat = computed(
    () => `${addZero(day.value)}/${addZero(month.value)}/${year.value}`
  )

  const apiDateFormat = computed(() => {
    return standartDateFotmat.value.split('/').reverse().join('-')
  })

  const previewdDate = computed(() => {
    return apiDateFormat.value.split('-').reverse().join('/')
  })

  return {
    date,
    calendarLocale,
    minDate,
    maxDate,
    day,
    month,
    year,
    standartDateFotmat,
    previewdDate,
    addZero,
    apiDateFormat
  }
})
