<template>
  <select class="select">
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
