<template>
  <select
    class="select"
    v-model="marsImagesStore.selectedCamName"
    @change="marsImagesStore.filteredByCam"
  >
    <option
      v-for="(option, idx) in marsImagesStore.camNames"
      :key="idx"
      :value="option"
      :disabled="option === 'Select Camera'"
      class="select__option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
import { useItemsAmount } from '../stores/itemsAmount'
import { useMarsImages } from '../stores/marsImages'

export default {
  setup () {
    const itemsAmountStore = useItemsAmount()
    const marsImagesStore = useMarsImages()

    // const handleSelect = () => {
    // itemsAmountStore.updateSelected({
    //   name: props.selectName,
    //   value: selected.value
    // })
    // }

    return {
      // handleSelect,
      itemsAmountStore,
      marsImagesStore
    }
  }
}
</script>
