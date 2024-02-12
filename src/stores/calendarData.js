import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { addZero } from '../composables/addZero'
import { getDatesFromTomorrowToEndOfYear } from '../composables/getDatesFromTomorrowToEndOfYear'

export const useCalendarData = defineStore('calendarData', () => {
  const date = ref(new Date('2024-01-03'))
  const calendarLocale = ref('en')

  const day = computed(() => date.value.getDate())
  const month = computed(() => date.value.getMonth() + 1)
  const year = computed(() => date.value.getFullYear())

  const disabledDates = computed(() => getDatesFromTomorrowToEndOfYear())

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
    day,
    month,
    year,
    disabledDates,
    standartDateFotmat,
    previewdDate,
    addZero,
    apiDateFormat
  }
})
