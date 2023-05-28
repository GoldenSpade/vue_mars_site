<template>
  <div class="filter">
    <div class="container">
      <div class="filter__button-wrap" v-show="showFilterBtn">
        <Button
          class="button"
          :text="showFilterBlock ? $t('filter.showFilters.hide') : $t('filter.showFilters.show')"
          @event="handleChangeFilter"
        >
          <BaseIcon iconName="menu" v-if="!showFilterBlock" />
          <BaseIcon iconName="close" v-else />
        </Button>
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
            :format="dateFormat"
            class="filter__item--mb filter__item--mr"
            locale="ru"
            selectText="Выбрать"
            cancelText="Отмена"
          />

          <Select :items="cameraNames" />
        </form>
        <div class="filter__item filter__item--mb-none">
          <Button :text="$t('filter.filterButton')">
            <BaseIcon iconName="find" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import Button from './Button.vue'
import BaseIcon from './BaseIcon.vue'
import Select from './Select.vue'

export default {
  components: {
    Datepicker,
    Button,
    BaseIcon,
    Select
  },
  setup () {
    const cameraNames = ref(['Camera name', 'camera 1', 'camera 2', 'camera 3'])
    const date = ref(new Date())
    const showFilterBtn = ref(false)
    const showFilterBlock = ref(true)
    const windowWidth = ref(0)

    const dateFormat = computed(() => {
      const day = date.value.getDate()
      const month = date.value.getMonth() + 1
      const year = date.value.getFullYear()

      return `${day}/${month}/${year}`
    })

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

    const handleChangeFilter = () => {
      showFilterBlock.value = !showFilterBlock.value
    }

    onMounted(() => {
      updateWindowWidth()
      window.addEventListener('resize', updateWindowWidth)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateWindowWidth)
    })

    return {
      cameraNames,
      date,
      showFilterBtn,
      showFilterBlock,
      dateFormat,
      windowWidth,
      updateWindowWidth,
      handleChangeFilter
    }
  }
}
</script>
