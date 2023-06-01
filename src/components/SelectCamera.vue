<template>
  <select
    class="select"
    v-model="marsImagesStore.selectedCamName"
  >
    <option
      v-for="(option, idx) in marsImagesStore.camNames"
      :key="idx"
      :value="option"

      class="select__option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
import { useMarsImages } from '../stores/marsImages'

export default {
  setup () {
    const marsImagesStore = useMarsImages()

    return {
      marsImagesStore
    }
  }
}
</script>
