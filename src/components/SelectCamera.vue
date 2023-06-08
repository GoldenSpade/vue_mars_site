<template>
  <select class="select" v-model="marsImagesStore.selectedCamName" @change="showOption">
    <option
      v-for="(option, idx) in marsImagesStore.camNames"
      :key="idx"
      :value="option"
      selected="Select Camera"
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

    const showOption = e => {
      marsImagesStore.filterByCamName(e.target.value)
    }

    return {
      marsImagesStore,
      showOption
    }
  }
}
</script>
