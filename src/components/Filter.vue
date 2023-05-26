<template>
  <div class="filter">
    <div class="container">
      <div class="filter__button-wrap" v-show="showFilterBtn">
        <Button
          class="button"
          :text="showFilterBlock ? 'Hide filters' : 'Show filters'"
          @event="handleChangeFilter"
        />
      </div>
      <div class="filter__wrap" v-show="showFilterBlock">
        <div
          class="filter__item"
          :class="{ 'filter__item--mt': showFilterBlock }"
        >
          Filter Images by:
        </div>
        <form class="filter__item">
          <Datepicker
            v-model="date"
            :clearable="false"
            :enableTimePicker="false"
            class="filter__item--mb filter__item--mr"
          />

          <select class="select select--nav">
            <option
              v-for="(option, idx) in cameraNames"
              :key="idx"
              :value="option"
              :selected="option === cameraNames[0]"
              :disabled="option === cameraNames[0]"
              class="select__option"
            >
              {{ option }}
            </option>
          </select>
        </form>
        <div class="filter__item filter__item--mb-none">
          <Button class="button" text="Find image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import Button from './Button.vue'

export default {
  components: {
    Datepicker,
    Button
  },
  setup () {
    const cameraNames = ref(['Camera name', 'camera 1', 'camera 2', 'camera 3'])
    const date = ref(new Date())
    const showFilterBtn = ref(false)
    const showFilterBlock = ref(true)
    const windowWidth = ref(0)

    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth
      if (windowWidth.value <= 975) {
        showFilterBtn.value = true
        showFilterBlock.value = false
      } else {
        showFilterBtn.value = false
        showFilterBlock.value = true
      }
    }

    const handleChangeFilter = e => {
      showFilterBlock.value = !showFilterBlock.value
      console.log(e)
    }

    onMounted(() => window.addEventListener('resize', updateWindowWidth))

    return {
      cameraNames,
      date,
      showFilterBtn,
      showFilterBlock,
      windowWidth,
      updateWindowWidth,
      handleChangeFilter
    }
  }
}
</script>
