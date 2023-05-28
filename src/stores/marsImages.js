import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMarsImages = defineStore('marsImages', () => {
  const images = ref([])
  const error = ref(null)
  const date = ref('2023-5-23')

  const url = ref(import.meta.env.VITE_API_URL)
  const apiKey = ref(import.meta.env.VITE_API_KEY)

  const load = async () => {
    try {
      const res = await fetch(`${url.value}${date.value}&api_key=${apiKey.value}`)
      const data = await res.json()
      images.value = data
    } catch (err) {
      error.value = err
    }
  }

  return {
    images,
    error,
    date,
    url,
    apiKey,
    load
  }
})
